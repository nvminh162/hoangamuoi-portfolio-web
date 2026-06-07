import { NextRequest } from "next/server";
import nodemailer from "nodemailer";

// In-memory rate limiting map: IP -> array of timestamps
const ipCache = new Map<string, number[]>();

// Clean up memory cache periodically (every 15 minutes)
if (typeof global !== "undefined") {
  const intervalId = "contact-rate-limit-cleaner";
  if (!(global as any)[intervalId]) {
    (global as any)[intervalId] = setInterval(() => {
      const now = Date.now();
      for (const [ip, timestamps] of ipCache.entries()) {
        const filtered = timestamps.filter(t => now - t < 3600000);
        if (filtered.length === 0) {
          ipCache.delete(ip);
        } else {
          ipCache.set(ip, filtered);
        }
      }
    }, 900000); // 15 minutes
  }
}

export async function POST(request: NextRequest) {
  try {
    // 1. IP Rate Limiting (strict: max 3 requests per hour per IP)
    const ip = request.headers.get("x-forwarded-for")?.split(",")[0] || 
               request.headers.get("x-real-ip") || 
               "127.0.0.1";

    const now = Date.now();
    const timestamps = ipCache.get(ip) || [];
    const recentSubmissions = timestamps.filter(t => now - t < 3600000);

    if (recentSubmissions.length >= 3) {
      return Response.json(
        { error: "Too many requests. You have reached the submission limit (3 per hour). Please try again later." },
        { status: 429 }
      );
    }

    // 2. Parse request body
    const body = await request.json();
    const { fullname, email, socialType, socialUsername, message, website } = body;

    // 3. Honeypot check (hidden bot field)
    if (website && website.trim() !== "") {
      // Return a fake success response to deceive bots without executing any SMTP logic
      return Response.json({ success: true, message: "Thank you for your message!" });
    }

    // 4. Input validation
    if (!fullname || !fullname.trim()) {
      return Response.json({ error: "Full name is required." }, { status: 400 });
    }
    if (!email || !email.trim() || !email.includes("@")) {
      return Response.json({ error: "A valid email address is required." }, { status: 400 });
    }
    if (!message || !message.trim()) {
      return Response.json({ error: "Message is required." }, { status: 400 });
    }

    // Update rate limit cache
    recentSubmissions.push(now);
    ipCache.set(ip, recentSubmissions);

    // 5. Construct social link
    let socialLinkText = "None provided";
    if (socialUsername && socialUsername.trim()) {
      const username = socialUsername.trim();
      if (socialType === "facebook") {
        socialLinkText = `Facebook: https://facebook.com/${username}`;
      } else if (socialType === "instagram") {
        socialLinkText = `Instagram: https://instagram.com/${username}`;
      } else if (socialType === "zalo") {
        // Zalo links typically format as zalo.me/phonenumber
        socialLinkText = `Zalo: https://zalo.me/${username}`;
      }
    }

    // 6. Setup SMTP Transporter using Gmail SMTP (using credentials from env)
    const smtpHost = process.env.SMTP_HOST || "smtp.gmail.com";
    const smtpPort = parseInt(process.env.SMTP_PORT || "465", 10);
    const smtpUser = process.env.SMTP_USER || "hoangsun1911@gmail.com";
    const smtpPass = process.env.SMTP_PASS;
    const ownerEmail = process.env.CONTACT_OWNER_EMAIL || "hoangsun1911@gmail.com";
    const ownerName = process.env.CONTACT_OWNER_NAME || "Hoang A Muoi";

    if (!smtpPass) {
      console.error("SMTP_PASS is not configured in environment variables.");
      return Response.json(
        { error: "Mail server configuration error. Please contact the owner directly via social links." },
        { status: 500 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: smtpPort === 465, // true for 465, false for other ports
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
    });

    // 7. Send Email 1: Notification to Owner
    const ownerEmailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #eee; border-radius: 8px;">
        <h2 style="color: #3E5F90; border-bottom: 2px solid #3E5F90; padding-bottom: 8px;">New Portfolio Inquiry</h2>
        <p>You have received a new contact request from your portfolio website.</p>
        <table style="width: 100%; border-collapse: collapse; margin-top: 15px;">
          <tr>
            <td style="padding: 8px; font-weight: bold; width: 120px; border-bottom: 1px solid #eee;">Full Name:</td>
            <td style="padding: 8px; border-bottom: 1px solid #eee;">${fullname}</td>
          </tr>
          <tr>
            <td style="padding: 8px; font-weight: bold; border-bottom: 1px solid #eee;">Email:</td>
            <td style="padding: 8px; border-bottom: 1px solid #eee;"><a href="mailto:${email}">${email}</a></td>
          </tr>
          <tr>
            <td style="padding: 8px; font-weight: bold; border-bottom: 1px solid #eee;">Social Profile:</td>
            <td style="padding: 8px; border-bottom: 1px solid #eee;">${socialLinkText}</td>
          </tr>
        </table>
        <div style="margin-top: 20px; padding: 15px; background-color: #f9f9f9; border-left: 4px solid #3E5F90; border-radius: 4px;">
          <h4 style="margin: 0 0 8px 0; color: #333;">Message:</h4>
          <p style="margin: 0; white-space: pre-wrap; line-height: 1.5; color: #555;">${message}</p>
        </div>
      </div>
    `;

    // Send to owner (CONTACT_OWNER_EMAIL)
    await transporter.sendMail({
      from: `"${ownerName} Portfolio" <${smtpUser}>`, // Use owner's name, not sender's
      to: ownerEmail,
      replyTo: email,
      subject: `[Portfolio Contact] New message from ${fullname}`,
      html: ownerEmailHtml,
    });

    // 8. Send Email 2: Confirmation to Client
    const clientEmailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #eee; border-radius: 8px;">
        <h2 style="color: #3E5F90; border-bottom: 2px solid #3E5F90; padding-bottom: 8px;">Thank You for Reaching Out!</h2>
        <p>Dear ${fullname},</p>
        <p>Thank you for visiting my portfolio and sending a message. This is an automated confirmation to let you know that I have received your inquiry.</p>
        <p>I will review your message and get back to you as soon as possible.</p>
        
        <hr style="border: 0; border-top: 1px solid #eee; margin: 20px 0;" />
        <h4 style="color: #555;">A copy of your message:</h4>
        <div style="padding: 15px; background-color: #f9f9f9; border-left: 4px solid #aaa; border-radius: 4px; font-style: italic;">
          <p style="margin: 0; white-space: pre-wrap; line-height: 1.5; color: #666;">${message}</p>
        </div>

        <p style="margin-top: 25px; font-size: 13px; color: #888;">
          Best regards,<br />
          <strong>Hoang A Muoi</strong><br />
          English Linguistics | Portfolio 2026
        </p>
      </div>
    `;

    await transporter.sendMail({
      from: `"${ownerName}" <${smtpUser}>`,
      to: email,
      subject: `Confirmation: I have received your message!`,
      html: clientEmailHtml,
    });

    return Response.json({ success: true, message: "Your message has been sent successfully!" });
  } catch (error: any) {
    console.error("Contact Form submission error:", error);
    return Response.json(
      { error: "Failed to send message. Please try again later." },
      { status: 500 }
    );
  }
}
