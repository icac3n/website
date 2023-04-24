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

const Home = () => {

    const speakers = [
        {
            "name": "Prof. (Dr.) Celestine Iwendi",
            "designation": "School of Creative Technologies, University of Bolton, United Kingdom / Board Member IEEE Sweden Section.",
            "image": "data:image/jpeg;base64,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",
            "id": "a1b2c3d4"
        },
        {
            "name": "Prof. (Dr.) Sri Niwas Singh",
            "designation": "Director, Atal Bihari Vajpayee- Indian Institute of Information Technology and Management (ABV-IIITM), Gwalior, India / Chairman, India Council, IEEE India.",
            "image": "data:image/jpeg;base64,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",
            "id": "e5f6g7h8"
        },
        {
            "name": "Prof. (Dr.) P. Nagabhushan",
            "designation": "Vice-Chancellor, Vignan's Foundation for Science, Technology & Research, Andhra Pradesh",
            "image": "https://icac3n.in/static/media/PNAGABHUSHAN.195f1e8f08d84e2950d1.jpg",
            "id": "i9j0k1l2"
        },
        {
            "name": "Prof. (Dr.) Satish K. Singh",
            "designation": "IIIT Allahabad / Section Chair, IEEE UP Section.",
            "image": "data:image/jpeg;base64,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",
            "id": "m3n4o5p6"
        },
        {
            "name": "Dr. Ahmed A. Elngar",
            "designation": "Associate Professor, Faculty of CS and AI, Beni-Suef University, Beni-Suef City, 62511, Egypt",
            "image": "https://icac3n.in/static/media/ahmed.d56429f9f28bb74b0c9e.jpg",
            "id": "q7r8s9t0"
        },
        {
            "name": "Dr. Kashif Nisar, SMIEEE",
            "designation": "Victorian Institute of Technology, 14 Adam Street, Hindmarsh, Adelaide, South Australia, 5007",
            "image": "https://icac3n.in/static/media/kashif.8e4a16eabca5de92068a.jpg",
            "id": "u1v2w3x4"
        },
        {
            "name": "Dr. Ana Clarke",
            "designation": "Partner Director – Data & AI , Artificial Intelligence Services Australia.",
            "image": "https://icac3n.in/static/media/anaClark.c65c1469e9f69a06e38b.jpg",
            "id": "y5z6a1b2"
        },
        {
            "name": "Prof. Nada Ratković, Croatia",
            "designation": "Assistant Professor, Department of Quantitative Methods on Faculty of Economics, Business and Tourism, University Split.",
            "image": "https://unsplash.it/1500/800?random=img17",
            "id": "c3d4e5f6"
        },
        {
            "name": "Prof. (Dr.) Celestine Iwendi",
            "designation": "School of Creative Technologies, University of Bolton, United Kingdom / Board Member IEEE Sweden Section.",
            "image": "https://icac3n.in/static/media/Nada.4938b4ed31ebc159cfc9.jpg",
            "id": "g7h8i9j0"
        }
    ]
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
            <main className={""}>
                {/*    landing   */}
                <div
                    className={"flex lg:flex-row flex-col gap-5 items-center justify-center lg:text-start text-center"}>
                    <div className={"flex flex-col justify-between h-full"}>
                        <div className={"flex items-center space-x-2 lg:justify-start justify-center"}>
                            <RiCalendarTodoFill className={"hidden lg:block text-red-800"}/>
                            <p className={"text-red-800 font-semibold"}>15th and 16th December 2023</p>
                        </div>

                        <p className={"text-3xl my-3 lg:my-5 font-bold mx-4 lg:mx-0"}>International Conference on
                            Advances in
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
                            className={"flex space-x-3 text-xl text-red-800 mt-4 items-center lg:justify-start justify-center"}>
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
                                            <img src={speaker.image}
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