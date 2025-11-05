import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: NextRequest) {
  try {
    const { to, subject, html } = await request.json();

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      auth: {
        user: "khangdao0311@gmail.com",
        pass: "iisq wtpt mhbt nbde",
      },
    });

    await transporter.sendMail({
      from: "khangdao0311@gmail.com",
      to,
      subject,
      html,
    });

    return NextResponse.json({
      status: 200,
      message: "Email sent successfully",
    });
  } catch (error) {
    console.error("Send mail error:", error);
    return NextResponse.json({ status: 500, message: "Failed to send email" });
  }
}
