import { motion } from "motion/react";

const ProgramsComponets = () => {

  return (
    <section id="programs" className="px-4 py-4 pb-20 max-md:py-32">
      <h2 className="text-center text-2xl font-bold  dark:text-slate-300 text-slate-700 lg:text-6xl">Programs</h2>

      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12 mt-16 dark:text-slate-300 max-md:px-4">
        {[
          [
            "Personal Training",
            "One- on - one coaching tailored to your goals, fitness level, and lifestyle.Gain strength, build endurance, and see real results.",
            "0092cc",
          ],
          [
            "Group Classes",
            "From HIIT and bootcamps to yoga and Pilates, our group sessions are energetic, effective, and welcoming for all fitness levels.",
            "ff3333",
          ],
          [
            "Online Coaching",
            "Can’t make it to the gym? No problem. Get customized workouts, nutrition plans, and virtual check-ins — all from the comfort of your home.",
            "dcd427",
          ],
          [
            "Nutrition Coaching",
            "Fitness starts in the kitchen. Learn how to fuel your body with our expert-backed meal plans and coaching support.",
            "779933",
          ],
        ].map((data, index) => (
          <motion.li
            key={index}
            className="lg:w-60 h-60 p-8 bg-gray-400 rounded-2xl dark:text-black transition-transform transform hover:scale-105 max-md:shadow-lg shadow-white hover:shadow-2xl duration-300"
            style={{ backgroundColor: `#${data[2]}` }}
            initial={{ opacity: 0, y: 50 }} // Start with 0 opacity and slide up from 50px down
            whileInView={{ opacity: 1, y: 0 }} // Fade in and slide up when in view
            viewport={{ once: true }} // Animation happens only once when the item enters the viewport
            transition={{ duration: 0.6, delay: index * 0.2 }} // Staggered animation with a delay based on index
          >
            <h3 className="text-lg text-white max-md:text-xl font-bold ">{data[0]}</h3>
            <p className="text-sm text-neutral-600 dark:text-black mt-4">{data[1]}</p>
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProgramsComponets;
