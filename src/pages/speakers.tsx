import React from "react";
import {speakers} from "@/data/speakers";

const Speakers = () => {

    return (
        <div className={"my-8 min-h-[calc(100vh-28.8rem)]"}>
            <h1 className={'text-3xl font-bold text-center mb-10'}>Speakers for ICACCCN 2023</h1>
            <div className={'grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-x-5 gap-y-8 px-5'}>
                {
                    speakers.map((speaker, index) => {
                        return (
                            <div key={index}
                                 className={'col-span-1 shadow-md grid grid-cols-3 gap-3 bg-gray-100 rounded-lg'}>
                                <div className={'col-span-1 w-full h-40'}>
                                    <img src={speaker.image} className={'h-full w-full object-cover rounded-lg '} alt={speaker.name}/>
                                </div>
                                <div className={" flex flex-col gap-1 col-span-2 my-2"}>
                                    <div className={"-ml-1"}>
                                        {!speaker.national &&
                                            <div
                                                className={"rounded-full w-fit font-semibold bg-blue-800 bg-opacity-20"}>
                                                <p className={"px-2 py-0.5 text-sm text-blue-800"}>International
                                                    Speaker</p>
                                            </div>
                                        }
                                        {
                                            speaker.national &&
                                            <div
                                                className={"rounded-full font-semibold w-fit bg-amber-600 bg-opacity-20"}>
                                                <p className={"px-2 py-0.5 text-sm text-amber-800"}>National Speaker</p>
                                            </div>
                                        }
                                    </div>
                                    <span className={'font-semibold text-lg'}>{speaker.name}</span>
                                    <span
                                        className={'font-light text-xs'}>{speaker.designation}</span>
                                </div>
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