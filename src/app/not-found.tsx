// pages/404.tsx or app/not-found.tsx
"use client";
import TicTacToe404 from "@/components/TicTacToe404";

export default function Custom404() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background text-center px-4">
      <h1 className="text-5xl font-bold mb-4 text-primary">
        404 - Page Not Found
      </h1>
      <p className="mb-8 text-lg text-foreground/80">
        Oops! You seem lost. Enjoy a quick game while you're here!
      </p>
      <div className="w-full max-w-md mx-auto">
        <TicTacToe404 />
      </div>
      <a
        href="/"
        className="mt-8 inline-block px-6 py-3 rounded-lg bg-accent text-white font-semibold hover:bg-accent/90 transition"
      >
        Go Home
      </a>
    </div>
  );
}
