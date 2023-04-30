import React from "react";
import {BsChevronRight} from "react-icons/bs";
import Link from "next/link";

const impImpData = [
    {
        title: "Paper submission link validity",
        description: "5th ICAC3N-23 paper submission link is valid until July 31, 2023",
        link: "/registration",
        isImportant: true,
        enabled: true,
    },
    {
        title: "4th IEEE ICAC3N-22 Proceedings",
        description: "4th IEEE ICAC3N-22 Proceedings are available online now on IEEE Xplore",
        link: "https://ieeexplore.ieee.org/xpl/conhome/10073967/proceeding",
        isImportant: true,
        enabled: true,
    }
]

export default function ImportantMessage() {

    return (
        <div className={"w-full lg:w-min-sm"}>
            <div className={"mt-5 p-4 rounded-t-md bg-gray-200 border-l-4 border-red-600 w-full lg:max-w-sm"}>
                <p className={"font-semibold text-lg"}>Important Notices</p>
            </div>
            <div className={"space-y-3 p-4 rounded-b-md bg-gray-100 w-full lg:max-w-sm lg:max-h-52 lg:overflow-y-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-thumb-rounded-md scrollbar-track-gray-200"}>
                {
                    impImpData.map((item, index) => {
                        return (
                            <Link key={index} href={item.link} className={"cursor-pointer"}>
                                <div className={"flex items-start justify-between"}>
                                    <div className={"flex flex-col gap-1 items-start"}>
                                        <div>
                                            <p className={"font-medium"}>{item.title}</p>
                                            <p className={"font-light text-sm"}>{item.description}</p>
                                        </div>
                                        <div className={'flex flex-row gap-2'}>
                                            {index === 0 &&
                                                <div className={"flex flex-row items-center justify-center rounded-full bg-blue-600 bg-opacity-20"}>
                                                    <p className={"px-2 py-0.5 text-sm text-blue-800"}>New</p>
                                                </div>
                                            }
                                            {
                                                item.isImportant &&
                                                <div className={"flex flex-row items-center justify-center rounded-full bg-red-600 bg-opacity-20"}>
                                                    <p className={"px-2 py-0.5 text-sm text-red-800"}>Important</p>
                                                </div>
                                            }
                                        </div>
                                    </div>

                                    <BsChevronRight className={"my-1 text-lg"}/>


                                </div>
                                {index !== impImpData.length - 1 &&
                                    <hr className="h-px my-5 bg-gray-200 border-0 dark:bg-gray-700"/>
                                }
                            </Link>
                        )
                    })
                }
            </div>
        </div>
    )
}