import Home from "@/components/home/Home";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "RICHPUG",
  description: "The meme gaming token on $SOL.",
  applicationName: "RICHPUG: The meme gaming token on $SOL",
  manifest: "/images/favicon/site.webmanifest",
  icons: {
    icon: [
      { url: "/images/favicon/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/images/favicon/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: { url: "/favicon/apple-touch-icon.png" },
  },
  openGraph: {
    type: "website",
    title: "RICHPUG: The meme gaming token on $SOL",
    description: "Presale starting soon!",
    url: "https://richpug.com",
    siteName: "RICHPUG: The meme gaming token on $SOL",
    images: [
      {
        url: "/images/banner.png",
        width: 1200,
        height: 630,
        alt: "Presale starting soon!",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@richpug.com",
    title: "RICHPUG",
    description: "RICHPUG: The meme gaming token on $SOL",
    images: ["/images/banner.png"],
  },
  other: {
    'og:image:type': 'image/png',
    'og:image:width': '1200',
    'og:image:height': '630',
  }
};

// font-[family-name:var(--font-geist-mono)]
export default function App() {
  return (
    <div className="w-full font-[family-name:var(--font-harngton-sans)]">
      <Home />
    </div>
  );
}
