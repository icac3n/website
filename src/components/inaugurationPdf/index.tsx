import React from "react";
import Link from "next/link";

const impImpData = [
    {
        title: "Paper submission link open",
        description: "5th ICAC3N-23 paper submission link is open till August 31, 2023",
        link: "/registration",
        isImportant: true,
        enabled: true,
    },
    {
        title: "4th ICAC3N-22 Proceedings",
        description: "4th ICAC3N-22 Proceedings are available online now on Xplore",
        link: "https://ieeexplore.ieee.org/xpl/conhome/10073967/proceeding",
        isImportant: false,
        enabled: true,
    }
]

export default function InaugurationPdf() {

    return (
        <div className={"w-full lg:w-min-sm"}>

            <div className={"mt-5 p-4 rounded-t-md bg-gray-200 border-l-4 border-red-600 w-full lg:max-w-sm flex justify-between items-center"}>
                <p className={"font-semibold text-lg"}>Inauguration Brochure</p>
                <Link target="_blank" href={"/documents/inauguration_schedule.pdf"}
                      download={'/documents/inauguration_schedule.pdf'}

                      className={`inline-flex items-center justify-center px-3 py-2 text-base font-medium text-center text-white rounded-lg bg-red-600 hover:bg-red-800 focus:ring-4 focus:ring-red-300 no-underline dark:focus:ring-red-900`}
                >Download
                </Link>
            </div>
            <div
                className={"relative h-60 p-4 rounded-b-md bg-gray-100 w-full lg:max-w-sm lg:max-h-80 lg:overflow-y-auto overflow-x-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-thumb-rounded-md scrollbar-track-gray-200"}>
                {
                    <>
                        <embed
                            className={"absolute top-0 right-0 w-full h-60 shadow rounded"}
                            src="/documents/inauguration_schedule.pdf#zoom=FitH&toolbar=0&navpanes=0&scrollbar=0"
                        />

                        {/*<Link target="_blank" href={"/documents/inauguration_schedule.pdf"}*/}
                        {/*      download={'/documents/inauguration_schedule.pdf'}*/}

                        {/*      className={`absolute bottom-2 right-2 z-10 inline-flex items-center justify-center px-5 py-2 mr-3 text-base font-medium text-center text-white rounded-lg bg-red-600 hover:bg-red-800 focus:ring-4 focus:ring-red-300 no-underline dark:focus:ring-red-900`}*/}
                        {/*>Download*/}
                        {/*</Link>*/}
                    </>

                }
            </div>
        </div>
    )
}