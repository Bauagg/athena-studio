"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

import Banner1 from "@/assets/images/banner1.png";
import Banner2 from "@/assets/images/banner2.png";
import Banner3 from "@/assets/images/banner3.png";

export default function HomePage() {
  const slides = [
    {
      image: Banner1,
      title: "Building Strong Digital Foundations for Growing Businesses",
      desc: "ATHENA STUDIO partners with UMKM to build clear, efficient digital systems helping businesses grow sustainably with the right strategy and technology.",
    },
    {
      image: Banner2,
      title: "Building Scalable Digital Products for Growing Startups",
      desc: "ATHENA STUDIO works with startups to shape clear product strategies, build reliable systems, and prepare technology that grows alongside your business.",
    },
    {
      image: Banner3,
      title:
        "Driving Sustainable Business Performance Through Strategic Technology",
      desc: "ATHENA STUDIO partners with established organizations to align technology, processes, and long-term strategy for measurable and sustainable outcomes.",
    },
  ];

  const [current, setCurrent] = useState(0);

  // AUTO SLIDE
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  return (
    <div className="w-full">
      {/* ================= HERO SLIDER ================= */}
      <section className="relative h-[85vh] flex items-center overflow-hidden">
        {/* Background */}
        {slides.map((slide, index) => (
          <Image
            key={index}
            src={slide.image}
            alt="Hero Banner"
            fill
            priority={index === 0}
            className={`object-cover absolute inset-0 transition-opacity duration-1000 ${
              index === current ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60 z-10" />

        {/* Content */}
        <div className="relative z-20 max-w-6xl mx-auto px-6 text-white">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight max-w-2xl">
            {slides[current].title}
          </h1>

          <p className="mt-4 text-gray-200 max-w-xl">{slides[current].desc}</p>

          <button className="mt-6 px-6 py-3 bg-white text-black rounded-full font-medium hover:bg-gray-200 transition">
            Free Consultation
          </button>
        </div>

        {/* Arrow Left */}
        <button
          onClick={prevSlide}
          className="absolute left-6 z-30 text-white bg-white/20 hover:bg-white/40 backdrop-blur-md p-3 rounded-full transition"
        >
          <ChevronLeft size={24} />
        </button>

        {/* Arrow Right */}
        <button
          onClick={nextSlide}
          className="absolute right-6 z-30 text-white bg-white/20 hover:bg-white/40 backdrop-blur-md p-3 rounded-full transition"
        >
          <ChevronRight size={24} />
        </button>

        {/* Dots */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex gap-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`w-3 h-3 rounded-full transition ${
                current === index ? "bg-white" : "bg-white/40"
              }`}
            />
          ))}
        </div>
      </section>

      {/* ================= ABOUT US ================= */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-semibold text-center mb-12">About Us</h2>

          <div className="grid md:grid-cols-2 gap-10 items-center">
            <Image
              src={Banner1}
              alt="About"
              width={600}
              height={400}
              className="rounded-xl"
            />

            <div className="space-y-6">
              <div className="p-6 bg-gray-100 rounded-lg">
                <h3 className="font-semibold mb-2">Our Mission</h3>
                <p className="text-sm text-gray-600">
                  Delivering scalable, secure, and innovative digital solutions
                  that empower businesses.
                </p>
              </div>

              <div className="p-6 bg-gray-100 rounded-lg">
                <h3 className="font-semibold mb-2">Our Approach</h3>
                <p className="text-sm text-gray-600">
                  Combining strategic thinking, agile development, and modern
                  technologies to create impactful products.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= SERVICES ================= */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-semibold text-center mb-12">
            Our Services
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              "Software House",
              "Business Development",
              "Digital Marketing",
            ].map((service, index) => (
              <div
                key={index}
                className="p-8 bg-white rounded-xl shadow hover:shadow-lg transition"
              >
                <h3 className="font-semibold text-lg mb-3">{service}</h3>
                <p className="text-sm text-gray-600">
                  High-quality solutions tailored to your business needs using
                  modern technology.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= HOW WE WORK ================= */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-semibold mb-12">How We Work</h2>

          <div className="grid md:grid-cols-5 gap-8">
            {[
              "Discovery",
              "Strategy",
              "Design",
              "Development",
              "Optimization",
            ].map((step, index) => (
              <div key={index}>
                <div className="w-14 h-14 mx-auto mb-4 flex items-center justify-center bg-gray-100 rounded-full font-semibold">
                  {index + 1}
                </div>
                <p className="font-medium">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= WHY ATHENA ================= */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-semibold text-center mb-12">
            Why ATHENA STUDIO
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              "Collaborative Approach",
              "Business & Technology Mindset",
              "Custom Solutions",
              "Clear Communication",
              "Long-term Focus",
              "Scalable Infrastructure",
            ].map((item, index) => (
              <div
                key={index}
                className="p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition"
              >
                <h3 className="font-semibold mb-2">{item}</h3>
                <p className="text-sm text-gray-600">
                  We prioritize quality, transparency, and long-term
                  partnerships.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
