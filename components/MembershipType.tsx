import { motion } from "motion/react";

const MemershipType = () => {
    return (
        <motion.div initial={{ opacity: 0, x: "-100%" }} // Starts off-screen to the left
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.5, delay: 0.2 }}
            className="bg-[#0092cc] text-black p-8 lg:h-[75vh] rounded-tr-full w-full">
            <motion.h2 initial={{ opacity: 0, x: "-50%" }} // Starts off-screen to the left
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.51, delay: 0.2 }}
                className="text-5xl text-white max-md:text-3xl font-bold">
                Start Here</motion.h2>
            <ul className="lg:flex max-md:grid mt-8 gap-8 overflow-x-auto justify-center">
                {/* First Item */}
                <motion.li
                    className="bg-black w-80 h-80 rounded-sm"
                    initial={{ opacity: 0, x: "-100%" }} // Starts off-screen to the left
                    whileInView={{ opacity: 1, x: 0 }} // Animates to normal position when in view
                    viewport={{ once: true }} // Only trigger animation once when it enters the viewport
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    <motion.img
                        src="https://hips.hearstapps.com/hmg-prod/images/701/articles/2017/01/how-much-joining-gym-helps-health-2-jpg-1488906648.jpeg?resize=640:*"
                        className="opacity-75 hover:translate-5 transition-transform duration-300 h-64 w-80"
                        alt=""
                        whileHover={{ scale: 1.1 }}
                    />
                    <h3 className="lg:text-2xl mt-4 text-xl text-white font-bold text-center">Membership</h3>
                </motion.li>

                {/* Second Item */}
                <motion.li
                    className="bg-black w-80 h-80 rounded-sm"
                    initial={{ opacity: 0, x: "-100%" }} // Starts off-screen to the left
                    whileInView={{ opacity: 1, x: 0 }} // Animates to normal position when in view
                    viewport={{ once: true }} // Only trigger animation once when it enters the viewport
                    transition={{ duration: 0.5, delay: 0.4 }}
                >
                    <motion.img
                        src="https://www.eatright.org/-/media/images/eatright-landing-pages/physicalactivitylp_804x482.jpg?as=0&w=967&rev=49578a5889d64349a3cc68b2ac762e43&hash=7E56938D92292108240175617FC67FE4"
                        className="opacity-75 h-64 w-80 hover:translate-5 transition-transform duration-300"
                        alt=""
                        whileHover={{ scale: 1.1 }}
                    />
                    <h3 className="lg:text-2xl text-xl mt-4 text-white font-bold text-center">Personal Trainer</h3>
                </motion.li>

                {/* Third Item */}
                <motion.li
                    className="bg-black w-80 h-80 rounded-sm"
                    initial={{ opacity: 0, x: "-100%" }} // Starts off-screen to the left
                    whileInView={{ opacity: 1, x: 0 }} // Animates to normal position when in view
                    viewport={{ once: true }} // Only trigger animation once when it enters the viewport
                    transition={{ duration: 0.5, delay: 0.6 }}
                >
                    <motion.img
                        src="https://static.vecteezy.com/system/resources/thumbnails/046/514/565/small/active-caucasian-athletes-couple-man-woman-workout-mountain-climber-exercise-running-plank-on-fitness-mat-two-strong-bodybuilders-sport-people-lifting-up-legs-training-abdominal-muscles-cardio-at-gym-photo.jpg"
                        className="opacity-75 h-64 w-80 hover:translate-5 transition-transform duration-300"
                        alt=""
                        whileHover={{ scale: 1.1 }}
                    />
                    <h3 className="lg:text-2xl text-xl mt-4 text-white font-bold text-center">Classes</h3>
                </motion.li>
            </ul>
        </motion.div>
    );
};

export default MemershipType;
