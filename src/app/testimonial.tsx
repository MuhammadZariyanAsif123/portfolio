"use client";
import React, { useState, useEffect } from "react";
import { Typography, Card, CardBody, Avatar } from "@material-tailwind/react";
import { getImagePrefix } from "../../utils/utils";

export default function Testimonial() {
  const [active, setActive] = useState(0);

  const testimonials = [
    {
      id: 1,
      feedback:
        "Zariyan is one of the best colleagues I've ever worked with. He is talented, smart and has an amazing personality. He’s a crucial team player, big supporter, and always a hard worker!",
      name: "Nour Hawarneh - Senior Business Analyst",
      role: "Speridian Technologies",
      avatar: `${getImagePrefix()}image/avatar1.jpg`,
    },
    {
      id: 2,
      feedback:
        "Muhammad Zariyan is highly professional and well-experienced React Developer. It was a great experience working with him.",
      name: "Muhammad Abdullah - Software Engineer",
      role: "Dubizzle Labs",
      avatar: `${getImagePrefix()}image/avatar2.jpg`,
    },
    {
      id: 3,
      feedback:
        "Mr. Zariyan is highly professional and dedicated to his work. He has a strong understanding of both frontend and backend programming, with solid skills in JS and its frameworks and a good grasp of databases.",
      name: "Muhammad Faheem - Senior Software Engineer",
      role: "Digilynx",
      avatar: `${getImagePrefix()}image/avatar3.jpg`,
    },
  ];

  // Auto-slide every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <section className="py-16 px-6 lg:py-24 bg-gray-50">
      <div className="container max-w-screen-lg mx-auto text-center">
        {/* Section Title */}
        <Typography
          variant="h2"
          className="mb-10 font-lora text-4xl font-bold text-gray-800"
        >
          What Our Clients Say
        </Typography>

        {/* Testimonial Cards */}
        <div className="relative flex justify-center">
          {testimonials.map((item, index) => (
            <Card
              key={item.id}
              className={`w-full max-w-2xl transition-opacity duration-700 absolute ${
                index === active ? "opacity-100" : "opacity-0"
              }`}
            >
              <CardBody className="flex flex-col items-center p-8">
                <Avatar
                  src={item.avatar}
                  alt={item.name}
                  size="xl"
                  className="mb-6 shadow-lg border-4 border-white"
                />
                <Typography
                  variant="h5"
                  className="mb-2 font-sourceSans text-gray-900 font-semibold text-center"
                >
                  {item.name}
                </Typography>
                <Typography
                  variant="small"
                  className="mb-6 font-sourceSans text-gray-500 uppercase tracking-wide text-center"
                >
                  {item.role}
                </Typography>
                <Typography className="text-lg font-lora text-gray-700 leading-relaxed italic">
                  “{item.feedback}”
                </Typography>
              </CardBody>
            </Card>
          ))}
        </div>

        {/* Dots navigation */}
        <div className="mt-10 flex justify-center gap-3">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setActive(idx)}
              className={`h-3 w-3 rounded-full transition-all ${
                active === idx ? "bg-gray-900 scale-125" : "bg-gray-400"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
