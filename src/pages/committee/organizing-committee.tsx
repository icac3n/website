import Head from "next/head";
import React from "react";

const OrganizingCommittee = () => {
    
const organizingCommittee = [
    {
        "Category": "Chief Patrons",
        "Members": [
            {
                "Name": "Shri Suneel Galgotia",
                "Designation": "Chairman, Galgotias Educational Institutions"
            },
            {
                "Name": "Dr. Dhruv Galgotia",
                "Designation": "CEO, Galgotias Educational Institutions"
            }
        ]
    },
    {
        "Category": "Patrons",
        "Members": [
            {
                "Name": "Prof.(Dr.) K. Mallikharjuna Babu",
                "Designation": "Vice Chancellor, Galgotias University, Greater Noida"
            },
            {
                "Name": "Prof.(Dr.) Avadhesh Kumar",
                "Designation": "Pro-Vice Chancellor, Galgotias University, Greater Noida"
            },
            {
                "Name": "Prof.(Dr.) Vikram Bali",
                "Designation": "Director, Galgotias College of Engineering and Technology, Greater Noida"
            }
        ]
    },
    {
        "Category": "Co-Patrons",
        "Members": [
            {
                "Name": "Prof. Brijesh Kumar",
                "Designation": "Professor & Director (Planning), Dept. of IT, Indira Gandhi Delhi Technical University for Women, Delhi"
            }
        ]
    },
    {
        "Category": "General Chairs",
        "Members": [
            {
                "Name": "Prof.(Dr.) Vikram Bali",
                "Designation": "Director, Galgotias College of Engineering and Technology, Greater Noida"
            },
            {
                "Name": "Prof. Brijesh Singh",
                "Designation": "Dean Academics, Galgotias College of Engineering and Technology, Greater Noida"
            }
        ]
    },
    {
        "Category": "Conference Convener",
        "Members": [
            {
                "Name": "Prof.(Dr.) Pushpa Choudhary",
                "Designation": "HOD CSE & Allied Branches"
            }
        ]
    },
    {
        "Category": "Conference Co-Conveners",
        "Members": [
            {
                "Name": "Dr. Sambit Satpathy",
                "Designation": "Galgotias College of Engineering and Technology, Greater Noida"
            }
        ]
    },
    {
        "Category": "Conference Organizing Chairs",
        "Members": [
            {
                "Name": "Prof.(Dr.) Pushpa Choudhary",
                "Designation": "HOD CSE & Allied Specialized Branches, Galgotias College of Engineering and Technology, Greater Noida"
            },
            {
                "Name": "Prof.(Dr.) Sambit Satpathy",
                "Designation": "Galgotias College of Engineering and Technology, Greater Noida"
            },
            {
                "Name": "Prof. Mohit Chowdhary",
                "Designation": "Galgotias College of Engineering and Technology, Greater Noida"
            },
            {
                "Name": "Prof.(Dr.) Avjeet Singh",
                "Designation": "Galgotias College of Engineering and Technology, Greater Noida"
            },
            {
                "Name": "Prof.(Dr.) Yashveer Singh",
                "Designation": "Galgotias College of Engineering and Technology, Greater Noida"
            }
        ]
    },
    {
        "Category": "Technical Program Chair",
        "Members": [
            {
                "Name": "Prof.(Dr.) Arvinda Kushwaha",
                "Designation": "Galgotias College of Engineering and Technology, Greater Noida"
            }
        ]
    },
    {
        "Category": "Publication Chair",
        "Members": [
            {
                "Name": "Prof.(Dr.) Ramveer Singh",
                "Designation": "Galgotias College of Engineering and Technology, Greater Noida"
            }
        ]
    },
    {
        "Category": "Publication Committee",
        "Members": [
            {
                "Name": "Dr. Tanu Shree",
                "Designation": "Galgotias College of Engineering and Technology, Greater Noida"
            },
            {
                "Name": "Dr. Chitrangada Chaubey",
                "Designation": "Galgotias College of Engineering and Technology, Greater Noida"
            }
        ]
    },
    {
        "Category": "Publicity Chair",
        "Members": [
            {
                "Name": "Prof.(Dr.) Pallavi Goel",
                "Designation": "Galgotias College of Engineering and Technology, Greater Noida"
            }
        ]
    },
    {
        "Category": "Treasurer/Finance Committee",
        "Members": [
            {
                "Name": "Dr. Sanjay Kumar",
                "Designation": "Galgotias College of Engineering and Technology, Greater Noida"
            },
            {
                "Name": "Anuj Kumar Dwivedi",
                "Designation": "Galgotias College of Engineering and Technology, Greater Noida"
            }
        ]
    },
    {
        "Category": "Track Chairs",
        "Members": [
            {
                "Name": "Dr. Arvinda Kushwaha",
                "Designation": "Data Communication & Networks, Galgotias College of Engineering and Technology, Greater Noida"
            },
            {
                "Name": "Prof.(Dr.) Sanjay Kumar",
                "Designation": "Artificial Intelligence & Expert Systems, Galgotias College of Engineering and Technology, Greater Noida"
            },
            {
                "Name": "Prof.(Dr.) Sachin Kumar",
                "Designation": "Sustainable Technology, Galgotias College of Engineering and Technology, Greater Noida"
            },
            {
                "Name": "Prof.(Dr.) Ramveer Singh",
                "Designation": "Data & System Security, Galgotias College of Engineering and Technology, Greater Noida"
            },
            {
                "Name": "Prof.(Dr.) Sachi Gupta",
                "Designation": "Computer Vision & Learning, Galgotias College of Engineering and Technology, Greater Noida"
            },
            {
                "Name": "Dr. Sunil Kumar",
                "Designation": "Data Analytics & Internet of Things, Galgotias College of Engineering and Technology, Greater Noida"
            }
        ]
    },
    {
        "Category": "Website Committee",
        "Members": [
            {
                "Name": "Devraj",
                "Designation": "Assistant Professor, CSE, Galgotias College of Engineering and Technology, Greater Noida"
            },
            {
                "Name": "Amit Pratap Singh",
                "Designation": "Assistant Professor, CSE, Galgotias College of Engineering and Technology, Greater Noida"
            }
        ]
    },
    {
        "Category": "Technical Program Committee & Advisory Committee",
        "Members": [
            {
                "Name": "Prof. Ravi Shankar Singh",
                "Designation": "Department of Computer Science and Engineering, Indian Institute of Technology, IIT BHU, Varanasi"
            },
            {
                "Name": "Prof. Vivek Kumar Singh",
                "Designation": "University of Delhi"
            },
            {
                "Name": "Prof. Divakar Yadav",
                "Designation": "IGNOU, Delhi"
            },
            {
                "Name": "Prof. Deo Prakash Vidyarthi",
                "Designation": "JNU, Delhi"
            },
            {
                "Name": "Dr. Anand Sharma",
                "Designation": "MNNIT, Allahabad"
            },
            {
                "Name": "Dr. Rajiv Kumar Singh",
                "Designation": "IET, Lucknow"
            },
            {
                "Name": "Dr. Anshul Verma",
                "Designation": "BHU, Varanasi"
            },
            {
                "Name": "Dr. Avinash Kumar Pandey",
                "Designation": "IIIT, Lucknow"
            }
        ]
    }
];

    return (
        <>
            <Head>
                <title>Organizing Committee - ICRTICC - Galgotias College of Engineering</title>
                <meta name="title" content="Organizing Committee - ICRTICC - Galgotias College of Engineering and Technology" />
                <meta name="description"
                    content="Organizing Committee - International Conference on Recent Trends in Intelligent Computing and Communication- ICRTICC" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />

                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://ICRTICC.com/" />
                <meta property="og:title" content="Organizing Committee - ICRTICC - Galgotias College of Engineering and Technology" />
                <meta name="description"
                    content="Organizing Committee - International Conference on Recent Trends in Intelligent Computing and Communication- ICRTICC" />
                <meta property="og:image"
                    content="https://ICRTICC.com/api/og" />


                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:url" content="https://ICRTICC.com/" />
                <meta property="Organizing Committee - twitter:title" content="Organizing Committee - ICRTICC - Galgotias College of Engineering and Technology" />
                <meta property="twitter:description"
                    content="Organizing Committee - International Conference on Recent Trends in Intelligent Computing and Communication- ICRTICC" />
                <meta property="twitter:image"
                    content="https://ICRTICC.com/api/og" />
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
