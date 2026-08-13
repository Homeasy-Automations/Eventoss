import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

import contactRouter from "./routes/contact";
import consultationRouter from "./routes/consultation";

const app = express();
const PORT = process.env.PORT || 4000;

// Comma-separated list of frontend origins allowed to call this API, e.g.
// "https://eventoss.in,https://www.eventoss.in,https://eventoss.vercel.app".
// Leave ALLOWED_ORIGINS unset in local dev to allow any origin.
const allowedOrigins = (process.env.ALLOWED_ORIGINS || "")
  .split(",")
  .map((s) => s.trim())
  .filter(Boolean);

app.use(
  cors({
    origin(origin, callback) {
      if (!origin || allowedOrigins.length === 0 || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error(`Origin ${origin} not allowed by CORS`));
      }
    },
  })
);
app.use(express.json());

app.get("/health", (_req, res) => {
  res.json({ ok: true, service: "eventoss-backend" });
});

app.use("/api/contact", contactRouter);
app.use("/api/consultation", consultationRouter);

app.listen(PORT, () => {
  console.log(`Eventoss backend listening on port ${PORT}`);
});
