import {RiFacebookBoxFill, RiMailFill, RiPhoneFill, RiTwitterFill} from "react-icons/ri";

const Footer = () =>{
    return(

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
                                    <a href="/guidelines.tsx" className="hover:underline">Guidelines
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
    )
}

export default Footer