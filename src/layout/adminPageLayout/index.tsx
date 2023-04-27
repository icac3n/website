// @flow
import * as React from 'react';
import {useSession, signIn, signOut } from "next-auth/react"

type Props = {
    children: React.ReactNode;
};

const AdminPageLayout = (props: Props) => {
    const {data: session} = useSession()
    return (
        <div>
            <div className="flex flex-col min-h-[calc(100vh-21.80rem)] h-full w-full">
                <main className={'h-full'}>
                    <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8 min-h-[calc(100vh-21.80rem)] ">
                        <div className={' flex flex-row items-center p-3 justify-between w-full mx-auto bg-gray-100'}>
                            <h1 className={'font-bold text-xl'}>
                                Admin Page
                            </h1>
                            {
                                session &&
                                    <button className={'bg-red-600 px-2 py-1 rounded-md text-white cursor-pointer'} onClick={()=> {signOut()}}>
                                        Logout
                                    </button>
                            }
                        </div>
                        {
                            session ?
                                props.children
                                :
                                <div className={'flex flex-col items-center justify-center h-56 w-full bg-gray-50'}>
                                    <h1 className={'text-2xl font-bold'}>
                                        You are not logged in
                                    </h1>
                                    <button className={'bg-blue-600 px-2 py-1 rounded-md text-white cursor-pointer'} onClick={()=>{signIn()}}>
                                        Login
                                    </button>
                                </div>
                        }
                        {/* Replace with your content */}
                    </div>
                </main>
            </div>
        </div>
    );
};

export default AdminPageLayout;