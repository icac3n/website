import React, {useState} from "react";
import {AiFillCaretDown} from "react-icons/ai";
import {useRouter} from "next/router";

function Index() {
    const testObj = {
        Tabs: ["Home", "About", "Guidelines", "Speakers", "Call for Papers",],
    };

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

    const [dropOpen, setDrop] = useState(false);
    const dropToggle = () => {
        setDrop(!dropOpen);
    };

    const router = useRouter()
    // @ts-ignore
    // @ts-ignore
    return (

        <nav className="bg-red-800">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <a href="#" className="flex items-center">
                    <img src="./icac3nlogo.png" onClick={()=>{router.push("/")}} className="mr-3 h-12 object-cover" alt="Logo"/>
                    <span className="font-semibold text-2xl tracking-tight text-white">ICAC3N</span>
                </a>
                <button onClick={menuToggle} type="button"
                        className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
                        aria-controls="navbar-dropdown" aria-expanded="false">
                    <span className="sr-only">Open main menu</span>
                    <svg className="w-8 h-8 text-white" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20"
                         xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd"
                              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                              clipRule="evenodd"></path>
                    </svg>
                </button>
                {menuOpen && <div className={"w-full md:block md:mt-4 md:w-auto"}>
                    <ul className="flex flex-col gap-2 font-medium p-4 md:p-0 mt-4 rounded-lg md:flex-row md:gap-5 md:mt-0 md:border-0">
                        {links.map((link, index) => (
                            <>
                                {
                                    link.enabled &&
                                    <li key={index} className={"cursor-pointer text-white"}>
                                        <a href={link.link}>
                                            {link.title.toUpperCase()}
                                        </a>
                                    </li>
                                }
                            </>
                        ))}
                        <li onClick={dropToggle} className={"cursor-pointer relative"}>
                             <span className={"text-white inline-flex items-center"}>
                                 {'Committee'.toUpperCase()} <AiFillCaretDown className={"ml-1"}/>
                             </span>
                            {
                                dropOpen &&
                                <div id="dropNav"
                                     className={"md:absolute lg:absolute mt-3 z-10 font-normal bg-amber-100 divide-y divide-amber-800 rounded shadow md:w-44 w-full"}>
                                    <ul className="py-2 text-sm font-semibold text-gray-700"
                                        aria-labelledby="dropdownLargeButton">
                                        <li>
                                            <a href="#"
                                               className="block px-4 py-2 hover:bg-amber-200">Organising Committee</a>
                                        </li>
                                        <li>
                                            <a href="#"
                                               className="block px-4 py-2 hover:bg-amber-200">Technical Program
                                                Committee</a>
                                        </li>
                                    </ul>
                                    <div className="py-1">
                                        <a href="#"
                                           className="block px-4 font-semibold py-2 text-sm text-gray-700 hover:bg-amber-200">Advisory
                                            Board</a>
                                    </div>
                                </div>
                            }
                        </li>
                    </ul>
                </div>}

            </div>
        </nav>);
}

export default Index;
