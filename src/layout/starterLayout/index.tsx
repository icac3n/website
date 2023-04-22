// @flow
import * as React from 'react';
import {RiFacebookBoxFill, RiMailFill, RiPhoneFill, RiTwitterFill} from "react-icons/ri";

type Props = {
    children: React.ReactNode;
};

const StarterLayout = (props: Props) => {
    return (
        <div>
            <div className="flex flex-col min-h-screen">
                <header className="flex-shrink-0">
                    <nav className="bg-gray-800">
                        <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                            <div className="relative flex items-center justify-between h-16">
                                <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                                    {/* Mobile menu button*/}
                                    <button
                                        type="button"
                                        className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                                        aria-controls="mobile-menu"
                                        aria-expanded="false"
                                    >
                                        <span className="sr-only">Open main menu</span>
                                        {/* Icon when menu is closed. */}
                                        {/* Menu open: "hidden", Menu closed: "block" */}
                                        <svg
                                            className="block h-6 w-6"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            aria-hidden="true"
                                        >
                                            <path
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                stroke-width="2"
                                                d="M4 6h16M4 12h16M4 18h16"
                                            />
                                        </svg>
                                        {/* Icon when menu is open. */}
                                        {/* Menu open: "block", Menu closed: "hidden" */}
                                        <svg
                                            className="hidden h-6 w-6"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            aria-hidden="true"
                                        >
                                            <path
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                stroke-width="2"
                                                d="M6 18L18 6M6 6l12 12"
                                            />
                                        </svg>
                                    </button>
                                </div>
                                <div
                                    className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                                    <div className="flex-shrink-0 flex items-center">
                                        <h1 className={"text-xl text-white font-bold"}>
                                            Wh3
                                        </h1>
                                    </div>
                                    <div className="hidden sm:block sm:ml-6">
                                        <div className="flex space-x-4">
                                            {/* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" */}
                                            <a
                                                href="#"
                                                className="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium"
                                            >
                                                Dashboard
                                            </a>
                                            <a
                                                href="#"
                                                className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                                            >
                                                Team
                                            </a>
                                            <a
                                                href="#"
                                                className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                                            >
                                                Projects
                                            </a>
                                            <a
                                                href="#"
                                                className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                                            >
                                                Calendar
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Mobile menu, show/hide based on menu state. */}
                        <div className="sm:hidden" id="mobile-menu">
                            <div className="px-2 pt-2 pb-3 space-y-1">
                                {/* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" */}
                                <a
                                    href="#"
                                    className="bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium"
                                >
                                    Dashboard
                                </a>
                                <a
                                    href="#"
                                    className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                                >
                                    Team
                                </a>
                                <a
                                    href="#"
                                    className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                                >
                                    Projects
                                </a>
                                <a
                                    href="#"
                                    className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                                >
                                    Calendar
                                </a>
                            </div>
                        </div>

                    </nav>
                </header>
                <main>
                    <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
                        {props.children}
                    </div>
                </main>

                <footer className="bg-red-800 dark:bg-gray-900">
                    <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
                        <div className="md:flex md:justify-between items-center">
                            <div className="mb-6 md:mb-0">
                                <a href="https://flowbite.com/" className="flex items-center">
                                    <img src="/icaccn_logo.png" className="h-8 mr-3"
                                         alt="ICAC3N"/>
                                    <span
                                        className="self-center text-2xl font-semibold whitespace-nowrap text-white">ICAC3N</span>
                                </a>
                                <p className={"my-4 max-w-xs text-white"}> International Conference on Advances in
                                    Computing, Communication Control and Networking (ICAC3N–23)</p>
                            </div>
                            <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
                                <div>
                                    <h2 className="mb-6 text-sm font-semibold uppercase text-white underline">Important</h2>
                                    <ul className="text-gray-200 font-medium">
                                        <li className="mb-4">
                                            <a href="/importantDates" className="hover:underline">Dates</a>
                                        </li>
                                        <li>
                                            <a href="/importantDownloads" className="hover:underline">Downloads</a>
                                        </li>
                                    </ul>
                                </div>
                                <div>
                                    <h2 className="mb-6 text-sm font-semibold uppercase text-white underline">Resources</h2>
                                    <ul className="text-gray-200 font-medium">
                                        <li className="mb-4">
                                            <a href="/register" className="hover:underline">Register</a>
                                        </li>
                                        <li>
                                            <a href="/submissionGuidelines" className="hover:underline">Guidelines
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <div>
                                </div>
                            </div>
                        </div>
                        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8"/>
                        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-100 ">
              <a href="" className="hover:underline my-2">Computer Science Department, GCET</a>.
          </span>
                            <div
                                className={"flex mt-4 space-x-6 text-2xl text-white sm:justify-center sm:mt-0"}>
                                <RiTwitterFill className={'cursor-pointer'}/>
                                <RiPhoneFill className={'cursor-pointer'}/>
                                <RiFacebookBoxFill className={'cursor-pointer'}/>
                                <RiMailFill className={'cursor-pointer'}/>
                            </div>

                        </div>
                    </div>
                </footer>

            </div>
        </div>
    );
};

export default StarterLayout;