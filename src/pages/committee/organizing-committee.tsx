import Head from "next/head";
import React from "react";

const OrganizingCommittee = () => {

    const organizingCommittee = [
        {
            "Category": "Chief Patron",
            "Members": [
                {
                    "Name": "Shri Suneel Galgotia",
                    "Designation": "Chairman"
                },
                {
                    "Name": "Shri Dhruv Galgotia",
                    "Designation": "CEO"
                }
            ]
        },
        {
            "Category": "Patrons",
            "Members": [
                
                {
                    "Name": "Gp. Capt. (R) Dr. P K Chopra, VSM",
                    "Designation": "Director General"
                },
                {
                    "Name": "Prof. (Dr.) S.N. Singh",
                    "Designation": "ABV-IIITM, Gwalior"
                }
            ]
        },
        {
            "Category": "Conference General Chair",
            "Members": [
                {
                    "Name": "Prof. (Dr.) Avadhesh Kumar",
                    "Designation": "PVC, GU"
                },
                {
                    "Name": "Prof.(Dr.) MOHD. ASIM QADRI",
                    "Designation": "Director, GCET"
                },
                {
                    "Name": "Prof. (Dr.) S. K. Singh",
                    "Designation": "IIIT, Allahabad"
                }
            ]
        },
        {
            "Category": "Convener & Conference Organising Chair",
            "Members": [
                {
                    "Name": "Prof. (Dr.) Vishnu Sharma",
                    "Designation": "HOD, CSE, GCET"
                }
            ]
        },
        {
            "Category": "Conference Chair",
            "Members": [
                {
                    "Name": "Prof. (Dr.) Vishnu Sharma",
                    "Designation": "HOD, CSE, GCET"
                },
                {
                    "Name": "Prof. (Dr.) Manjeet Singh",
                    "Designation": "GCBK, Sonipat"
                }
            ]
        },
        {
            "Category": "Technical Program Chairs",
            "Members": [
                {
                    "Name": "Prof. (Dr.) Sachin Kumar",
                    "Designation": "Dean (R&D), CSE, GCET"
                },
                {
                    "Name": "Prof. (Dr.) S. K. Singh",
                    "Designation": "CSE, GCET"
                },
                {
                    "Name": "Prof. (Dr.) Jaya Sinha",
                    "Designation": "CSE, GCET"
                },
                {
                    "Name": "Prof. (Dr.) S. K. Singh",
                    "Designation": "HOD-IT, GCET"
                },
                {
                    "Name": "Prof. (Dr.) Vinit Kumar",
                    "Designation": "CSE, GCET"
                },
                {
                    "Name": "Prof. (Dr.) Sachi Gupta",
                    "Designation": "CSE, GCET"
                },
                {
                    "Name": "Prof. (Dr.) Arun Kumar",
                    "Designation": "CSE, GCET"
                }
            ]
        },
        {
            "Category": "Organizing Committee",
            "Members": [
                {
                    "Name": "Prof. (Dr.) Ratna Nitin Patil",
                    "Designation": "CSE, GCET"
                },
                {
                    "Name": "Prof. (Dr.) Youddha Beer Singh",
                    "Designation": "CSE, GCET"
                },
                {
                    "Name": "Prof. (Dr.) Mayank Dixit",
                    "Designation": "CSE, GCET"
                },
                {
                    "Name": "Prof. Aparna Singh",
                    "Designation": "CSE, GCET"
                },
                {
                    "Name": "Prof. Ravindra Kumar",
                    "Designation": "CSE, GCET"
                }
            ]
        },
        {
            Category: "Publication Committee",
            Members: [
                {
                    "Name": "Prof. (Dr.) Vandna Rani Verma",
                    "Designation": "CSE, GCET"
                },
                {
                    "Name": "Prof. (Dr.) Manjeet Singh",
                    "Designation": "GCBK, Sonipat"
                },
                {
                    Name: "Prof. (Dr.) Inderpreet Kaur",
                    Designation: "CSE, GCET"
                },
                {
                    Name: "Prof. (Dr.) Kavita Sharma",
                    Designation: "CSE, GCET"
                }
            ]
        },
        {
            Category: "Publicity Committee",
            Members: [
                {
                    Name: "Prof. Manish Sharma",
                    Designation: "CSE, GCET"
                },
                {
                    Name: "Prof. Mukesh Kumar Singh",
                    Designation: "CSE, GCET"
                }
            ]
        },
        {
            Category: "Finance Committee",
            Members: [
                {
                    "Name": "Prof. (Dr.) Aditya Dev Mishra",
                    "Designation": "CSE, GCET"
                },
                {
                    "Name": "Prof. M. Krishan Kumar Sarawswat",
                    "Designation": "CSE, GCET"
                },
                {
                    "Name": "Prof. M. Chandraprabha",
                    "Designation": "CSE, GCET"
                }
            ]
        },
        {
            Category: "Hospitality Committee",
            Members: [
                {
                    Name: "Prof. (Dr.) Rupali Khare",
                    Designation: "CSE, GCET"
                },
                {
                    Name: "Prof. Ritu Dewan",
                    Designation: "CSE, GCET"
                },
                {
                    Name: "Prof. Mamta Narwaria",
                    Designation: "CSE, GCET"
                }
            ]
        },
        {
            Category: "Transport and Accommodation Committee",
            Members: [
                {
                    Name: "Prof. Rajiv Kumar Nath",
                    Designation: "CSE, GCET"
                },
                {
                    Name: "Prof. Ravikant Nirala",
                    Designation: "CSE, GCET"
                },
                {
                    Name: "Prof. Pramit Samant",
                    Designation: "CSE, GCET"
                },
                {
                    Name: "Prof. Mohit Chowdhary",
                    Designation: "CSE, GCET"
                }
            ]
        },
        {
            Category: "Website Committee",
            Members: [
                {
                    Name: "Prof. Ajeet Kumar Bhartee",
                    Designation: "CSE, GCET"
                },
                {
                    Name: "Mr. Hardik Prakash",
                    Designation: "CSE-AI Student, GCET"
                },
                {
                    Name: "Mr. Prakhar Shukla",
                    Designation: "CSE-AI Student, GCET"
                },
                {
                    Name: "Mr. Areeb ur Rub",
                    Designation: "CSE-AI Student, GCET"
                }
            ]
        },
        {
            Category: "Sponsorship/Media Committee",
            Members: [
                {
                    Name: "Prof. (Dr.) Pallavi Goel",
                    Designation: "CSE, GCET"
                },
                {
                    Name: "Prof. Shikha Singh",
                    Designation: "CSE, GCET"
                },
                {
                    Name: "Prof. Arti Ranjan",
                    Designation: "CSE, GCET"
                }
            ],
            Students: [
                {
                    Name: "Mr. Raunak Gupta",
                    Designation: "CSE, GCET"
                },
                {
                    Name: "Mr. Yash Gupta",
                    Designation: "CSE-AI, GCET"
                },
                {
                    Name: "Mr. Pratyaksh Kumar",
                    Designation: "CSE, GCET",
                    
                }
            ]
        }
    ]

    return (
        <>
            <Head>
                <title>Organizing Committee - ICAC3N - Galgotias College of Engineering</title>
                <meta name="title" content="Organizing Committee - ICAC3N - Galgotias College of Engineering and Technology"/>
                <meta name="description"
                      content="Organizing Committee - 5th International Conference on Advances in Computing, Communication Control and Networking- ICAC3N"/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <link rel="icon" href="/favicon.ico"/>

                <meta property="og:type" content="website"/>
                <meta property="og:url" content="https://icac3n.in/"/>
                <meta property="og:title" content="Organizing Committee - ICAC3N - Galgotias College of Engineering and Technology"/>
                <meta name="description"
                      content="Organizing Committee - 5th International Conference on Advances in Computing, Communication Control and Networking- ICAC3N"/>
                <meta property="og:image"
                      content="https://icac3n.in/api/og"/>


                <meta property="twitter:card" content="summary_large_image"/>
                <meta property="twitter:url" content="https://icac3n.in/"/>
                <meta property="Organizing Committee - twitter:title" content="Organizing Committee - ICAC3N - Galgotias College of Engineering and Technology"/>
                <meta property="twitter:description"
                      content="Organizing Committee - 5th International Conference on Advances in Computing, Communication Control and Networking- ICAC3N"/>
                <meta property="twitter:image"
                      content="https://icac3n.in/api/og"/>
            </Head>
            <div className={"prose mx-4"} itemScope itemType="https://schema.org/Organization">
                <h1 className={"heading"} itemProp="name">ORGANISING COMMITTEE</h1>
                {
                    organizingCommittee.map((committee, index) => {
                        return (
                            <div key={index} itemProp="department">
                                <h2 className={"heading"} itemProp="name">{committee.Category}</h2>
                                <ul>
                                    {
                                        committee.Members.map((member, index) => {
                                            return (
                                                <li key={index} itemProp="member">
                                                    <span itemProp="name">{member.Name}</span>, <span
                                                    itemProp="jobTitle">{member.Designation}</span>
                                                </li>
                                            )
                                        })
                                    }
                                {
                                    committee.Students != undefined && 
                                    <li className="list-none">
                                        <h3 className={"heading"} itemProp="name">Student Co-Ordinator{committee?.Students?.length == 1 ? '' :'s' }</h3>
                                    <ul>
                                        {
                                            committee?.Students.map((member, index) => {
                                                return (
                                                    <li key={index} itemProp="member">
                                                        <span itemProp="name">{member.Name}</span>, <span
                                                        itemProp="jobTitle">{member.Designation}</span>
                                                    </li>
                                                )
                                            })
                                        }
                                    </ul>
                                    </li>
                                }
                                </ul>
                            </div>
                        )
                    })
                }

            </div>
        </>
    )
}
export default OrganizingCommittee;
