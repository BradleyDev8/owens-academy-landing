import * as z from 'zod';

export const inquirySchema = z.object({
  name: z.string().trim().min(2, 'Enter your name').max(100),
  email: z.email('Enter a valid email address'),
  phone: z.string().trim().min(10, 'Enter a valid phone number').max(20),
  message: z.string().trim().min(10, 'Tell us a little more').max(2000),
});

export type Inquiry = z.infer<typeof inquirySchema>;
