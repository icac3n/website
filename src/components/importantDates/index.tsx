import React from "react";

const impDateData = [
    {
        title: "Paper Submission Guidelines",
        date: "13/04/2023",

        isImportant: false,
        enabled: true,
    },
    {
        title: "Paper Submission Deadline",
        date: "13/04/2023",

        isImportant: true,
        enabled: true,
    }, {
        title: "Acceptance Notification",
        date: "13/04/2023",

        isImportant: false,
        enabled: true,
    },
    {
        title: "Registration",
        date: "13/04/2023",

        isImportant: false,
        enabled: true,
    }, {
        title: "Camera Ready Paper",
        date: "13/04/2023",

        isImportant: false,
        enabled: true,
    },
    {
        title: "Conference Date",
        date: "13/04/2023",

        isImportant: false,
        enabled: true,
    }
]

export default function ImportantDates() {

    return (
        <div className={"grid grid-cols-1 lg:grid-cols-3 justify-items-end"}>
            <div className={"lg:col-span-2 lg:mr-10"}>
                <h2 className={"font-bold text-lg text-center lg:text-2xl lg:text-start my-3"}>About ICACCCN</h2>
                <p>Galgotias Educational Institutions (GEI) have been inculcating practical skills and creating ‘Global
                    Professionals’ for more than 18 years. Founded by Smt. Shakuntala Educational and Welfare Society,
                    Galgotia Educational Institutions is currently led by Mr. Suneel Galgotia, Chairman and a resolute
                    visionary. Galgotias College of Engineering & Technology is placed among the best in professional
                    education in Dr. APJ Abdul Kalam Technical University (Formerly U.P. Technical University). It has
                    achieved top positions in MBA, MCA and B.Tech. finals and has a record of 100% placements with the
                    best corporate houses. It has also been ranked amongst the top engineering colleges in India by
                    DATAQUEST NASSCOM survey and OUTLOOK-C For College Survey.</p>
            </div>

            <div className={"w-full lg:w-min-sm"}>
                <div className={"mt-5 p-4 rounded-t-md bg-gray-200 bg-gray-200 border-l-4 border-red-600 w-full lg:max-w-sm lg:min-w-lg"}>
                    <p className={"font-semibold text-lg"}>Important Dates</p>
                </div>
                <div className={"p-4 rounded-b-md bg-gray-100 w-full lg:max-w-sm"}>
                    {
                        impDateData.map((item, index) => {
                            return (
                                <div key={index}>
                                    <div className={"flex space-x-2 items-start"}>
                                        <div>
                                            <p className={"font-medium"}>{item.title}</p>
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
        </div>
    )
}