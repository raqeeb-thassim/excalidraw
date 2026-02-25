"use client";

import dynamic from "next/dynamic";

const Excalidraw = dynamic(
  () => import("@excalidraw/excalidraw").then((mod) => mod.Excalidraw),
  { ssr: false }
);

export default function Home() {
  return (
    <div className="flex min-h-screen w-full flex-col bg-zinc-50">
      <header className="border-b border-zinc-200 bg-white px-6 py-4">
        <h1 className="text-lg font-semibold text-zinc-900">
          Excalidraw Playground
        </h1>
        <p className="text-sm text-zinc-500">
          Sketch ideas with a collaborative, hand-drawn style canvas.
        </p>
      </header>
      <main className="flex-1 p-6">
        <div className="h-[calc(100vh-128px)] w-full overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm">
          <Excalidraw />
        </div>
      </main>
    </div>
  );
}
