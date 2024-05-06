import { Hono } from "hono";
import { z } from "zod";
import { zValidator } from "@hono/zod-validator";

export const schema = z.object({
  text: z.string().min(1, "Please write something!"),
});

const app = new Hono()
  .get("/", async (c) => {
    const posts = [
      {
        id: 1,
        text: "post 1",
        createdAt: new Date(),
      },
      {
        id: 2,
        text: "post 2",
        createdAt: new Date(),
      },
    ];

    return c.json(posts);
  })
  .post("/", zValidator("form", schema), async (c) => {
    const data = c.req.valid("form");

    const post = {
      id: 3,
      text: data.text,
      createdAt: new Date(),
    };

    return c.json(post);
  })
  .get("/:id", async (c) => {
    const posts = [
      {
        id: 1,
        text: "post 1",
        createdAt: new Date(),
      },
      {
        id: 2,
        text: "post 2",
        createdAt: new Date(),
      },
    ];

    const post = posts.find((p) => p.id === Number(c.req.param("id")));

    return c.json(post);
  });

export default app;
