import React from "react";
import Head from "next/head";

const AboutPage = () => {

    return (
        <>
            <Head>
                <title>About - ICRTICC - Galgotias College of Engineering</title>
                <meta name="title" content="About - ICRTICC - Galgotias College of Engineering and Technology" />
                <meta name="description"
                    content="ICRTICC is a prestigious international conference that brings together top researchers, scientists, engineers, and scholars from around the world to share their latest research findings and experiences in computing, communication control, and networking. Featuring keynote speeches, technical sessions, and workshops, the conference covers a wide range of topics such as cloud computing, AI, wireless communication systems, IoT, and cybersecurity. Organized annually by IEEE at various global locations, ICRTICC offers a stimulating platform for participants to network, collaborate and engage with experts in their fields. The conference proceedings are published on IEEE Xplore, making it accessible to researchers and scholars worldwide." />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />

                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://ICRTICC.com/" />
                <meta property="og:title" content="About - ICRTICC - Galgotias College of Engineering and Technology" />
                <meta name="description"
                    content="ICRTICC is a prestigious international conference that brings together top researchers, scientists, engineers, and scholars from around the world to share their latest research findings and experiences in computing, communication control, and networking. Featuring keynote speeches, technical sessions, and workshops, the conference covers a wide range of topics such as cloud computing, AI, wireless communication systems, IoT, and cybersecurity. Organized annually by IEEE at various global locations, ICRTICC offers a stimulating platform for participants to network, collaborate and engage with experts in their fields. The conference proceedings are published on IEEE Xplore, making it accessible to researchers and scholars worldwide." />
                <meta property="og:image"
                    content="https://ICRTICC.com/api/og" />


                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:url" content="https://ICRTICC.com/" />
                <meta property="About - twitter:title" content="About - ICRTICC - Galgotias College of Engineering and Technology" />
                <meta property="twitter:description"
                    content="ICRTICC is a prestigious international conference that brings together top researchers, scientists, engineers, and scholars from around the world to share their latest research findings and experiences in computing, communication control, and networking. Featuring keynote speeches, technical sessions, and workshops, the conference covers a wide range of topics such as cloud computing, AI, wireless communication systems, IoT, and cybersecurity. Organized annually by IEEE at various global locations, ICRTICC offers a stimulating platform for participants to network, collaborate and engage with experts in their fields. The conference proceedings are published on IEEE Xplore, making it accessible to researchers and scholars worldwide." />
                <meta property="twitter:image"
                    content="https://ICRTICC.com/api/og" />
            </Head>
            <div>
                <div className={"prose max-w-screen-lg mx-4"}>
                    <h1 className={"heading"}>About GALGOTIAS EDUCATIONAL INSTITUTIONS (GEI)</h1>
                    <p className={'text-justify'}>
                        Galgotias Educational Institutions (GEI) have been inculcating practical skills and creating ‘Global
                        Professionals’ for more than 18 years. Founded by Smt. Shakuntala Educational and Welfare Society,
                        Galgotia Educational Institutions is currently led by Mr. Suneel Galgotia, Chairman and a resolute
                        visionary. Galgotias College of Engineering & Technology is placed among the best in professional
                        education in Dr. APJ Abdul Kalam Technical University (Formerly U.P. Technical University). It has
                        achieved top positions in MBA, MCA and B.Tech. finals and has a record of 100% placements with the
                        best corporate houses. It has also been ranked amongst the top engineering colleges in India by
                        DATAQUEST NASSCOM survey and OUTLOOK-C For College Survey.
                    </p>
                    <img src={'/aboutGEI.jpg'} alt={'GEI includes'} />
                    <p>
                        Galgotia Educational Institutions combine a supremely empowering educational process, industry
                        stalwarts in their faculty, global educational associations and relentless placement efforts, to
                        offer the best of career opportunities to its students. Galgotia Educational Institutions are known
                        for a combination of state-of-the-art campus, strategic teaching-learning process, together with the
                        most advanced facilities, creating an environment in which wholesome corporate personalities are
                        created.
                    </p>
                </div>
                <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
                <div className={"prose max-w-screen-lg mx-4"}>
                    <h1 className={"heading"}>About GCET</h1>
                    <p className={'text-justify'}>
                        Galgotias College of Engineering and Technologyis approved by AICTE, Ministry of HRD, Government of
                        India and affiliated to Dr. A.P.J. Abdul Kalam Technical University, Lucknow formerly Uttar Pradesh
                        Technical University. Galgotias College of Engineering & Technology, established in 2000, synergizes
                        theoretical knowledge and practical skills to promote all round professional competence. Galgotias
                        College of Engineering & Technology has acquired a unique status in UP, the NCR region and the
                        country as a whole by breaking new grounds in producing professionals of national and international
                        acclaim and has been recognized as one of the top ranking institutions imparting high quality
                        education.
                    </p>
                    <img src={'/gcet.jpg'} alt={'GEI includes'} />
                    <p>
                        The Campus, spread over 19 acres is located on an 8-lane expressway connecting Greater Noida with
                        Noida and New Delhi. It is truly a self-sufficient campus with spacious and beautifully academic
                        buildings, separate, fully secure and comfortable hostels for boys and girls, seminar and conference
                        halls as well as indoor and outdoor games facilities and a multi-cuisine cafeteria.
                    </p>
                </div>


            </div>
        </>
    )

}

export default AboutPage;