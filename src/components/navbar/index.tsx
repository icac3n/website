import React, {useState} from "react";
import {AiFillCaretDown} from "react-icons/ai";

function Index() {
    const testObj = {
        Tabs: ["Home", "About", "Guidelines", "Speakers", "Call for Papers",],
    };

    const [menuOpen, setMenu] = useState(true);
    const menuToggle = () => {
        setMenu(!menuOpen);
    };

    const [dropOpen, setDrop] = useState(false);
    const dropToggle = () => {
        setDrop(!dropOpen);
    };

    // @ts-ignore
    // @ts-ignore
    return (

        <nav className="bg-red-800 border-gray-200">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <a href="#" className="flex items-center">
                    <img src="./icac3nlogo.png" className="mr-3 h-12 object-cover" alt="Logo"/>
                </a>
                <button onClick={menuToggle} type="button"
                        className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
                        aria-controls="navbar-dropdown" aria-expanded="false">
                    <span className="sr-only">Open main menu</span>
                    <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20"
                         xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd"
                              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                              clipRule="evenodd"></path>
                    </svg>
                </button>
                {menuOpen && <div className={"w-full md:block md:w-auto"}>
                    <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0">
                        {testObj.Tabs.map((item, index) => (
                            <li key={index} className={"cursor-pointer text-white"}>
                                {item.toUpperCase()}
                            </li>
                        ))}
                        <li onClick={dropToggle} className={"cursor-pointer relative"}>
                             <span className={"text-white inline-flex items-center"}>
    {'Committee'.toUpperCase()} <AiFillCaretDown className={"ml-1"}/>
  </span>
                            {
                                dropOpen &&
                                <div id="dropNav"
                                     className={"md:absolute lg:absolute md:mt-2 lg:mt-2 z-10 font-normal bg-amber-100 divide-y divide-amber-800 rounded-lg shadow w-44"}>
                                    <ul className="py-2 text-sm text-gray-700"
                                        aria-labelledby="dropdownLargeButton">
                                        <li>
                                            <a href="#"
                                               className="block px-4 py-2 hover:bg-gray-100">Organising Committee</a>
                                        </li>
                                        <li>
                                            <a href="#"
                                               className="block px-4 py-2 hover:bg-gray-100">Technical Program
                                                Committee</a>
                                        </li>
                                    </ul>
                                    <div className="py-1">
                                        <a href="#"
                                           className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Advisory
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
