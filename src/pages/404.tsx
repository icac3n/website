import React from "react";
import Button from "@/components/button";

const callForPapers = () => {

    return (
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
    )

}

export default callForPapers;