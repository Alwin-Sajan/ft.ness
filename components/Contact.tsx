
const Contact = () => {
    return (
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
                        Have questions or want to learn more about our programs? We&rsquo;re here to help!
                    </p>
                </div>

                <form className="max-w-md mx-auto lg:pl-8 space-y-6">
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
    )
}

export default Contact;