import React from "react";

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

export default function ImportantMessage() {

    return (
        <div className={"w-full lg:w-min-sm"}>
            <div className={"mt-5 p-4 rounded-t-md bg-gray-200 border-l-4 border-red-600 w-full lg:max-w-sm"}>
                <p className={"font-semibold text-lg"}>Important Notices</p>
            </div>
            <div
                className={"p-4 rounded-b-md bg-gray-100 w-full lg:max-w-sm lg:max-h-80 lg:overflow-y-auto overflow-x-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-thumb-rounded-md scrollbar-track-gray-200"}>
                {
                    impImpData.map((item, index) => {
                        return (
                            <div key={index} className={``}>
                                <div
                                    className={`flex flex-col space-x-2 items-start ${item.isImportant ? "-mx-4 -my-5 p-4 bg-red-100" : ""}`}>
                                    <div>
                                        <div className={"flex space-x-2 mt-2"}>
                                            <p className={`font-medium ${item.isImportant ? "text-red-800" : ""}`}>{item.title}</p>
                                            {index === 0 && !item.isImportant &&
                                                <div className={"rounded-full bg-blue-800 font-semibold bg-opacity-20"}>
                                                    <p className={"px-2 py-0.5 text-sm text-blue-800"}>New</p>
                                                </div>
                                            }
                                            {item.isImportant &&
                                                <div className={"flex space-x-2 items-center justify-center"}>

                                                    <div
                                                        className={"rounded-full bg-red-800 font-semibold bg-opacity-20"}>
                                                        <p className={"px-2 py-0.5 text-xs text-red-800"}>Important</p>
                                                    </div>

                                                    <div className={"relative pl-1"}>
                                                        <div
                                                            className="absolute w-4 h-4 rounded-full bg-red-600 bg-opacity-50 animate-ping"></div>
                                                        <div
                                                            className="relative w-4 h-4 rounded-full bg-opacity-100 bg-red-600"></div>
                                                    </div>
                                                </div>
                                            }
                                        </div>

                                        <p className={`font-light text-sm mt-1 ${item.isImportant ? "text-red-800" : ""}`}>{item?.description}</p>
                                    </div>


                                </div>
                                {index !== impImpData.length - 1 &&
                                    <hr className="h-px my-5 bg-gray-200 border-0 dark:bg-gray-700"/>
                                }
                            </div>
                        )
                    })
                }
            </div>
        </div>
)
}