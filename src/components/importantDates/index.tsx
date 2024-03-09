import React from "react";

const impDateData = [
    {
        title: "Paper Submission Starts",
        date: "Yet to be Announced",

        isImportant: false,
        enabled: true,
    },
    {
        title: "Abstract Submission Deadline",
        date: "Yet to be Announced",

        isImportant: true,
        enabled: true,
    },
    {
        title: "Paper Submission Deadline",
        date: "Yet to be Announced",

        isImportant: true,
        enabled: true,
    }, {
        title: "Notification of Acceptance",
        subtitle: "(within 4weeks from submission)",
        date: "Yet to be Announced",

        isImportant: false,
        enabled: true,
    },
    {
        title: "Registration",
        date: "Yet to be Announced",

        isImportant: false,
        enabled: true,
    },
    {
        title: "Camera Ready Paper",
        date: "Yet to be Announced",

        isImportant: false,
        enabled: true,
    },
    {
        title: "Conference Date",
        date: "Yet to be Announced",

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
                                    className={`flex space-x-2 items-start ${item.isImportant ? "-mx-4 -my-5 p-4 bg-orange-100" : ""}`}>
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
                                            <div
                                                className={"rounded-full mt-1 bg-orange-800 font-semibold bg-opacity-20"}>
                                                <p className={"px-2 py-0.5 text-xs text-orange-800"}>Important</p>
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
