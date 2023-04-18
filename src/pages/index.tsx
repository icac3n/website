import Head from 'next/head'
import {StarterLayout} from "@/layout";
import {
    RiCalendarTodoFill,
    RiFacebookBoxFill,
    RiMailFill,
    RiMapPin2Fill,
    RiPhoneFill,
    RiTwitterFill
} from "react-icons/ri";

const Home = () => {
    return (
        <>
            <Head>
                <title>ICAC3N- Galgotias College of Engineering</title>
                <meta name="description" content="Next JS Starter"/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <main className={"px-4 md:px-6 lg:px-10"}>
                {/*    landing   */}
                <div className={"flex lg:flex-row flex-col items-center justify-center lg:text-start text-center"}>
                    <div>
                        <div className={"flex items-center space-x-2 lg:justify-start justify-center"}>
                            <RiCalendarTodoFill className={"hidden lg:block text-red-800"}/>
                            <p className={"text-red-800 font-semibold"}>15th and 16th December 2023</p>
                        </div>

                        <p className={"text-3xl my-3 lg:my-5 font-bold"}>International Conference on Advances in
                            Computing,
                            Communication Control and Networking</p>
                        <div className={"flex items-center space-x-2 lg:justify-start justify-center"}>
                            <RiMapPin2Fill className={"hidden lg:block text-red-800"}/>
                            <div className={"text-red-800"}>
                                <p className={"font-semibold text"}>Galgotias College of Engineering And Technology</p>
                                <p className={"text-sm"}>Knowledge Park I, Greater Noida</p>
                            </div>
                        </div>
                        <div
                            className={"flex space-x-3 text-xl text-red-800 mt-4 items-center lg:justify-start justify-center mb-5"}>
                            <RiTwitterFill/>
                            <RiPhoneFill/>
                            <RiFacebookBoxFill/>
                            <RiMailFill/>
                        </div>
                        {/*<a href="#"*/}
                        {/*   className="inline-flex justify-center items-center py-2.5 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">*/}
                        {/*    Read more*/}
                        {/*    <svg aria-hidden="true" className="ml-2 -mr-1 w-4 h-4" fill="currentColor"*/}
                        {/*         viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">*/}
                        {/*        <path fill-rule="evenodd"*/}
                        {/*              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"*/}
                        {/*              clip-rule="evenodd"></path>*/}
                        {/*    </svg>*/}
                        {/*</a>*/}
                    </div>
                    <div className={""}>
                        <img className={"rounded-md"} src="http://icac3n.in/static/media/img3.25e0387944fcd08c4ffb.png"
                             alt=""/>
                    </div>
                    <div>

                    </div>
                </div>

                <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"/>
                <div className={"space-y-3 grid grid-cols-1 lg:grid-cols-3 justify-items-end"}>
                    <div className={"lg:col-span-2 lg:mr-10"}>
                        <p className={"font-bold text-lg text-center lg:text-2xl lg:text-start my-3"}>About ICACCCN</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci autem consequatur cum
                            cumque
                            eos esse ex, laudantium maxime molestiae, nostrum quae quis quos similique soluta tempora!
                            Id
                            nemo quidem repudiandae. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias
                            cupiditate dolorem doloribus ducimus ea iste iure nam omnis perferendis, praesentium quam
                            quia,
                            quidem quis quisquam repellat, repudiandae ut vero voluptates.
                            Id <br></br>
                            nemo quidem repudiandae. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias
                            cupiditate dolorem doloribus ducimus ea iste iure nam omnis perferendis, praesentium quam
                            quia,
                            quidem quis quisquam repellat, repudiandae ut vero voluptates.</p>
                    </div>
                    <div className={"space-y-3 p-4 rounded-md bg-gray-100 w-full lg:max-w-sm"}>
                        <div className={"flex space-x-2 items-start"}>
                            <div>
                                <p className={"font-medium"}>Paper Submission Guidelines</p>
                                <p className={"text-sm text-gray-500"}>12 hrs ago</p>
                            </div>
                            <div className={"rounded-full bg-blue-600 my-1 bg-opacity-20"}>
                                <p className={"px-2 py-0.2 text-sm text-blue-800"}>New</p>
                            </div>
                        </div>
                        <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"/>
                        <div className={"flex space-x-2 items-center"}>
                            {/*<div className={"rounded-full bg-blue-600 bg-opacity-20"}>*/}
                            {/*    <p className={"px-2 py-0.5 text-sm text-blue-800"}>New</p>*/}
                            {/*</div>*/}
                            <div>
                                <p className={"font-medium"}>New Speaker List Released</p>
                                <p className={"text-sm text-gray-500"}>12 hrs ago</p>
                            </div>
                        </div>
                        <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"/>
                        <div className={"flex space-x-2 items-start"}>
                            <div>
                                <p className={"font-medium"}>Apply for Speaker</p>
                                <p className={"text-sm text-gray-500"}>12 hrs ago</p>
                            </div>
                            <div className={"rounded-full bg-yellow-600 bg-opacity-20"}>
                                <p className={"px-2 py-0.5 text-sm text-yellow-800"}>Important</p>
                            </div>
                        </div>
                        <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"/>
                        <div className={"flex space-x-2 items-center"}>
                            {/*<div className={"rounded-full bg-blue-600 bg-opacity-20"}>*/}
                            {/*    <p className={"px-2 py-0.5 text-sm text-blue-800"}>New</p>*/}
                            {/*</div>*/}
                            <div>
                                <p className={"font-medium"}>New Speaker List Released</p>
                                <p className={"text-sm text-gray-500"}>12 hrs ago</p>
                            </div>
                        </div>

                    </div>
                </div>
                <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"/>
            </main>
        </>
    )
}

Home.pageLayout = StarterLayout;

export default Home