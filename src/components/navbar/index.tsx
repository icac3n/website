import React, {useEffect, useRef, useState} from "react";
import {AiFillCaretDown} from "react-icons/ai";
import {useRouter} from "next/router";
import Link from "next/link";
import * as path from "path";
import Button from "@/components/button";


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
    return (

        <div>
            <div className={"py-1 px-3 bg-stone-800"}>
                <div className="relative flex overflow-x-hidden text-white text-sm">
                    <div className="animate-marquee whitespace-nowrap">
                        <span className="mx-4">5th International Conference on Advances in Computing, Communication Control and Networking- ICAC3N</span>
                        <span className="mx-2">•</span>
                        <span className="mx-4">Conference Record Number #60023</span>
                        <span className="mx-2">•</span>
                        <span className="mx-4">5th International Conference on Advances in Computing, Communication Control and Networking- ICAC3N</span>
                        <span className="mx-2">•</span>
                        <span className="mx-4">Conference Record Number #60023</span>
                        <span className="mx-2">•</span>
                    </div>

                    <div className="absolute top-0 animate-marquee2 whitespace-nowrap">
                        <span className="mx-4">5th International Conference on Advances in Computing, Communication Control and Networking- ICAC3N</span>
                        <span className="mx-2">•</span>
                        <span className="mx-4">Conference Record Number #60023</span>
                        <span className="mx-2">•</span>
                        <span className="mx-4">5th International Conference on Advances in Computing, Communication Control and Networking- ICAC3N</span>
                        <span className="mx-2">•</span>
                        <span className="mx-4">Conference Record Number #60023</span>
                    </div>
                </div>
            </div>
            <nav className="bg-red-800">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between gap-y-6 mx-auto p-4">
                    <div className={'lg:w-fit w-full flex flex-row justify-between items-center'}>
                        <Link href="/" className="flex items-center">
                            <img src="/icac3nlogo.png" className="mr-3 h-12 object-cover" alt="Logo"/>
                            <span className="font-semibold text-2xl tracking-tight text-white mr-3">ICAC3N</span>

                        </Link>

                        <div className={'flex flex-row gap-1 justify-normal items-center'}>
                        <span onClick={menuToggle}
                              className="inline-flex order-last items-center md:hidden p-2 text-sm text-red-800 rounded-lg  hover:bg-red-700 focus:outline-none focus:ring-none cursor-pointer"
                              aria-controls="navbar-dropdown" aria-expanded="false">
                            <span className="sr-only">Open main menu</span>
                            <svg className="w-8 h-8 text-white" aria-hidden="true" fill="currentColor"
                                 viewBox="0 0 20 20"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd"
                                      d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                                      clipRule="evenodd"></path>
                            </svg>
                        </span>
                            <Link href={'https://cmt3.research.microsoft.com/ICAC3N2023'}
                                  className={'px-4 h-fit py-2 bg-sky-600 mx-2 rounded-lg lg:hidden text-white cursor-pointer '}>Submit&nbsp;Paper</Link>
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

                            <Button link={'https://cmt3.research.microsoft.com/ICAC3N2023'}
                                    className={'hidden lg:block mr-0 bg-sky-600 hover:bg-sky-700 shrink-on-hover focus:ring-4 focus:ring-sky-300 no-underline dark:focus:ring-sky-700'}
                                    hideIcon={true}>Submit Paper</Button>
                        </ul>
                    </div>}

                </div>
            </nav>


        </div>

    );
}

export default Index;
