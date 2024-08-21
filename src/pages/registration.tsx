import Button from "@/components/button";
import Head from "next/head";
import React from "react";

const Register = () => {

    return (
        <>

            <Head>
                <title>Register - ICRTICC - Galgotias College of Engineering and Technology</title>
                <meta name="title" content="Register - ICRTICC - Galgotias College of Engineering" />
                <meta name="description"
                    content="Register - International Conference on Recent Trends in Intelligent Computing and Communication- ICRTICC" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />

                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://ICRTICC.com/" />
                <meta property="og:title" content="Register - ICRTICC - Galgotias College of Engineering" />
                <meta name="description"
                    content="Register - International Conference on Recent Trends in Intelligent Computing and Communication- ICRTICC" />
                <meta property="og:image"
                    content="https://ICRTICC.com/api/og" />


                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:url" content="https://ICRTICC.com/" />
                <meta property="twitter:title" content="Register - ICRTICC - Galgotias College of Engineering" />
                <meta property="twitter:description"
                    content="Register - International Conference on Recent Trends in Intelligent Computing and Communication- ICRTICC" />
                <meta property="twitter:image"
                    content="https://ICRTICC.com/api/og" />
            </Head>
            <div className={"prose mx-4 my-8"}>
                <header>
                    <h1 className={"heading"}>Registration Fees</h1>
                </header>

                <section>
                    <table>
                        <thead>
                            <tr>
                                <th>Category</th>
                                <th>Fees</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Student/ Research Scholar</td>
                                <td>INR 7000</td>
                            </tr>
                            <tr>
                                <td>Academics</td>
                                <td>INR 8000</td>
                            </tr>
                            <tr>
                                <td>Industry</td>
                                <td>INR 10000</td>
                            </tr>
                            <tr>
                                <td>Foreign Student/ Research Scholar</td>
                                <td>USD 200</td>
                            </tr>
                            <tr>
                                <td>Foreign Academics</td>
                                <td>USD 250</td>
                            </tr>
                            <tr>
                                <td>Foreign Industry</td>
                                <td>USD 300</td>
                            </tr>
                        </tbody>
                    </table>
                </section>

                <section>
                    <h2>Registration Link (Coming Soon)</h2>
                </section>

                <section>
                    <h2 className={"heading"}>Bank Account Details</h2>
                    <p>
                        bank account details for the registration fee payment will be announced soon.
                    </p>

                    <table className="table-auto">
                        <tbody>
                            <tr>
                                <td>Account Number</td>
                                <td>Yet to be announced</td>
                            </tr>
                            <tr>
                                <td>Account Name</td>
                                <td>Yet to be announced</td>
                            </tr>
                            <tr>
                                <td>IFSC Code</td>
                                <td>Yet to be announced</td>
                            </tr>
                            <tr>
                                <td>Swift Code</td>
                                <td>Yet to be announced</td>
                            </tr>
                            <tr>
                                <td>Bank Name</td>
                                <td>Yet to be announced</td>
                            </tr>
                            <tr>
                                <td>Account Type</td>
                                <td>Yet to be announced</td>
                            </tr>
                            <tr>
                                <td>Bank Address</td>
                                <td>Yet to be announced</td>
                            </tr>
                        </tbody>
                    </table>
                </section>
                {/*<Button link={"https://forms.gle/NR6eA7N2Akp9S51XA"}>Register Now</Button>*/}
                {/* <hr className="h-px my-5 bg-gray-200 border-0 dark:bg-gray-700" /> */}
                {/* <h2 className={"heading"}>Registration Fee</h2>
                    <h3>Yet to be Announced</h3> */}
                {/*<div>*/}
                {/*    <img src="images/misc/registration_fee.png" alt=""/>*/}
                {/*    <p>* Including 18% GST</p>*/}
                {/*</div>*/}

                {/* <hr className="h-px my-5 bg-gray-200 border-0 dark:bg-gray-700"/>
                <h2 className={"heading"}>Camera Ready Format</h2>
                <p>Authors are requested to follow the IEEE conference paper format.</p>
                <div className={"flex flex-col space-y-4"}>
                    <Button link={"/documents/PAPER_ID_ICRTICC23.docx"} >Download Docx File</Button>
                    <Button link={"/documents/PAPER_ID_ICRTICC23.pdf"}>Download PDF File</Button>
                </div>

                <hr className="h-px my-5 bg-gray-200 border-0 dark:bg-gray-700"/>
                <h2 className={"heading"}>Sample PPT Format</h2>
                <p>
                    Please follow the below format for the presentation. The presentation should be in the PPT format.
                </p>
                <div className={"flex flex-col space-y-4"}>
                    <Button link={"/documents/SamplePPTICRTICC-2023.pptx"}>Download PPTX File</Button>
                </div>


                <hr className="h-px my-5 bg-gray-200 border-0 dark:bg-gray-700"/>
                <h2 className={"heading"}>Bank Account Details</h2>
                <p>
                    Here are the bank account details for the registration fee payment.
                </p>
                <p><strong>PAYMENT MODE</strong> – NEFT / IMPS / DIRECT DEPOSIT / SWIFT TRANSFER/UPI</p>

                <table className="table-auto">
                    <tbody>
                    <tr>
                        <td>Account Number</td>
                        <td>6420000100006852</td>
                    </tr>
                    <tr>
                        <td>Account Name</td>
                        <td>GALGOTIAS COLLEGE OF ENGINEERING AND TECHNOLOGY</td>
                    </tr>
                    <tr>
                        <td>IFSC Code</td>
                        <td>PUNB0671700
                        </td>
                    </tr>
                    <tr>
                        <td>Swift Code</td>
                        <td>PUNBINBBMSN
                        </td>
                    </tr>
                    <tr>
                        <td>Bank Name</td>
                        <td>PUNJAB NATIONAL BANK
                        </td>
                    </tr>
                    <tr>
                        <td>Account Type</td>
                        <td>Saving</td>
                    </tr>
                    <tr>
                        <td>Bank Address</td>
                        <td>Punjab National Bank, Sector-63 Gautam Buddha Nagar-201301, U.P.</td>
                    </tr>
                    </tbody>
                </table>
                */}
            </div>
        </>
    )

}

export default Register;