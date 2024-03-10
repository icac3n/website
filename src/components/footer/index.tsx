import {RiFacebookBoxFill, RiMailFill, RiPhoneFill, RiTwitterFill} from "react-icons/ri";
import Link from "next/link";
import React from "react";
import Image from "next/image";

const Footer = () => {
    return (

        <footer className="bg-red-800 dark:bg-gray-900">
            <div className="mx-auto w-full max-w-screen-xl p-4 py-6">
                <div className="md:flex md:justify-between items-center">
                    <div className="mb-6 md:mb-0">
                        <Link href="/" className="flex items-center">
                            <div className={'h-8'}>
                                <Image width={35} height={35} src="/icac3nlogo.png" className="mr-3 object-cover" alt="Logo"/>
                            </div>
                            <span
                                className="self-center text-2xl font-semibold whitespace-nowrap text-white">ICAC3N-23</span>
                        </Link>
                        <p className={"my-4 max-w-xs text-white"}>International Conference on Advances in
                            Computing, Communication Control and Networking (ICAC3N–23)</p>
                        {/*<div*/}
                        {/*    className={"w-fit bg-gray-50 flex justify-center items-center pl-3 pr-4 pt-4 pb-3 rounded-md"}>*/}
                        {/*    <Image src={"/IEEE_up.png"} alt={"IEEE UP Logo"} height={100} width={100}/>*/}
                        {/*</div>*/}
                    </div>
                    <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
                        <div>
                            <h2 className="mb-4 font-semibold uppercase text-white underline">Important</h2>
                            <ul className="text-gray-200 font-medium">
                                <li className="mb-4">
                                    <Link href="/dates" className="hover:underline">Dates</Link>
                                </li>
                                <li>
                                    <Link href="/dates" className="hover:underline">Downloads</Link>
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
              <Link href="" className="hover:underline mt-2 py-3">Department of Computer Science, GCET</Link>.
              <p className="py-1 block">Designed by <a href={"https://github.com/hardikprakash"} className={"hover:underline cursor-pointer"}>Hardik Prakash</a>, <a className={"hover:underline cursor-pointer"} href={"https://prakharshukla.dev"}>Prakhar Shukla</a> and <a className={"hover:underline cursor-pointer"} href={"https://github.com/areeburrub"}>Areeb ur Rub</a></p>
          </span>
                    <div
                        className={"flex mt-4 space-x-6 text-2xl text-white sm:justify-center sm:mt-0"}>
                        <Link href={"https://twitter.com/icac3n"}>
                            <RiTwitterFill className={'cursor-pointer grow-on-hover hover:text-sky-400'} aria-label={'icac3n twitter'}/>
                        </Link>
                        <Link href={"tel:+91-7835878146"}>
                            <RiPhoneFill className={'cursor-pointer  grow-on-hover hover:text-emerald-500'} aria-label={'icac3n phone'}/>
                        </Link>
                        <Link href={"https://www.facebook.com/IEEE.ICAC3N.21"}>
                            <RiFacebookBoxFill className={'cursor-pointer  grow-on-hover hover:text-indigo-500'} aria-label={'icac3n facebook'}/>
                        </Link>
                        <Link href={"mailto:vishnu.sharma@galgotiacollege.edu"}>
                            <RiMailFill className={'cursor-pointer  grow-on-hover hover:text-amber-400'} aria-label={'icac3n mail'}/>
                        </Link>
                    </div>

                </div>
            </div>
        </footer>
    )
}

export default Footer