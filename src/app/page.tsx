import Image from "next/image";
import { HeroSectionOne } from "../../components/Hero";

export default function Home() {

  return (
    <main>
      <HeroSectionOne />
      <div className="relative mx-auto my-10 flex max-w-7xl flex-col items-center justify-center">
        <div className="absolute inset-y-0 left-0 h-full w-px bg-neutral-200/80 dark:bg-neutral-800/80">
          <div className="absolute top-0 h-40 w-px bg-gradient-to-b from-transparent via-blue-500 to-transparent" />
        </div>
        <div className="absolute inset-y-0 right-0 h-full w-px bg-neutral-200/80 dark:bg-neutral-800/80">
          <div className="absolute h-40 w-px bg-gradient-to-b from-transparent via-blue-500 to-transparent" />
        </div>
        <div className="absolute inset-x-0 bottom-0 h-px w-full bg-neutral-200/80 dark:bg-neutral-800/80">
          <div className="absolute mx-auto h-px w-40 bg-gradient-to-r from-transparent via-blue-500 to-transparent" />
        </div>


        <div className="px-4 py-4 md:py-20 dark:text-slate-300">
          <h2 className="text-center text-2xl font-bold  dark:text-slate-300 text-slate-700 lg:text-6xl">About Us</h2>

          <div className="mt-8 max-w-4xl mx-auto border-4 rounded-2xl p-4 border-neutral-200 dark:border-neutral-800 pb-8 shadow-lg shadow-blue-400 hover:shadow-2xl transition-shadow duration-300">
            <p className="font-bold my-4 text-2xl">Who We Are:</p>
            <p className="text-lg text-neutral-600 dark:text-neutral-400 px-8">
              At FT.NESS, we're more than just a gym — we're a community. Our certified personal trainers,
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

        </div>

        <section id="programs" className="px-4 py-4 max-md:py-32">
          <h2 className="text-center text-2xl font-bold  dark:text-slate-300 text-slate-700 lg:text-6xl">Programs</h2>

          <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12 mt-16 dark:text-slate-300 max-md:px-4">
            {[[
              "Personal Training",
              "One- on - one coaching tailored to your goals, fitness level, and lifestyle.Gain strength, build endurance, and see real results."],

            ["Group Classes",
              "From HIIT and bootcamps to yoga and Pilates, our group sessions are energetic, effective, and welcoming for all fitness levels."],

            ["Online Coaching",
              "Can’t make it to the gym? No problem. Get customized workouts, nutrition plans, and virtual check-ins — all from the comfort of your home."],

            ["Nutrition Coaching",
              "Fitness starts in the kitchen. Learn how to fuel your body with our expert-backed meal plans and coaching support."],

            ].map((data, index) => (
              <li key={index} className="lg:w-60 h-60 p-8 bg-gray-400 rounded-2xl dark:bg-neutral-800 dark:text-white transition-transform transform hover:scale-105 shadow-lg shadow-blue-400 hover:shadow-2xl duration-300">

                <h3 className="text-lg ">{data[0]}</h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-400 mt-4">{data[1]}</p>

              </li>
            ))}
          </ul>
        </section>
      </div>

      <section id="contact" className="px-4 py-20 ">
        <div className="max-w-4xl lg:px-32 mb-16">
          <h2 className="text-5xl">Contact Us</h2>
          <p className="mt-4 text-blue-400">Let’s Talk!</p>
          <p className="text-lg">Have questions or ready to get started? Our team is here to help.</p>
          <ul className="mt-8 text-neutral-600 dark:text-neutral-400">
            <li>Address: Kochi , Kerala</li>
            <li>Phone: +91-98765-43210</li>
            <li>Email: ft.ness@gmail.com</li>
            <li>
              <button className="w-auto transform rounded-lg bg-black px-6 py-2 my-4 font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200">
                Book a Free Consultation Button
              </button>
            </li>
          </ul>
        </div>
        <div className="lg:flex justify-center max-w-7xl mx-auto border-2 p-16 max-md:p-4 border-neutral-200 dark:border-neutral-800 rounded-2xl shadow-lg shadow-blue-400 hover:shadow-2xl transition-shadow duration-300">
          <div className="pr-8 max-w-2xl bg-white dark:bg-neutral-900 p-8 rounded-lg shadow-lg">
            <h3 className="text-3xl font-bold text-slate-700 dark:text-slate-300 mb-8">Get in Touch</h3>
            <p className="text-lg text-neutral-600 dark:text-neutral-400 mb-12">
              Have questions or want to learn more about our programs? We're here to help!
            </p>
          </div>

          <form className="max-w-md mx-auto space-y-6">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-2 border border-neutral-300 rounded-lg dark:border-neutral-700 dark:bg-neutral-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full px-4 py-2 border border-neutral-300 rounded-lg dark:border-neutral-700 dark:bg-neutral-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <textarea
              placeholder="Your Message"
              className="w-full px-4 py-2 border border-neutral-300 rounded-lg dark:border-neutral-700 dark:bg-neutral-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 h-32 resize-none"
            ></textarea>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white font-semibold py-2 rounded-lg hover:bg-blue-700 transition-colors duration-300"
            >
              Send Message
            </button>
          </form>
        </div>

      </section>


      <footer className="lg:px-24">
        <div className="bg-neutral-200 lg:rounded-t-2xl dark:bg-neutral-800 text-center py-8 ">
          <p className="text-sm text-neutral-600 dark:text-neutral-400">
            &copy; {new Date().getFullYear()} FT.NESS. All rights reserved.
          </p>
          <p className="text-sm text-neutral-600 dark:text-neutral-400">
            Built with ❤️ by Alwin Sajan
          </p>
        </div>
      </footer>
    </main>
  );
}
