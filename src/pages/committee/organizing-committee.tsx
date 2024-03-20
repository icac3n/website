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
                    "Name": "Dr. Dhruv Galgotia",
                    "Designation": "CEO"
                }
            ]
        },
        {
            "Category": "Patrons",
            "Members": [
                {
                    "Name": "Prof. (Dr.) S.N. Singh",
                    "Designation": "Director, ABV-IIITM, Gwalior"
                },
                {
                    "Name": "Prof. (Dr.) S. K. Singh",
                    "Designation": "IIIT, Allahabad"
                },
                {
                    "Name": "Prof. (Dr.) Rajat Kumar Singh",
                    "Designation": "IIIT, Allahabad"
                },
                {
                    "Name": "Prof. (Dr.) Avadhesh Kumar",
                    "Designation": "Pro-Vice-Chancellor, GU"
                },
                {
                    "Name": "Gp. Capt. (R) Dr. P K Chopra, VSM",
                    "Designation": "Director General, GEI"
                }
            ]
        },
        {
            "Category": "Conference General Chair and Conference Convener",
            "Members": [
                {
                    "Name": "Prof. (Dr.) Sachin Kumar",
                    "Designation": "Professor and Head, CSE, GCET"
                }
            ]
        },
        {
            "Category": "Conference Organizing Chair",
            "Members": [
                {
                    "Name": "Prof. (Dr.) Vinit Kumar",
                    "Designation": "Professor and Head, MCA, GCET"
                }
            ]
        },
        {
            "Category": "Technical Program Chair",
            "Members": [
                {
                    "Name": "Prof (Dr.) Krishan Kumar Saraswat",
                    "Designation": "CSE, GCET"
                }
            ]
        },
        {
            "Category": "Technical Program committee",
            "Members": [
                {
                    "Name": "Prof (Dr.) Krishan Kumar Saraswat",
                    "Designation": "CSE, GCET"
                },
                {
                    "Name": "Prof (Dr.) Jaya Sinha",
                    "Designation": "Professor, CSE, GCET"
                }
            ]
        },
        {
            "Category": "Publication Chair and Publicity Chair",
            "Members": [
                {
                    "Name": "Prof. (Dr.) Sanjeev Kumar Singh",
                    "Designation": "Professor & Head, IT, GCET"
                }
            ]
        },
        {
            "Category": "Publication Committee",
            "Members": [
                {
                    "Name": "Prof. (Dr.) Sanjeev Kumar Singh",
                    "Designation": "Professor & Head, IT, GCET"
                },
                {
                    "Name": "Prof. (Dr.) Veena Mittal",
                    "Designation": "IT, GCET"
                }
            ]
        },
        {
            "Category": "Publicity Committee",
            "Members": [
                {
                    "Name": "Prof. (Dr.) Sanjeev Kumar Singh",
                    "Designation": "Professor & Head, IT, GCET"
                },
                {
                    "Name": "Prof. (Dr.) Suman Avdhesh Yadav",
                    "Designation": "Professor, CSE, Amity University, Gr.Noida"
                },
                {
                    "Name": "Prof. (Dr.) Jaya Sinha",
                    "Designation": "Professor, CSE, GCET"
                },
                {
                    "Name": "Prof. Nripendra Kumar Singh",
                    "Designation": "MCA, GCET"
                }
            ]
        },
        {
            "Category": "Treasurer/Finance committee",
            "Members": [
                {
                    "Name": "Prof (Dr.) Jaya Sinha",
                    "Designation": "Professor, CSE, GCET"
                },
                {
                    "Name": "Prof. (Dr.) Nripendra Kumar Singh",
                    "Designation": "MCA, GCET"
                }
            ]
        },
        {
            "Category": "Track Chairs",
            "Members": [
                {
                    "Name": "Prof. (Dr.) Chien-Ming Chen",
                    "Designation": "Professor, School of Artificial Intelligence (School of Future Technology), Nanjing University of Information Science and Technology, China"
                },
                {
                    "Name": "Prof. (Dr.) R. Swaminathan",
                    "Designation": "Professor and Head, ECE, GCET"
                },
                {
                    "Name": "Prof. (Dr.) Saru Kumari",
                    "Designation": "Associate Professor, CCS University, Meerut, Uttar Pradesh"
                }
            ]
        },
        {
            "Category": "Hospitality Committee",
            "Members": [
                {
                    "Name": "Prof. (Dr.) Pallavi Goel",
                    "Designation": "CSE, GCET"
                },
                {
                    "Name": "Prof. (Dr.) Inderjeet Kaur",
                    "Designation": "CSE, GCET"
                }
            ]
        },
        {
            "Category": "Website Committee",
            "Members": [
                {
                    "Name": "Prof (Dr.) Krishan Kumar Saraswat",
                    "Designation": "CSE, GCET"
                }
            ]
        }


    ]

    return (
        <>
            <Head>
                <title>Organizing Committee - ICAC3N - Galgotias College of Engineering</title>
                <meta name="title" content="Organizing Committee - ICAC3N - Galgotias College of Engineering and Technology" />
                <meta name="description"
                    content="Organizing Committee - 5th International Conference on Advances in Computing, Communication Control and Networking- ICAC3N" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />

                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://icac3n.in/" />
                <meta property="og:title" content="Organizing Committee - ICAC3N - Galgotias College of Engineering and Technology" />
                <meta name="description"
                    content="Organizing Committee - 5th International Conference on Advances in Computing, Communication Control and Networking- ICAC3N" />
                <meta property="og:image"
                    content="https://icac3n.in/api/og" />


                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:url" content="https://icac3n.in/" />
                <meta property="Organizing Committee - twitter:title" content="Organizing Committee - ICAC3N - Galgotias College of Engineering and Technology" />
                <meta property="twitter:description"
                    content="Organizing Committee - 5th International Conference on Advances in Computing, Communication Control and Networking- ICAC3N" />
                <meta property="twitter:image"
                    content="https://icac3n.in/api/og" />
            </Head>
            <div className={"prose mx-4"} itemScope itemType="https://schema.org/Organization">
                <h1 className={"heading"} itemProp="name">ORGANISING COMMITTEE</h1>
                {
                    organizingCommittee.map((committee, index) => {
                        return (
                            <div key={index} itemProp="department">
                                <h2 className={"heading"} itemProp="name" id={committee.Category}>{committee.Category}</h2>
                                <ul>
                                    {
                                        committee.Members.map((member, index) => {
                                            return (
                                                <li key={index} itemProp="member" id={member.Name}>
                                                    <span className="font-semibold" itemProp="name">{member.Name}</span><br /><span
                                                        itemProp="jobTitle" className="text-sm">{member.Designation}</span>
                                                </li>
                                            )
                                        })
                                    }
                                    {/* {
                                        committee.Students != undefined &&
                                        <li className="list-none">
                                            <h3 className={"heading"} itemProp="name">Student Co-Ordinator{committee?.Students?.length == 1 ? '' : 's'}</h3>
                                            <ul>
                                                {
                                                    committee?.Students.map((member, index) => {
                                                        return (
                                                            <li key={index} itemProp="member" id={member.Name}>
                                                                <span itemProp="name">{member.Name}</span>, <span
                                                                    itemProp="jobTitle">{member.Designation}</span>
                                                            </li>
                                                        )
                                                    })
                                                }
                                            </ul>
                                        </li>
                                    } */}
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
