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
import Head from "next/head";


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
  name: 'Rich Pug',
  description: 'AppKit Solana Example',
  url: 'https://richpug.com', // origin must match your domain & subdomain
  icons: ['https://richpug.com/images/favicon/favicon-16x16.png']
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
      <Head>
        <title>
          RICHPUG: The meme gaming token on $SOL
        </title>
        <meta name='title' content='RICHPUG' />
        <link rel="icon" type="image/x-icon" href="/images/favicon/favicon.ico"></link>
        <meta
          name='description'
          content='The meme gaming token on $SOL.'
        />
        <meta
          name='application-name'
          content='RICHPUG: The meme gaming token on $SOL'
        />
        <meta name='apple-mobile-web-app-capable' content='yes' />
        <meta name='apple-mobile-web-app-status-bar-style' content='default' />
        <meta
          name='apple-mobile-web-app-title'
          content='RICHPUG: The meme gaming token on $SOL'
        />
        <meta name='format-detection' content='telephone=no' />
        <meta name='mobile-web-app-capable' content='yes' />
        <meta name='msapplication-tap-highlight' content='no' />

        <link
          rel='apple-touch-icon'
          sizes='180x180'
          href='/favicon/apple-touch-icon.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='32x32'
          href='/favicon/favicon-32x32.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='16x16'
          href='/favicon/favicon-16x16.png'
        />
        <link rel='manifest' href='/favicon/site.webmanifest' />
        <link
          rel='mask-icon'
          href='/favicon/safari-pinned-tab.svg'
          color='#d55b5b'
        />
        <meta name='msapplication-TileColor' content='#da532c' />
        <meta name='theme-color' content='#ffffff'></meta>

        <meta name='robots' content='index,follow' />
        <link rel='canonical' href='https://richpug.com' />
        <meta property='og:type' content={`${'website'}`} />
        <meta
          property='og:title'
          content='RICHPUG: The meme gaming token on $SOL'
        />
        <meta property='og:description' content='Presale starting soon!' />
        <meta property='og:url' content='https://richpug.com' />
        <meta
          property='og:site_name'
          content='RICHPUG: The meme gaming token on $SOL'
        />
        <meta property='og:image' content='/images/Banner.png' />
        <meta property='og:image:alt' content='Presale starting soon!' />
        <meta property='og:image:width' content='1200' />
        <meta property='og:image:height' content='630' />
        <meta property='og:image:type' content='image/png' />

        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:site' content='@richpug.com' />
        <meta
          name='twitter:description'
          content='RICHPUG: The meme gaming token on $SOL'
        />
        <meta name='twitter:title' content='RICHPUG' />
        <meta property='twitter:image' content='/images/Banner.png' />
        <meta
          name='twitter:image:alt'
          content='RICHPUG twitter image share'
        />
      </Head>

      <body
        className={`${geistSans.variable} ${geistMono.variable} ${harngton.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
