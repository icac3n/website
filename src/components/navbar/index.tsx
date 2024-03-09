import React, { useEffect, useRef, useState } from "react";
import { AiFillCaretDown } from "react-icons/ai";
import { useRouter } from "next/router";
import Link from "next/link";
import * as path from "path";
import Image from "next/image";

const Dropdown = ({
    title,
    dropdown,
}: {
    title: string;
    dropdown: { title: string; link: string }[];
}) => {
    const [dropOpen, setDropOpen] = useState(false);
    const dropdownRef = useRef(null);
    const dropToggle = () => setDropOpen(!dropOpen);

    const { asPath } = useRouter();

    useEffect(() => {
        const handleClickOutside = (event: any) => {
            // @ts-ignore
            if (
                dropdownRef.current &&
                !dropdownRef.current.contains(event.target)
            ) {
                setDropOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <li
            ref={dropdownRef}
            onClick={dropToggle}
            className={"relative w-full cursor-pointer list-none"}
        >
            <span
                className={`${
                    title.includes("20")
                        ? "grow-on-hover mt-1 rounded bg-red-900 px-3 py-2 text-xs"
                        : ""
                } inline-flex items-center text-white`}
            >
                {title.toUpperCase()}
                <AiFillCaretDown
                    className={`ml-1 ${dropOpen ? "rotate-180" : ""}`}
                />
            </span>
            {dropOpen && (
                <div
                    id="dropNav"
                    className={`-left-1/2 z-10 mt-3 w-fit w-full divide-y divide-amber-800 rounded bg-amber-100 font-normal shadow-lg md:absolute ${
                        title.toLowerCase().includes("archive")
                            ? "md:w-36"
                            : "md:w-52"
                    }`}
                >
                    <ul className="w-full py-2 text-sm font-semibold text-gray-700">
                        {dropdown.map((item, index) => {
                            return (
                                <li key={index}>
                                    <Link
                                        href={item.link}
                                        className="block px-4 py-2 hover:bg-amber-200"
                                    >
                                        {item.title}
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            )}
        </li>
    );
};

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
                },
            ],
            enabled: true,
        },
    ];

    const [menuOpen, setMenu] = useState(false);
    const menuToggle = () => {
        setMenu(!menuOpen);
    };

    const router = useRouter();
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
            <div className={"bg-stone-800 px-3 py-1"}>
                <div className="relative flex overflow-x-hidden text-sm text-white">
                    <div className="animate-marquee whitespace-nowrap">
                        <span className="mx-4">
                            5th International Conference on Advances in
                            Computing, Communication Control and Networking-
                            ICAC3N
                        </span>
                        <span className="mx-2">•</span>
                        <span className="mx-4">
                            Conference Record Number #60023
                        </span>
                        <span className="mx-2">•</span>
                        <span className="mx-4">
                            IEEE XPLORE COMPLIANT ISBN No. 979-8-3503-3086-1
                        </span>
                        <span className="mx-2">•</span>
                        <span className="mx-4">
                            5th International Conference on Advances in
                            Computing, Communication Control and Networking-
                            ICAC3N
                        </span>
                        <span className="mx-2">•</span>
                        <span className="mx-4">
                            Conference Record Number #60023
                        </span>
                        <span className="mx-2">•</span>
                        <span className="mx-4">
                            IEEE XPLORE COMPLIANT ISBN No. 979-8-3503-3086-1
                        </span>
                        <span className="mx-2">•</span>
                    </div>

                    <div className="absolute top-0 animate-marquee2 whitespace-nowrap">
                        <span className="mx-4">
                            5th International Conference on Advances in
                            Computing, Communication Control and Networking-
                            ICAC3N
                        </span>
                        <span className="mx-2">•</span>
                        <span className="mx-4">
                            Conference Record Number #60023
                        </span>
                        <span className="mx-2">•</span>
                        <span className="mx-4">
                            IEEE XPLORE COMPLIANT ISBN No. 979-8-3503-3086-1
                        </span>
                        <span className="mx-2">•</span>
                        <span className="mx-4">
                            5th International Conference on Advances in
                            Computing, Communication Control and Networking-
                            ICAC3N
                        </span>
                        <span className="mx-2">•</span>
                        <span className="mx-4">
                            Conference Record Number #60023
                        </span>
                        <span className="mx-2">•</span>
                        <span className="mx-4">
                            IEEE XPLORE COMPLIANT ISBN No. 979-8-3503-3086-1
                        </span>
                    </div>
                </div>
            </div>
            <nav className="bg-red-800">
                <div className="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between gap-y-6 p-4">
                    <div
                        className={
                            "flex w-full flex-row items-center justify-between"
                        }
                    >
                        <Link href="/" className="flex items-center">
                            <div className={"h-12"}>
                                <Image
                                    width={50}
                                    height={50}
                                    src="/icac3nlogo.png"
                                    className="mr-3 object-cover"
                                    alt="Logo"
                                />
                            </div>
                            <span className="mr-3 text-2xl font-semibold tracking-tight text-white">
                                ICAC3N
                            </span>
                            {/* <div
                                className={"bg-gray-50 flex justify-center items-center pl-3 pr-4 pt-4 pb-3 rounded-md"}>
                                <Image src={"/IEEE_up.png"} alt={"IEEE UP Logo"} height={100} width={75}/>
                            </div> */}
                        </Link>

                        <div
                            className={
                                "flex flex-row items-center justify-normal gap-1"
                            }
                        >
                            <Link
                                href={
                                    "https://cmt3.research.microsoft.com/ICAC3N2023"
                                }
                                className={
                                    "mx-2 hidden h-fit cursor-pointer rounded-lg bg-sky-600 px-4 py-2 text-white md:block "
                                }
                            >
                                Submit&nbsp;Paper
                            </Link>
                            <span
                                onClick={menuToggle}
                                className="focus:ring-none order-last inline-flex cursor-pointer items-center rounded-lg p-2 text-sm  text-red-800 focus:outline-none hover:bg-red-700 md:hidden"
                            >
                                <span className="sr-only">Open main menu</span>
                                <svg
                                    className="h-8 w-8 text-white"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                                        clipRule="evenodd"
                                    ></path>
                                </svg>
                            </span>
                        </div>
                    </div>

                    {
                        <div
                            className={`${
                                menuOpen
                                    ? "w-full md:block lg:w-auto"
                                    : "hidden md:block"
                            }`}
                        >
                            <ul className="flex flex-col items-start justify-between gap-3 rounded-lg font-medium md:mt-0 md:flex-row md:items-center md:border-0 md:p-0 md:text-sm lg:gap-5">
                                {links.map((link, index) => (
                                    <div
                                        key={index}
                                        className={"w-full md:w-auto"}
                                    >
                                        {link.enabled && link.link && (
                                            <>
                                                <li
                                                    key={index}
                                                    className={`cursor-pointer text-white`}
                                                >
                                                    <Link href={link.link}>
                                                        {link.title.toUpperCase()}
                                                    </Link>
                                                </li>
                                            </>
                                        )}
                                        {link.enabled && link.dropdown && (
                                            <Dropdown
                                                title={link.title}
                                                dropdown={link.dropdown}
                                            />
                                        )}
                                    </div>
                                ))}
                            </ul>
                            <div className={"mb-6 mt-8 block md:hidden"}>
                                <Link
                                    href={
                                        "https://cmt3.research.microsoft.com/ICAC3N2023"
                                    }
                                    className={
                                        "h-fit cursor-pointer rounded-lg bg-sky-600 px-4 py-3 text-white md:hidden "
                                    }
                                >
                                    Submit&nbsp;Paper
                                </Link>
                            </div>
                        </div>
                    }
                </div>
            </nav>
        </div>
    );
}

export default Index;
