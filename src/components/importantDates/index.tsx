import React from "react";

const impDateData = [
    {
        title: "Paper Submission Starts",
        date: "10/04/2023",

        isImportant: false,
        enabled: true,
    },
    {
        title: "Abstract Submission Deadline",
        date: "01/07/2023",

        isImportant: true,
        enabled: true,
    },
    {
        title: "Paper Submission Deadline",
        date: "31/08/2023",

        isImportant: true,
        enabled: true,
    }, {
        title: "Notification of Acceptance",
        subtitle: "(within 4weeks from submission)",
        date: "30/09/2023",

        isImportant: false,
        enabled: true,
    },
    {
        title: "Registration",
        date: "31/10/2023",

        isImportant: false,
        enabled: true,
    },
    {
        title: "Camera Ready Paper",
        date: "20/11/2023",

        isImportant: false,
        enabled: true,
    },
    {
        title: "Conference Date",
        date: "15th - 16th December 2023",

        isImportant: false,
        enabled: true,
    }
]

export default function ImportantDates() {

    return (
        <div className={"w-full mx-auto"}>
            <div
                className={"mt-5 p-4 rounded-t-md bg-gray-200 bg-gray-200 border-l-4 border-red-600 w-full lg:max-w-sm lg:min-w-lg"}>
                <p className={"font-semibold text-lg"}>Important Dates</p>
            </div>
            <div
                className={"p-4 rounded-b-md bg-gray-100 w-full lg:max-w-sm lg:max-h-80 lg:overflow-y-auto overflow-x-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-thumb-rounded-md scrollbar-track-gray-200"}>
                {
                    impDateData.map((item, index) => {
                        return (
                            <div key={index} className={``}>
                                <div
                                    className={`flex space-x-2 items-start ${item.isImportant ? "-mx-4 -my-5 p-4 bg-red-100" : ""}`}>
                                    <div>
                                        <p className={`font-medium ${item.isImportant ? "text-red-800" : ""}`}>{item.title}</p>
                                        <p className={`font-light text-sm ${item.isImportant ? "text-red-800" : ""}`}>{item?.subtitle}</p>
                                        <p className={`text-sm text-gray-700 ${item.isImportant ? "text-red-800" : ""}`}>{item.date}</p>
                                    </div>

                                    {index === 0 &&
                                        <div className={"rounded-full bg-blue-800 font-semibold bg-opacity-20"}>
                                            <p className={"px-2 py-0.5 text-xs text-blue-800"}>New</p>
                                        </div>
                                    }
                                    {item.isImportant &&
                                        <div className={"flex space-x-2 items-center justify-center"}>
                                            <div className={"rounded-full mt-1 bg-red-800 font-semibold bg-opacity-20"}>
                                                <p className={"px-2 py-0.5 text-xs text-red-800"}>Important</p>
                                            </div>
                                            <div className={"relative mt-1 pl-1"}>
                                                <div
                                                    className="absolute w-4 h-4 rounded-full bg-red-600 bg-opacity-50 animate-ping"></div>
                                                <div
                                                    className="relative w-4 h-4 rounded-full bg-opacity-100 bg-red-600"></div>
                                            </div>

                                        </div>


                                    }
                                </div>
                                {index !== impDateData.length - 1 &&
                                    <hr className={`h-px my-5 bg-gray-200 border-0 dark:bg-gray-700 ${(item.isImportant && impDateData[index + 1].isImportant) ? "bg-red-200" : ""}`}/>
                                }
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}