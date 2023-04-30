// Import Swiper React components
import {Swiper, SwiperSlide} from "swiper/react";

// Import Swiper styles
import "swiper/css";

// import required modules
import {Autoplay} from "swiper";
import {FaAngleLeft, FaAngleRight} from "react-icons/fa";
import {useCallback, useRef} from "react";
import Link from "next/link";

const MessageFlashSlider = () => {
    const messages = [
        {
            id: 1,
            message: "5th ICAC3N-23 paper submission link is valid until 31st July.",
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
        sliderRef.current.swiper.slidePrev();
    }, []);

    const handleNext = useCallback(() => {
        if (!sliderRef.current) return;
        // @ts-ignore
        sliderRef.current.swiper.slideNext();
    }, []);
    return (
        <div className={'w-full min-h-10 bg-amber-400'}>
            <div className={'w-full flex justify-between items-center py-2'}>
                <div className={'lg:px-10 px-1 font-bold text-xl cursor-pointer'} onClick={handlePrev}>
                    <FaAngleLeft/>
                </div>
                <Swiper
                    ref={sliderRef}
                    className="mySwiper w-full"
                    slidesPerView={1}
                    spaceBetween={10}
                    grabCursor={true}
                    autoplay={{
                        delay: 10000,
                        disableOnInteraction: false,
                        stopOnLastSlide: false,
                        reverseDirection: true
                    }}
                    loop={true}
                    modules={[Autoplay]}

                >
                    {
                        messages.map((message) => {
                            return (
                                <SwiperSlide key={message.id}
                                             className={'w-full flex flex-col items-center justify-center my-auto h-full'}>
                                    {
                                        message.link &&
                                        <Link href={message.link}>
                                            <p className={'text-black text-center md:text-md text-sm h-fit'}>
                                        <span
                                            className={'font-semibold md:text-sm text-xs'}> {message.date} | </span> {message.message}
                                            </p>
                                        </Link>
                                    }
                                </SwiperSlide>
                            )
                        })
                    }

                </Swiper>
                <div className={'lg:px-10 px-1 font-bold text-xl cursor-pointer'} onClick={handleNext}>
                    <FaAngleRight/>
                </div>
            </div>
        </div>
    )
}

export default MessageFlashSlider