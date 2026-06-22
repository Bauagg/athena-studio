import "./globals.css";
import type { Metadata } from "next";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { LanguageProvider } from "@/components/language-provider";

export const metadata: Metadata = {
  title: "Athena Studio | IT Consultant, Software House & Digital Marketing Agency",
  description:
    "Athena Studio is a professional IT Consultant & Software House based in Indonesia, providing Business Development IT, web & mobile app development, and Digital Marketing services to help businesses grow globally.",
  keywords: [
    // IT Consultant
    "IT Consultant",
    "IT Consulting Services",
    "IT Consultant Indonesia",
    "IT Consultant Jakarta",
    "Professional IT Consultant",
    "Business IT Consultant",
    "IT Strategy Consulting",
    // Software House
    "Software House",
    "Software House Indonesia",
    "Software Development Company",
    "Custom Software Development",
    "Software Development Agency",
    "Offshore Software Development",
    "Outsource Software Development Indonesia",
    // Business Development IT
    "Business Development IT",
    "IT Solutions",
    "Enterprise Software",
    "Business IT Solutions",
    "Digital Business Solutions",
    "IT Business Partner",
    // Web Development
    "Web Development",
    "Web Development Company",
    "Web Development Agency",
    "Web Development Indonesia",
    "Professional Web Development",
    "Website Development Services",
    "Company Profile Website",
    "Business Website Development",
    "Web Developer Indonesia",
    "Landing Page Development",
    "E-commerce Website Development",
    "E-commerce Solutions",
    // Startup
    "Startup Website Development",
    "Startup App Development",
    "MVP Development",
    "Minimum Viable Product Development",
    "Tech Startup Indonesia",
    "Software House for Startups",
    "IT Partner for Startups",
    "Startup Digital Solutions",
    "Startup IT Services",
    "Affordable Website for Startups",
    // SME / Small Business
    "Website for Small Business",
    "Website for SME",
    "Small Business Website Development",
    "Affordable Website Development",
    "Professional Website for Small Business",
    "Digital Solutions for SME",
    "IT Services for Small Business",
    "Web Developer for Small Business",
    // Mobile App Development
    "Mobile App Development",
    "Mobile App Development Indonesia",
    "Android App Development",
    "iOS App Development",
    "React Native Developer",
    "Flutter Developer",
    "Cross-platform App Development",
    "Mobile App Development Company",
    // Digital Marketing
    "Digital Marketing",
    "Digital Marketing Agency",
    "Digital Marketing Indonesia",
    "Social Media Marketing",
    "SEO Services",
    "Search Engine Optimization",
    "Google Ads Management",
    "Meta Ads",
    "Facebook Ads",
    "Instagram Ads",
    "Content Marketing",
    "Email Marketing",
    "Online Marketing Agency",
    // Digital Transformation
    "Digital Transformation",
    "Digital Transformation Indonesia",
    "Business Digitalization",
    "Digital Innovation",
    "Technology Modernization",
    // UI/UX
    "UI UX Design",
    "UI UX Design Agency",
    "User Interface Design",
    "User Experience Design",
    "Product Design",
    // Long-tail International
    "Hire Web Developer Indonesia",
    "Hire Software Developer Indonesia",
    "Outsource Web Development Indonesia",
    "Indonesia Software Development Company",
    "Best Software House Indonesia",
    "Affordable Software Development Indonesia",
    "IT Services Indonesia",
    "Tech Company Indonesia",
    // General
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
    languages: {
      "id-ID": "https://athenastudio.my.id",
      "en-US": "https://profile.athenastudio.my.id",
    },
  },
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
  openGraph: {
    title: "Athena Studio | IT Consultant, Software House & Digital Marketing Agency",
    description:
      "Your trusted IT partner in Indonesia. We build websites, mobile apps, and digital marketing strategies to help startups and businesses grow globally.",
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
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Athena Studio | IT Consultant, Software House & Digital Marketing Agency",
    description:
      "Your trusted IT partner in Indonesia. We build websites, mobile apps, and digital marketing strategies to help startups and businesses grow globally.",
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
