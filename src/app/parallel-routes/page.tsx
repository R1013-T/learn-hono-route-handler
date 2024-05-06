import Link from "next/link";
import React from "react";

export default function ParallelRoutes() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-10 p-24">
      <h1>Learn parallel Routes</h1>
      <Link href="/parallel-routes/image/test">
        image test
      </Link>
    </main>
  );
}
