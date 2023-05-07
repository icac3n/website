import {StarterLayout} from "layout";
import Button from "@/components/button";
import Head from "next/head";
import React from "react";

const Guidelines = () => {

    return (
        <>

            <Head>
                <title>Guidelines - ICAC3N - Galgotias College of Engineering and Technology</title>
                <meta name="title" content="Guidelines - ICAC3N - Galgotias College of Engineering and Technology"/>
                <meta name="description"
                      content="Guidelines - 5th International Conference on Advances in Computing, Communication Control and Networking- ICAC3N"/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <link rel="icon" href="/favicon.ico"/>

                <meta property="og:type" content="website"/>
                <meta property="og:url" content="https://icac3n.in/"/>
                <meta property="og:title" content="Guidelines - ICAC3N - Galgotias College of Engineering and Technology"/>
                <meta name="description"
                      content="Guidelines - 5th International Conference on Advances in Computing, Communication Control and Networking- ICAC3N"/>
                <meta property="og:image"
                      content="https://icac3n.in/api/og"/>


                <meta property="twitter:card" content="summary_large_image"/>
                <meta property="twitter:url" content="https://icac3n.in/"/>
                <meta property="Guidelines - twitter:title" content="Guidelines - ICAC3N - Galgotias College of Engineering and Technology"/>
                <meta property="twitter:description"
                      content="Guidelines - 5th International Conference on Advances in Computing, Communication Control and Networking- ICAC3N"/>
                <meta property="twitter:image"
                      content="https://icac3n.in/api/og"/>
            </Head>
            <div className={"prose mx-4 my-8"}>
                <h1 className={"heading"}>Submission Guidelines</h1>
                <p>Authors are solicited to contribute to the conference by submitting articles that illustrate research
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
                        Papers will be accepted only by electronic submission through easy-chair link given below</p>

                    <Button link={"https://cmt3.research.microsoft.com/ICAC3N2023"} className={''} hideIcon={null}> Submit a Paper</Button>
                    <p>Authors need to submit the full final paper (Maximum 6 pages, double-column US letter size) as PDF
                        using the IEEE templates. Extra pages beyond this would require additional page length charges. The
                        additional payment required for extra pages is Rs.2000/page for Indian authors of all categories and
                        USD 40/page for all categories of foreign authors. The IEEE paper template can be downloaded from
                        the link given below.</p>

                    <Button className={''} hideIcon={null} link={"/documents/PAPER_ID_ICAC3N23.docx"}> Download IEEE Conference Template
                    </Button>
                    <h2 className={"heading"}>Plagiarism Policy</h2>
                    <p>ICAC3N-23 takes plagiarism very seriously and regard plagiarism as a professional misconduct. Papers
                        will be screened for plagiarism and when identified the paper will be rejected.</p>

                    <h2 className={"heading"}>Important Message</h2>
                    <ol>
                        <li>ICAC3N conference organizers have zero tolerance against plagiarism and paper formatting as per
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