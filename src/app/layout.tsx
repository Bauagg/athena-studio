import "./globals.css";
import type { Metadata } from "next";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { LanguageProvider } from "@/components/language-provider";

export const metadata: Metadata = {
  title: "Athena Studio | IT Consultant, Business Development & Digital Marketing",
  description:
    "Athena Studio adalah IT Consultant & Software House yang menyediakan layanan Business Development IT, pembuatan aplikasi web & mobile, serta Digital Marketing untuk transformasi digital bisnis Anda.",
  keywords: [
    // IT Consultant
    "IT Consultant",
    "IT Consultant Jakarta",
    "IT Consultant Indonesia",
    "Konsultan IT",
    "Jasa Konsultan IT",
    "IT Consulting Services",
    // Software House
    "Software House",
    "Software House Jakarta",
    "Software House Indonesia",
    "Software Development Company",
    "Jasa Pembuatan Software",
    // Business Development IT
    "Business Development IT",
    "IT Solutions",
    "Solusi IT Bisnis",
    "Enterprise Software",
    "Custom Software Development",
    // Web Development
    "Web Development",
    "Jasa Pembuatan Website",
    "Jasa Buat Website",
    "Website Company Profile",
    "Website Perusahaan",
    "Web Developer Jakarta",
    "Landing Page",
    "E-commerce Website",
    "Toko Online",
    // Mobile App Development
    "Mobile App Development",
    "Jasa Pembuatan Aplikasi",
    "Jasa Buat Aplikasi Mobile",
    "Aplikasi Android",
    "Aplikasi iOS",
    "React Native Developer",
    "Flutter Developer",
    "Mobile Developer Jakarta",
    // Digital Marketing
    "Digital Marketing",
    "Digital Marketing Agency",
    "Jasa Digital Marketing",
    "Social Media Marketing",
    "SEO Services",
    "Jasa SEO",
    "Google Ads",
    "Meta Ads",
    "Facebook Ads",
    "Instagram Ads",
    "Content Marketing",
    "Email Marketing",
    // Transformasi Digital
    "Transformasi Digital",
    "Digital Transformation",
    "Digitalisasi Bisnis",
    "Modernisasi Sistem",
    // UI/UX
    "UI UX Design",
    "Jasa Desain UI UX",
    "User Interface Design",
    "User Experience Design",
    // General
    "Tech Company Jakarta",
    "Startup IT Indonesia",
    "Athena Studio",
    "Jakarta",
    "Indonesia",
  ],
  authors: [{ name: "Athena Studio" }],
  icons: {
    icon: "/logo.png",
  },
  openGraph: {
    title: "Athena Studio | IT Consultant, Business Development & Digital Marketing",
    description:
      "Solusi lengkap untuk Business Development IT, pembuatan aplikasi, dan Digital Marketing. Wujudkan transformasi digital bisnis Anda bersama Athena Studio.",
    url: "https://athenastudio.id",
    siteName: "Athena Studio",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Athena Studio - IT Consultant & Digital Solutions",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Athena Studio | IT Consultant, Business Development & Digital Marketing",
    description:
      "Solusi lengkap untuk Business Development IT, pembuatan aplikasi, dan Digital Marketing. Wujudkan transformasi digital bisnis Anda bersama Athena Studio.",
    images: ["/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="flex min-h-screen flex-col bg-background text-foreground">
        <LanguageProvider>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
