"use client";
import avatar1 from "@/assets/avatar-1.png";
import avatar2 from "@/assets/avatar-2.png";
import avatar3 from "@/assets/avatar-3.png";
import avatar4 from "@/assets/avatar-4.png";
import Image from "next/image";
import { motion, useAnimation } from "framer-motion";
import { useState } from "react";

const testimonials = [
  {
    text: "“This product has completely transformed how I manage my projects and deadlines”",
    name: "Sophia Perez",
    title: "Director @ Quantum",
    avatarImg: avatar1,
  },
  {
    text: "“These AI tools have completely revolutionized our SEO entire strategy overnight”",
    name: "Jamie Lee",
    title: "Founder @ Pulse",
    avatarImg: avatar2,
  },
  {
    text: "“The user interface is so intuitive and easy to use, it has saved us countless hours”",
    name: "Alisa Hester",
    title: "Product @ Innovate",
    avatarImg: avatar3,
  },
  {
    text: "“Our team's productivity has increased significantly since we started using this tool”",
    name: "Alec Whitten",
    title: "CTO @ Tech Solutions",
    avatarImg: avatar4,
  },
];

export const Testimonials = () => {
  const controls = useAnimation();
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
    controls.stop();
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    controls.start({
      translateX: "0",
      transition: {
        repeat: Infinity,
        ease: "linear",
        duration: 30,
      },
    });
  };

  return (
    <section className="py-20 md:py-24">
      <div className="container">
        <h2 className="text-5xl font-medium tracking-tighter text-center md:text-6xl">
          Beyond Expectations.
        </h2>
        <p className="max-w-sm mx-auto mt-5 text-lg tracking-tight text-center md:text-xl text-white/70">
          Our revolutionary AI SEO tools have transformed our clients&apos;
          strategies.
        </p>
        <div
          className="flex mt-10 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_20%,black_80%,transparent)]"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <motion.div
            initial={{
              translateX: "-50%",
            }}
            animate={controls}
            className="flex gap-5 flex-none pr-5 "
          >
            {[...testimonials, ...testimonials].map((testimonial) => (
              <div
                key={testimonial.name}
                className="border border-white/15 p-6 md:p-10 rounded-xl bg-[linear-gradient(to_bottom_left,rgb(140,69,255,.3),black)] max-w-xs md:max-w-md flex-none"
              >
                <div className="text-lg tracking-tight md:text-2xl">
                  {testimonial.text}
                </div>

                <div className="flex items-center gap-3 mt-5">
                  <div
                    className="relative after:content-[''] after:absolute after:inset-0 after:bg-[rgb(140,69,244)] after:mix-blend-soft-light after:rounded-lg before:content-['
            '] before:absolute before:inset-0 before:border before:border-white/30 before:z-10 before:rounded-lg"
                  >
                    <Image
                      src={testimonial.avatarImg}
                      alt={`Avatar of ${testimonial.name}`}
                      width={60}
                      height={60}
                      className="border rounded-lg w-11 h-11 grayscale border-white/30"
                    />
                  </div>
                  <div className="flex flex-col">
                    <div>{testimonial.name}</div>
                    <div className="text-sm text-white/50">
                      {testimonial.title}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
