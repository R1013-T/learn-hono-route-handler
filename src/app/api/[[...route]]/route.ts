import { Hono } from "hono";

import posts from "./posts";
import { handle } from "hono/vercel";

export const runtime = "edge";

const app = new Hono().basePath("/api");
const route = app.route("/posts", posts);

export type AppType = typeof route;

export const GET = handle(app);
export const POST = handle(app);