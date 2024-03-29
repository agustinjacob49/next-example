import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ContactPage",
  description: "Generated with love by Vercel and Next.js.",
};

export default function AboutPage() {
  return (
    <main className="flex flex-col items-center p-24">
        <span className="text-7xl" >About Pages</span>
    </main>
  );
}