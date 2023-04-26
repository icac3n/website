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
            <div className="flex flex-col min-h-[calc(100vh-21.80rem)]">
                <main>
                    <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
                        <div className={' flex flex-row items-center px-3 py-1 justify-between h-10 w-full mx-auto bg-gray-100'}>
                            <h1 className={'font-bold text-xl'}>
                                Admin Page
                            </h1>
                            {
                                session ?
                                    <button className={'bg-red-600 px-2 py-1 rounded-md text-white cursor-pointer'} onClick={()=> {signOut()}}>
                                        Logout
                                    </button>
                                    :
                                    <button className={'bg-blue-600 px-2 py-1 rounded-md text-white cursor-pointer'} onClick={()=>{signIn()}}>
                                        Login
                                    </button>

                            }
                        </div>
                        {/* Replace with your content */}
                        {props.children}
                    </div>
                </main>
            </div>
        </div>
    );
};

export default AdminPageLayout;