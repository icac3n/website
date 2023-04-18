import Head from 'next/head'
import {StarterLayout} from "@/layout";

const Home = () => {
    return (
        <>
            <Head>
                <title>ICAC3N- Galgotias College of Engineering</title>
                <meta name="description" content="Next JS Starter"/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <main>
                <h1 className='font-sans text-red-400'>Home</h1>
            </main>
        </>
    )
}

Home.pageLayout = StarterLayout;

export default Home