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
    "Jasa Pembuatan Website Murah",
    "Jasa Pembuatan Website Profesional",
    "Jasa Pembuatan Website UKM",
    "Jasa Pembuatan Website UMKM",
    "Jasa Pembuatan Website Startup",
    "Website untuk UKM",
    "Website untuk UMKM",
    "Website untuk Startup",
    "Website Bisnis UKM",
    "Website Bisnis UMKM",
    "Website Startup Indonesia",
    "Buat Website UKM Murah",
    "Buat Website UMKM Murah",
    "Buat Website Startup Murah",
    "Solusi Website UKM",
    "Solusi Digital UMKM",
    "Digitalisasi UKM",
    "Digitalisasi UMKM",
    "Website Company Profile",
    "Website Company Profile UKM",
    "Website Company Profile UMKM",
    "Website Perusahaan",
    "Web Developer Jakarta",
    "Landing Page",
    "Landing Page UKM",
    "Landing Page UMKM",
    "Landing Page Startup",
    "E-commerce Website",
    "Toko Online",
    "Toko Online UKM",
    "Toko Online UMKM",
    "Platform E-commerce UMKM",
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
    // UKM & UMKM Extended
    "Jasa Pembuatan Website Usaha Kecil",
    "Jasa Pembuatan Website Usaha Menengah",
    "Website untuk Usaha Kecil Menengah",
    "Website untuk Bisnis Kecil",
    "Harga Website UKM Terjangkau",
    "Paket Website UMKM Murah",
    "Paket Website Startup Murah",
    "Website Profil Bisnis UMKM",
    "Sistem Informasi UKM",
    "Sistem Informasi UMKM",
    "Aplikasi Web UKM",
    "Aplikasi Web UMKM",
    "Jasa IT UMKM",
    "Jasa IT UKM",
    "Solusi IT untuk UMKM",
    "Solusi IT untuk UKM",
    "Teknologi untuk UMKM",
    "Teknologi untuk UKM",
    "Pengembangan Digital UKM",
    "Pengembangan Digital UMKM",
    // Startup Extended
    "Startup Website Indonesia",
    "Jasa Pembuatan Website Startup Jakarta",
    "Startup App Development",
    "MVP Development",
    "Minimum Viable Product",
    "Jasa Pembuatan MVP",
    "Tech Startup Indonesia",
    "Startup Software House",
    "Software House untuk Startup",
    "IT Partner Startup",
    "Pengembangan Produk Digital Startup",
    "Website Startup Profesional",
    "Aplikasi Startup Indonesia",
    "Jasa IT Startup",
    // Long-tail UKM/UMKM
    "Cara Buat Website UKM",
    "Cara Buat Website UMKM",
    "Biaya Pembuatan Website UMKM",
    "Biaya Pembuatan Website Startup",
    "Jasa Pembuatan Website Terpercaya",
    "Web Developer untuk UKM",
    "Web Developer untuk UMKM",
    "Web Developer untuk Startup",
    "Konsultan Digital UMKM",
    "Konsultan Digital Startup",
    // General
    "Tech Company Jakarta",
    "Startup IT Indonesia",
    "Athena Studio",
    "Jakarta",
    "Indonesia",
  ],
  metadataBase: new URL("https://profile.athenastudio.my.id"),
  authors: [{ name: "Athena Studio", url: "https://profile.athenastudio.my.id" }],
  creator: "Athena Studio",
  publisher: "Athena Studio",
  alternates: {
    canonical: "https://profile.athenastudio.my.id",
  },
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
  openGraph: {
    title: "Athena Studio | IT Consultant, Business Development & Digital Marketing",
    description:
      "Solusi lengkap untuk Business Development IT, pembuatan aplikasi, dan Digital Marketing. Wujudkan transformasi digital bisnis Anda bersama Athena Studio.",
    url: "https://profile.athenastudio.my.id",
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
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
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
