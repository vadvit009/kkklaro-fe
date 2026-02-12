import { z } from "zod";

export const contactFormSchema = (messages: {
  nameRequired: string;
  emailRequired: string;
  emailInvalid: string;
  requestTypeRequired: string;
}) =>
  z.object({
    name: z.string().min(1, messages.nameRequired),
    email: z
      .string()
      .min(1, messages.emailRequired)
      .email(messages.emailInvalid),
    requestType: z.string().min(1, messages.requestTypeRequired),
    message: z.string().optional(),
  });

export type ContactFormData = z.infer<ReturnType<typeof contactFormSchema>>;
