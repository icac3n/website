import Head from 'next/head'
import {Swiper, SwiperSlide} from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import {Autoplay} from "swiper";
import {
    RiArticleLine,
    RiBuildingFill,
    RiCalendarTodoFill,
    RiFacebookBoxFill,
    RiMailFill,
    RiMapPin2Fill,
    RiPhoneFill,
    RiTwitterFill
} from "react-icons/ri";
import ImportantDates from "../components/importantDates";
import ImportantDownloads from "../components/importantDownloads";
import React, {useEffect, useState} from "react";
import ImportantMessage from "@/components/importantMessage";
import Button from "@/components/button";
import Link from "next/link";
import {speakers} from "@/data/speakers";

import dynamic from 'next/dynamic'
import Carousel from "framer-motion-carousel"
import Image from "next/image";
import axios from "axios";
import InaugurationPdf from "@/components/inaugurationPdf";
import EntryModal from "@/components/entryModal";

const AnimatedNumbers = dynamic(() => import('react-animated-numbers'), {
    ssr: false,
})

const Home = () => {

    const [
        showModal,
        setShowModal
    ] = useState(false);

    const [visitorCounter, setVisitorCounter] = useState(1000);

    const counterData = [
        {
            maxCount: 600,
            subTitle: 'Papers Published'
        },
        {
            maxCount: 200,
            subTitle: 'Members'
        },
        {
            maxCount: 1400,
            subTitle: 'Participants'
        },
        {
            maxCount: 500,
            subTitle: 'Active Standards'
        }
    ]

    const sliderImages = [
        {
            "image": "/images/slider/image2.jpg",
            "id": "e5f6g7h8",
            "alt": "Mr. Sunil Galgotia with CM Yogi Adityanath"
        },
        {
            "image": "/images/slider/image3.jpg",
            "id": "i9j0k1l2",
            "alt": "Mr. Dhruv Galgotia with Former President Pranab Mukherjee"
        },
        {
            "image": "/images/slider/image4.jpg",
            "id": "i9j0k1l2",
            "alt": "Mr. Sunil Galgotia with PM Narendra Modi"
        },
        {
            "image": "/images/slider/image6.jpg",
            "id": "i9j0k1l2",
            "alt": "Ranked 1st in UP by Times of India Ranking 2020"
        },

    ]
    
    // useEffect(() => {
    //     let isModalShown = sessionStorage.getItem('alreadyShown');
    //     if (isModalShown != 'already_shown') {
    //         setTimeout(() => {
    //             setShowModal(true)
    //         }, 1000)
    //         sessionStorage.setItem('alreadyShow', 'already_shown');
    //     }
    // }, []);


    const fetch = (i: number) => {
        const options = {method: 'GET', url: `/api/counter?i=${i}`};
        axios.request(options).then(function (response) {
            console.log(response.data);
            setVisitorCounter(response.data.counter)
        }).catch(function (error) {
            console.error(error);
        });
    }


    useEffect(() => {
        if (typeof window !== "undefined") {
            let lastSession = (localStorage.getItem("token"));
            if (lastSession === null) {
                console.log("null")
                localStorage.setItem("token", Date.now().toString())
                fetch(1)
            } else if (parseInt(lastSession) - Date.now() > 21600000) {
                console.log("expired")
                localStorage.setItem("token", Date.now().toString())
                fetch(1)
            } else {
                console.log("not expired")
                fetch(0)
            }
        }
    }, [])

    return (
        <>
            <Head>
                <title>ICAC3N - Galgotias College of Engineering and Technology </title>
                <meta name="title" content="ICAC3N - Galgotias College of Engineering and Technology"/>
                <meta name="description"
                      content="5th International Conference on Advances in Computing, Communication Control and Networking- ICAC3N"/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <link rel="icon" href="/favicon.ico"/>

                <meta property="og:type" content="website"/>
                <meta property="og:url" content="https://icac3n.in/"/>
                <meta property="og:title" content="ICAC3N - Galgotias College of Engineering and Technology"/>
                <meta name="description"
                      content="5th International Conference on Advances in Computing, Communication Control and Networking- ICAC3N"/>
                <meta property="og:image"
                      content="https://icac3n.in/api/og"/>


                <meta property="twitter:card" content="summary_large_image"/>
                <meta property="twitter:url" content="https://icac3n.in/"/>
                <meta property="twitter:title" content="ICAC3N - Galgotias College of Engineering and Technology"/>
                <meta property="twitter:description"
                      content="5th International Conference on Advances in Computing, Communication Control and Networking- ICAC3N"/>
                <meta property="twitter:image"
                      content="https://icac3n.in/api/og"/>

            </Head>
            <main className={"mx-8"}>
                <EntryModal showModal={showModal} setShowModal={setShowModal}/>
                {/*    landing   */}
                <div
                    className={"grid grid-cols-5 gap-5 items-center justify-center lg:text-start text-center mt-2"}>
                    <div
                        className={"col-span-full lg:col-span-2 flex flex-col justify-between h-full self-start gap-2"}>
                        <div className={"flex items-center space-x-2 lg:justify-start justify-center"}>
                            <RiCalendarTodoFill className={"hidden text-xl lg:block text-red-800"}/>
                            <p className={"text-red-800 font-semibold"}>Date yet to be announced</p>
                        </div>

                        {/*<div className={" lg:hidden flex items-center space-x-2 lg:justify-start justify-center"}>*/}
                        {/*    <RiArticleLine className={"hidden text-xl self-start lg:block text-red-800"}/>*/}
                        {/*    <div className={"text-red-800"}>*/}
                        {/*        <p className={"font-semibold text"} itemProp={"conference-record-number"}>Conference*/}
                        {/*            Record Number #60023</p>*/}
                        {/*    </div>*/}
                        {/*</div>*/}
                        {/*<div className={" lg:hidden flex items-center space-x-2 lg:justify-start justify-center"}>*/}
                        {/*    <RiArticleLine className={"hidden text-xl self-start lg:block text-red-800"}/>*/}
                        {/*    <div className={"text-red-800"}>*/}
                        {/*        <p className={"font-semibold text"}>*/}
                        {/*            IEEE XPLORE COMPLIANT ISBN No. <span*/}
                        {/*            itemProp={"ISBN-number"}>979-8-3503-3086-1</span>*/}
                        {/*        </p>*/}
                        {/*    </div>*/}
                        {/*</div>*/}

                        <p className={"text-3xl lg:text-4xl break-words my-3 lg:my-2 font-bold mx-2 lg:mx-0"}>5th
                            International Conference on Advances in Computing, Communication Control and Networking-
                            ICAC3N</p>

                        {/*<div className={"hidden lg:flex items-center space-x-2 lg:justify-start justify-center"}>*/}
                        {/*    <RiArticleLine className={"hidden text-xl self-start lg:block text-red-800"}/>*/}
                        {/*    <div className={"text-red-800"}>*/}
                        {/*        <p className={"font-semibold text"} itemProp={"conference-record-number"}>Conference*/}
                        {/*            Record Number #60023</p>*/}
                        {/*    </div>*/}
                        {/*</div>*/}
                        {/*<div className={"hidden lg:flex items-center space-x-2 lg:justify-start justify-center"}>*/}
                        {/*    <RiArticleLine className={"hidden text-xl self-start lg:block text-red-800"}/>*/}
                        {/*    <div className={"text-red-800"}>*/}
                        {/*        <p className={"font-semibold text"} itemProp={"conference-record-number"}>*/}
                        {/*            IEEE XPLORE COMPLIANT ISBN No. <span*/}
                        {/*            itemProp={"ISBN-number"}>979-8-3503-3086-1</span>*/}
                        {/*        </p>*/}
                        {/*    </div>*/}
                        {/*</div>*/}
                        <div className={"flex items-center space-x-2 lg:justify-start justify-center"}>
                            <RiBuildingFill className={"hidden text-xl self-start lg:block text-red-800"}/>
                            <div className={"text-red-800"}>
                                <p className={"font-semibold text"} itemProp={"organizing-department"}>Computer
                                    Science
                                    and Engineering, MCA and Information Technology Departments</p>
                            </div>
                        </div>

                        <div className={"flex items-center space-x-2 lg:justify-start justify-center"}>
                            <RiMapPin2Fill className={"hidden text-xl mt-1 self-start lg:block text-red-800"}/>
                            <div className={"text-red-800"}>
                                <p className={"font-semibold text"} itemProp={"organizing-college"}>Galgotias
                                    College of
                                    Engineering And
                                    Technology</p>
                                <p className={"text-sm"}>Knowledge Park I, Greater Noida</p>
                            </div>

                        </div>

                        {/*<div className={"flex items-center justify-center mt-4"}>*/}
                        {/*    <Link href={'https://cmt3.research.microsoft.com/ICAC3N2023'}*/}
                        {/*          className={'px-4 h-fit py-2 bg-red-700 rounded-lg w-fit md:hidden block text-white cursor-pointer '}>Submit&nbsp;Paper</Link>*/}
                        {/*</div>*/}
                        <div
                            className={"flex space-x-5 text-2xl text-red-800 mt-4 items-center lg:justify-start justify-center"}>
                            <Link href={"https://twitter.com/icac3n"} aria-label={'icac3n twitter'}>
                                <RiTwitterFill className={'cursor-pointer grow-on-hover hover:text-sky-500'}/>
                            </Link>
                            <Link href={"tel:+91-7835878146"} aria-label={'icac3n phone'}>
                                <RiPhoneFill className={'cursor-pointer  grow-on-hover hover:text-emerald-500'}/>
                            </Link>
                            <Link href={"https://www.facebook.com/IEEE.ICAC3N.21"} aria-label={'icac3n facebook'}>
                                <RiFacebookBoxFill
                                    className={'cursor-pointer  grow-on-hover hover:text-indigo-700'}/>
                            </Link>
                            <Link href={"mailto:sachin.kumar@galgotiacollege.edu"} aria-label={'icac3n mail'}>
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
                    <div
                        className={"col-span-full lg:col-span-3 flex h-full w-full px-1 rounded-lg overflow-hidden"}>
                        <Carousel
                            autoPlay={true}
                            interval={4000}
                            loop={true}
                            renderArrowLeft={() => null}
                            renderArrowRight={({activeIndex, handleNext}) => null}
                            renderDots={({setActiveIndex, activeIndex}) => {
                                return (
                                    <div
                                        className={'absolute bottom-0 left-0 w-full h-10 bg-gray-800 bg-opacity-20 flex flex-row gap-2 items-center justify-center rounded-lg'}>
                                        {
                                            sliderImages.map((image, index) => {
                                                return (
                                                    <div
                                                        key={index}
                                                        className={`${index == activeIndex ? "bg-amber-400" : "bg-white"} w-3 h-3 rounded-full cursor-pointer hover:bg-red-600 transition duration-300 ease-in-out rounded-lg`}
                                                        onClick={() => setActiveIndex(index)}>

                                                    </div>
                                                )
                                            })
                                        }
                                    </div>
                                )
                            }}
                        >
                            {
                                sliderImages.map((image, index) => {
                                    return (
                                        <div key={index}
                                             className={"flex h-full w-full cursor-grab active:cursor-grabbing"}>
                                            <Image
                                                height={2000}
                                                width={3000}
                                                draggable={false}
                                                className={" h-full mx-auto object-cover rounded-md shadow-lg"}
                                                src={image.image}
                                                alt=""
                                            />
                                        </div>
                                    )

                                })

                            }
                        </Carousel>
                    </div>
                </div>

                <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"/>
                <div className={"flex flex-col space-y-5"}>
                    <div className={"grid grid-cols-1 lg:grid-cols-3 mx-2 md:mx-auto"}>
                        <div className={"lg:col-span-2 lg:mr-10 col-span-full"}>
                            <h2 className={"font-bold text-lg text-center lg:text-2xl lg:text-start my-3"}>About
                                ICACCCN</h2>
                            <p className={'text-justify'}>
                                ICAC3N is a prestigious international conference that brings together top
                                researchers,
                                scientists, engineers, and scholars from around the world to share their latest
                                research
                                findings and experiences in computing, communication control, and networking.
                                Featuring
                                keynote speeches, technical sessions, and workshops, the conference covers a wide
                                range
                                of topics such as cloud computing, AI, wireless communication systems, IoT, and
                                cybersecurity.
                            </p>
                            <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"/>
                            <h2 className={"font-bold text-lg text-center lg:text-2xl lg:text-start my-3"}>About
                                College</h2>
                            <p className={'text-justify'}>
                                Galgotias Educational Institutions (GEI) have been inculcating practical skills and
                                creating ‘Global Professionals’ for more than 18 years. Founded by Smt. Shakuntala
                                Educational and Welfare Society, Galgotia Educational Institutions is currently led
                                by
                                Mr. Suneel Galgotia, Chairman and a resolute visionary. Galgotias College of
                                Engineering
                                & Technology is placed among the best in professional education in Dr. APJ Abdul
                                Kalam
                                Technical University (Formerly U.P. Technical University). It has achieved top
                                positions
                                in MBA, MCA and B.Tech. finals and has a record of 100% placements with the best
                                corporate houses. It has also been ranked amongst the top engineering colleges in
                                India
                                by DATAQUEST NASSCOM survey and OUTLOOK-C For College Survey.
                            </p>
                            <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"/>
                            <h2 className={"font-bold text-lg text-center lg:text-2xl lg:text-start my-3"}>About
                                Department of Computer Science</h2>
                            <p className={'text-justify whitespace-pre-wrap'}>
                                The Computer Science & Engineering Department at GCET offers a UG program in
                                Computer
                                Science and Engineering. It has experienced faculty members, well-equipped labs, and
                                promotes industry-institute collaboration. The department focuses on research areas
                                such
                                as Computer Networks, Database Systems, Multimedia, Image Processing, Software
                                Engineering, Computer Architecture, Information System – Security and Data Mining.
                                Students get opportunities to work on state-of-the-art projects, gain real-world
                                experience, and have good alumni and industry relations. Galgotias Computer Science
                                graduates get recruited by industry-leading companies.
                            </p>
                            <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"/>


                            <div
                                className={"flex-col items-center justify-center text-center rounded-lg px-2 py-7"}>

                                <div className={"inline-flex text-3xl font-extrabold lg:text-6xl md:text-4xl"}>
                                    <AnimatedNumbers
                                        includeComma
                                        animateToNumber={visitorCounter}
                                        locale="en-US"
                                        configs={[
                                            {mass: 1, tension: 220, friction: 100},
                                            {mass: 1, tension: 180, friction: 130},
                                            {mass: 1, tension: 280, friction: 90},
                                            {mass: 1, tension: 180, friction: 135},
                                            {mass: 1, tension: 260, friction: 100},
                                            {mass: 1, tension: 210, friction: 180},
                                        ]}
                                    ></AnimatedNumbers>
                                </div>
                                <p className={"py-2 lg:py-4 text-lg lg:text-xl font-semibold"}>Visitors</p>
                            </div>


                            {/* Counter Disabled */}
                            {/*<div*/}
                            {/*    className={"w-full grid grid-cols-2 gap-8 md:grid-cols-4 lg:grid-cols-4 md:flex-row justify-between my-8 mt-16 gap-x-8 px-4 md:px-0"}>*/}
                            {/*    {*/}
                            {/*        counterData.map((item, index)=>{*/}
                            {/*            return(*/}
                            {/*                <div key={index} className={"flex-col items-center text-center bg-gray-100 border-x-0 border-red-200 rounded-xl px-2 py-4"}>*/}
                            {/*                    <div className={"inline-flex text-3xl lg:text-4xl md:text-4xl"}>*/}
                            {/*                        <AnimatedNumbers*/}
                            {/*                            includeComma*/}
                            {/*                            animateToNumber={item.maxCount}*/}
                            {/*                            locale="en-US"*/}
                            {/*                            configs={[*/}
                            {/*                                {mass: 1, tension: 220, friction: 100},*/}
                            {/*                                {mass: 1, tension: 180, friction: 130},*/}
                            {/*                                {mass: 1, tension: 280, friction: 90},*/}
                            {/*                                {mass: 1, tension: 180, friction: 135},*/}
                            {/*                                {mass: 1, tension: 260, friction: 100},*/}
                            {/*                                {mass: 1, tension: 210, friction: 180},*/}
                            {/*                            ]}*/}
                            {/*                        ></AnimatedNumbers>*/}
                            {/*                        <p className={"self-center text-3xl lg:text-4xl md:text-4xl"}>+</p>*/}
                            {/*                    </div>*/}
                            {/*                    <p className={"font-light tracking-tight text-md text-center md:text-lg lg:text-lg lg:mt-2 md:mt-0"}>{item.subTitle}</p>*/}
                            {/*                </div>*/}
                            {/*            )*/}
                            {/*        })*/}
                            {/*    }*/}
                            {/*</div>*/}


                        </div>
                        <div id={"important"} className={"lg:col-span-1 col-span-full"}>
                            {/*Inauguration Brochure */}
                            {/*<InaugurationPdf/>*/}
                            <ImportantMessage/>
                            <ImportantDates/>
                            <ImportantDownloads/>
                        </div>
                    </div>
                </div>
                <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"/>
                <div className={'select-none'}>
                    <div className={'flex flex-row items-center mx-5 md:mx-auto'}>
                        <h1 className='text-2xl text-black font-extrabold my-5'>Hon&apos;ble Past Speakers</h1>
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
                                                {!speaker.national &&
                                                    <div className={"rounded-full my-2 bg-blue-800 bg-opacity-20"}>
                                                        <p className={"px-2 py-0.5 text-sm text-blue-800"}>International
                                                            Speaker</p>
                                                    </div>
                                                }
                                                {
                                                    speaker.national &&
                                                    <div className={"rounded-full my-2 bg-amber-600 bg-opacity-20"}>
                                                        <p className={"px-2 py-0.5 text-sm text-amber-800"}>National
                                                            Speaker</p>
                                                    </div>
                                                }
                                                <span
                                                    className={'font-bold text-sm text-center'}>{speaker.name}</span>

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