import Button from "@/components/button";
import Head from "next/head";
import React from "react";

const TechnicalProgramCommittee = () => {

    const technicalProgramCommittee = [
        {
            "Category": "Technical Program Committee",
            "Members": [
                "Prof. Parmanand, SU, Gr.Noida",
                "Prof. Rajiv Saxena, Jaypee University",
                "Prof S.S. Bhaudaria, MITS Gwalior",
                "Prof. Himanshu Mishra, MEGDF, Hyderabad",
                "Prof. Prabhod Vajpayee, IIT Kharagpur",
                "Prof. B Kalyan Kumar, IIT Chennai",
                "Prof. Bharat Singh Rajpurohit, IIT Mandi",
                "Prof. Naran M. Pindoria, IIT Gandhi Nagar",
                "Prof. R C Bansal, Univ. of Pretoria, South Africa",
                "Prof. Prof. Sanjay Gairola, NIET, Gr. Noida",
                "Prof. O P Rahi, NIT, Hamirpur",
                "Prof. D. K. Caturvedi, DEI, Agra",
                "Prof. Shailesh Tiwari, ABESEC, Ghaziabad",
                "Prof. Seema Arora, WCAS, Muscut, Oman",
                "Prof. Arun K. Verma, MNIT, Jaipur",
                "Prof. Abhishesk Swaroop, BPIT, Delhi",
                "Prof. Neetesh Purohit, IIIT, Allahabad",
                "Prof. Neelendra Badal,KNIT Sultanpur",
                "Prof. Jawar Singh, IIITDM Jabalpur",
                "Prof. Buddha Singh, JNU, Delhi",
                "Prof. J. K Verma, Amity University, Gurugram",
                "Prof. Ratnesh Litoriya, Jaypee University",
                "Prof. Manjeet Singh, Dept.of Higher Education, Govt. of Haryana",
                "Prof. Aditya Dev Mishra, DIT, Dehradun"
            ]
        }
    ]

    return(
        <>
            <Head>
                <title>Technical Program Committee - ICAC3N - Galgotias College of Engineering</title>
                <meta name="title" content="Technical Program Committee - ICAC3N - Galgotias College of Engineering and Technology"/>
                <meta name="description"
                      content="Technical Program Committee - 5th International Conference on Advances in Computing, Communication Control and Networking- ICAC3N"/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <link rel="icon" href="/favicon.ico"/>

                <meta property="og:type" content="website"/>
                <meta property="og:url" content="https://icac3n.in/"/>
                <meta property="og:title" content="Technical Program Committee - ICAC3N - Galgotias College of Engineering and Technology"/>
                <meta name="description"
                      content="Technical Program Committee - 5th International Conference on Advances in Computing, Communication Control and Networking- ICAC3N"/>
                <meta property="og:image"
                      content="https://icac3n.in/api/og"/>


                <meta property="twitter:card" content="summary_large_image"/>
                <meta property="twitter:url" content="https://icac3n.in/"/>
                <meta property="Technical Program Committee - twitter:title" content="Technical Program Committee - ICAC3N - Galgotias College of Engineering and Technology"/>
                <meta property="twitter:description"
                      content="Technical Program Committee - 5th International Conference on Advances in Computing, Communication Control and Networking- ICAC3N"/>
                <meta property="twitter:image"
                      content="https://icac3n.in/api/og"/>
            </Head>
            <div className={"prose mx-4"}>
                <h1 className={"heading"}>Technical Program Committee</h1>
                {
                        technicalProgramCommittee.map((committee, index) => {
                        return(
                            <div key={index}>
                                <ul>
                                    {
                                        committee.Members.map((member, index) => {
                                            return(
                                                <li key={index}>
                                                    {member}
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
        </>
    )
}
export default TechnicalProgramCommittee;