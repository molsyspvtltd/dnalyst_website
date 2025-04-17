import React from "react";
import { motion } from "framer-motion";
import ProductCard from "../components/ProductCard";
import fitKr from "../assets/images/fitcare.jpg";
import slimKr from "../assets/images/slimcare.jpg";
import fitKrPro from "../assets/images/fitcarepro.jpg";
import kinKr from "../assets/images/kincare.jpg";
import herKr from "../assets/images/hercare.jpg";
import gutKr from "../assets/images/gutcare.jpg";
import gutKrPro from "../assets/images/gutcarepro.jpg";
import ScrollWrapper from "../components/ScrollWrapper";
import { HiH1 } from "react-icons/hi2";

const products = [
  {
    id: 1,
    name: "slimKr",
    desc: "Holistic personalized weight management program: tailored Diet, nutrition and genetics-based intervention. Lose weight the heathy way.",
    image: slimKr,
  },
  {
    id: 2,
    name: "fitKr",
    desc: "Holistic body fitness program: tailored diet, exercise, and genetics- based interventions. Delay your aging and surprise everyone.",
    image: fitKr,
  },
  {
    id: 3,
    name: "fitKr Pro",
    desc: "Holistic body fitness, endurance, strength, flexibility boosting program: tailored diet for sports, power exercise and healing, and genetics- based interventions. Achieve much more and unleash the power to succeed.",
    image: fitKrPro,
  },
  {
    id: 4,
    name: "kinKr",
    desc: "Holistic personalized program for your children: tailored diet, nutrition, identification of unique traits or personalities. Nurture your little champion with right guidance and habits.",
    image: kinKr,
  },
  {
    id: 5,
    name: "herKr",
    desc: "Coming Soon !!!",
    image: herKr,
  },
  {
    id: 6,
    name: "gutKr",
    desc: "Gut management program: tailored diet, nutrition and genetic interventions. Good health begins with good gut. Explore your gut feeling!",
    image: gutKr,
  },
  {
    id: 7,
    name: "gutKr Pro",
    desc: "Coming Soon !!!",
    image: gutKrPro,
  },
];

export default function Products() {
  return (
    <ScrollWrapper>
      <div className="min-h-screen w-full bg-[#f9f5f0] text-gray-800">
        <motion.div
          className="px-6 py-12 max-w-7xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl font-petit mb-10 text-center text-burnt">
            Our Products
          </h1>

          <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
            {products.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        </motion.div>
      </div>
    </ScrollWrapper>
  );
}
