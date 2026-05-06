import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "GDPR Consent Audit Tracker — Track consent across all your tools",
  description: "Monitor GDPR consent status in real-time across all your marketing tools. Auto-propagate withdrawals and alert compliance teams instantly."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="7ba5bf63-67ff-496c-8e3c-9632392df68c"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}
