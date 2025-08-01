"use client";

import { motion } from "motion/react";
import Link from "next/link";
import ProgramsComponets from "./Programs";
import MemershipType from "./MembershipType";

export function HeroSectionOne() {
  return (
    <div className="relative mx-auto my-10 flex max-w-7xl flex-col items-center justify-center">
      <Navbar />
      <div className="absolute inset-y-0 left-0 h-full w-px bg-neutral-200/80 dark:bg-neutral-800/80">
        <div className="absolute top-0 h-40 w-px bg-gradient-to-b from-transparent via-blue-500 to-transparent" />
      </div>
      <div className="absolute inset-y-0 right-0 h-full w-px bg-neutral-200/80 dark:bg-neutral-800/80">
        <div className="absolute h-40 w-px bg-gradient-to-b from-transparent via-blue-500 to-transparent" />
      </div>
      <div className="absolute inset-x-0 bottom-0 h-px w-full bg-neutral-200/80 dark:bg-neutral-800/80">
        <div className="absolute mx-auto h-px w-40 bg-gradient-to-r from-transparent via-blue-500 to-transparent" />
      </div>
      <div className="px-4 py-10 md:py-20">
        <h1 className="relative z-10 mx-auto max-w-4xl text-center text-2xl font-bold text-slate-700 md:text-4xl lg:text-7xl dark:text-slate-300">
          {"Transform Your Body. Empower Your Life."
            .split(" ")
            .map((word, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, filter: "blur(4px)", y: 10 }}
                animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                transition={{
                  duration: 0.3,
                  delay: index * 0.1,
                  ease: "easeInOut",
                }}
                className="mr-2 inline-block"
              >
                {word}
              </motion.span>
            ))}
        </h1>
        <motion.p
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            duration: 0.3,
            delay: 0.8,
          }}
          className="relative z-10 mx-auto max-w-xl py-4 text-center text-lg font-normal text-neutral-600 dark:text-neutral-400"
        >
          Whether you&rsquo;re looking to lose weight, gain muscle, or improve your overall health,
          we&rsquo;re here to guide every step of your fitness journey.
        </motion.p>
        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            duration: 0.3,
            delay: 1,
          }}
          className="relative z-10 mt-8 flex flex-wrap items-center justify-center gap-4"
        >
          <a href="#programs" className="w-60 text-center transform rounded-lg bg-black px-6 py-2 font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200">
            Explore Our Programs
          </a>
          <a href="#contact" className="w-60 text-center transform rounded-lg border border-gray-300 bg-white px-6 py-2 font-medium text-black transition-all duration-300 hover:-translate-y-0.5 hover:bg-gray-100 dark:border-gray-700 dark:bg-black dark:text-white dark:hover:bg-gray-900">
            Contact Support
          </a>
        </motion.div>
        <motion.div
          initial={{
            opacity: 0,
            y: 10,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.3,
            delay: 1.2,
          }}
          className="relative z-10 mt-20 rounded-3xl border border-neutral-200 bg-neutral-100 p-4 shadow-md dark:border-neutral-800 dark:bg-neutral-900"
        >
          <motion.div
            initial={{ scale: 0.5,opacity: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="w-full overflow-hidden rounded-xl border border-gray-300 dark:border-gray-700">
            <img
              src="https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/CQF3KSWZ4ML64HHLQMQKZPR5NI.jpg"
              alt="Landing page preview"
              className="aspect-[16/9] opacity-75 hover:opacity-100 transition-all duration-300 h-auto w-full object-cover"
              height={1000}
              width={1000}
            />
          </motion.div>
        </motion.div>
      </div>



      <MemershipType />


      <section id="about" className="px-4 lg:py-20 max-md:px-8 max-md:pt-20 dark:text-slate-300">
        <h2 className="text-center text-2xl font-bold  dark:text-slate-300 text-slate-700 lg:text-6xl">About Us</h2>

        <div className="mt-8 max-w-4xl mx-auto border-4 rounded-2xl p-4 border-neutral-200 dark:border-neutral-800 pb-8 shadow-lg shadow-blue-400 hover:shadow-2xl transition-shadow duration-300">
          <p className="font-bold my-4 text-2xl">Who We Are:</p>
          <p className="text-lg text-neutral-600 dark:text-neutral-400 px-8">
            At FT.NESS, we&rsquo;re more than just a gym — we&rsquo;re a community. Our certified personal trainers,
            nutrition coaches, and wellness experts are passionate about helping you achieve sustainable
            results through personalized fitness plans, expert guidance, and continuous motivation.
          </p>
        </div>

        <div className="mt-16 max-w-4xl mx-auto border-4 rounded-2xl p-4 border-neutral-200 dark:border-neutral-800 pb-8 shadow-lg shadow-blue-400 hover:shadow-2xl transition-shadow duration-300">
          <p className="font-bold my-4 text-2xl">Our Mission:</p>
          <p className="text-lg text-neutral-600 dark:text-neutral-400 px-8">
            To inspire and empower individuals to lead healthier, stronger lives through science-based
            training and holistic wellness solutions.
          </p>
        </div>

      </section>

      <ProgramsComponets />

    </div>
  );
}

const Navbar = () => {
  return (
    <nav className="flex w-full items-center justify-between border-t border-b border-neutral-200 px-4 py-4 dark:border-neutral-800">
      <div className="flex items-center gap-2">
        <img src="/logo.png" className="size-7 rounded-full" alt="logo image" />
        <h1 className="text-base font-bold md:text-2xl">FT.NESS</h1>
      </div>
      <div>
        <Link href="/#about" className="w-24 transform rounded-lg px-6 py-2 text-center font-medium text-white transition-all duration-300 hover:-translate-y-0.5 md:w-32 dark:text-white max-md:hidden ">About</Link>
        <Link href="/#programs" className="w-24 transform rounded-lg px-6 py-2 text-center font-medium text-white transition-all duration-300 hover:-translate-y-0.5 md:w-32 dark:text-white pr-12 max-md:hidden ">Programs</Link>
        <Link href="/login" className="w-24 transform rounded-lg bg-black px-6 py-2 text-center font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-gray-800 md:w-32 dark:bg-white dark:text-black dark:hover:bg-gray-200">Login
        </Link>
      </div>
    </nav>
  );
};
