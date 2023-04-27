

import { AdminPageLayout } from "@/layout";



const AdminPage = () => {

    const archive = [
        {
            id: 1,
            year:2018
        },
        {
            id: 2,
            year: 2021
        },
        {
            id: 3,
            year: 2022
        },
        {
            id:4,
            year:2023
        }
    ]

    return (
        <div className={'flex flex-col items-center py-2'}>
            <h1 className={'font-bold text-2xl'}>
                Select a year
            </h1>
            <div className={'h-full w-full grid grid-cols-1 md:grid-cols-3 gap-2 py-5'}>
                {
                    archive.map((item,index) => {
                        return(
                            <div key={index} className={'col-span-1 flex flex-col justify-center items-center bg-gray-50 px-3 py-5 border-2 border-gray-200 cursor-pointer'}>
                                {item.year}
                            </div>
                            )
                    })
                }
                <div className={'col-span-1 flex flex-col justify-center items-center bg-blue-100 px-3 py-5 border-2 border-gray-200 cursor-pointer'}>
                    Create New
                </div>
            </div>
        </div>
    );
};

AdminPage.pageLayout = AdminPageLayout;

export default AdminPage;