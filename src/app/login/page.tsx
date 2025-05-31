import Link from 'next/link';
import React from 'react';

const LoginPage = () => {
    return (
        <div className="relative min-h-screen flex items-center justify-center bg-white dark:bg-black px-4">
            {/* Logo Section */}
            <Link href='/' className="absolute top-8 left-8 flex items-center gap-2 z-50">
                <img src="/logo.png" className="w-7 h-7 rounded-full" alt="Logo" />
                <h1 className="text-xl font-bold text-black dark:text-white">FT.NESS</h1>
            </Link>

            {/* Background Gradient Mask */}
            <div className="pointer-events-none absolute inset-0 bg-white dark:bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>

            {/* Login Card */}
            <div className="relative z-10 w-full max-w-md p-8 bg-white dark:bg-zinc-900 border border-neutral-200 dark:border-neutral-700 rounded-lg shadow-lg">
                <h2 className="text-3xl font-semibold text-center mb-8 text-gray-900 dark:text-white">Login</h2>
                <form className="space-y-6">
                    {/* Email Input */}
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                            Email
                        </label>
                        <div className="mt-1 relative">
                            <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <svg className="w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 20 16">
                                    <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z" />
                                    <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z" />
                                </svg>
                            </span>
                            <input
                                type="email"
                                id="email"
                                placeholder="name@example.com"
                                className="pl-10 w-full border border-gray-300 dark:border-gray-600 rounded-md bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white p-2.5 focus:ring-blue-500 focus:border-blue-500"
                                required
                            />
                        </div>
                    </div>

                    {/* Username Input */}
                    <div>
                        <label htmlFor="username" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                            Username
                        </label>
                        <div className="mt-1 flex rounded-md shadow-sm">
                            <span className="inline-flex items-center px-3 bg-gray-200 dark:bg-gray-600 border border-r-0 border-gray-300 dark:border-gray-600 text-gray-500 dark:text-gray-300 text-sm rounded-l-md">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
                                </svg>
                            </span>
                            <input
                                type="text"
                                id="username"
                                placeholder="yourusername"
                                className="flex-1 min-w-0 block w-full rounded-none rounded-r-md border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white p-2.5 focus:ring-blue-500 focus:border-blue-500"
                                required
                            />
                        </div>
                    </div>

                    {/* Submit Button */}
                    <div>
                        <button
                            type="submit"
                            className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
                        >
                            Login
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default LoginPage;
