import { client } from "@/lib/hono";
import { fetcher } from "@/lib/utils";
import { InferResponseType } from "hono";

const url = client.api.posts.$url();
type ResType = InferResponseType<typeof client.api.posts.$get>;

export const getAllPosts = async () => {
  const posts = await fetcher<ResType>(url, {
    next: {
      tags: ["posts"],
    },
  });

  return posts;
}