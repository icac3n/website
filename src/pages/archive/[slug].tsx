import speakerData from "../../../data/speakers.json";
import proceedingData from "../../../data/proceedings.json";
import Head from "next/head";
import {RiFacebookBoxFill, RiMailFill, RiMapPin2Fill, RiPhoneFill, RiTwitterFill} from "react-icons/ri";
import {Swiper, SwiperSlide} from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";


// import required modules
import {Autoplay} from "swiper";
import React from "react";
import Button from "@/components/button";
import Link from "next/link";

const Post = ({content, year}: {
    content: {
        name: string,
        image: string,
        designation: string,
        id: string,
    }[], year: string
}) => {
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

    // @ts-ignore
    return (
        <>
            <Head>
                <title>ICAC3N {year}- Galgotias College of Engineering</title>
                <meta name="description" content="Next JS Starter"/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <main className={""}>
                {/*    landing   */}
                <div
                    className={"flex lg:flex-row flex-col gap-5 items-center justify-center lg:text-start text-center"}>
                    <div className={"flex flex-col justify-between h-full"}>
                        <div className={"rounded-full w-fit bg-red-600 bg-opacity-20"}>
                            <p className={"px-3 py-0.5 text-base text-red-800"}>Archive</p>
                        </div>
                        <p className={"text-3xl lg:text-4xl my-3 lg:my-5 font-bold mx-4 lg:mx-0"}>International Conference on
                            Advances in
                            Computing,
                            Communication Control and Networking- ICAC3N {year}</p>
                        <div className={"flex items-center space-x-2 lg:justify-start justify-center"}>
                            <RiMapPin2Fill className={"hidden mt-1 self-start lg:block text-red-800"}/>
                            <div className={"text-red-800"}>
                                <p className={"font-semibold text"}>Galgotias College of Engineering And
                                    Technology</p>
                                <p className={"text-sm"}>Knowledge Park I, Greater Noida</p>
                            </div>
                        </div>
                        <div className={"mt-5"}>
                            {/*@ts-ignore*/}
                            <Button link={proceedingData[year]} className={""} hideIcon={false}>Proceedings on IEEE Xplore</Button>
                        </div>
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
                        <div className={"lg:mr-10 col-span-full"}>
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

                    </div>
                </div>
                <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"/>

            </main>
        </>
    )
};

export const getStaticPaths = async () => {
    const years = [
        "2022",
        "2021",
        "2020",
        "2018",
    ]

    const paths = years.map((post) => ({
        params: {slug: post},
    }));

    console.log({paths})
    return {paths, fallback: false};
};

export const getStaticProps = async ({params}: { params: any }) => {
    console.log({params})
    // @ts-ignore
    const data = speakerData[params.slug]
    return {
        props:
            {content: data, year: params.slug},
    };
};

export default Post;