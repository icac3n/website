import Button from "@/components/button";

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
    )
}
export default AdvisoryBorad;