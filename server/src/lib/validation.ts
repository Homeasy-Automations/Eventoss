import { z } from "zod";

// Mirrors the fields collected in src/app/contact/ContactForm.tsx
export const contactSchema = z.object({
  firstName: z.string().trim().min(1, "First name is required"),
  lastName: z.string().trim().min(1, "Last name is required"),
  email: z.string().trim().email("A valid email is required"),
  phone: z.string().trim().min(6, "A valid phone number is required"),
  company: z.string().trim().optional().or(z.literal("")),
  eventType: z.string().trim().min(1, "Event type is required"),
  eventDate: z.string().trim().optional().or(z.literal("")),
  city: z.string().trim().optional().or(z.literal("")),
  guests: z.string().trim().optional().or(z.literal("")),
  budget: z.string().trim().optional().or(z.literal("")),
  message: z.string().trim().min(1, "Message is required"),
});

export type ContactFormValues = z.infer<typeof contactSchema>;

// Mirrors the fields collected in src/components/ConsultationModal.tsx
export const consultationSchema = z.object({
  name: z.string().trim().min(1, "Name is required"),
  company: z.string().trim().optional().or(z.literal("")),
  email: z.string().trim().email("A valid email is required"),
  phone: z.string().trim().min(6, "A valid phone number is required"),
  eventType: z.string().trim().min(1, "Event type is required"),
  eventDate: z.string().trim().optional().or(z.literal("")),
  city: z.string().trim().optional().or(z.literal("")),
  guests: z.string().trim().optional().or(z.literal("")),
  budget: z.string().trim().optional().or(z.literal("")),
  message: z.string().trim().optional().or(z.literal("")),
  source: z.string().trim().optional().or(z.literal("")),
});

export type ConsultationFormValues = z.infer<typeof consultationSchema>;
