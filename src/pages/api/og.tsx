import { ImageResponse } from '@vercel/og';
import {NextRequest} from "next/server";

export const config = {
    runtime: 'edge',
};

const regularFont = fetch(
    new URL('/public/assets/Inter-Regular.ttf', import.meta.url)
).then((res) => res.arrayBuffer());

const boldFont = fetch(
    new URL('/public/assets/Inter-Bold.ttf', import.meta.url)
).then((res) => res.arrayBuffer());

export default async function handler(
    req: NextRequest
): Promise<ImageResponse> {
    const [regularFontData, boldFontData] = await Promise.all([
        regularFont,
        boldFont
    ]);
    return new ImageResponse(
        (
            // Modified based on https://tailwindui.com/components/marketing/sections/cta-sections
            <div
                style={{
                    height: '100%',
                    width: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: 'white',
                }}
            >
                <div tw="flex flex-col w-full h-full items-center justify-center bg-white">
                    <div tw="bg-red-800 h-full items-center justify-center flex w-full">
                        <div tw="flex flex-col justify-center items-center text-white">
                            <div tw="flex space-x-4">
                                <img src="https://i.ibb.co/CHXYtfP/download.png" tw="w-20"/>
                            </div>
                            <p tw="font-bold text-4xl text-center">6th International Conference on Advances in</p>
                            <p tw="font-bold text-4xl -mt-4 text-center">Computing, Communication Control and Networking- ICAC3N</p>
                            <p tw="font-bold text-3xl -mt-1">2025</p>
                            <p tw="font text-3xl mt-12 text-center">Galgotias College of Engineering and Technology</p>
                        </div>
                    </div>
                </div>
            </div>
        ),
        {
            width: 1200,
            height: 630,
            fonts: [
                {
                    name: 'Inter',
                    data: regularFontData,
                    weight: 400
                },
                {
                    name: 'Inter',
                    data: boldFontData,
                    weight: 700
                }
            ]
        },
    );
}