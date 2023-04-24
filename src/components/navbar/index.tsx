import React, {useEffect, useRef, useState} from "react";
import {AiFillCaretDown} from "react-icons/ai";
import {useRouter} from "next/router";
import Link from "next/link";

const Dropdown = ({title, dropdown}: { title: string, dropdown: { title: string, link: string }[] }) => {
    const [dropOpen, setDropOpen] = useState(false);
    const dropdownRef = useRef(null);
    const dropToggle = () => setDropOpen(!dropOpen);

    useEffect(() => {
        const handleClickOutside = (event : any) => {
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

    return(
        <li ref={dropdownRef} onClick={dropToggle} className={"cursor-pointer relative"}>
                                         <span className={"text-white inline-flex items-center"}>
                                             {title.toUpperCase()} <AiFillCaretDown className={`ml-1 ${dropOpen ? 'rotate-180':''}`}/>
                                         </span>
            {
                dropOpen &&
                <div id="dropNav"
                     className={"md:absolute -left-1/2 mt-3 z-10 font-normal bg-amber-100 divide-y divide-amber-800 rounded shadow-lg md:w-52 w-full"}>
                    <ul className="py-2 text-sm font-semibold text-gray-700">
                        {
                            dropdown.map((item, index) => {
                                return(
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
            title: "Register",
            link: "/register",
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
            title: "Contact",
            link: "/contact",
            enabled: true,
        },
    ]

    const [menuOpen, setMenu] = useState(true);
    const menuToggle = () => {
        setMenu(!menuOpen);
    };

    const router = useRouter()
    // @ts-ignore
    // @ts-ignore
    return (

        <nav className="bg-red-800">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between gap-y-6 mx-auto p-4">
                <Link href="#" className="flex items-center">
                    <img src="/icac3nlogo.png" onClick={() => {
                        router.push("/")
                    }} className="mr-3 h-12 object-cover" alt="Logo"/>
                    <span className="font-semibold text-2xl tracking-tight text-white">ICAC3N</span>
                </Link>
                <button onClick={menuToggle} type="button"
                        className="inline-flex order-last items-center md:hidden p-2 ml-3 text-sm text-red-800 rounded-lg  hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-white"
                        aria-controls="navbar-dropdown" aria-expanded="false">
                    <span className="sr-only">Open main menu</span>
                    <svg className="w-8 h-8 text-white" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20"
                         xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd"
                              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                              clipRule="evenodd"></path>
                    </svg>
                </button>
                {menuOpen && <div className={"w-full md:block md:w-auto"}>
                    <ul className="flex flex-col gap-2 font-medium p-4 md:p-0 rounded-lg md:flex-row md:gap-5 md:mt-0 md:border-0">
                        {links.map((link, index) => (
                            <div key={index}>
                                {
                                    link.enabled && link.link &&
                                    <>
                                        <li key={index} className={"cursor-pointer text-white"}>
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
                </div>}

            </div>
        </nav>);
}

export default Index;
