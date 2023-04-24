// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

// import required modules
import {Autoplay} from "swiper";
import {FaAngleLeft, FaAngleRight} from "react-icons/fa";
import {useCallback, useRef} from "react";
const MessageFlashSlider = () => {
    const messages = [
        {
            id: 1,
            message: "Don't miss out on the keynote speech by Prof. (Dr.) Pradeep Kumar Mishra at 2 PM today!",
            date: "24Apr2023"
        },
        {
            id: 2,
            message: "Join us for the panel discussion on 'The Future of AI' at 4 PM today, featuring Dr. Ana Clarke and Prof. (Dr.) Celestine Iwendi.",
            date: "24Apr2023"
        },
        {
            id: 3,
            message: "The poster presentation session is now open! Come explore the latest research in computer science and engineering.",
            date: "25Apr2023"
        },
        {
            id: 4,
            message: "Don't forget to attend the closing ceremony at 6 PM tomorrow, where we'll announce the winners of the best paper award.",
            date: "26Apr2023"
        }
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
    return(
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
                        delay: 4000,
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
                                <SwiperSlide key={message.id} className={'w-full flex flex-col items-center justify-center my-auto h-full'}>
                                        <p className={'text-black text-center md:text-md text-sm h-fit'}>
                                            <span className={'font-semibold md:text-sm text-xs'}> {message.date} | </span> {message.message}
                                        </p>
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