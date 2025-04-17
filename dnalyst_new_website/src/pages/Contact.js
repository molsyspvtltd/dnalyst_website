import React from "react";
import { motion } from "framer-motion";
import { Facebook, Instagram, Twitter } from "lucide-react";
export default function Contact() {
  return (
    <div className="min-h-screen w-full bg-[#f9f5f0] text-gray-800">
      <motion.div
        className="px-6 py-20 max-w-3xl mx-auto"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="text-center mb-10">
          <h2 className="text-4xl font-petit text-burnt mb-3">Contact Us</h2>
          <p className="text-gray-600 text-lg">
            We'd love to hear from you. Drop us a message and we’ll get back to
            you soon.
          </p>
        </div>

        <motion.form
          className="space-y-6 bg-white p-8 rounded-2xl shadow-xl border border-gray-200"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.15,
              },
            },
          }}
        >
          {["Name", "Email", "Message"].map((field, index) => (
            <motion.div
              key={field}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              {field !== "Message" ? (
                <input
                  type={field.toLowerCase()}
                  placeholder={`${field}*`}
                  className="w-full border border-gray-300 focus:border-burnt focus:ring-2 focus:ring-burnt/20 p-3 rounded-lg transition duration-200"
                  required
                />
              ) : (
                <textarea
                  placeholder="Your Message*"
                  className="w-full border border-gray-300 focus:border-burnt focus:ring-2 focus:ring-burnt/20 p-3 rounded-lg h-36 resize-none transition duration-200"
                  required
                ></textarea>
              )}
            </motion.div>
          ))}

          <motion.button
            type="submit"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="w-full bg-burnt text-white font-medium tracking-wide py-3 rounded-lg hover:bg-burnt/90 transition"
          >
            Send Message
          </motion.button>
        </motion.form>

        <div className="mt-10 text-center text-gray-600">
          <p className="mb-3">Follow us on</p>
          <div className="flex justify-center space-x-6">
            <a href="https://facebook.com" target="_blank" rel="noreferrer">
              <div className="p-2 rounded-full bg-gray-100 hover:bg-[#CC5500] hover:text-white transition-colors">
                <Facebook size={20} />
              </div>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer">
              <div className="p-2 rounded-full bg-gray-100 hover:bg-[#CC5500] hover:text-white transition-colors">
                <Instagram size={20} />
              </div>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer">
              <div className="p-2 rounded-full bg-gray-100 hover:bg-[#CC5500] hover:text-white transition-colors">
                <Twitter size={20} />
              </div>
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
