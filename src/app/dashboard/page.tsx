import Link from "next/link";
import Contact from "../../../components/Contact";
import Footer from "../../../components/Footer";

const FitnessDashboardPage = () => {
    const user = {
        name: "John Doe",
        age: 45,
        height: "6'1\"",
        weight: "180 lbs",
        email: "johndoe22@gmail.com",
        image: "https://images.ctfassets.net/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=1200&h=992&fl=progressive&q=70&fm=jpg"
    };

    return (
        <div className="relative mx-auto mt-10 flex max-w-7xl flex-col items-center">
            <Navbar />
            <h1 className="text-4xl font-bold py-16">Fitness Dashboard</h1>

            <div className="flex flex-col md:flex-row gap-6 w-full px-4">
                {/* User Profile Section */}
                <section className="bg-neutral-700 rounded-xl p-6 md:w-1/2 text-white shadow-md">
                    <img src={user.image} alt="User" className="rounded-full w-40 h-40 object-cover mx-auto" />
                    <h2 className="mt-4 text-2xl text-center font-semibold">{user.name}</h2>
                    <div className="mt-4 space-y-2 text-center">
                        <p>Age: {user.age}</p>
                        <p>Email: {user.email}</p>
                        <p>Height: {user.height}</p>
                        <p>Weight: {user.weight}</p>
                    </div>
                </section>

                {/* Stats Section */}
                <section className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md md:w-1/2">
                    <div className="flex justify-between items-center border-b pb-4 mb-4">
                        <div className="flex items-center">
                            <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-gray-100 dark:bg-gray-700 me-3">
                                <svg className="w-6 h-6 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 19">
                                    <path d="M14.5 0A3.987 3.987 0 0 0 11 2.1a4.977 4.977 0 0 1 3.9 5.858A3.989 3.989 0 0 0 14.5 0ZM9 13h2a4 4 0 0 1 4 4v2H5v-2a4 4 0 0 1 4-4Z" />
                                    <path d="M5 19h10v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2ZM5 7a5.008 5.008 0 0 1 4-4.9 3.988 3.988 0 1 0-3.9 5.859A4.974 4.974 0 0 1 5 7Zm5 3a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm5-1h-.424a5.016 5.016 0 0 1-1.942 2.232A6.007 6.007 0 0 1 17 17h2a1 1 0 0 0 1-1v-2a5.006 5.006 0 0 0-5-5ZM5.424 9H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h2a6.007 6.007 0 0 1 4.366-5.768A5.016 5.016 0 0 1 5.424 9Z" />
                                </svg>
                            </div>
                            <div>
                                <h5 className="text-2xl font-bold text-gray-900 dark:text-white">3.4k</h5>
                                <p className="text-sm text-gray-500 dark:text-gray-400">Leads generated</p>
                            </div>
                        </div>
                        <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-1 rounded-md dark:bg-green-900 dark:text-green-300">
                            +42.5%
                        </span>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <p className="text-sm text-gray-500 dark:text-gray-400">Money spent</p>
                            <p className="font-semibold text-gray-900 dark:text-white">$3,232</p>
                        </div>
                        <div>
                            <p className="text-sm text-gray-500 dark:text-gray-400">Conversion rate</p>
                            <p className="font-semibold text-gray-900 dark:text-white">1.2%</p>
                        </div>
                    </div>

                    <div className="mt-6 flex justify-between items-center border-t pt-4 dark:border-gray-700">
                        <button className="text-sm text-gray-600 dark:text-gray-400 hover:underline">Last 7 days</button>
                        <Link href="#" className="text-sm font-semibold text-blue-600 hover:text-blue-800 dark:text-blue-400">View Full Report →</Link>
                    </div>
                </section>
            </div>

            <section id="progress" className="w-full px-4 py-20 dark:text-slate-300">
                <h2 className="text-3xl font-bold text-center mb-4">Progress Overview</h2>
                <p className="text-center text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
                    Here's a summary of your recent fitness activities and health progress. Keep it up!
                </p>

                <div className="mt-10 max-w-4xl mx-auto border-4 rounded-xl p-6 border-neutral-200 dark:border-neutral-800 shadow-lg space-y-8">
                    {/* Weekly Progress */}
                    <div>
                        <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-3">🗓️ Weekly Progress</h3>
                        <ul className="space-y-1 text-gray-700 dark:text-gray-300 list-disc list-inside">
                            <li>Calories Burned: <span className="font-semibold">3,450 kcal</span></li>
                            <li>Workouts Completed: <span className="font-semibold">5 sessions</span></li>
                            <li>Weight Change: <span className="font-semibold">-1.2 lbs</span></li>
                            <li>Average Sleep: <span className="font-semibold">7.3 hrs/night</span></li>
                        </ul>
                    </div>

                    {/* Monthly Progress */}
                    <div>
                        <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-3">📅 Monthly Progress</h3>
                        <ul className="space-y-1 text-gray-700 dark:text-gray-300 list-disc list-inside">
                            <li>Calories Burned: <span className="font-semibold">13,800 kcal</span></li>
                            <li>Workouts Completed: <span className="font-semibold">22 sessions</span></li>
                            <li>Weight Change: <span className="font-semibold">-4.5 lbs</span></li>
                            <li>Body Fat %: <span className="font-semibold">17.5% → 16.3%</span></li>
                        </ul>
                    </div>

                    {/* Yearly Progress */}
                    <div>
                        <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-3">📈 Yearly Progress</h3>
                        <ul className="space-y-1 text-gray-700 dark:text-gray-300 list-disc list-inside">
                            <li>Total Calories Burned: <span className="font-semibold">172,000 kcal</span></li>
                            <li>Total Workouts: <span className="font-semibold">260 sessions</span></li>
                            <li>Weight Change: <span className="font-semibold">-15.8 lbs</span></li>
                            <li>Muscle Mass Gain: <span className="font-semibold">+6.2 lbs</span></li>
                        </ul>
                    </div>
                </div>
            </section>


            <Contact />
            <Footer />
        </div>
    );
};

// Updated Navbar
const Navbar = () => {
    return (
        <nav className="flex w-full items-center justify-between border-y border-neutral-200 px-4 py-4 dark:border-neutral-800">
            <div className="flex items-center gap-2">
                <img src="/logo.png" className="w-7 h-7 rounded-full" alt="Logo" />
                <h1 className="text-base font-bold md:text-2xl">FT.NESS</h1>
            </div>
            <div className="flex items-center gap-16">
                <Link href="/#about" className="text-white dark:text-white hover:text-gray-300">About</Link>
                <Link href="/#programs" className="text-white dark:text-white hover:text-gray-300">Programs</Link>
                <Link href="/login" className="bg-black dark:bg-white text-white dark:text-black px-4 py-2 rounded-lg hover:bg-gray-800 dark:hover:bg-gray-200">
                    Settings
                </Link>
            </div>
        </nav>
    );
};

export default FitnessDashboardPage;
