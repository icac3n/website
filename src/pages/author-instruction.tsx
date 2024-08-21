import { StarterLayout } from "layout";
import Head from "next/head";
import React from "react";
import Button from "@/components/button";

const callForPapers = () => {

    return (
        <>

            <Head>
                <title>Call for Paper - ICRTICC - Galgotias College of Engineering and Technology</title>
                <meta name="title" content="Call for Paper - ICRTICC - Galgotias College of Engineering and Technology" />
                <meta name="description"
                    content="Call for Paper - International Conference on Recent Trends in Intelligent Computing and Communication- ICRTICC" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />

                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://ICRTICC.com/" />
                <meta property="og:title" content="Call for Paper - ICRTICC - Galgotias College of Engineering and Technology" />
                <meta name="description"
                    content="Call for Paper - International Conference on Recent Trends in Intelligent Computing and Communication- ICRTICC" />
                <meta property="og:image"
                    content="https://ICRTICC.com/api/og" />


                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:url" content="https://ICRTICC.com/" />
                <meta property="Call for Paper - twitter:title" content="Call for Paper - ICRTICC - Galgotias College of Engineering and Technology" />
                <meta property="twitter:description"
                    content="Call for Paper - International Conference on Recent Trends in Intelligent Computing and Communication- ICRTICC" />
                <meta property="twitter:image"
                    content="https://ICRTICC.com/api/og" />
            </Head>
            <div className={"prose mx-4 my-8"}>
                <header>
                    <h1 className={"heading"}>Author Instruction</h1>
                </header>

                <section>
                    <p>The authors are instructed to follow the Taylor and Francis template for typesetting and content formatting. The templates can be found here:</p>
                    <ul>
                        <li>
                            <Button link={"/documents/Submission_Format_Doc.zip"} className={''} hideIcon={null}>Document Template</Button>
                        </li>
                        <li>
                            <Button link={"/documents/Submission_Format_LaTeX.zip"} className={''} hideIcon={null}>LaTeX Template</Button>
                        </li>
                        <li>
                            <Button link={"/documents/copyright_ICRTICC-2025.pdf"} className={''} hideIcon={null}>Copyright Form</Button>
                        </li>
                    </ul>
                </section>

                <section>
                    <h2>General Guidelines for Paper Submission</h2>
                    <ul>
                        <li><strong>Maximum Pages Allowed</strong>: 6 (Six)</li>
                        <li><strong>Maximum Number of Authors Allowed</strong>: 6 (Six)</li>
                        <li><strong>Maximum Text Plagiarism Allowed</strong>: 10%</li>
                        <li><strong>Maximum AI Plagiarism Allowed</strong>: 5%</li>
                    </ul>
                </section>

                <section>
                    <h2>Formatting Requirements</h2>
                    <p>Ensure your paper follows the formatting guidelines as per the link provided above. The Taylor and Francis conference template provided typically includes font size, margins, line spacing, and citation style.</p>
                </section>

                <section>
                    <h2>Title and Abstract</h2>
                    <p>Craft a clear and descriptive title for your paper. Write an informative abstract that summarizes the main objectives, methods, results, and conclusions of your research.</p>
                </section>

                <section>
                    <h2>Keywords</h2>
                    <p>Include a list of keywords that accurately represent the content of your paper. These keywords help index your paper for search engines and databases.</p>
                </section>

                <section>
                    <h2>Introduction</h2>
                    <p>Provide a comprehensive introduction that outlines the background, significance, and objectives of your research. Clearly state the research questions or hypotheses.</p>
                </section>

                <section>
                    <h2>Methods</h2>
                    <p>Describe the methodology and techniques used in your study in sufficient detail to allow replication. Include information on data collection, analysis, and any experimental procedures.</p>
                </section>

                <section>
                    <h2>Results</h2>
                    <p>Present your findings clearly and concisely. Use tables, figures, and graphs where appropriate to enhance understanding.</p>
                </section>

                <section>
                    <h2>Discussion</h2>
                    <p>Interpret your results and discuss their implications. Compare your findings with existing literature and explain any limitations or future directions for research.</p>
                </section>

                <section>
                    <h2>Conclusion</h2>
                    <p>Summarize the main findings of your study and restate the importance of your research in the broader context.</p>
                </section>

                <section>
                    <h2>References</h2>
                    <p>Cite all sources used in your paper accurately. Follow the citation style specified by the journal or conference guidelines.</p>
                </section>

                <section>
                    <h2>Ethical Considerations</h2>
                    <p>Ensure your research complies with ethical standards, including obtaining necessary permissions for data collection and respecting participant confidentiality.</p>
                </section>

                <section>
                    <h2>Proofreading</h2>
                    <p>Proofread your paper carefully for grammar, spelling, and formatting errors. Consider seeking feedback from colleagues or mentors before submission.</p>
                </section>

                <section>
                    <h2>Submit your article</h2>
                    <Button link={"#"} className={''} hideIcon={null}>Comming Soon</Button>
                </section>

            </div>
        </>
    )

}

export default callForPapers;