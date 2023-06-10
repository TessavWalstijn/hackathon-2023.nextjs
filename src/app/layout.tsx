import Script from 'next/script';
import './normalize.css'
import './globals.module.scss'
import { Inter } from 'next/font/google'
import styles from './base.module.scss'

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Job Swiper",
  description: "Swipe to find your new job",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <Script src="https://kit.fontawesome.com/59ca3cc0eb.js"
          crossOrigin="anonymous"
          async
        />
      </head>
      <body className={`${inter.className} ${styles.body}`}>{children}</body>
    </html>
  );
}
