
const ProgramsComponets = () => {

    return(
        <section id="programs" className="px-4 py-4 pb-20 max-md:py-32">
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
    )
}
export default ProgramsComponets;