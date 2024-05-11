// import { PostList } from "@/components/post-list";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-10 p-24">
      <h1>Learn Hono Route Handler</h1>
      <section>
        {/* <PostList /> */}
      </section>
      <section className="flex flex-col gap-2" >
        <Link href="/parallel-routes" className="underline underline-offset-4">
          Parallel Routes
        </Link>
        <Link
          href="/intercepting-routes"
          className="underline underline-offset-4"
        >
          Intercepting Routes
        </Link>
      </section>
    </main>
  );
}
