import React from "react";
import ScrollWrapper from "../components/ScrollWrapper";
import Button from "../components/Button";
import { motion } from "framer-motion";
import { useRef } from "react";

const About = () => {
  return (
    <div className="min-h-screen w-full bg-[#f9f5f0] text-gray-800 py-10">
      {/* Header Section */}
      <ScrollWrapper>
        <section className="text-center mb-20 px-4">
          <h1 className="text-4xl lg:text-5xl font-serif text-burnt mb-6">
            Empowering Genomics Through Innovation
          </h1>
          <p className="text-gray-700 text-lg lg:text-xl max-w-4xl mx-auto leading-relaxed">
            At <strong>Molsys Private Limited</strong>, we specialize in
            precision-based genomics, omics research, and bioinformatics. With
            850+ projects delivered, 500+ global clients served, and over 1,000
            students trained, we combine data science and biotechnology to
            deliver revolutionary health solutions.
          </p>
        </section>
      </ScrollWrapper>

      {/* Company Journey */}
      <ScrollWrapper>
        <section className="px-4 mb-20">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Journey Card */}
            <div className="group bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition">
              <h2 className="text-3xl font-semibold text-burnt mb-4 relative inline-block">
                ➤ Our Journey
                <span className="block h-1 bg-burnt origin-center scale-x-0 group-hover:scale-x-100 transition-transform duration-500 mt-2" />
              </h2>
              <p className="text-gray-700 text-lg leading-relaxed">
                Founded in December 2017 and incorporated in June 2018 by{" "}
                <strong>Anupam J Das</strong> and{" "}
                <strong>Gaurab Banerjee</strong>, Molsys Private Limited has
                grown into a global leader in biotechnology and genomic data
                science—delivering cutting‑edge personalized medicine solutions
                worldwide.
              </p>
            </div>

            {/* Programs Card */}
            <div className="group bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition">
              <h2 className="text-3xl font-semibold text-burnt mb-4 relative inline-block">
                ➤ Our Programs
                <span className="block h-1 bg-burnt origin-center scale-x-0 group-hover:scale-x-100 transition-transform duration-500 mt-2" />
              </h2>
              <div className="space-y-4 text-gray-700 text-lg leading-relaxed">
                <p>
                  Over the last five years, our multidisciplinary team has built
                  a portfolio of precision‑health programs. From the
                  genomic‑driven
                  <strong> slimKr</strong> weight‑management platform to the
                  performance‑tuned <strong>fitKr</strong> series, each program
                  is rigorously R&amp;D‑backed and client‑validated.
                </p>
                <p>
                  We extend this science‑first approach to{" "}
                  <strong>kinKr</strong> for children’s growth and our
                  gut‑health protocols, leveraging multi‑omics and real‑world
                  data to continuously refine outcomes.
                </p>
              </div>
              <div className="mt-6">
                <Button text="Explore Our Products" link="/products" />
              </div>
            </div>
          </div>
        </section>
      </ScrollWrapper>

      {/* Core Values */}
      <ScrollWrapper>
        <section className="mb-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-3xl font-semibold text-burnt mb-8 relative inline-block group">
              ➤ Core Values
              <span className="block h-1 bg-burnt origin-center scale-x-0 group-hover:scale-x-100 transition-transform duration-500 mt-2" />
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  title: "Integrity",
                  desc: "We uphold the highest ethical standards—doing the right thing even when no one is watching.",
                },
                {
                  title: "Nurturing Environment",
                  desc: "We create a safe, inclusive workplace that values empathy, growth, and collaboration.",
                },
                {
                  title: "High Performance",
                  desc: "We deliver innovative solutions in Omics, Genomics, and Personalized Medicine.",
                },
                {
                  title: "Collaboration",
                  desc: "We actively involve our clients at every stage to ensure clarity and knowledge sharing.",
                },
              ].map((value, i) => (
                <div
                  key={i}
                  className="group bg-white rounded-2xl shadow-md border border-gray-100 p-6 hover:shadow-lg transition"
                >
                  <h3 className="text-xl font-semibold text-burnt mb-2 relative inline-block">
                    {value.title}
                    <span className="block h-0.5 bg-burnt scale-x-0 group-hover:scale-x-100 transition-transform origin-center duration-500"></span>
                  </h3>
                  <p className="text-gray-700">{value.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </ScrollWrapper>

      {/* Vision & Mission */}
      {/* <ScrollWrapper>
        <section className="px-4 mb-20 max-w-7xl mx-auto">
          <div className="mb-20">
            <h2 className="text-3xl font-semibold text-burnt text-center mb-16 relative inline-block">
              ➤ Our Vision
              <span className="block h-1 bg-burnt scale-x-0 hover:scale-x-100 transition-transform origin-center duration-300"></span>
            </h2>
            <div className="bg-white rounded-2xl shadow-md border border-gray-200 p-6">
              <p className="text-gray-800 text-lg">
                To empower India and the world through the implementation of
                personalized medicine—enabled by genomics and data-driven
                innovation.
              </p>
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-semibold text-burnt text-center mb-16 relative inline-block">
              ➤ Our Mission
              <span className="block h-1 bg-burnt scale-x-0 hover:scale-x-100 transition-transform origin-center duration-300"></span>
            </h2>
            <div className="bg-white rounded-2xl shadow-md border border-gray-200 p-6">
              <p className="text-gray-800 text-lg">
                To define India’s personalized medicine roadmap through
                cutting-edge Omics and Analytics solutions. We aim to prepare
                the next-gen workforce in genomics data science and data
                management for real-world research applications.
              </p>
            </div>
          </div>
        </section>
      </ScrollWrapper> */}
    </div>
  );
};

export default About;
