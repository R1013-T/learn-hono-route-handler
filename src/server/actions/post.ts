// 'use server';

// import { client } from '@/lib/hono';
// import { InferRequestType } from 'hono';
// import { revalidateTag } from 'next/cache';

// const $post = client.api.posts.$post;
// type RequestType = InferRequestType<typeof $post>['form'];

// export const createPost = async (data: RequestType) => {
//   await $post({ form: data });

//   revalidateTag('posts');
// };