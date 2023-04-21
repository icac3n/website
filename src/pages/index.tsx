import Head from 'next/head'
import {StarterLayout} from "@/layout";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";


// import required modules
import { Navigation, Pagination, Autoplay } from "swiper";
import {
    RiCalendarTodoFill,
    RiFacebookBoxFill,
    RiMailFill,
    RiMapPin2Fill,
    RiPhoneFill,
    RiTwitterFill
} from "react-icons/ri";

const Home = () => {
    const speakers = [
        {
            "name": "Prof (Dr.) Pradeep Kumar Mishra",
            "designation": "Vice Chancellor, Dr APJ Abdul Kalam Technical University, Lucknow, UP.",
            "image": "https://unsplash.it/1500/800?random=img18",
            "id": "a1b2c3d4"
        },
        {
            "name": "Prof. (Dr.) Sri Niwas Singh",
            "designation": "Director, Atal Bihari Vajpayee- Indian Institute of Information Technology and Management (ABV-IIITM), Gwalior, India / Chairman, India Council, IEEE India.",
            "image": "https://unsplash.it/1500/800?random=img1",
            "id": "e5f6g7h8"
        },
        {
            "name": "Prof. (Dr.) P. Nagabhushan",
            "designation": "Vice-Chancellor, Vignan's Foundation for Science, Technology & Research, Andhra Pradesh",
            "image": "https://unsplash.it/1500/800?random=img19",
            "id": "i9j0k1l2"
        },
        {
            "name": "Prof. (Dr.) Satish K. Singh",
            "designation": "IIIT Allahabad / Section Chair, IEEE UP Section.",
            "image": "https://unsplash.it/1500/800?random=img6",
            "id": "m3n4o5p6"
        },
        {
            "name": "Dr. Ahmed A. Elngar",
            "designation": "Associate Professor, Faculty of CS and AI, Beni-Suef University, Beni-Suef City, 62511, Egypt",
            "image": "https://unsplash.it/1500/800?random=img14",
            "id": "q7r8s9t0"
        },
        {
            "name": "Dr. Kashif Nisar, SMIEEE",
            "designation": "Victorian Institute of Technology, 14 Adam Street, Hindmarsh, Adelaide, South Australia, 5007",
            "image": "https://unsplash.it/1500/800?random=img15",
            "id": "u1v2w3x4"
        },
        {
            "name": "Dr. Ana Clarke",
            "designation": "Partner Director – Data & AI , Artificial Intelligence Services Australia.",
            "image": "https://unsplash.it/1500/800?random=img16",
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
            "image": "https://unsplash.it/1500/800?random=img5",
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

    ]
    return (
        <>
            <Head>
                <title>ICAC3N- Galgotias College of Engineering</title>
                <meta name="description" content="Next JS Starter"/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <main>
                {/*    landing   */}
                <div className={"flex lg:flex-row flex-col items-center justify-center lg:text-start text-center"}>
                    <div className={"flex flex-col justify-between h-full"}>
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
                            className={"flex space-x-3 text-xl text-red-800 mt-4 items-center lg:justify-start justify-center"}>
                            <RiTwitterFill className={'cursor-pointer'}/>
                            <RiPhoneFill className={'cursor-pointer'}/>
                            <RiFacebookBoxFill className={'cursor-pointer'}/>
                            <RiMailFill className={'cursor-pointer'}/>
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
                    <div className={"lg:w-[50vw] w-full p-5"}>
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
                                sliderImages.map((image,index) => {
                                    return(
                                    <SwiperSlide key={index}>
                                        {/*<img*/}
                                        {/*    className={" w-20 max-w-[100vw] min-h-[50vh] max-h-[50vh] object-cover rounded-md"}*/}
                                        {/*    src={image.image}*/}
                                        {/*    alt=""/>*/}
                                        <img
                                            className={" w-full h-[50vh] object-cover rounded-md"}
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

                <div className={'flex flex-row items-center'}>
                    <h1 className='text-2xl text-black font-extrabold my-5'>Hon'ble Speaker</h1>
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
                            speakers.map((speaker,index) => {
                                return (
                                    <SwiperSlide key={index}>
                                        <div className={'col-span-1 flex flex-col items-center'}>
                                            <img src={speaker.image} className={'h-56 w-64 object-cover mb-5 rounded-lg shadow-md'}/>
                                            <span className={'font-bold text-xs text-center'}>{speaker.name}</span>
                                            <span className={'font-light text-xs text-center'}>{speaker.designation}</span>
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

Home.pageLayout = StarterLayout;

export default Home