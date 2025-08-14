"use client";

import { Typography, Button, Card, CardBody } from "@material-tailwind/react";
import {
  ChartBarIcon,
  PuzzlePieceIcon,
  ArrowRightIcon,
} from "@heroicons/react/24/solid";
import { ResumeItem } from "@/components";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const RESUME_ITEMS = [
  {
    icon: ChartBarIcon,
    children: "Bachelor of Science in Information Technology",
  },
  {
    icon: PuzzlePieceIcon,
    children:
      "Certified in Introduction to Prompt Engineering for Generative AI",
  },
];

export function Resume() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.15,
  });

  return (
    <section
      ref={ref}
      className="px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24 bg-blue-gray-50"
    >
      <div className="container mx-auto grid w-full grid-cols-1 items-center gap-12 lg:grid-cols-2">
        {/* Left Column - Text */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="col-span-1"
        >
          <Typography
            variant="h2"
            color="blue-gray"
            className="text-3xl sm:text-4xl lg:text-5xl font-lora font-bold"
          >
            My Resume
          </Typography>

          <Typography
            variant="lead"
            className="mb-4 mt-3 w-full sm:w-10/12 font-sourceSans font-normal text-blue-gray-700"
          >
            Highly skilled and creative Software Developer with 5+ years of
            experience in crafting visually stunning and functionally robust
            websites and web applications.
          </Typography>

          <Button
            onClick={() => window.open("/resume.pdf", "_blank")}
            variant="gradient"
            color="blue"
            className="flex items-center gap-2 text-base sm:text-lg"
          >
            View Resume
            <ArrowRightIcon strokeWidth={3} className="h-4 w-4" />
          </Button>
        </motion.div>

        {/* Right Column - Resume Items */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="col-span-1 grid gap-y-6 lg:ml-auto pr-0 lg:pr-12 xl:pr-32"
        >
          {RESUME_ITEMS.map((props, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: idx * 0.2 }}
            >
              <Card shadow={false} className="bg-white rounded-xl shadow-md">
                <CardBody className="flex items-center gap-4 p-6">
                  <props.icon className="h-8 w-8 text-blue-500" />
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-sourceSans font-medium"
                  >
                    {props.children}
                  </Typography>
                </CardBody>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Resume;
