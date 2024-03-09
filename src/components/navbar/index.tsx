import React, {useEffect, useRef, useState} from "react";
import {AiFillCaretDown} from "react-icons/ai";
import {useRouter} from "next/router";
import Link from "next/link";
import * as path from "path";
import Image from "next/image";

const Dropdown = ({title, dropdown}: { title: string, dropdown: { title: string, link: string }[] }) => {
    const [dropOpen, setDropOpen] = useState(false);
    const dropdownRef = useRef(null);
    const dropToggle = () => setDropOpen(!dropOpen);

    const {
        asPath
    } = useRouter();

    useEffect(() => {
        const handleClickOutside = (event: any) => {
            // @ts-ignore
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setDropOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <li ref={dropdownRef} onClick={dropToggle} className={"cursor-pointer relative list-none w-full"}>
             <span
                 className={`${title.includes("20") ? "py-2 mt-1 px-3 text-xs grow-on-hover bg-red-900 rounded" : ""} inline-flex items-center text-white`}>
                 {title.toUpperCase()}
                 <AiFillCaretDown
                     className={`ml-1 ${dropOpen ? 'rotate-180' : ''}`}/>
             </span>
            {
                dropOpen &&
                <div id="dropNav"
                     className={`md:absolute w-fit -left-1/2 mt-3 z-10 font-normal bg-amber-100 divide-y divide-amber-800 rounded shadow-lg w-full ${title.toLowerCase().includes("archive") ? "md:w-36" : "md:w-52"}`}>
                    <ul className="py-2 text-sm font-semibold text-gray-700 w-full">
                        {
                            dropdown.map((item, index) => {
                                return (
                                    <li key={index}>
                                        <Link href={item.link} className="block px-4 py-2 hover:bg-amber-200">
                                            {item.title}
                                        </Link>
                                    </li>
                                )

                            })
                        }
                    </ul>
                </div>
            }
        </li>
    )
}

function Index() {
    const links = [
        {
            title: "Home",
            link: "/",
            enabled: true,
        },
        {
            title: "About",
            link: "/about",
            enabled: true,
        },
        {
            title: "Guidelines",
            link: "/guidelines",
            enabled: true,
        },
        {
            title: "Speakers",
            link: "/speakers",
            enabled: true,
        },
        {
            title: "Committee",
            dropdown: [
                {
                    title: "Organizing Committee",
                    link: "/committee/organizing-committee",
                },
                {
                    title: "Technical Program Committee",
                    link: "/committee/technical-program-committee",
                },
                {
                    title: "Advisory Board",
                    link: "/committee/advisory-board",
                },
            ],
            enabled: true,
        },
        {
            title: "Call for Papers",
            link: "/call-for-papers",
            enabled: true,
        },
        {
            title: "Register",
            link: "/registration",
            enabled: true,
        },
        {
            title: "Contact",
            link: "/contact",
            enabled: true,
        },

        {
            title: "Archive",
            dropdown: [
                {
                    title: "ICAC3N - 2023",
                    link: "/",
                },
                {
                    title: "ICAC3N - 2022",
                    link: "/archive/2022",
                },
                {
                    title: "ICAC3N - 2021",
                    link: "/archive/2021",
                },
                {
                    title: "ICAC3N - 2020",
                    link: "/archive/2020",
                },
                {
                    title: "ICAC3N - 2018",
                    link: "/archive/2018",
                }
            ],
            enabled: true,
        },
    ]

    const [menuOpen, setMenu] = useState(false);
    const menuToggle = () => {
        setMenu(!menuOpen);
    };

    const router = useRouter()
    // @ts-ignore
    // @ts-ignore

    const marqueeVariants = {
        animate: {
            x: [0, -1035],
            transition: {
                x: {
                    repeat: Infinity,
                    repeatType: "loop",
                    duration: 5,
                    ease: "linear",
                },
            },
        },
    };

    return (

        <div>
            <div className={"py-1 px-3 bg-stone-800"}>
                <div className="relative flex overflow-x-hidden text-white text-sm">
                    <div className="animate-marquee whitespace-nowrap">
                        <span className="mx-4">5th International Conference on Advances in Computing, Communication Control and Networking- ICAC3N</span>
                        <span className="mx-2">•</span>
                        <span className="mx-4">Conference Record Number #60023</span>
                        <span className="mx-2">•</span>
                        <span className="mx-4">IEEE XPLORE COMPLIANT ISBN No. 979-8-3503-3086-1</span>
                        <span className="mx-2">•</span>
                        <span className="mx-4">5th International Conference on Advances in Computing, Communication Control and Networking- ICAC3N</span>
                        <span className="mx-2">•</span>
                        <span className="mx-4">Conference Record Number #60023</span>
                        <span className="mx-2">•</span>
                        <span className="mx-4">IEEE XPLORE COMPLIANT ISBN No. 979-8-3503-3086-1</span>
                        <span className="mx-2">•</span>
                    </div>

                    <div className="absolute top-0 animate-marquee2 whitespace-nowrap">
                        <span className="mx-4">5th International Conference on Advances in Computing, Communication Control and Networking- ICAC3N</span>
                        <span className="mx-2">•</span>
                        <span className="mx-4">Conference Record Number #60023</span>
                        <span className="mx-2">•</span>
                        <span className="mx-4">IEEE XPLORE COMPLIANT ISBN No. 979-8-3503-3086-1</span>
                        <span className="mx-2">•</span>
                        <span className="mx-4">5th International Conference on Advances in Computing, Communication Control and Networking- ICAC3N</span>
                        <span className="mx-2">•</span>
                        <span className="mx-4">Conference Record Number #60023</span>
                        <span className="mx-2">•</span>
                        <span className="mx-4">IEEE XPLORE COMPLIANT ISBN No. 979-8-3503-3086-1</span>
                    </div>
                </div>
            </div>
            <nav className="bg-red-800">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between gap-y-6 mx-auto p-4">
                    <div className={'w-full flex flex-row justify-between items-center'}>
                        <Link href="/" className="flex items-center">
                            <div className={'h-12'}>
                                <Image width={50} height={50} src="/icac3nlogo.png" className="mr-3 object-cover"
                                       alt="Logo"/>
                            </div>
                            <span className="font-semibold text-2xl tracking-tight text-white mr-3">ICAC3N</span>
                            <div
                                className={"bg-gray-50 flex justify-center items-center pl-3 pr-4 pt-4 pb-3 rounded-md"}>
                                <Image src={"/IEEE_up.png"} alt={"IEEE UP Logo"} height={100} width={75}/>
                            </div>
                        </Link>

                        <div className={'flex flex-row gap-1 justify-normal items-center'}>

                            {/*<Link href={'https://cmt3.research.microsoft.com/ICAC3N2023'}*/}
                            {/*      className={'px-4 h-fit py-2 bg-sky-600 mx-2 rounded-lg hidden md:block text-white cursor-pointer '}>Submit&nbsp;Paper</Link>*/}

                            <span onClick={menuToggle}
                                  className="inline-flex order-last items-center md:hidden p-2 text-sm text-red-800 rounded-lg  hover:bg-red-700 focus:outline-none focus:ring-none cursor-pointer">
                                <span className="sr-only">Open main menu</span>
                                <svg className="w-8 h-8 text-white" fill="currentColor"
                                     viewBox="0 0 20 20"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd"
                                          d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                                          clipRule="evenodd"></path>
                                </svg>
                            </span>

                        </div>

                    </div>

                    {<div className={`${menuOpen ? "w-full md:block lg:w-auto" : "hidden md:block"}`}>

                        <ul className="flex flex-col gap-3 md:text-sm lg:gap-5 justify-between md:items-center items-start font-medium md:p-0 rounded-lg md:flex-row md:mt-0 md:border-0">
                            {links.map((link, index) => (
                                <div key={index} className={'md:w-auto w-full'}>
                                    {
                                        link.enabled && link.link &&
                                        <>
                                            <li key={index}
                                                className={`cursor-pointer text-white`}>
                                                <Link href={link.link}>
                                                    {link.title.toUpperCase()}
                                                </Link>
                                            </li>
                                        </>
                                    }
                                    {
                                        link.enabled && link.dropdown &&
                                        <Dropdown title={link.title} dropdown={link.dropdown}/>
                                    }
                                </div>

                            ))}
                        </ul>
                        <div className={"block md:hidden mb-6 mt-8"}>
                            {/*<Link href={'https://cmt3.research.microsoft.com/ICAC3N2023'}*/}
                            {/*      className={'px-4 h-fit py-3 bg-sky-600 rounded-lg md:hidden text-white cursor-pointer '}>Submit&nbsp;Paper</Link>*/}
                        </div>
                    </div>
                    }

                </div>
            </nav>


        </div>

    )
        ;
}

export default Index;
