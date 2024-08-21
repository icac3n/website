import { RiFacebookBoxFill, RiMailFill, RiPhoneFill, RiTwitterFill } from "react-icons/ri";
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
                                <Image width={35} height={35} src="/ICRTICClogo.png" className="mr-3 object-cover" alt="Logo" />
                            </div>
                            <span
                                className="self-center text-2xl font-semibold whitespace-nowrap text-white">ICRTICC-25</span>
                        </Link>
                        <p className={"my-4 max-w-xs text-white"}>International Conference on Recent Trends in Intelligent Computing and Communication (ICRTICC–25)</p>


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
                                    <button disabled={false} className="flex items-center justify-center gap-2">
                                        <Link href="/dates" className="text-gray-100/60">Dates</Link>
                                    </button>
                                </li>
                                <li>
                                    <button disabled={false} className="flex items-center justify-center gap-2">
                                        {/* <p className="text-gray-100/60">Downloads</p>
                                        <span className="px-2 py-0.5 rounded-full bg-black/30 text-xs">Soon</span> */}
                                        <Link href="/#downloads" className="text-gray-100/60">Downloads</Link>
                                    </button>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-4 font-semibold uppercase text-white underline">Resources</h2>
                            <ul className="text-gray-200 font-medium">
                                <li className="flex mb-4 items-center justify-start gap-2">
                                    {/* <p className="text-gray-100/60">Register</p>
                                    <span className="px-2 py-0.5 rounded-full bg-black/30 text-xs">Soon</span> */}
                                    <Link href="/registeration" className="hover:underline">Register</Link>
                                </li>
                                <li>
                                    <Link href="/author-instruction" className="hover:underline">Author Instruction
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-4 font-semibold uppercase text-white underline">Latest</h2>
                            <ul className="text-gray-200 font-medium">
                                <li className="flex items-centermb-4">
                                    <Link href="/speakers" className="hover:underline">Speakers
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/committee/organizing-committee" className="hover:underline">Committee
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <hr className="my-3 border-red-400 sm:mx-auto dark:border-gray-700" />
                <div className="sm:flex sm:items-center sm:justify-between">
                    <span className="text-sm text-gray-100 max-w-sm">
                        <Link href="" className="hover:underline mt-2 py-3">Computer
                            Science
                            and Engineering, Computer Applications and Information Technology Departments, GCET</Link>.
                        <p className="py-1 block text-white/60 text-xs">Designed by <a href={"https://github.com/hardikprakash"} className={"hover:underline cursor-pointer"}>Hardik Prakash</a>, <a className={"hover:underline cursor-pointer"} href={"https://prakharshukla.dev"}>Prakhar Shukla</a> and <a className={"hover:underline cursor-pointer"} href={"https://github.com/areeburrub"}>Areeb ur Rub</a></p>
                    </span>
                    <div
                        className={"flex mt-4 space-x-6 text-2xl text-white sm:justify-center sm:mt-0"}>
                        <Link href={"https://twitter.com/ICRTICC"}>
                            <RiTwitterFill className={'cursor-pointer grow-on-hover hover:text-sky-400'} aria-label={'ICRTICC twitter'} />
                        </Link>
                        <Link href={"tel:+91-7835878146"}>
                            <RiPhoneFill className={'cursor-pointer  grow-on-hover hover:text-emerald-500'} aria-label={'ICRTICC phone'} />
                        </Link>
                        <Link href={"https://www.facebook.com/IEEE.ICRTICC.21"}>
                            <RiFacebookBoxFill className={'cursor-pointer  grow-on-hover hover:text-indigo-500'} aria-label={'ICRTICC facebook'} />
                        </Link>
                        <Link href={"mailto:vishnu.sharma@galgotiacollege.edu"}>
                            <RiMailFill className={'cursor-pointer  grow-on-hover hover:text-amber-400'} aria-label={'ICRTICC mail'} />
                        </Link>
                    </div>

                </div>
            </div>
        </footer>
    )
}

export default Footer