"use client";

import Image from "next/image";
import { Typography } from "@material-tailwind/react";
import { getImagePrefix } from "../../utils/utils";
import { motion } from "framer-motion";

function Hero() {
  return (
    <header
      className="relative overflow-hidden bg-cover bg-center"
      style={{
        backgroundImage: `url('${getImagePrefix()}image/theme-bg.jpg')`, // Theme background image
      }}
    >
      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-white/70"></div>

      {/* Decorative Blobs */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-400 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>

      <div className="relative z-10 px-4 py-16 sm:px-6 lg:px-8">
        <div className="container mx-auto grid gap-12 w-full grid-cols-1 items-center lg:grid-cols-2">
          {/* Left Text Section */}
          <motion.div
            className="row-start-2 lg:row-auto"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <Typography
              variant="h1"
              className="mb-6 text-gray-900 lg:text-6xl sm:text-4xl text-3xl font-lora font-bold tracking-tight !leading-tight"
            >
              Welcome to my <br /> Portfolio!
            </Typography>

            <Typography
              variant="lead"
              className="mb-6 text-gray-800 font-sourceSans text-lg font-light md:pr-12 lg:pr-16 xl:pr-20"
            >
              I&apos;m{" "}
              <span className="font-semibold">Muhammad Zariyan Asif</span>, a
              passionate software developer with 5 years of professional
              experience. Here, you&apos;ll get a glimpse of my journey in the
              world of web development, where creativity meets functionality.
            </Typography>
          </motion.div>

          {/* Right Image Section */}
          <motion.div
            className="flex justify-center lg:justify-end"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
            whileHover={{ scale: 1.03, rotate: 1 }}
          >
            <Image
              width={1024}
              height={1024}
              alt="Muhammad Zariyan Asif"
              src={`/image/MZariyanAsif.jpeg`}
              className="w-full max-w-[400px] sm:max-w-[450px] md:max-w-[500px] rounded-2xl object-cover shadow-2xl border-4 border-white/80"
            />
          </motion.div>
        </div>
      </div>
    </header>
  );
}

export default Hero;
