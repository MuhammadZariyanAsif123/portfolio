"use client";

import { Typography } from "@material-tailwind/react";
import {
  RectangleGroupIcon,
  SwatchIcon,
  HashtagIcon,
  EyeIcon,
  DocumentTextIcon,
} from "@heroicons/react/24/solid";
import { SkillCard } from "@/components";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const SKILLS = [
  {
    icon: RectangleGroupIcon,
    title: "Frontend Web Development:",
    children:
      "Creating beautiful and functional web experiences is my forte. Using the latest technologies and best practices, I design and build websites that captivate and engage users.",
  },
  {
    icon: SwatchIcon,
    title: "Technology Stack",
    children:
      "I'm well-versed in the industry's most popular frontend technologies, including HTML5, CSS3, JavaScript, and frameworks like React, Next.js and Node.js.",
  },
  {
    icon: HashtagIcon,
    title: "Web Optimization",
    children:
      "Performance matters. I optimize websites and apps for speed, ensuring your users enjoy a fast and responsive experience, which in turn boosts user satisfaction and SEO rankings.",
  },
  {
    icon: EyeIcon,
    title: "User-Centric Design",
    children:
      "My development goes hand-in-hand with an eye for design. I create user interfaces that are not only functional but also aesthetically pleasing, providing a seamless and enjoyable user journey.",
  },
  {
    icon: DocumentTextIcon,
    title: "Testing and Quality Assurance",
    children:
      "I rigorously test and debug applications to guarantee a bug-free and secure environment for users. Your peace of mind is as important to me as the functionality of your project.",
  },
];

export function Skills() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.15,
  });

  return (
    <section
      ref={ref}
      className="relative overflow-hidden px-4 sm:px-6 lg:px-8 py-16"
    >
      {/* Modern vibrant gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-600 via-blue-500 to-cyan-400
"></div>

      {/* Decorative blurred shapes matching gradient */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
      <div className="absolute bottom-0 -right-32 w-[32rem] h-[32rem] bg-pink-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>

      {/* Content */}
      <div className="relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="container mx-auto mb-12 text-center"
        >
          <Typography
            color="blue-gray"
            className="mb-2 font-lora font-bold uppercase tracking-wide text-pink-200"
          >
            my skills
          </Typography>
          <Typography
            variant="h1"
            className="mb-4 text-3xl sm:text-4xl lg:text-5xl font-lora font-extrabold bg-gradient-to-r from-yellow-200 via-white to-yellow-200 text-transparent bg-clip-text"
          >
            What I do
          </Typography>
          <Typography
            variant="lead"
            className="mx-auto w-full text-white font-sourceSans lg:w-8/12 text-base sm:text-lg"
          >
            I&apos;m not just a developer; I&apos;m a digital dreamweaver.
            Crafting immersive online experiences is not just a job but my
            calling. Discover below how I can help you.
          </Typography>
        </motion.div>

        {/* Skills Grid */}
        <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {SKILLS.map((props, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 20px rgba(0,0,0,0.15)",
              }}
              className="bg-white/80 backdrop-blur-lg rounded-xl shadow-lg border border-white/40 hover:shadow-2xl transition-all duration-300"
            >
              <SkillCard {...props} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
