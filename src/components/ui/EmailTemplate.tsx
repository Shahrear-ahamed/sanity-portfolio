import { EmailTemplateProps } from "@/interfaces/sendEmail";
import * as React from "react";

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  email,
  name,
  message,
}) => (
  <div>
    <h1>This email is send from {name}</h1>
    <p>My email is {email}</p>

    <div style={{ margin: "20px 0" }}>{message}</div>

    <p>if you want to replay me, contact with {email}</p>
    <h3>Thank you</h3>
  </div>
);
