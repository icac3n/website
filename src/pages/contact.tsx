import Head from "next/head";
import React from "react";

const Register = () => {

    return (
        <>

            <Head>
                <title>Contact - ICAC3N - Galgotias College of Engineering and Technology</title>
                <meta name="title" content="Contact - ICAC3N - Galgotias College of Engineering and Technology"/>
                <meta name="description"
                      content="Contact - 5th International Conference on Advances in Computing, Communication Control and Networking- ICAC3N"/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <link rel="icon" href="/favicon.ico"/>

                <meta property="og:type" content="website"/>
                <meta property="og:url" content="https://icac3n.in/"/>
                <meta property="og:title" content="Contact - ICAC3N - Galgotias College of Engineering and Technology"/>
                <meta name="description"
                      content="Contact - 5th International Conference on Advances in Computing, Communication Control and Networking- ICAC3N"/>
                <meta property="og:image"
                      content="https://icac3n.in/api/og"/>


                <meta property="twitter:card" content="summary_large_image"/>
                <meta property="twitter:url" content="https://icac3n.in/"/>
                <meta property="Contact - twitter:title" content="Contact - ICAC3N - Galgotias College of Engineering and Technology"/>
                <meta property="twitter:description"
                      content="Contact - 5th International Conference on Advances in Computing, Communication Control and Networking- ICAC3N"/>
                <meta property="twitter:image"
                      content="https://icac3n.in/api/og"/>
            </Head>
            <div className={"prose px-4 my-8"}>
                <h1 className={"heading"}>Contact Us </h1>
                <p>Please fill the provided form, and we will get back to you as soon as possible.</p>
                <form action="#" className="space-y-8">
                    <div>
                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your
                            email *</label>
                        <input disabled={true} type="email" id="email"
                               className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500 dark:shadow-sm-light"
                               placeholder="name@acme.com" required/>
                    </div>
                    <div>
                        <label htmlFor="subject"
                               className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Subject *</label>
                        <input disabled={true} type="text" id="subject"
                               className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-red-500 focus:border-red-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500 dark:shadow-sm-light"
                               placeholder="Let us know how we can help you" required/>
                    </div>
                    <div className="sm:col-span-2">
                        <label htmlFor="message"
                               className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Your
                            message *</label>
                        <textarea disabled={true} id="message" rows={6}
                                  className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-red-500 focus:border-red-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500"
                                  placeholder="Leave a comment..."></textarea>
                    </div>
                    <button disabled={true} type="submit"
                            className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-red-700 sm:w-fit hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800">Submit
                    </button>
                </form>
                <hr className="h-px my-5 bg-gray-200 border-0 dark:bg-gray-700"/>
                {/* <h1 className={"heading"}>Get in Touch</h1>
                <p>You can contact us on any of the following platforms, and we will get back to you.</p>
                <table className="table-auto">
                    <tbody>
                    <tr>
                        <td>Email</td>
                        <td><a href="mailto:">icac3n23@gmail.com</a></td>
                    </tr>
                    <tr>
                        <td>Contact No.</td>
                        <td><a href="tel:">+91-7835878146</a></td>
                    </tr>
                    <tr>
                        <td>Email:</td>
                        <td><a href="mailto:">vishnu.sharma@galgotiacollege.edu</a></td>
                    </tr>
                    </tbody>
                </table> */}
                {/* <hr className="h-px my-5 bg-gray-200 border-0 dark:bg-gray-700"/> */}
                <h1 className={"heading"}>Location</h1>
                <p><strong>Galgotias College of Engineering and Technology</strong>, 1, Knowledge Park II, Greater
                    Noida,
                    Uttar Pradesh 201310</p>
                <div className={"shadow-md w-fit rounded-md overflow-clip"}>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3507.738221246928!2d77.49505052708089!3d28.45730667576092!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cc1dc8b29c0e1%3A0x4ee84fe65c694f0!2sGALGOTIAS%20COLLEGE%20OF%20ENGINEERING%20AND%20TECHNOLOGY%2C%20Knowledge%20Park%20II%2C%20Greater%20Noida%2C%20Uttar%20Pradesh%20201310!5e0!3m2!1sen!2sin!4v1682150875715!5m2!1sen!2sin"
                        height="450" width="600" allowFullScreen={false} loading="lazy"
                        className={'max-w-[95vw]'}
                        referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
        </>
    )

}

export default Register;