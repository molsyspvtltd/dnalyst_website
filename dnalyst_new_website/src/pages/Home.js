import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import bg1 from "../assets/images/homepage.jpg";
import bg2 from "../assets/images/about_banner.jpg";
import { Dumbbell, Salad, FileText, Dna, ArrowRight } from "lucide-react";
import Button from "../components/Button";
import ScrollWrapper from "../components/ScrollWrapper";
import appstoreBadge from "../assets/images/appstore.png";
import playstoreBadge from "../assets/images/playstore.png";

export default function Home() {
  return (
    <div className="min-h-screen w-full bg-[#f9f5f0] text-gray-800">
      {/* Hero Section */}
      <ScrollWrapper>
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="relative h-[80vh] w-full"
        >
          {/* Background Image */}
          <img
            src={bg1}
            alt="Luxury background"
            className="absolute inset-0 h-full w-full object-cover"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-black bg-opacity-30" />

          {/* Text Content */}
          <div className="relative z-10 flex items-center justify-start h-full px-10">
            <div className="p-10 rounded-xl max-w-xl text-center">
              <p className="text-gray-800 text-lg mb-6">Fitness & Nutrition</p>
              <h1 className="text-5xl font-serif text-burnt mb-4">
                Upgrade your way of living with tailored insights
              </h1>
              <p className="text-gray-800 text-lg mb-6 ">
                Join us in experiencing a healthy lifestyle and unlocking your
                mystic genetic potential with us.
              </p>
              <Button text="Explore our products" link="/products" />
            </div>
          </div>
        </motion.section>
      </ScrollWrapper>

      {/* Why Choose Us Section */}
      <div className="w-full flex flex-col items-center justify-center gap-10 px-10 py-16">
        <div className="text-center">
          <ScrollWrapper>
            <h2 className="text-3xl font-serif text-burnt mb-4">
              Why Choose Us
            </h2>
          </ScrollWrapper>
          <p className="text-gray-700 max-w-xl">
            Discover the benefits that set us apart in delivering top-tier
            personalized wellness.
          </p>
        </div>

        <ScrollWrapper>
          <div className="flex flex-wrap gap-20 justify-center">
            {[
              {
                icon: <Dumbbell size={40} className="text-burnt" />,
                title: "Interventional Physiotherapy",
                subtitle: "Sculpt your fitness",
              },
              {
                icon: <Salad size={40} className="text-burnt" />,
                title: "Best Dieticians",
                subtitle: "Tailored diet plans, just for you",
              },
              {
                icon: <Dna size={40} className="text-burnt" />,
                title: "Personalized Genetic Report",
                subtitle: "Unlocking the power of genomes",
              },
            ].map((card, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05, y: -10 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="bg-white shadow-xl p-6 rounded-2xl text-center w-72 group hover:shadow-2xl transition-shadow duration-300"
              >
                <div className="flex justify-center mb-4">{card.icon}</div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {card.title}
                </h3>
                <p className="text-gray-600 mb-4">{card.subtitle}</p>
                <Link
                  to="/products"
                  className="inline-flex items-center gap-1 text-burnt font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                >
                  Learn More <ArrowRight size={16} />
                </Link>
              </motion.div>
            ))}
          </div>
        </ScrollWrapper>
      </div>

      {/* Consultants Section */}
      <ScrollWrapper>
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="relative w-full flex flex-col lg:flex-row items-center justify-between py-16 px-6 lg:px-10"
        >
          {/* Left Side: Text */}
          <ScrollWrapper>
            <div className="max-w-xl text-center lg:text-center">
              <h1 className="text-3xl lg:text-4xl font-serif text-burnt mb-4">
                We have expert Consultants to help our Clients.
              </h1>
              <p className="text-gray-800 text-lg mb-6">
                Molsys Private Limited has been working as a market leader in
                genomics services, bioinformatics and personalized genomics. We
                have served 500 clients worldwide and finished more than 850
                research projects so far. We are using cutting-edge technology
                to demystify the code written in DNA and provide you with a
                healthy lifestyle based on customized diet and exercise regimen.
              </p>
              <Button text="Contact Us" link="/contact" />
            </div>
          </ScrollWrapper>

          {/* Right Side: Premium Styled Image */}
          <div className="relative w-full lg:w-1/2 mt-10 lg:mt-0 lg:ml-10 flex justify-center items-center">
            <div className="w-full rounded-3xl shadow-2xl overflow-hidden hover:scale-[1.01] transition-transform duration-500">
              <img
                src={bg2}
                alt="Consultant support"
                className="w-full h-auto object-cover rounded-2xl"
              />
            </div>
          </div>
        </motion.section>
      </ScrollWrapper>

      {/* App Download Section */}
      <ScrollWrapper>
        <div className="py-16 px-10 flex flex-col items-center gap-6">
          <h2 className="text-2xl font-serif text-burnt underline">
            Download Our App
          </h2>
          <p className="text-gray-700 text-center max-w-lg">
            Stay connected on the go! Access personalized health insights, book
            appointments, and get your reports directly from the app.
          </p>
          <div className="flex gap-4">
            <img
              src={appstoreBadge}
              alt="Download on the App Store"
              className="h-12 sm:h-14 w-auto max-w-[150px] sm:max-w-[180px] object-contain hover:opacity-80 transition"
            />
            <img
              src={playstoreBadge}
              alt="Get it on Google Play"
              className="h-12 sm:h-14 w-auto max-w-[150px] sm:max-w-[180px] object-contain hover:opacity-80 transition"
            />
          </div>
        </div>
      </ScrollWrapper>
    </div>
  );
}
