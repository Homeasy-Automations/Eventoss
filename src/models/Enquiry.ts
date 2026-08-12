import mongoose, { Schema, models, model, type Document } from "mongoose";

export type EnquiryFormType = "contact" | "consultation";
export type EnquiryStatus = "new" | "contacted" | "in-progress" | "closed";

export interface IEnquiry extends Document {
  referenceId: string;
  formType: EnquiryFormType;
  /** Where a "Get Consultation" popup lead was triggered from (e.g. a page/section name). Contact-page leads leave this unset. */
  source?: string;

  // Person
  firstName?: string;
  lastName?: string;
  name?: string;
  email: string;
  phone: string;
  company?: string;

  // Event brief
  eventType: string;
  eventDate?: string;
  city?: string;
  guests?: string;
  budget?: string;
  message?: string;

  // Internal tracking
  status: EnquiryStatus;
  emailStatus: {
    ownerSent: boolean;
    senderSent: boolean;
  };

  createdAt: Date;
  updatedAt: Date;
}

const EnquirySchema = new Schema<IEnquiry>(
  {
    referenceId: { type: String, required: true, unique: true, index: true },
    formType: { type: String, enum: ["contact", "consultation"], required: true, index: true },
    source: { type: String },

    firstName: { type: String },
    lastName: { type: String },
    name: { type: String },
    email: { type: String, required: true, index: true },
    phone: { type: String, required: true },
    company: { type: String },

    eventType: { type: String, required: true },
    eventDate: { type: String },
    city: { type: String },
    guests: { type: String },
    budget: { type: String },
    message: { type: String },

    status: { type: String, enum: ["new", "contacted", "in-progress", "closed"], default: "new", index: true },
    emailStatus: {
      ownerSent: { type: Boolean, default: false },
      senderSent: { type: Boolean, default: false },
    },
  },
  { timestamps: true }
);

// `models.Enquiry` guard avoids "OverwriteModelError" during Next.js hot-reload in dev.
export default (models.Enquiry as mongoose.Model<IEnquiry>) || model<IEnquiry>("Enquiry", EnquirySchema);
