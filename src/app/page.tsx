import { PostList } from "@/components/post-list";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-10 p-24">
      <h1>Learn Hono Route Handler</h1>
      <section>
        <PostList />
      </section>
    </main>
  );
}
