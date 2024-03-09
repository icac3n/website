import {StarterLayout} from "layout";
import Head from "next/head";
import React from "react";
import Button from "@/components/button";

const callForPapers = () => {

    return (
        <>

            <Head>
                <title>Call for Paper - ICAC3N - Galgotias College of Engineering and Technology</title>
                <meta name="title" content="Call for Paper - ICAC3N - Galgotias College of Engineering and Technology"/>
                <meta name="description"
                      content="Call for Paper - 5th International Conference on Advances in Computing, Communication Control and Networking- ICAC3N"/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <link rel="icon" href="/favicon.ico"/>

                <meta property="og:type" content="website"/>
                <meta property="og:url" content="https://icac3n.in/"/>
                <meta property="og:title" content="Call for Paper - ICAC3N - Galgotias College of Engineering and Technology"/>
                <meta name="description"
                      content="Call for Paper - 5th International Conference on Advances in Computing, Communication Control and Networking- ICAC3N"/>
                <meta property="og:image"
                      content="https://icac3n.in/api/og"/>


                <meta property="twitter:card" content="summary_large_image"/>
                <meta property="twitter:url" content="https://icac3n.in/"/>
                <meta property="Call for Paper - twitter:title" content="Call for Paper - ICAC3N - Galgotias College of Engineering and Technology"/>
                <meta property="twitter:description"
                      content="Call for Paper - 5th International Conference on Advances in Computing, Communication Control and Networking- ICAC3N"/>
                <meta property="twitter:image"
                      content="https://icac3n.in/api/og"/>
            </Head>
            <div className={"prose mx-4 my-8"}>
                <h1 className={"heading"}>Call for Papers</h1>
                <p>Authors are solicited to contribute to the conference by submitting articles that illustrate research
                    results- projects, surveying works and industrial experiences that describe significant advances in
                    computing, communication control and Networking. Topics of interest for submission include, but are not
                    limited to:</p>
    
                <ul>
                    <li>Data Analytics, Data Science and Data Mining</li>
                    <li>Machine Learning And Its Application</li>
                    <li>Big Data Mining and Deep Learning</li>
                    <li>Machine Learning &amp; Deep Learning in Image Processing</li>
                    <li>Artificial Intelligence with Internet of Things</li>
                    <li>Internet of Things (IOT) with Robotics and Automation</li>
                    <li>Artificial Intelligence with Natural Language Processing and Fuzzy Logic</li>
                    <li>Artificial Neural Networks and Convolution Neural Networks</li>
                    <li>Signals and Systems, VLSI Design, Antennas &amp; Embedded Systems</li>
                    <li>Computer Networks, Wireless Sensor Networks and Mobile Communication</li>
                    <li>Network Security, Internet of Things (IoT) Security, Cloud Security and Cyber Security</li>
                    <li>Parallel and Distributed Systems, Cloud Computing, Green Computing &amp; Block Chain Technology</li>
                    <li>Computer Systems, Software Engineering &amp; Web Development</li>
                    <li>Image / Video Processing &amp; Data Compression</li>
                    <li>Control Systems &amp; Automation, IoT with Control Systems &amp; Information Systems</li>
                    <li>Machine Learning &amp; Deep Learning with Cyber Security</li>
                    <li>Researches and Innovations on COVID-19</li>
                </ul>

                {/*<Button link={"https://cmt3.research.microsoft.com/ICAC3N2023"} className={''} hideIcon={null}> Submit a Paper</Button>*/}
            </div>
        </>
    )

}

export default callForPapers;