import { Raleway } from "next/font/google";
import "./globals.css";
import ToastProvider from "@/components/ToastProvider";
import localFont from "next/font/local";
import PageLoader from '@/components/PageLoader';


const drukXCond = localFont({
  src: './fonts/DrukXCond-Super-Trial.otf',
  variable: "--font-druk-xcond",
  display: "swap",
  weight: '900',
});

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-raleway",
});

export const metadata = {
  title: {
    default: "Aleem Talha - Website Developer | MERN Stack & Next.js Specialist",
    template: "%s | Aleem Talha"
  },
  description: "Professional website developer specializing in MERN Stack, Next.js, Django, and modern web technologies. Available 24/7 for building fast & clean web applications.",
  keywords: ["MERN Stack Developer", "Next.js Specialist", "Django Backend", "Frontend UI/UX", "Website Developer", "React Developer", "Node.js", "MongoDB"],
  authors: [{ name: "Aleem Talha" }],
  creator: "Aleem Talha",
  metadataBase: new URL("http://aleelmtalha.com"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "http://aleelmtalha.com",
    title: "Aleem Talha - Website Developer | MERN Stack & Next.js Specialist",
    description: "Professional website developer specializing in MERN Stack, Next.js, Django, and modern web technologies. Available 24/7 for building fast & clean web applications.",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Aleem Talha - Website Developer",
      },
    ],
    siteName: "Aleem Talha Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aleem Talha - Website Developer | MERN Stack & Next.js Specialist",
    description: "Professional website developer specializing in MERN Stack, Next.js, Django, and modern web technologies. Available 24/7 for building fast & clean web applications.",
    images: ["/images/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className={`${raleway.variable} ${drukXCond.variable} font-raleway antialiased bg-slate-900 text-slate-100`}>
        <PageLoader>
          {children}
        </PageLoader>
        <ToastProvider />
      </body>
    </html>
  );
}
