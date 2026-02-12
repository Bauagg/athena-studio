# ATHENA STUDIO Company Profile (Frontend)

Website company profile berbasis **Next.js (App Router)** dengan fokus pada UI landing page, komponen modular, dan dukungan bahasa **English / Indonesia**.

## Ringkasan Fitur
- Landing page multi-section:
  - Hero slider
  - About Us
  - Services
  - How We Work
  - Why ATHENA
  - CTA section
- **I18n sederhana** tanpa library eksternal (EN/ID) via context.
- Pilihan bahasa di navbar (dropdown/modal style) dan tersimpan di `localStorage`.
- Navigasi menu navbar/footer menggunakan **anchor smooth scroll** (bukan pindah page).
- Halaman legal:
  - `Privacy Policy` (`/privacy-policy`)

## Tech Stack
- Next.js 15+ (App Router)
- React + TypeScript
- Tailwind CSS
- Lucide React (icons)

## Struktur Utama
```txt
src/
  app/
    layout.tsx
    page.tsx
    home.tsx
    privacy-policy/page.tsx
    globals.css
  components/
    language-provider.tsx
    navbar/index.tsx
    footer/index.tsx
    home/
      content.ts
      types.ts
      hero-section.tsx
      about-section.tsx
      services-section.tsx
      how-we-work-section.tsx
      why-athena-section.tsx
      cta-section.tsx
```

## Arsitektur Home
- `src/app/home.tsx` berperan sebagai **pondasi/orchestrator**:
  - ambil `language` dari `LanguageProvider`
  - pilih dictionary dari `home/content.ts`
  - kelola state slider hero
  - mapping data + icon ke komponen section
- UI tiap section dipisah ke komponen di `src/components/home/*` agar maintainable.

## Sistem Bahasa (EN/ID)
- Provider: `src/components/language-provider.tsx`
- Hook: `useLanguage()`
- Nilai bahasa:
  - `"en"`
  - `"id"`
- Persistensi:
  - key `localStorage`: `athena-language`

## Navigasi Anchor
Menu navbar/footer diarahkan ke section id di home:
- `#home`
- `#about-us`
- `#services`
- `#approach`
- `#why-us`
- `#contact`

Global smooth scroll di `src/app/globals.css`:
- `scroll-behavior: smooth`
- `scroll-padding-top: 96px` (agar tidak ketutup navbar sticky)

## Halaman Privacy Policy
- Route: `/privacy-policy`
- File: `src/app/privacy-policy/page.tsx`
- Link dari footer `Privacy & Policy` sudah diarahkan ke route ini.

## Menjalankan Project
```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Script
```bash
npm run dev
npm run build
npm run start
npm run lint
```

## Catatan Pengembangan
- Untuk menambah/ubah konten bilingual home, edit:
  - `src/components/home/content.ts`
- Untuk ubah gaya section, edit komponen section terkait di:
  - `src/components/home/*.tsx`
- Jika butuh menambah bahasa baru, extend:
  - type `Language` di `language-provider.tsx`
  - dictionary di `home/content.ts`, `navbar`, dan `footer`.
