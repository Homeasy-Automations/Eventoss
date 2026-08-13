import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI;

let cachedConn: typeof mongoose | null = null;
let cachedPromise: Promise<typeof mongoose> | null = null;

export async function connectDB(): Promise<typeof mongoose> {
  if (cachedConn) return cachedConn;

  if (!MONGODB_URI) {
    throw new Error(
      "MONGODB_URI is not set. Add it to your .env (see .env.example) — get a free connection string from MongoDB Atlas."
    );
  }

  if (!cachedPromise) {
    cachedPromise = mongoose.connect(MONGODB_URI);
  }

  try {
    cachedConn = await cachedPromise;
  } catch (err) {
    cachedPromise = null;
    throw err;
  }

  return cachedConn;
}
