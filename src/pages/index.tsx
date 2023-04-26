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
import speakersData from '../../data/speakers.json'

const Home = () => {

    const speakers = speakersData["2023"]
    const sliderImages = [
        {
            "image": "https://icac3n.in/static/media/img3.25e0387944fcd08c4ffb.png",
            "id": "a1b2c3d4",
            "alt": "image1"
        },
        {
            "image": "https://icac3n.in/ICAC3N_2023/Header_ICAC3n-2023.jpeg",
            "id": "e5f6g7h8",
            "alt": "image2"
        },
        {
            "image": "https://icac3n.in/static/media/img2.22f091ab3b6579b31a5a.jpg",
            "id": "i9j0k1l2",
            "alt": "image3"
        },
        {
            "image": "https://icac3n.in/static/media/img4.5251edd07948620003f8.jpg",
            "id": "i9j0k1l2",
            "alt": "image3"
        },
        {
            "image": "https://unsplash.it/1080/2000?random=3434",
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
                            <RiCalendarTodoFill className={"hidden lg:block text-red-800"}/>
                            <p className={"text-red-800 font-semibold"}>15th and 16th December 2023</p>
                        </div>

                        <p className={"text-3xl my-3 lg:my-5 font-bold mx-4 lg:mx-0"}>International Conference on
                            Advances in
                            Computing,
                            Communication Control and Networking</p>
                        <div className={"flex items-center space-x-2 lg:justify-start justify-center"}>
                            <RiMapPin2Fill className={"hidden mt-1 self-start lg:block text-red-800"}/>
                            <div className={"text-red-800"}>
                                <p className={"font-semibold text"}>Galgotia&rsquo;s College of Engineering And Technology</p>
                                <p className={"text-sm"}>Knowledge Park I, Greater Noida</p>
                            </div>
                        </div>
                        <div
                            className={"md:ml-5 flex space-x-3 text-2xl text-red-800 mt-1 items-center lg:justify-start justify-center"}>
                            <RiTwitterFill className={'cursor-pointer'}/>
                            <RiPhoneFill className={'cursor-pointer'}/>
                            <RiFacebookBoxFill className={'cursor-pointer'}/>
                            <RiMailFill className={'cursor-pointer'}/>
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
                                delay: 1500,
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

                        </div>
                        <div className={"lg:col-span-1 col-span-full"}>
                            <ImportantMessage/>
                            <ImportantDates/>
                            <ImportantDownloads/>
                        </div>
                    </div>
                </div>
                <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"/>

                <div className={'flex flex-row items-center mx-5 md:mx-auto'}>
                    <h1 className='text-2xl text-black font-extrabold my-5'>Hon&apos;ble Speaker</h1>
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
                                                 className={'h-56 w-64 object-cover mb-5 rounded-lg shadow-md'}/>
                                            <span className={'font-bold text-xs text-center'}>{speaker.name}</span>
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
                    <button className={'px-4 py-2 text-sm text-white bg-sky-600 w-fit rounded-lg'}>View All</button>
                </div>
            </main>
        </>
    )
}


export default Home