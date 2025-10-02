import { z } from "zod";

export const WaitlistSchema = z.object({
  name: z.string().min(2, "Name is too short"),
  email: z.string().email("Invalid email"),
  phone: z.string().min(8, "Phone number too short").optional(),
  referral: z.string().optional(),
});

export type WaitlistInput = z.infer<typeof WaitlistSchema>;
