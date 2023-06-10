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
      <body className={`${inter.className} ${styles.body}`}>{children}</body>
      <script src="https://kit.fontawesome.com/59ca3cc0eb.js" async></script>
    </html>
  );
}
