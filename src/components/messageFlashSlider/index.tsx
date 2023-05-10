// Import Swiper React components
import {Swiper, SwiperSlide} from "swiper/react";

// Import Swiper styles
import "swiper/css";

// import required modules
import {Autoplay} from "swiper";
import {FaAngleLeft, FaAngleRight} from "react-icons/fa";
import {useCallback, useRef} from "react";
import Link from "next/link";
import Carousel from 'framer-motion-carousel';
const MessageFlashSlider = () => {
    const messages = [
        {
            id: 1,
            message: "5th ICAC3N-23 paper submission link is valid until 31st August.",
            link: "/registration",
            date: "10 Apr 2023"
        },
        {
            id: 2,
            message: "4th ICAC3N-22 Proceeding is available Online now on Xplore.",
            link: "https://ieeexplore.ieee.org/xpl/conhome/10073967/proceeding",
            date: "27 Apr 2023"
        },
        {
            id: 3,
            message: "CONFERENCE WILL BE HELD IN BLENDED MODE (ONLINE AND OFFLINE BOTH)",
            link: "#",
            date: "27 Apr 2023"
        },
    ];


    const sliderRef = useRef(null);


    const handlePrev = useCallback(() => {
        if (!sliderRef.current) return;
        // @ts-ignore
        sliderRef.current.handlePrev();
    }, []);

    const handleNext = useCallback(() => {
        if (!sliderRef.current) return;
        // @ts-ignore
        sliderRef.current.handleNext();
    }, []);

    return (
        <div className={'w-full min-h-10 bg-amber-400'}>
            <div className={'w-full flex justify-between items-center py-2 mx-auto'}>
                <div className={'lg:px-10 px-1 font-bold text-xl cursor-pointer'} onClick={handlePrev}>
                    <FaAngleLeft/>
                </div>
                <Carousel
                    autoPlay={true}
                    loop={true}
                    interval={8000}
                    renderArrowLeft={({activeIndex,handlePrev}) => <></>}
                    renderArrowRight={({activeIndex,handleNext}) => <></>}
                    renderDots={({activeIndex,setActiveIndex}) => <></>}
                    ref={sliderRef}
                >

                    {
                        messages.map((message) => {
                            return (
                                <div key={message.id}
                                     className={'w-full flex flex-col items-center justify-center my-auto h-full'}
                                     draggable={false}
                                >
                                    {
                                        message.link &&
                                        <Link href={message.link} draggable={false}>
                                            <p className={'text-black text-center md:text-md text-sm h-fit'}>
                                        <span className={'font-semibold md:text-sm text-xs'}> {message.date} | </span> {message.message}
                                            </p>
                                        </Link>
                                    }
                                </div>
                            )
                        })
                    }
                </Carousel>

                <div className={'lg:px-10 px-1 font-bold text-xl cursor-pointer'} onClick={handleNext}>
                    <FaAngleRight/>
                </div>
            </div>
        </div>
    )
}

export default MessageFlashSlider