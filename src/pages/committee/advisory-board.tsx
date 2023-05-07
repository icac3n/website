import Button from "@/components/button";
import Head from "next/head";
import React from "react";

const AdvisoryBorad = () => {

    const technicalProgramCommittee = [
        {
            "Category": "Technical Program Committee",
            "Members": [
                "Prof. S. C. Srivastava, IIT Kanpur",
                "Prof. J. Ram Kumar, IIT Kanpur",
                "Prof. Vivekanand Mukherjee, ISM, Dhanbad",
                "Prof. Fushuan Wen, China",
                "Prof. Malay Kishore Dutta, AKTU",
                "Prof. Avadhesh Kumar –PVC,GU",
                "Prof. Anurag Srivastava, WS University, USA",
                "Prof. Parmanand, SU, Gr.Noida",
                "Prof. Jai Govind, AIT, Bangkok",
                "Prof. Brij N. Singh, North Dakota, USA",
                "Prof. K. P. Wang, Sydney University, Australia",
                "Prof. Istovan Erlich, DE University, Germany",
                "Prof. L Lai, City University, London",
                "Prof. K. N. Srivastava, ABB Sweden",
                "Prof. Ambrish Chandra, Montreal Canada",
                "Prof. D. S. Chauhan, Vice Chancellor, GLA University, Mathura",
                "Prof. Bhim Singh, Chairman, IEEE Delhi Section, IITD, India",
                "Prof. Shailesh Tiwari, ABESEC, Ghaziabad",
                "Prof. Dilip Sharma, GLA University, Mathura",
                "Prof. Rajiv Saxena, Jaypee University",
                "Prof. S. S. Bhaudaria, MITS, Gwalior",
                "Prof. N. P. Padhy, IIT Rorkee",
                "Prof. Avadhesh Kumar, PVC, GU, Gr. Noida.",
                "Prof. Sukumar Mishra, IIT Delhi",
                "Prof. A. N. Tiwari, MMMTU, Gorakhpur",
                "Prof. Asheesh Singh, MNNIT, Allahabad",
                "Prof. S. K. Singh, IIIT, Allahabad",
                "Prof. Neetesh Purohit, IIIT, Allahabad",
                "Prof. Neelendra Badal, KNIT Sultanpur",
                "Prof. Jawar Singh, IIITDM, Jabalpur",
                "Prof. Mini S. Thomas, JMI, New Delhi",
                "Prof. Shivaji Chakraborthy, JU, West Bengal",
                "Prof. Kwang Lee, BB University, USA",
                "Prof. Praveen Maduri, GCET, Greater Noida",
                "Prof. Brijesh Singh, GCET, Greater Noida",
                "Prof. Lakshmanan M, GCET, Greater Noida",
                "Prof. Mohd Asim Qadri, GCET, Greater Noida",
                "Prof. Rajni Saggu, GCET Greater Noida",
                "Prof. Md. Danish Equbal, GCET, Greater Noida",
                "Prof. A. Ambikapathy, GCET, Greater Noida",
                "Prof. Sansar Singh Chauhan, GU, Greater Noida",
                "Prof. Sanjay Chauhan, GU, Greater Noida",
                "Prof. Usha Chauhan,  GU,  Greater Noida",
                "Prof. Sanjeev Pippal,  GL Bajaj, Greater Noida",
                "Prof. Ajay Shankar Singh, GU, Greater Noida",
                "Prof. Prashant Jhori, GU, Greater Noida",
                "Prof. Thirunavukkarasu K, GU, Greater Noida",
                "Prof. J N Singh, GU, Greater Noida",
                "Prof. Rani Astya, SU, Greater Noida",
                "Prof. Anurag Dixit, GU, Greater Noida",
                "Prof. Nikhil Marriwala, UIET, Kurukshetra University",
                "Prof. Sanjoy Das, IGNTU, Manipur"
            ]
        }
    ]

    return(
        <>
            <Head>
                <title>Advisory Board - ICAC3N - Galgotias College of Engineering</title>
                <meta name="title" content="Advisory Board - ICAC3N - Galgotias College of Engineering and Technology"/>
                <meta name="description"
                      content="Advisory Board - 5th International Conference on Advances in Computing, Communication Control and Networking- ICAC3N"/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <link rel="icon" href="/favicon.ico"/>

                <meta property="og:type" content="website"/>
                <meta property="og:url" content="https://icac3n.in/"/>
                <meta property="og:title" content="Advisory Board - ICAC3N - Galgotias College of Engineering and Technology"/>
                <meta name="description"
                      content="Advisory Board - 5th International Conference on Advances in Computing, Communication Control and Networking- ICAC3N"/>
                <meta property="og:image"
                      content="https://icac3n.in/api/og"/>


                <meta property="twitter:card" content="summary_large_image"/>
                <meta property="twitter:url" content="https://icac3n.in/"/>
                <meta property="Advisory Board - twitter:title" content="Advisory Board - ICAC3N - Galgotias College of Engineering and Technology"/>
                <meta property="twitter:description"
                      content="Advisory Board - 5th International Conference on Advances in Computing, Communication Control and Networking- ICAC3N"/>
                <meta property="twitter:image"
                      content="https://icac3n.in/api/og"/>
            </Head>
            <div className={"prose mx-4"}>
                <h1 className={"heading"}>Advisory Board</h1>
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
export default AdvisoryBorad;