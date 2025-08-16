"use client";

import { ProjectCard } from "@/components";
import { Typography } from "@material-tailwind/react";
import { getImagePrefix } from "../../utils/utils";
import { Swiper, SwiperSlide } from "swiper/react";
import { Parallax, Navigation, Pagination } from "swiper/modules";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "swiper/css";
import "swiper/css/parallax";
import "swiper/css/navigation";
import "swiper/css/pagination";

const PROJECTS = [
  {
    img: `/image/Project1.jpg`,
    title: "Adbotai.org",
    link: "https://adbotai.org",
    color: "text-[white]",
  },
  {
    img: `/image/Project2.jpg`,
    title: "FrankWoodSon",
    link: "https://www.frankwoodson.com/",
    color: "text-[black]",
  },
  {
    img: `/image/Project3.jpg`,
    title: "Techinoid LLC",
    link: "https://www.techinoid.com/",
    color: "text-[black]",
  },
  {
    img: `/image/Project4.jpg`,
    title: "CodeAutomation.ai",
    link: "https://codeautomation.ai/",
    color: "text-[yellow]",
  },
];

export function Projects() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.15,
  });

  return (
    <section ref={ref} className="py-20 px-4 sm:px-6 lg:px-8">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="container mx-auto mb-10 text-center"
      >
        <Typography
          variant="h2"
          color="blue-gray"
          className="mb-4 text-3xl sm:text-4xl lg:text-5xl font-lora font-bold"
        >
          My Projects
        </Typography>
        <Typography
          variant="lead"
          className="mx-auto w-full px-2 sm:px-4 font-sourceSans font-normal text-[#011627] lg:w-6/12 text-base sm:text-lg"
        >
          Whether you have a mobile app idea that needs to come to life or a
          website that requires a facelift, I&apos;m here to turn your digital
          dreams into reality.
        </Typography>
      </motion.div>

      {/* Swiper Carousel */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={inView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="w-full"
      >
        <Swiper
          modules={[Parallax, Navigation, Pagination]}
          parallax={true}
          navigation
          pagination={{ clickable: true }}
          speed={800}
          spaceBetween={20}
          breakpoints={{
            320: { slidesPerView: 1 },
            768: { slidesPerView: 1 },
            1024: { slidesPerView: 1 },
          }}
          className="w-full h-[70vh] sm:h-[75vh] lg:h-[80vh]"
        >
          {PROJECTS.map((project, idx) => (
            <SwiperSlide key={idx}>
              <ProjectCard {...project} />
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>
    </section>
  );
}

export default Projects;
