import Head from "next/head";
import { RiMapPin2Fill } from "react-icons/ri";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";


// import required modules
import { Autoplay } from "swiper";
import React from "react";
import Button from "@/components/button";
import { archive } from "@/data/archive";

const Post = ({ content, year }: {
    content: {
        name: string,
        image: string,
        designation: string,
        id: string,
    }[], year: string
}) => {
    const sliderImages = [
        // {
        //     "image": "/images/slider/image1.jpeg",
        //     "id": "a1b2c3d4",
        //     "alt": "image1"
        // },
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

    // @ts-ignore
    return (
        <>
            <Head>
                <title>ICAC3N {year}- Galgotias College of Engineering</title>
                <meta name="description"
                    content="International Conference on Advances in Computing, Communication Control and Networking- ICAC3N" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className={""}>
                {/*    landing   */}
                <div
                    className={"flex lg:flex-row flex-col gap-5 items-center justify-center lg:text-start text-center"}>
                    <div className={"flex flex-col justify-between h-full"}>
                        <div className={"rounded-full mx-auto lg:mx-0 w-fit bg-red-600 bg-opacity-20"}>
                            <p className={"px-3 py-0.5 lg:text-base text-sm text-red-800"}>Archive</p>
                        </div>
                        <p className={"text-3xl lg:text-4xl my-3 lg:my-5 font-bold mx-4 lg:mx-0"}>International Conference on Advances in Computing, Communication Control and Networking- ICAC3N{year}</p>


                        <div className={"flex items-center space-x-2 lg:justify-start justify-center"}>
                            <RiMapPin2Fill className={"hidden mt-1 self-start lg:block text-red-800"} />
                            <div className={"text-red-800"}>
                                <p className={"font-semibold text"}>Galgotias College of Engineering And
                                    Technology</p>
                                <p className={"text-sm"}>Knowledge Park I, Greater Noida</p>
                            </div>
                        </div>
                        <div className={"mt-5"}>

                            {year !== "2023" &&
                                // @ts-ignore
                                <Button link={archive[year].proceeding} className={""} hideIcon={false}>Proceedings on IEEE
                                    Xplore</Button>
                            }
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
                                                alt="" />
                                        </SwiperSlide>

                                    )

                                })

                            }
                        </Swiper>
                    </div>
                </div>

                <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
                <div className={"flex flex-col space-y-5"}>
                    <div className={"grid grid-cols-1 lg:grid-cols-3 mx-5 md:mx-auto"}>
                        <div className={"lg:mr-10 col-span-full"}>
                            <h2 className={"font-bold text-lg text-center lg:text-2xl lg:text-start my-3"}>About
                                ICACCCN</h2>
                            <p className={'text-justify'}>
                                ICAC3N is a prestigious international conference that brings together top researchers,
                                scientists, engineers, and scholars from around the world to share their latest research
                                findings and experiences in computing, communication control, and networking. Featuring
                                keynote
                                speeches, technical sessions, and workshops, the conference covers a wide range of
                                topics such
                                as cloud computing, AI, wireless communication systems, IoT, and cybersecurity.
                                Organized
                                annually by IEEE at various global locations, ICAC3N offers a stimulating platform for
                                participants to network, collaborate and engage with experts in their fields. The
                                conference
                                proceedings are published on IEEE Xplore, making it accessible to researchers and
                                scholars
                                worldwide.
                            </p>
                        </div>
                    </div>
                </div>
                <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
                <div className={'select-none'}>
                    <div className={'flex flex-row items-center mx-5 md:mx-auto'}>
                        <h1 className='text-2xl text-black font-extrabold my-5'>Hon&apos;ble Speakers of {year}</h1>
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
                                // @ts-ignore
                                archive[year].speakers.map((speaker, index) => {
                                    return (
                                        <SwiperSlide key={index}>
                                            <div className={'col-span-1 flex flex-col items-center'}>
                                                <img src={speaker.image} alt={"Speaker's Photo"}
                                                    className={'h-56 border-2 border-gray-300 w-64 object-cover mb-5 rounded-lg shadow-md'} />
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
                </div>
                <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
                <div className={"prose mx-4"}>
                    <h1 className={"heading text-2xl"}>ORGANISING COMMITTEE</h1>
                    {
                        // @ts-ignore
                        archive[year].organizingCommittee.map((committee, index) => {
                            return (
                                <div key={index}>
                                    <h2 className={"heading"}>{committee.Category}</h2>
                                    <ul>
                                        {
                                            // @ts-ignore
                                            committee.Members.map((member, index) => {
                                                return (
                                                    <li key={index}>
                                                        {member.Name}, {member.Designation}
                                                    </li>
                                                )
                                            })
                                        }
                                    </ul>
                                </div>
                            )
                        })
                    }

                </div>
            </main>
        </>
    )
};

export const getStaticPaths = async () => {
    const years = [
        "2023",
        "2022",
        "2021",
        "2020",
        "2018",
    ]

    const paths = years.map((post) => ({
        params: { slug: post },
    }));

    console.log({ paths })
    return { paths, fallback: false };
};

export const getStaticProps = async ({ params }: { params: any }) => {
    console.log({ params })
    // @ts-ignore
    const data = archive[params.slug].speakers
    return {
        props:
            { content: data, year: params.slug },
    };
};

export default Post;