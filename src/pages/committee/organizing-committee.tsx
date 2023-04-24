import Button from "@/components/button";

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
                    "Name": "Prof. (Dr.) Pradeep Kumar Mishra",
                    "Designation": "VC, AKTU"
                },
                {
                    "Name": "Prof. (Dr.) S.N. Singh",
                    "Designation": "ABV-IIITM, Gwalior"
                },
                {
                    "Name": "Prof. (Dr.) P. Nagabhushan",
                    "Designation": "VC, VFSTR, AP"
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
                    "Name": "Prof. Manjeet Singh",
                    "Designation": "GCBK, Sonipat"
                }
            ]
        },
        {
            "Category": "Technical Program Chairs",
            "Members": [
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
                }
            ]
        },
        {
            "Category": "Organizing Committee",
            "Members": [
                {
                    "Name": "Prof. M. Chandraprabha",
                    "Designation": "CSE, GCET"
                },
                {
                    "Name": "Prof. Rishabh Jain",
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
                    Name: "Prof. (Dr.) Inderpreet Kaur",
                    Designation: "CSE, GCET"
                },
                {
                    Name: "Prof. (Dr.) Shelja Sharma",
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
                    Name: "Prof. Mayank Dixit",
                    Designation: "CSE, GCET"
                },
                {
                    Name: "Prof. Namita Mishra",
                    Designation: "CSE, GCET"
                }
            ]
        },
        {
            Category: "Finance Committee",
            Members: [
                {
                    Name: "Prof. (Dr.) Amrit Agrawal",
                    Designation: "CSE, GCET"
                },
                {
                    Name: "Prof. Manish Sharma",
                    Designation: "CSE, GCET"
                }
            ]
        },
        {
            Category: "Hospitality Committee",
            Members: [
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
                    Name: "Mr. Mayank",
                    Designation: "CSE Student, GCET"
                },
                {
                    Name: "Mr. Ayan Gupta",
                    Designation: "CSE Student, GCET"
                },
                {
                    Name: "Mr. Harshit Garg",
                    Designation: "CSE Student, GCET"
                }
            ]
        },
        {
            Category: "Sponsorship/Media Committee",
            Members: [
                {
                    Name: "Prof. M. Dinesh Babu",
                    Designation: "CSE, GCET"
                },
                {
                    Name: "Prof. Shikha Singh",
                    Designation: "CSE, GCET"
                },
                {
                    Name: "Prof. Ruchika Sharma",
                    Designation: "CSE, GCET"
                }
            ]
        }
    ]

    return(
        <div className={"prose mx-4"}>
            <h1 className={"heading"}>ORGANISING COMMITTEE</h1>
            {
                organizingCommittee.map((committee, index) => {
                    return(
                        <div key={index}>
                            <h2 className={"heading"}>{committee.Category}</h2>
                            <ul>
                                {
                                    committee.Members.map((member, index) => {
                                        return(
                                            <li key={index}>
                                                {member.Name}, {member.Designation}
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                        </div>
                    )
                })
            }

        </div>
    )
}
export default OrganizingCommittee;