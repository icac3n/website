import React from "react";
import Button from "@/components/button";
import Head from "next/head";

const callForPapers = () => {

    return (
        <>
            <Head>
                <title>404 - ICAC3N - Galgotias College of Engineering</title>
                <meta name="title" content="404 - ICAC3N - Galgotias College of Engineering and Technology"/>
                <meta name="description"
                      content="404 - 5th International Conference on Advances in Computing, Communication Control and Networking- ICAC3N"/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <link rel="icon" href="/favicon.ico"/>

                <meta property="og:type" content="website"/>
                <meta property="og:url" content="https://icac3n.in/"/>
                <meta property="og:title" content="404 - ICAC3N - Galgotias College of Engineering and Technology"/>
                <meta name="description"
                      content="404 - 5th International Conference on Advances in Computing, Communication Control and Networking- ICAC3N"/>
                <meta property="og:image"
                      content="https://icac3n.in/api/og"/>


                <meta property="twitter:card" content="summary_large_image"/>
                <meta property="twitter:url" content="https://icac3n.in/"/>
                <meta property="404 - twitter:title" content="404 - ICAC3N - Galgotias College of Engineering and Technology"/>
                <meta property="twitter:description"
                      content="404 - 5th International Conference on Advances in Computing, Communication Control and Networking- ICAC3N"/>
                <meta property="twitter:image"
                      content="https://icac3n.in/api/og"/>
            </Head>
            <div className={"min-h-screen flex items-center justify-center"}>
                <section className="flex items-center h-full p-16 dark:bg-gray-900 dark:text-gray-100">
                    <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
                        <div className="max-w-md text-center">
                            <h2 className="mb-8 font-extrabold text-9xl text-red-800">
                                <span className="sr-only">Error</span>404
                            </h2>
                            <p className="text-2xl font-semibold md:text-3xl">Sorry, we could not find this page.</p>
                            <p className="mt-4 mb-8 dark:text-gray-400">But dont worry, you can find plenty of other things
                                on our homepage.</p>
                            <Button link={"/"}>Back to Homepage</Button>
                        </div>
                    </div>
                </section>
            </div>
        </>
    
)

}

export default callForPapers;