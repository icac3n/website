import Head from 'next/head'
import {Swiper, SwiperSlide} from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";


// import required modules
import {Autoplay} from "swiper";
import {
    RiCalendarTodoFill,
    RiFacebookBoxFill,
    RiMailFill,
    RiMapPin2Fill,
    RiPhoneFill,
    RiTwitterFill
} from "react-icons/ri";
import ImportantDates from "../components/importantDates";
import ImportantDownloads from "../components/importantDownloads";
import React from "react";
import ImportantMessage from "@/components/importantMessage";
import Button from "@/components/button";
import Link from "next/link";
import {speakers} from "@/data/speakers";

const Home = () => {

    const sliderImages = [
        {
            "image": "/images/slider/image1.jpeg",
            "id": "a1b2c3d4",
            "alt": "image1"
        },
        {
            "image": "/images/slider/image2.jpg",
            "id": "e5f6g7h8",
            "alt": "image2"
        },
        {
            "image": "/images/slider/image3.jpg",
            "id": "i9j0k1l2",
            "alt": "image3"
        },
        {
            "image": "/images/slider/image4.jpg",
            "id": "i9j0k1l2",
            "alt": "image3"
        },
        {
            "image": "/images/slider/image5.png",
            "id": "i9j0k1l2",
            "alt": "image3"
        },
        {
            "image": "/images/slider/image6.jpg",
            "id": "i9j0k1l2",
            "alt": "image3"
        },

    ]

    return (
        <>
            <Head>
                <title>ICAC3N- Galgotias College of Engineering</title>
                <meta name="description" content="Next JS Starter"/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <main className={"mx-8"}>
                {/*    landing   */}
                <div
                    className={"flex lg:flex-row flex-col gap-5 items-center justify-center lg:text-start text-center mt-2"}>
                    <div className={"flex flex-col justify-between h-full self-start"}>
                        <div className={"flex items-center space-x-2 lg:justify-start justify-center"}>
                            <RiCalendarTodoFill className={"hidden text-xl lg:block text-red-800"}/>
                            <p className={"text-red-800 font-semibold"}>15th and 16th December 2023</p>
                        </div>

                        <p className={"text-3xl lg:text-4xl break-words my-3 lg:my-5 font-bold mx-2 lg:mx-0"}>5th International
                            Conference on
                            Advances in
                            Computing,
                            Communication Control and Networking- ICAC3N</p>
                        <div className={"flex items-center space-x-2 lg:justify-start justify-center"}>
                            <RiMapPin2Fill className={"hidden text-xl mt-1 self-start lg:block text-red-800"}/>
                            <div className={"text-red-800"}>
                                <p className={"font-semibold text"}>Galgotias College of Engineering And
                                    Technology</p>
                                <p className={"text-sm"}>Knowledge Park I, Greater Noida</p>
                            </div>
                        </div>
                        <div
                            className={"flex space-x-5 text-2xl text-red-800 mt-4 items-center lg:justify-start justify-center"}>
                            <Link href={"https://twitter.com/icac3n"}>
                                <RiTwitterFill className={'cursor-pointer grow-on-hover hover:text-sky-500'}/>
                            </Link>
                            <Link href={"tel:+91-7835878146"}>
                                <RiPhoneFill className={'cursor-pointer  grow-on-hover hover:text-emerald-500'}/>
                            </Link>
                            <Link href={"https://www.facebook.com/IEEE.ICAC3N.21"}>
                                <RiFacebookBoxFill className={'cursor-pointer  grow-on-hover hover:text-indigo-700'}/>
                            </Link>
                            <Link href={"mailto:vishnu.sharma@galgotiacollege.edu"}>
                                <RiMailFill className={'cursor-pointer  grow-on-hover hover:text-amber-400'}/>
                            </Link>
                        </div>
                        {/*<Link href="#"*/}
                        {/*   className="inline-flex justify-center items-center py-2.5 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">*/}
                        {/*    Read more*/}
                        {/*    <svg aria-hidden="true" className="ml-2 -mr-1 w-4 h-4" fill="currentColor"*/}
                        {/*         viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">*/}
                        {/*        <path fill-rule="evenodd"*/}
                        {/*              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"*/}
                        {/*              clip-rule="evenodd"></path>*/}
                        {/*    </svg>*/}
                        {/*</Link>*/}
                    </div>
                    <div className={"lg:w-[60%] flex h-full w-full px-5"}>
                        <Swiper
                            slidesPerView={1}
                            spaceBetween={10}
                            grabCursor={true}
                            autoplay={{
                                delay: 4000,
                                disableOnInteraction: false,
                                stopOnLastSlide: false,
                                reverseDirection: true
                            }}
                            loop={true}
                            modules={[Autoplay]}
                            className="mySwiper mx-auto rounded-md shadow-sm"
                        >
                            {
                                sliderImages.map((image, index) => {
                                    return (
                                        <SwiperSlide key={index}>
                                            {/*<img*/}
                                            {/*    className={" w-20 max-w-[100vw] min-h-[50vh] max-h-[50vh] object-cover rounded-md"}*/}
                                            {/*    src={image.image}*/}
                                            {/*    alt=""/>*/}
                                            <img
                                                className={" w-full h-80 object-cover rounded-md"}
                                                src={image.image}
                                                alt=""/>
                                        </SwiperSlide>

                                    )

                                })

                            }
                        </Swiper>
                    </div>
                </div>

                <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"/>
                <div className={"flex flex-col space-y-5"}>
                    <div className={"grid grid-cols-1 lg:grid-cols-3 mx-5 md:mx-auto"}>
                        <div className={"lg:col-span-2 lg:mr-10 col-span-full"}>
                            <h2 className={"font-bold text-lg text-center lg:text-2xl lg:text-start my-3"}>About
                                ICACCCN</h2>
                            <p className={'text-justify'}>
                                ICAC3N is a prestigious international conference that brings together top researchers, scientists, engineers, and scholars from around the world to share their latest research findings and experiences in computing, communication control, and networking. Featuring keynote speeches, technical sessions, and workshops, the conference covers a wide range of topics such as cloud computing, AI, wireless communication systems, IoT, and cybersecurity. Organized annually by IEEE at various global locations, ICAC3N offers a stimulating platform for participants to network, collaborate and engage with experts in their fields. The conference proceedings are published on IEEE Xplore, making it accessible to researchers and scholars worldwide.
                            </p>
                            <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"/>
                            <h2 className={"font-bold text-lg text-center lg:text-2xl lg:text-start my-3"}>About
                                College</h2>
                            <p className={'text-justify'}>
                                Galgotias Educational Institutions (GEI) have been inculcating practical skills and
                                creating ‘Global Professionals’ for more than 18 years. Founded by Smt. Shakuntala
                                Educational and Welfare Society, Galgotia Educational Institutions is currently led by
                                Mr. Suneel Galgotia, Chairman and a resolute visionary. Galgotias College of Engineering
                                & Technology is placed among the best in professional education in Dr. APJ Abdul Kalam
                                Technical University (Formerly U.P. Technical University). It has achieved top positions
                                in MBA, MCA and B.Tech. finals and has a record of 100% placements with the best
                                corporate houses. It has also been ranked amongst the top engineering colleges in India
                                by DATAQUEST NASSCOM survey and OUTLOOK-C For College Survey.
                            </p>
                            <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"/>
                            <h2 className={"font-bold text-lg text-center lg:text-2xl lg:text-start my-3"}>About CSE
                                Department</h2>
                            <p className={'text-justify whitespace-pre-wrap'}>
                                The Computer Science & Engineering Department at GCET offers a UG program in Computer Science and Engineering. It has experienced faculty members, well-equipped labs, and promotes industry-institute collaboration. The department focuses on research areas such as Computer Networks, Database Systems, Multimedia, Image Processing, Software Engineering, Computer Architecture, Information System – Security and Data Mining. Students get opportunities to work on state-of-the-art projects, gain real-world experience, and have good alumni and industry relations. Galgotias Computer Science graduates get recruited by industry-leading companies.
                            </p>

                        </div>
                        <div id={"important"} className={"lg:col-span-1 col-span-full"}>
                            <ImportantMessage/>
                            <ImportantDates/>
                            <ImportantDownloads/>
                        </div>
                    </div>
                </div>
                <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"/>
                <div className={'select-none'}>
                    <div className={'flex flex-row items-center mx-5 md:mx-auto'}>
                        <h1 className='text-2xl text-black font-extrabold my-5'>Hon&apos;ble Speakers</h1>
                        {/*<h4 className='text-md text-blue-500 font-regular my-5 ml-2 hover:underline cursor-pointer'>( view all )</h4>*/}
                    </div>

                    <div className={'w-full bg-gray-100 p-4 rounded-lg'}>
                        <Swiper
                            slidesPerView={1}
                            spaceBetween={10}
                            breakpoints={{
                                640: {
                                    slidesPerView: 2,
                                    spaceBetween: 20,
                                },
                                768: {
                                    slidesPerView: 4,
                                    spaceBetween: 40,
                                }
                            }}
                            grabCursor={true}
                            autoplay={{
                                delay: 1000,
                                disableOnInteraction: false,
                                stopOnLastSlide: false,
                                reverseDirection: true
                            }}
                            loop={true}
                            modules={[Autoplay]}
                            className="mySwiper mx-auto"
                        >
                        {
                            speakers.map((speaker, index) => {
                                return (
                                    <SwiperSlide key={index}>
                                        <div className={'col-span-1 flex flex-col items-center'}>
                                            <img src={speaker.image} alt={"Speaker's Photo"}
                                                 className={'h-56 border-2 border-gray-300 w-64 object-cover mb-5 rounded-lg shadow-md'}/>
                                            <span className={'font-bold text-sm text-center'}>{speaker.name}</span>
                                            <span
                                                className={'font-light text-xs text-center'}>{speaker.designation}</span>
                                        </div>
                                    </SwiperSlide>
                                )
                            })
                        }
                        </Swiper>
                    </div>

                    <div className={'col-span-1 flex flex-col items-center gap-2 justify-center my-5'}>
                        <Button link={'/speakers'}
                                className={'bg-sky-600 hover:bg-sky-700 shrink-on-hover focus:ring-4 focus:ring-sky-300 no-underline dark:focus:ring-sky-700'}
                                hideIcon={false}>View all</Button>
                    </div>

                </div>
            </main>
        </>
    )
}


export default Home