import {RiFacebookBoxFill, RiMailFill, RiPhoneFill, RiTwitterFill} from "react-icons/ri";
import Link from "next/link";
import React from "react";

const Footer = () => {
    return (

        <footer className="bg-red-800 dark:bg-gray-900">
            <div className="mx-auto w-full max-w-screen-xl p-4 py-6">
                <div className="md:flex md:justify-between items-center">
                    <div className="mb-6 md:mb-0">
                        <Link href="https://flowbite.com/" className="flex items-center">
                            <img src="/icaccn_logo.png" className="h-8 mr-3"
                                 alt="ICAC3N"/>
                            <span
                                className="self-center text-2xl font-semibold whitespace-nowrap text-white">ICAC3N</span>
                        </Link>
                        <p className={"my-4 max-w-xs text-white"}>International Conference on Advances in
                            Computing, Communication Control and Networking (ICAC3N–23)</p>
                    </div>
                    <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
                        <div>
                            <h2 className="mb-4 font-semibold uppercase text-white underline">Important</h2>
                            <ul className="text-gray-200 font-medium">
                                <li className="mb-4">
                                    <Link href="/importantDates" className="hover:underline">Dates</Link>
                                </li>
                                <li>
                                    <Link href="/importantDownloads" className="hover:underline">Downloads</Link>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-4 font-semibold uppercase text-white underline">Resources</h2>
                            <ul className="text-gray-200 font-medium">
                                <li className="mb-4">
                                    <Link href="/register" className="hover:underline">Register</Link>
                                </li>
                                <li>
                                    <Link href="/guidelines" className="hover:underline">Guidelines
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-4 font-semibold uppercase text-white underline">Latest</h2>
                            <ul className="text-gray-200 font-medium">
                                <li className="mb-4">
                                    <Link href="/speakers" className="hover:underline">Speakers</Link>
                                </li>
                                <li>
                                    <Link href="/committee/organizing-committee" className="hover:underline">Committee
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <hr className="my-3 border-red-400 sm:mx-auto dark:border-gray-700"/>
                <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-100">
              <Link href="" className="hover:underline mt-2 py-3">Computer Science Department, GCET</Link>.
          </span>
                    <div
                        className={"flex mt-4 space-x-6 text-2xl text-white sm:justify-center sm:mt-0"}>
                        <Link href={"https://twitter.com/icac3n"}>
                            <RiTwitterFill className={'cursor-pointer grow-on-hover hover:text-gray-200'}/>
                        </Link>
                        <Link href={"tel:+91-7835878146"}>
                            <RiPhoneFill className={'cursor-pointer  grow-on-hover hover:text-gray-200'}/>
                        </Link>
                        <Link href={"https://www.facebook.com/IEEE.ICAC3N.21"}>
                            <RiFacebookBoxFill className={'cursor-pointer  grow-on-hover hover:text-gray-200'}/>
                        </Link>
                        <Link href={"mailto:vishnu.sharma@galgotiacollege.edu"}>
                            <RiMailFill className={'cursor-pointer  grow-on-hover hover:text-gray-200'}/>
                        </Link>
                    </div>

                </div>
            </div>
        </footer>
    )
}

export default Footer