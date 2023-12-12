import React from "react";

export default function EntryModal({
                                       showModal,
                                       setShowModal
                                   }: {
    showModal: boolean, setShowModal: React.Dispatch<React.SetStateAction<boolean>>
}) {
    return (
        <>
            {showModal ? (
                <>
                    <div
                        className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                    >
                        <div className="relative w-auto my-6 mx-auto max-w-3xl">
                            {/*content*/}

                            <div
                                className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none relative">
                                {/*header*/}
                                <svg
                                    onClick={() => setShowModal(false)}
                                    className={"absolute top-5 right-5 cursor-pointer"}
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="#000000"
                                    stroke-width="4"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                >
                                    <line x1="18" y1="6" x2="6" y2="18"/>
                                    <line x1="6" y1="6" x2="18" y2="18"/>
                                </svg>
                                <img src={"/images/misc/website_chief_guest.png"}/>
                            </div>
                        </div>
                    </div>
                    <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                </>
            ) : null}
        </>
    );
}