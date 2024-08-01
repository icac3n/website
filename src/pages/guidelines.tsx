import {StarterLayout} from "layout";
import Button from "@/components/button";
import Head from "next/head";
import React from "react";

const Guidelines = () => {

    return (
        <>

            <Head>
                <title>Guidelines - ICRTICC - Galgotias College of Engineering and Technology</title>
                <meta name="title" content="Guidelines - ICRTICC - Galgotias College of Engineering and Technology"/>
                <meta name="description"
                      content="Guidelines - International Conference on Recent Trends in Intelligent Computing and Communication- ICRTICC"/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <link rel="icon" href="/favicon.ico"/>

                <meta property="og:type" content="website"/>
                <meta property="og:url" content="https://ICRTICC.com/"/>
                <meta property="og:title" content="Guidelines - ICRTICC - Galgotias College of Engineering and Technology"/>
                <meta name="description"
                      content="Guidelines - International Conference on Recent Trends in Intelligent Computing and Communication- ICRTICC"/>
                <meta property="og:image"
                      content="https://ICRTICC.com/api/og"/>


                <meta property="twitter:card" content="summary_large_image"/>
                <meta property="twitter:url" content="https://ICRTICC.com/"/>
                <meta property="Guidelines - twitter:title" content="Guidelines - ICRTICC - Galgotias College of Engineering and Technology"/>
                <meta property="twitter:description"
                      content="Guidelines - International Conference on Recent Trends in Intelligent Computing and Communication- ICRTICC"/>
                <meta property="twitter:image"
                      content="https://ICRTICC.com/api/og"/>
            </Head>
            <div className={"prose mx-4 my-8"}>
                <h1 className={"heading"}>Submission Guidelines</h1>
                <h3>Complete guidelines not updated yet</h3>
                {/* <p>Authors are solicited to contribute to the conference by submitting articles that illustrate research
                    results- projects, surveying works and industrial experiences that describe significant advances in
                    computing, communication and Automation. Topics of interest for submission include, but are not limited
                    to:</p>
                <ul>
                    <li> Evolutionary Computing, Distributed and Parallel Processing, Cloud and Green Computing, IOT, Data
                        Mining, Advance Database Management System
                    </li>
                    <li>Big Data, Data Analysis, Machine Learning and Artificial Intelligence, Mobile Computing, Artificial
                        Neural Network, MANETs, Computer Networking
                    </li>
                    <li>Cyber security, Virtual Reality, Network Security, WSN, Multimedia Applications</li>
                    <li>Web Intelligence & Semantics</li>

                    <li> Ubiquitous Computing & Networking</li>

                    <li> Software Engineering & Information Systems</li>

                    <li> Intelligent Systems & Automation</li>

                    <li> Hardware design & Communication</li>

                    <li> Signal & Image Processing, VLSI Design</li>

                    <li> Wireless Sensor Networks, Security</li>

                    <li> Robotics & Automation</li>

                    <li> Communication Network and Systems</li>

                    <li> Smart Grid Technologies</li>

                    <li> Smart buildings Technologies</li>

                    <li>New Measurement technologies and Application, Fuzzy & Neural Networks</li>

                    <p>Interested authors are invited to submit full papers including results, figures and references.
                        Papers will be accepted only by electronic submission through easy-chair link given below</p> */}

                    {/* <Button link={"https://cmt3.research.microsoft.com/ICRTICC2023"} className={''} hideIcon={null}> Submit a Paper</Button>
                    <p>Authors need to submit the full final paper (Maximum 6 pages, double-column US letter size) as PDF
                        using the IEEE templates. Extra pages beyond this would require additional page length charges. The
                        additional payment required for extra pages is Rs.2000/page for Indian authors of all categories and
                        USD 40/page for all categories of foreign authors. The IEEE paper template can be downloaded from
                        the link given below.</p>

                    <Button className={''} hideIcon={null} link={"/documents/PAPER_ID_ICRTICC23.docx"}> Download IEEE Conference Template
                    </Button> */}
                    <h2 className={"heading"}>Plagiarism Policy</h2>
                    <p>ICRTICC-23 takes plagiarism very seriously and regard plagiarism as a professional misconduct. Papers
                        will be screened for plagiarism and when identified the paper will be rejected.</p>

                    <h2 className={"heading"}>Important Message</h2>
                    <ol>
                        <li>ICRTICC conference organizers have zero tolerance against plagiarism and paper formatting as per
                            IEEE template. If author found violating registration guidelines and instructions provided from
                            time to time at any stage during publication the registration of paper will be cancelled.
                        </li>
                        <li>Transfer of e-copyright and presenting paper in conference is mandatory.
                        </li>
                        <li>Corresponding author (as per CMT) keep checking their e-mail regularly (including spam) in this
                            regard and for supplying any other desired information on time.
                        </li>
                        <li>Registration fee once paid is non refundable.</li>
                    </ol>
                </ul>
            </div>
        </>
    )

}

export default Guidelines;