import React from "react";

const Speakers = () => {

    const speakers = [
        {
            "name": "Prof. (Dr.) Sri Niwas Singh",
            "designation": "Director, Atal Bihari Vajpayee- Indian Institute of Information Technology and Management (ABV-IIITM), Gwalior, India / Chairman, India Council, IEEE India.",
            "image": "data:image/jpeg;base64,UklGRrIIAABXRUJQVlA4IKYIAAAQQwCdASrOAM4APm0yk0akIy0hLJeKkaANiWcA0qTCFAieyLA1uZQpQvwBfdJCPevDP//3QVAg+W90Zr+fh7aQJRGNkNs5xSCOU03IIbKvSiM1ciuni6Gi5Z3NfDzLHEXMHqhtv45U5/xtwWChj3239wjCCplPsVBNCnhRYO72wzQyHJZyvG48ELhWYPpUgfYHRUN1ZRUUl4yAVT57XnVm9HGNv9Jg+L9aw7EQ5A24OpZ8B5OzN43q+QD6995Ukp1oWZgR5IYsxGptZn1FVxaq4wpFAgZuwBw4Sla7oKnLRqm33WWEE8e1Wc7KqnLn++QmSc7fTfEsf7pJkAwYIMYH8S3/2z7HKgrUuyAaUTrUVZ7myYJQFDV0pm3ftEMC/8Eqeev9gxmBzxaaw7MM5sx1VFdoXGIhgzscsl5Ubg3BgPTpAaU33+uGzQ98jhNYjSkGQCngOxiQZmyYrDfGb6GzNsZAmRoD5mBlogpBJLkgGYQ2xg7Q2ED4t+FDN8xvAGZeOKmLXvCvUJzRh8eI1PhhLppUpf7X+J+SewajE/B02DLqEVebwxzDHTA3XjSIaN6jnig7QVVNik3RdDfc3PTB1t2x2hK7BoFpZLGs5TRnuD/3mqcKZyFf2FJp+qNqKUwE9rKz5JS419U0vsJcwr7czwzqYKYaFLkBmGgi4RXjPcRdUXWIFxeHV5mDymTmN4J3sDWwCciwcvXkkRA+6yDTAAD+/PQHahF332gqns9E2DvCfLybZxTxXkGGJNpBf7vLURgksC4qWR58kR1X/0A2yeucQ3IkkHSiprDJC5n6Fcfg2HmOh0xgGhGRPV/P1ZADWZpPWkvEc1ecJWdem9miL6i116+IaRgI7c9s5ywkLeg0zMP198w+HAwC+zV+QPnVLcuSn4DA8kUQsRU5nOBArt98qIuvrYUF8hZM6E+VSNXbjJnk5H2VKwA9EP6YnNurKpKJCkU2Z/FDWjW52L4bWxSL6INR6h6jNadSNMQjJIDhfDsJIPkCq/2reDbBA7NKGjaOpOOJe7aUUU12J81SvyG8l4lBCDz7X8mbTTuG/gXLPb5Gr7gCoF7L8AolgHD+fNBEyMcTHYdRjlMxd8zHGKyOdsU8gwZ9NkDK4xzx86WHTbVN4qbAPcszwka7beymPb4ZoxQQdlulVtNkXwKSB0CF08oyOv528n8hX7vCuD1n8DCU9l2ICzak1kv4AAhuyH5KtmDsHE/6eg7Cj6mMAQ8NrP+rHTHNQ0ksEZe34BZeDctxR/CDBPd/ozCyZ359AnVq7sqYrTBjh4BXB7TtsMyraUz96hd2U2uwNG6nn6Rck3kWBkRWQH/vZOwoluxY08bb83pLGOVHItA7fN3QjkRwvjDxvN+yOexk2msdSlp3Fhe4O4kcNy/dfTVh8rHwysYbz+QCB0/hWj/t7kJW+0CoNxm3oXV1saiGxfY6qGugkXkzTopE1weI5aDpD7PSukxhpqSXHCx/YmTnsJnAhkJnxhjIlWnDDCLk/EJ8N4UEL5/mWCOXg2wpftpNUS+boD7b9HJCtw1jQx4PRYs6H8kJEAiwbiBkPYBpIyFQe6Ttdb66gc8W5UUZG/FvqyUTyW1LPUgquzpnXEYLedRS530aLcCB+/wY4MDVqGfOrrrDdSxgJnrRPhW2UBcMoJZywoHnUWtSfmjCzjmsHN2tSlw5SI6oK97j1HJTgwSAHZQPNhUVd4APiqsDJya5Gk9w0STRUnXrpiwcL85kTMbLwsvhuHH8ogeo/1hAidO7SQbHX5vZ6tiA4GTdFpP+M1LWiGEtmSh9I1atMq0TQnDmB2PobLYciHJXtaELhb0ffJEkfQgBbA5h0q67kD74eA1MfF8OBNflCgVPNPGIHPSEwfvAAlox2tToXDGceeFu7HNixqTwGUg+wjJajqFrC0jIUNii7HjNg4UYTEdz4G0B3AXObTsORjvfSZ4jFLnBE6jiOz5bNOjKZ9mu/3FyIKyHmQQQSN23KBIXS79R45IhUYjhk/RlHRMgOr9Wpobt/5B1e+gcqg3WH5k8oJeteDpVeyNvOZl2EK9nYTaamgPJEmwYB9IUALWs2tWRE6HuaiXYig3koLulYIYXcEkzmKeWbEkxVAzzxJoEKMyY6IZxzhp5htUNqRQe2imFwotwDwRA4hONs1sMbIdB+BbkVRJEm7k1Ydn9difA48oOOeBK403ATj2IvV8xVa6qxLwPp0RQ1Wd21yoxZzvbtXgAcDicXIGRBNl5xRVz1vaavn8pK5+uqRjufujVg0G/ZO+D3QNl/+aneYdCeCpv3VgqQ01QQsHMw5kgH9E5FQQPh7YCxdxtVei7ONJHiOWq62XeLXdaHwlGe3Q9nKGZAC1x1tbMoqYBDmTlPsfdWN//GG9QcncvF4fS0mlv/sJL8LKokFsYikciqdcMTsf9q9sJkerc+TC4NFx+hPYQeGH7cZPSmMNUkRj3UUe8OapiCxUfC7khX4gxXQ8C3CgBnGpxqtlSey1w4sZD2WQpQkNKgscBWpXacMpNOjfw2N5RwcBtWxlYA7RranBzqMbigcnQR+g8CU8r7g55GDM+STEU2dj4uJSq51IWr230WT3ShFw9826hTvvQj5uSTVeXyjFNroQdZ2o3/laDJs67yqjeoSawd4pr2+KYKcV/DUBRlBGRxOH2QwXA63nvbYvl+/XPK9yXUlwKm6NDaP/vJDb0aAVM56PVKJza+nLdrvYZX667YcpTXoTixKt8vvwAOPLH4O7+ip1hpMvihlwTlBN1Ye5P7hvHJwuOrbaCzclxXdO1XMrv8vu9cd7M/XkSQhXHp4SBu3W7vDbb50SM762BFiQ09XDhqBamfvUJLENvviH5pIayNNfl4+yPL96cgTgQnY5r7iSV1g2rqfiDcgA979V5JMO6WVU88IM7+PUAWm+8n5DN4knuo8eChioGq2wf+VXZTgWXMAA=",
            "id": "e5f6g7h8"
        },
        {
            "name": "Prof. (Dr.) P. Nagabhushan",
            "designation": "Vice-Chancellor, Vignan's Foundation for Science, Technology & Research, Andhra Pradesh",
            "image": "https://icac3n.in/static/media/PNAGABHUSHAN.195f1e8f08d84e2950d1.jpg",
            "id": "i9j0k1l2"
        },
        {
            "name": "Prof. (Dr.) Satish K. Singh",
            "designation": "IIIT Allahabad / Section Chair, IEEE UP Section.",
            "image": "data:image/jpeg;base64,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",
            "id": "m3n4o5p6"
        },
        {
            "name": "Dr. Ahmed A. Elngar",
            "designation": "Associate Professor, Faculty of CS and AI, Beni-Suef University, Beni-Suef City, 62511, Egypt",
            "image": "https://icac3n.in/static/media/ahmed.d56429f9f28bb74b0c9e.jpg",
            "id": "q7r8s9t0"
        },
        {
            "name": "Dr. Kashif Nisar, SMIEEE",
            "designation": "Victorian Institute of Technology, 14 Adam Street, Hindmarsh, Adelaide, South Australia, 5007",
            "image": "https://icac3n.in/static/media/kashif.8e4a16eabca5de92068a.jpg",
            "id": "u1v2w3x4"
        },
        {
            "name": "Dr. Ana Clarke",
            "designation": "Partner Director – Data & AI , Artificial Intelligence Services Australia.",
            "image": "https://icac3n.in/static/media/anaClark.c65c1469e9f69a06e38b.jpg",
            "id": "y5z6a1b2"
        },
        {
            "name": "Prof. Nada Ratković, Croatia",
            "designation": "Assistant Professor, Department of Quantitative Methods on Faculty of Economics, Business and Tourism, University Split.",
            "image": "https://unsplash.it/1500/800?random=img17",
            "id": "c3d4e5f6"
        }
    ]
    return(
        <div className={"my-8"}>
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
        </div>
    )
}

export default Speakers