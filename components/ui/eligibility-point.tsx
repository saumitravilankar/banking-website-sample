"use client"

import { cn } from "@/lib/utils";
import Image from "next/image";
import { useState } from "react";

type Props = {
    img: string;
    title: string;
    desc: string;
    sentence: string;
}

const EligilityPoint = ({ img, title, desc, sentence }: Props) => {

    const [show, setShow] = useState(true)

    return (
        <div className={cn("px-12 min-h-[200px] flex items-center justify-center cursor-pointer hover:shadow-md", show ? `bg-themeBlue` : `bg-themeColor`)}
            onClick={() => setShow(!show)}
            onMouseEnter={() => setShow(false)}
            onMouseLeave={() => setShow(true)}
        >
            {
                show ?
                    <div className=" flex justify-center items-center flex-col gap-3 ">
                        <Image src={img} alt="" width={64} height={64} />
                        <h1 className="font-semibold text-white text-center w-max text-2xl">{title}</h1>
                        <p className="text-xs text-center text-white">{desc}</p>
                    </div>
                    :
                    <div className="flex items-start justify-center h-full w-full">
                        <p className="text-sm text-center text-white leading-5">{sentence}</p>
                    </div>
            }
        </div>
    )
}

export default EligilityPoint