import React from "react";
import {speakers} from "@/data/speakers";
import Head from "next/head";

const Speakers = () => {

    return (
        <>
            <Head>
                <title>Speakers - ICAC3N - Galgotias College of Engineering and Technology</title>
                <meta name="title" content="Speakers - ICAC3N - Galgotias College of Engineering"/>
                <meta name="description"
                      content="Speakers - 5th International Conference on Advances in Computing, Communication Control and Networking- ICAC3N"/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <link rel="icon" href="/favicon.ico"/>

                <meta property="og:type" content="website"/>
                <meta property="og:url" content="https://icac3n.in/"/>
                <meta property="og:title" content="Speakers - ICAC3N - Galgotias College of Engineering"/>
                <meta name="description"
                      content="Speakers - 5th International Conference on Advances in Computing, Communication Control and Networking- ICAC3N"/>
                <meta property="og:image"
                      content="https://icac3n.in/api/og"/>


                <meta property="twitter:card" content="summary_large_image"/>
                <meta property="twitter:url" content="https://icac3n.in/"/>
                <meta property="twitter:title" content="Speakers - ICAC3N - Galgotias College of Engineering"/>
                <meta property="twitter:description"
                      content="Speakers - 5th International Conference on Advances in Computing, Communication Control and Networking- ICAC3N"/>
                <meta property="twitter:image"
                      content="https://icac3n.in/api/og"/>
            </Head>
            <div className={"my-8 min-h-[calc(100vh-28.8rem)]"}>
                <h1 className={'text-3xl font-bold text-center mb-10'}>Past Speakers of ICACCCN 2023</h1>
                <div className={'grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-x-5 gap-y-8 px-5'}>
                    {
                        speakers.map((speaker, index) => {
                            return (
                                <div key={index}
                                     className={'col-span-1 shadow-md grid grid-cols-3 gap-3 bg-gray-100 rounded-lg'}>
                                    <div className={'col-span-1 w-full h-44'}>
                                        <img src={speaker.image} className={'h-full w-full object-cover rounded-lg '} alt={speaker.name}/>
                                    </div>
                                    <div className={"flex flex-col gap-1 col-span-2 my-2"}>
                                        <div className={"py-2"}>
                                            {!speaker.national &&
                                                <div
                                                    className={"rounded-full w-fit font-semibold bg-blue-800 bg-opacity-20"}>
                                                    <p className={"px-2 py-0.5 text-sm text-blue-800"}>International
                                                        Speaker</p>
                                                </div>
                                            }
                                            {
                                                speaker.national &&
                                                <div
                                                    className={"rounded-full font-semibold w-fit bg-amber-600 bg-opacity-20"}>
                                                    <p className={"px-2 py-0.5 text-sm text-amber-800"}>National Speaker</p>
                                                </div>
                                            }
                                        </div>
                                        <span className={'font-semibold text-lg'}>{speaker.name}</span>
                                        <span
                                            className={'font-light text-xs pr-2'}>{speaker.designation}</span>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
                {/*<h1 className={'text-lg text-center w-full'}>*/}
                {/*    Yet to be announced*/}
                {/*</h1>*/}
            </div>
        </>
    )
}

export default Speakers