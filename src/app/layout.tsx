"use client"
import localFont from "next/font/local";
import "./globals.css";
import "./common.scss";
import "./styles/roadmap.scss";
import "./styles/roadmapSlider.scss";
import "./styles/faq.scss";
import "./styles/footer.scss"
import "./styles/sika.scss";
import "./styles/buy.scss"
import "./styles/howtobuy.scss"
// App.tsx
import { createAppKit } from '@reown/appkit/react'
import { SolanaAdapter } from '@reown/appkit-adapter-solana/react'
import { solana, solanaTestnet, solanaDevnet } from '@reown/appkit/networks'
import { PhantomWalletAdapter, SolflareWalletAdapter } from '@solana/wallet-adapter-wallets'


const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const harngton = localFont({
  src: "./fonts/HARNGTON.woff",
  variable: "--font-harngton-sans",
  weight: "100 900",
});

// 0. Set up Solana Adapter
const solanaWeb3JsAdapter = new SolanaAdapter({
  wallets: [new PhantomWalletAdapter(), new SolflareWalletAdapter()]
})

// 1. Get projectId from https://cloud.reown.com
const projectId = '91bccda45f9e7dc9b50dc403a3eb0ec6'

// 2. Create a metadata object - optional
const walletConnectMetadata = {
  name: 'AppKit',
  description: 'AppKit Solana Example',
  url: 'https://example.com', // origin must match your domain & subdomain
  icons: ['https://avatars.githubusercontent.com/u/179229932']
}

// 3. Create modal
createAppKit({
  adapters: [solanaWeb3JsAdapter],
  networks: [solana, solanaTestnet, solanaDevnet],
  metadata: walletConnectMetadata,
  projectId,
  features: {
    email: false,
    socials: false,
    analytics: true // Optional - defaults to your Cloud configuration
  }
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${harngton.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
