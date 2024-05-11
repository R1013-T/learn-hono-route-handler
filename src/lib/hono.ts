import { hc } from "hono/client";

import { type AppType } from "@/app/api/[[...route]]/route";

const url = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}.vercel.app`
  : "http://localhost:3000";

export const client = hc<AppType>(url);
