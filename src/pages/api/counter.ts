import {PrismaClient} from '@prisma/client'
import {NextApiRequest, NextApiResponse} from "next";

const prisma = new PrismaClient()

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {

    const increment = req.query.i ? (req.query.i as string) : '0'
    console.log({increment})
    if (req.method === 'GET') {
        const result = await prisma.counter.findUnique({
            where: {
                id: 1
            }
        })
        if (increment === '1') {
            await prisma.counter.update({
                where: {
                    id: 1
                },
                data: {
                    counter: {
                        increment: 1
                    }
                }
            })
        }
        if (result)
            return res.status(200).json({counter: result.counter})
        else
            return res.status(200).json({counter: 0, success: true})
    } else {
        return res.status(405).json({message: 'Method not allowed', success: false})
    }
}