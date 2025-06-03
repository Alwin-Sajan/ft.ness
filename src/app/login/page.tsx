"use client";

import { motion } from "motion/react";
import { useRouter } from "next/navigation";
import Link from "next/link";

const LoginPage = () => {
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    router.push("/dashboard");
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-white dark:bg-black px-4">
      <Link
        href="/"
        className="absolute top-8 left-8 flex items-center gap-2 z-50"
      >
        <img
          src="/logo.png"
          className="w-7 h-7 rounded-full"
          alt="Logo"
        />
        <h1 className="text-xl font-bold text-black dark:text-white">FT.NESS</h1>
      </Link>

      <div className="pointer-events-none absolute inset-0 bg-white dark:bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>

      <motion.div
        className="relative z-10 w-full max-w-md p-8 bg-white dark:bg-zinc-900 border border-neutral-200 dark:border-neutral-700 rounded-lg shadow-lg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-semibold text-center mb-8 text-gray-900 dark:text-white">Login</h2>
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              Email
            </label>
            <div className="mt-1 relative">
              <input
                type="email"
                id="email"
                placeholder="name@example.com"
                className="pl-10 w-full border border-gray-300 dark:border-gray-600 rounded-md bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white p-2.5 focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="username"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              Username
            </label>
            <div className="mt-1 flex rounded-md shadow-sm">
              <input
                type="text"
                id="username"
                placeholder="yourusername"
                className="flex-1 min-w-0 block w-full rounded-none rounded-r-md border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white p-2.5 focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
            >
              Login
            </button>
          </div>
        </form>
      </motion.div>
    </div>
  );
};

export default LoginPage;
