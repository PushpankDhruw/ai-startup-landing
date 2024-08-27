"use client";
import acmeLogo from "@/assets/logo-acme.png";
import apexLogo from "@/assets/logo-apex.png";
import celestialLogo from "@/assets/logo-celestial.png";
import quantumLogo from "@/assets/logo-quantum.png";
import pulseLogo from "@/assets/logo-pulse.png";
import echoLogo from "@/assets/logo-echo.png";
import Image from "next/image";
import { motion } from "framer-motion";

// Component to display a ticker of logos
export const LogoTicker = () => {
  return (
    <section className="py-20 md:py-24">
      <div className="container">
        <div className="flex items-center gap-5">
          <div className="flex-1 md:flex-none">
            <h2>Trusted by top innovative teams</h2>
          </div>

          <div className="flex flex-1 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_20%,black_80%,transparent)]">
            <motion.div
              initial={{
                translateX: "-50%",
              }}
              animate={{ translateX: "0" }}
              transition={{
                duration: 30,
                ease: "linear",
                repeat: Infinity,
              }}
              className="flex flex-none -translate-x-1/2 gap-14 pr-14"
            >
              {[
                acmeLogo,
                apexLogo,
                celestialLogo,
                quantumLogo,
                pulseLogo,
                echoLogo,
                acmeLogo,
                apexLogo,
                celestialLogo,
                quantumLogo,
                pulseLogo,
                echoLogo,
              ].map((logo, index) => (
                <Image
                  key={index}
                  src={logo.src}
                  alt="logo"
                  quality={100}
                  width={60}
                  height={60}
                  className="w-auto h-6"
                />
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
