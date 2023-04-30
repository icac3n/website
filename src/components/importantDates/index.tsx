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
                <div className={"mt-5 p-4 rounded-t-md bg-gray-200 bg-gray-200 border-l-4 border-red-600 w-full lg:max-w-sm lg:min-w-lg"}>
                    <p className={"font-semibold text-lg"}>Important Dates</p>
                </div>
                <div className={"p-4 rounded-b-md bg-gray-100 w-full lg:max-w-sm lg:max-h-80 lg:overflow-y-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-thumb-rounded-md scrollbar-track-gray-200"}>
                    {
                        impDateData.map((item, index) => {
                            return (
                                <div key={index}>
                                    <div className={"flex space-x-2 items-start"}>
                                        <div>
                                            <p className={"font-medium"}>{item.title}</p>
                                            <p className={"font-light text-sm"}>{item?.subtitle}</p>
                                            <p className={"text-sm text-gray-500"}>{item.date}</p>
                                        </div>
                                        {index === 0 &&
                                            <div className={"rounded-full bg-blue-600 my-1 bg-opacity-20"}>
                                                <p className={"px-2 py-0.2 text-sm text-blue-800"}>New</p>
                                            </div>
                                        }
                                        {
                                            item.isImportant &&
                                            <div className={"rounded-full bg-red-600 bg-opacity-20"}>
                                                <p className={"px-2 py-0.5 text-sm text-red-800"}>Important</p>
                                            </div>
                                        }
                                    </div>
                                    {index !== impDateData.length - 1 &&
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