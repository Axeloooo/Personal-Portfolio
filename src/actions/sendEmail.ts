"use server";

import { validateString } from "@/lib/utils";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData: FormData) => {
  const email = formData.get("email");
  const message = formData.get("message");

  if (!validateString(email, 500)) {
    return {
      error: "Invalid email",
    };
  }
  if (!validateString(message, 5000)) {
    return {
      error: "Invalid message email",
    };
  }

  try {
    await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "axelshz@gmail.com",
      subject: "Message from contact form",
      reply_to: email as string,
      text: message as string,
    });
  } catch (error) {
    if (error instanceof Error) {
      return {
        error: error.message,
      };
    }
  }
};
