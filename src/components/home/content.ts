import type { Language } from "@/components/language-provider";
import type { HomeContent } from "@/components/home/types";

export const homeContentByLanguage: Record<Language, HomeContent> = {
  id: {
    slides: [
      {
        title: "Membangun Fondasi Digital yang Kuat untuk Bisnis yang Bertumbuh",
        desc: "ATHENA STUDIO bermitra dengan UMKM untuk membangun sistem digital yang jelas dan efisien, membantu bisnis tumbuh berkelanjutan dengan strategi dan teknologi yang tepat.",
      },
      {
        title:
          "Membangun Produk Digital yang Skalabel untuk Startup yang Berkembang",
        desc: "ATHENA STUDIO bekerja sama dengan startup untuk menyusun strategi produk yang jelas, membangun sistem yang andal, serta menyiapkan teknologi yang tumbuh bersama bisnis Anda.",
      },
      {
        title:
          "Mendorong Kinerja Bisnis Berkelanjutan Melalui Teknologi Strategis",
        desc: "ATHENA STUDIO bermitra dengan organisasi mapan untuk menyelaraskan teknologi, proses, dan strategi jangka panjang demi hasil yang terukur serta berkelanjutan.",
      },
    ],
    heroCta: "Konsultasi Gratis",
    aboutTitle: "Tentang Kami",
    aboutSubtitle:
      "Mitra strategis Anda dalam membangun solusi digital yang jelas dan terarah.",
    aboutIntro:
      "Athena Studio adalah IT Consultant & Software House yang membantu bisnis mengambil keputusan teknologi lebih cerdas melalui pendekatan strategis. Kami memulai dengan memahami bisnis, alur kerja, serta tujuan jangka panjang Anda, lalu merancang sistem digital yang praktis, terukur, dan benar benar mendukung pertumbuhan bisnis berkelanjutan.",
    missionTitle: "Misi Kami",
    missionText:
      "ATHENA STUDIO membantu bisnis mengambil keputusan teknologi yang lebih cerdas dan fokus. Setiap solusi digital dibangun dari pemahaman mendalam atas proses bisnis, efisiensi, dan tujuan jangka panjang agar teknologi memberi dampak nyata dan terukur.",
    approachTitle: "Pendekatan Kami",
    approachText:
      "ATHENA STUDIO membantu bisnis mengambil keputusan teknologi yang lebih cerdas dan fokus. Setiap solusi dibangun dari pemahaman mendalam terhadap proses bisnis dan tujuan jangka panjang agar teknologi memberikan hasil nyata serta terukur.",
    aboutValues: [
      {
        title: "Strategi Dulu",
        description:
          "Kami memulai dengan memahami bisnis Anda sebelum menentukan solusi yang tepat",
      },
      {
        title: "Berorientasi Tujuan",
        description:
          "Setiap solusi dirancang untuk mencapai tujuan bisnis yang jelas dan berdampak terukur",
      },
      {
        title: "Kemitraan Tepercaya",
        description:
          "Kami bertindak sebagai mitra jangka panjang, bukan hanya vendor proyek",
      },
      {
        title: "Inovasi Terarah",
        description:
          "Menggabungkan pemikiran strategis dengan teknologi yang andal dan siap masa depan",
      },
    ],
    servicesTitle: "Layanan Kami",
    servicesSubtitle: "Layanan digital yang selaras dengan tujuan bisnis Anda.",
    services: [
      {
        title: "Software House",
        description:
          "Kami merancang dan membangun sistem digital yang skalabel berdasarkan kebutuhan bisnis, proses, dan pertumbuhan jangka panjang agar teknologi berjalan efisien dan berkelanjutan.",
      },
      {
        title: "Pengembangan Bisnis",
        description:
          "Kami membantu bisnis mengidentifikasi peluang, mengoptimalkan proses, serta menyusun roadmap strategis untuk mendorong pertumbuhan berkelanjutan melalui teknologi dan inovasi.",
      },
      {
        title: "Digital Marketing",
        description:
          "Kami membangun sistem digital marketing yang terstruktur dan berfokus pada hasil terukur untuk membantu brand Anda tumbuh, konversi, dan berkinerja konsisten.",
      },
    ],
    howWeWorkTitle: "Cara Kami Bekerja",
    howWeWorkSubtitle:
      "Kami mendengarkan, merencanakan, dan membangun sesuai tujuan bisnis Anda.",
    howWeWork: [
      { title: "Discovery", description: "Pemahaman bisnis & pengumpulan kebutuhan" },
      { title: "Strategy", description: "Perencanaan roadmap & arsitektur teknis" },
      { title: "Design", description: "Desain UI/UX & prototyping sistem" },
      { title: "Development", description: "Implementasi agile & pengujian" },
      { title: "Optimization", description: "Peluncuran & peningkatan berkelanjutan" },
    ],
    whyTitle: "Mengapa ATHENA STUDIO",
    whySubtitle:
      "Mitra strategis yang berfokus pada tujuan bisnis Anda, bukan hanya teknologi.",
    whyItems: [
      {
        title: "Pendekatan Konsultatif",
        description:
          "Kami mulai dari memahami tantangan bisnis Anda sebelum menentukan arah digital yang tepat.",
      },
      {
        title: "Mindset Bisnis & Teknologi",
        description:
          "Kami menyelaraskan tujuan bisnis dengan pilihan teknologi yang benar benar mendukung pertumbuhan.",
      },
      {
        title: "Solusi Kustom",
        description:
          "Setiap solusi disesuaikan dengan kebutuhan bisnis Anda, bukan template generik.",
      },
      {
        title: "Komunikasi Jelas",
        description:
          "Kami menyampaikan teknologi kompleks dengan bahasa yang jelas, praktis, dan mudah dipahami bisnis.",
      },
      {
        title: "Fokus Jangka Panjang",
        description:
          "Kami merancang sistem yang mendukung pertumbuhan bisnis Anda saat ini dan di masa depan.",
      },
      {
        title: "Arsitektur Skalabel",
        description:
          "Sistem kami dibangun untuk bertumbuh seiring perkembangan bisnis Anda.",
      },
    ],
    ctaTitleA: "Siap Membawa Bisnis Anda ke",
    ctaTitleB: "Level Digital Berikutnya?",
    ctaDesc:
      "Diskusikan dengan ATHENA STUDIO untuk memperjelas arah digital, menyelaraskan teknologi dengan tujuan bisnis, dan membangun solusi yang benar benar mendukung pertumbuhan jangka panjang.",
    ctaButton: "Hubungi Tim Kami",
  },
  en: {
    slides: [
      {
        title: "Building Strong Digital Foundations for Growing Businesses",
        desc: "ATHENA STUDIO partners with UMKM to build clear, efficient digital systems helping businesses grow sustainably with the right strategy and technology.",
      },
      {
        title: "Building Scalable Digital Products for Growing Startups",
        desc: "ATHENA STUDIO works with startups to shape clear product strategies, build reliable systems, and prepare technology that grows alongside your business.",
      },
      {
        title:
          "Driving Sustainable Business Performance Through Strategic Technology",
        desc: "ATHENA STUDIO partners with established organizations to align technology, processes, and long-term strategy for measurable and sustainable outcomes.",
      },
    ],
    heroCta: "Free Consultation",
    aboutTitle: "About Us",
    aboutSubtitle:
      "Your strategic partner in building clear and purposeful digital solutions.",
    aboutIntro:
      "Athena Studio is an IT Consultant & Software House that helps businesses make smarter technology decisions through a strategic approach. We start by understanding your business, workflows, and long term goals, then design digital systems that are practical, measurable, and truly support sustainable business growth.",
    missionTitle: "Our Mission",
    missionText:
      "ATHENA STUDIO helps businesses make smarter, more focused technology decisions. Every digital solution is built on a deep understanding of business processes, efficiency, and long term objectives so technology delivers real, measurable growth.",
    approachTitle: "Our Approach",
    approachText:
      "ATHENA STUDIO helps businesses make smarter, more focused technology decisions. Every solution is built on a deep understanding of business processes and long term goals so technology delivers real, measurable growth.",
    aboutValues: [
      {
        title: "Strategic First",
        description:
          "We start by understanding your business before defining the right solution",
      },
      {
        title: "Purpose Driven",
        description:
          "Every solution is designed to achieve clear business goals and measurable impact",
      },
      {
        title: "Trusted Partnership",
        description: "We act as a long term partner, not just a project vendor",
      },
      {
        title: "Thoughtful Innovation",
        description:
          "Combining strategic thinking with reliable, future ready technology",
      },
    ],
    servicesTitle: "Our Services",
    servicesSubtitle: "Thoughtful digital services aligned with your business goals.",
    services: [
      {
        title: "Software House",
        description:
          "We design and build scalable digital systems based on your business needs, processes, and long term growth ensuring technology works efficiently and sustainably.",
      },
      {
        title: "Business Development",
        description:
          "We help businesses identify opportunities, optimize processes, and define strategic roadmaps to drive sustainable growth through technology and innovation.",
      },
      {
        title: "Digital Marketing",
        description:
          "We build structured digital marketing systems focused on measurable results helping your brand grow, convert, and perform consistently.",
      },
    ],
    howWeWorkTitle: "How We Work",
    howWeWorkSubtitle: "We listen, plan, and build with your business goals in mind.",
    howWeWork: [
      { title: "Discovery", description: "Business understanding & requirement gathering" },
      { title: "Strategy", description: "Roadmap planning & technical architecture" },
      { title: "Design", description: "UI/UX Design & system prototyping" },
      { title: "Development", description: "Agile implementation & testing" },
      { title: "Optimization", description: "Launch & continuous improvement" },
    ],
    whyTitle: "Why ATHENA STUDIO",
    whySubtitle:
      "A strategic partner focused on your business goals not just technology.",
    whyItems: [
      {
        title: "Consultative Approach",
        description:
          "We start by understanding your business challenges before defining the right digital direction.",
      },
      {
        title: "Business & Technology Mindset",
        description:
          "We align business objectives with technology choices that actually support growth.",
      },
      {
        title: "Custom Solutions",
        description:
          "Every solution is tailored to your business needs, not generic templates.",
      },
      {
        title: "Clear Communication",
        description:
          "We communicate complex technology in clear, practical, and business friendly terms.",
      },
      {
        title: "Long term Focus",
        description:
          "We design systems that support your business growth, today and long term.",
      },
      {
        title: "Scalable Architecture",
        description:
          "Our systems are built to scale as your business evolves and expands.",
      },
    ],
    ctaTitleA: "Ready to Take Your Business to the",
    ctaTitleB: "Next Digital Level?",
    ctaDesc:
      "Talk with ATHENA STUDIO to clarify your digital direction, align technology with business goals, and build solutions that truly support long term growth.",
    ctaButton: "Contact Our Team",
  },
};
