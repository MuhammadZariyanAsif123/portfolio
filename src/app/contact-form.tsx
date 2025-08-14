"use client";

import {
  Typography,
  Card,
  CardBody,
  IconButton,
} from "@material-tailwind/react";
import {
  EnvelopeIcon,
  PhoneIcon,
  GlobeAltIcon,
} from "@heroicons/react/24/solid";
import Link from "next/link";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export function ContactForm() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.15,
  });

  return (
    <section className="px-4 sm:px-8 py-12 sm:py-16">
      
      {/* Card */}
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <Card
          shadow={true}
          className="container mt-[200px] mx-auto border border-gray-200"
        >
          <CardBody className="p-5 sm:p-8 md:p-16 bg-gray-900 rounded-lg">
            <Typography
              variant="h4"
              color="white"
              className="mb-2 text-xl sm:text-2xl"
            >
              Contact Information
            </Typography>
            <Typography
              variant="lead"
              className="mx-auto mb-8 text-base sm:text-lg !text-gray-400"
            >
              Here’s how you can reach me.
            </Typography>

            {/* Links */}
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <GlobeAltIcon className="h-6 w-6 text-white" />
                <Typography
                  as="span"
                  variant="h6"
                  color="white"
                  className="hover:underline transition-colors"
                >
                  <Link
                    href="https://www.linkedin.com/in/zariyanasif"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    www.linkedin.com/in/zariyanasif
                  </Link>
                </Typography>
              </div>

              <div className="flex items-center gap-4">
                <EnvelopeIcon className="h-6 w-6 text-white" />
                <Typography
                  as="span"
                  variant="h6"
                  color="white"
                  className="hover:underline transition-colors"
                >
                  <Link href="mailto:muhammadzariyan@gmail.com">
                    muhammadzariyan@gmail.com
                  </Link>
                </Typography>
              </div>

              <div className="flex items-center gap-4">
                <PhoneIcon className="h-6 w-6 text-white" />
                <Typography
                  variant="h6"
                  color="white"
                  className="hover:underline transition-colors"
                >
                  <Link href="tel:+923101078282">+92 310 1078282</Link>
                </Typography>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-5 mt-8">
              <Link
                href="https://www.linkedin.com/in/zariyanasif"
                target="_blank"
                rel="noopener noreferrer"
              >
                <IconButton
                  variant="text"
                  color="white"
                  className="hover:scale-110 transition-transform"
                >
                  <i className="fa-brands fa-linkedin text-lg" />
                </IconButton>
              </Link>
              <Link href="mailto:muhammadzariyan@gmail.com">
                <IconButton
                  variant="text"
                  color="white"
                  className="hover:scale-110 transition-transform"
                >
                  <i className="fa-solid fa-envelope text-lg" />
                </IconButton>
              </Link>
              <Link href="tel:+923101078282">
                <IconButton
                  variant="text"
                  color="white"
                  className="hover:scale-110 transition-transform"
                >
                  <i className="fa-solid fa-phone text-lg" />
                </IconButton>
              </Link>
            </div>
          </CardBody>
        </Card>
      </motion.div>
    </section>
  );
}

export default ContactForm;
