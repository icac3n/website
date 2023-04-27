import React from "react";
import {speakers} from "@/data/speakers";

const Speakers = () => {

    return(
        <div className={"my-8 min-h-[calc(100vh-28.8rem)]"}>
            <h1 className={'text-3xl font-bold text-center my-5'}>Speakers for ICACCCN 2023</h1>
            <div className={'grid lg:grid-cols-3 grid-cols-1 gap-x-5 gap-y-8 px-5'}>
                {
                    speakers.map((speaker,index) => {
                        return(
                            <div key={index} className={'col-span-1 shadow-md flex flex-col items-center gap-1 bg-gray-100 rounded-lg p-3'}>
                                <img src={speaker.image} className={'h-56 border-2 border-gray-300 w-64 object-cover rounded'} alt=""/>
                                <span className={'font-semibold text-lg mt-3 text-center'}>{speaker.name}</span>
                                <span
                                    className={'font-light text-sm text-center'}>{speaker.designation}</span>
                            </div>
                        )
                    })
                }
            </div>
            {/*<h1 className={'text-lg text-center w-full'}>*/}
            {/*    Yet to be announced*/}
            {/*</h1>*/}
        </div>
    )
}

export default Speakers