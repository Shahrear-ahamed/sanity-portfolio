import { EmailTemplate } from "@/components/ui/EmailTemplate";
import { EmailTemplateProps } from "@/interfaces/sendEmail";
import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.NEXT_PUBLIC_RESEND_SECRET_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const body: EmailTemplateProps = await request.json();

    const data = await resend.emails.send({
      from: `${body.name} <onboarding@resend.dev>`,
      to: [
        process.env.NEXT_PUBLIC_RESEND_EMAIL_ONE as string,
        process.env.NEXT_PUBLIC_RESEND_EMAIL_TWO as string,
      ],
      subject: body.subject,
      react: EmailTemplate({
        name: body.name,
        email: body.email,
        subject: body.subject,
        message: body.message,
      }),
      text: body.message,
    });

    if (!data.data?.id) {
      return NextResponse.json({ error: "Email not sent" });
    }

    return NextResponse.json({ message: "Email sent successfully" });
  } catch (error) {
    return NextResponse.json({ error });
  }
}
