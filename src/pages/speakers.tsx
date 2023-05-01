import React from "react";
import {speakers} from "@/data/speakers";

const Speakers = () => {

    return (
        <div className={"my-8 min-h-[calc(100vh-28.8rem)]"}>
            <h1 className={'text-3xl font-bold text-center my-5'}>Speakers for ICACCCN 2023</h1>
            <div className={'grid lg:grid-cols-3 grid-cols-1 gap-x-5 gap-y-8 px-5'}>
                {
                    speakers.map((speaker, index) => {
                        return (
                            <div key={index}
                                 className={'col-span-1 shadow-md flex flex-col items-center gap-1 bg-gray-100 rounded-lg'}>
                                <img src={speaker.image}
                                     className={'h-56 w-full object-cover rounded'} alt=""/>
                                <div className={"p-3 flex flex-col gap-1"}>
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
                                                className={"rounded-full font-semibold w-fit my-2 bg-amber-600 bg-opacity-20"}>
                                                <p className={"px-2 py-0.5 text-sm text-amber-800"}>National Speaker</p>
                                            </div>
                                        }
                                    </div>
                                    <span className={'font-semibold text-lg'}>{speaker.name}</span>
                                    <span
                                        className={'font-light text-sm'}>{speaker.designation}</span>
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