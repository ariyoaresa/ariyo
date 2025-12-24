
import { motion } from "motion/react";

const Hero = () => {
  return (
    <section id="hero" className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden bg-white">
      <div className="container mx-auto px-6 grid lg:grid-cols-12 gap-12 relative z-10">

        {/* Left Content */}
        <div className="lg:col-span-8 flex flex-col justify-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-7xl md:text-[8rem] leading-[0.9] text-black mb-12"
          >
            Website <br />
            <span className="font-light italic">Developer</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="flex flex-col md:flex-row gap-8 items-start max-w-2xl"
          >
            <div className="px-4 py-1 border rounded-full text-xs font-semibold uppercase tracking-wider border-gray-300">
              Based in Nigeria
            </div>
            <p className="text-xl text-gray-600 leading-relaxed font-light max-w-md">
              Ariyo Aresa👋. A <strong>Web Developer</strong> Creating Intuitive Digital Experiences.
              Transforming complex problems into simple, beautiful, and accessible web pages.
            </p>
          </motion.div>
        </div>

        {/* Right Floating Image */}
        <div className="lg:col-span-4 relative flex items-center justify-end">
          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotate: 2 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative max-w-sm w-full"
          >
            <div className="aspect-3/4 rounded-sm overflow-hidden shadow-2xl">
              <img
                src="/ariyo.png"
                alt="Ariyo Aresa"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Floating Badge */}
            <div className="absolute -bottom-2 -left-6 bg-white p-4 shadow-xl max-w-[150px] text-xs leading-relaxed text-gray-500 rounded-sm hidden md:block">
              "Frontend isn't just about building websites, it's engineering trust"
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;