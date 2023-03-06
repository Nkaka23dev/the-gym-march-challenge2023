import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Inter, Libre_Baskerville } from 'next/font/google'
import {SlHeart} from "react-icons/sl"
import {TfiSearch} from "react-icons/tfi"

const inter2 = Libre_Baskerville ({weight: '700', subsets: ['latin'] })

export default function NavBar() {
  return (
   <>
    <section className="lg:hidden py-4 shade">
      <div className="max-w-[87.5rem] flex-wrap mx-auto flex justify-between items-center">
        <div className=" w-[40%]">
          {/* <Image
            src=""
            alt="Picture of the author"
            width={430}
            height={430}
          /> */}
          <img src="/svgs/header.svg" alt="" />
        </div>
        {/* second div */}
        <div className="flex w-[60%] justify-end items-center flex-wrap gap-10 ">
          <div className="relative w-[50%]">
            <input type="text" placeholder="Search..." className=" placeholder-gray-400 w-full py-2 px-5 border border-gray-300" />
            <TfiSearch className="absolute right-3 border-l-2 border-gray-300 ml-3 top-[30%] text-2xl "/>
          </div>
          <div className="flex flex-wrap gap-7">
          <div className="flex items-center gap-2">
            <h1 className="text-md">Compare programme</h1>
            <SlHeart className="text-4xl font-extralight"/>
          </div>
          <div className="border border-black p-3">
            <p className="">NL</p>
          </div>
          </div>
        </div>
      </div>
    </section>
   {/* second nav */}
    <section className="bg-[#F5F5F5] py-3 shade lg:hidden mt-4">
    <div className={`max-w-[87.5rem] flex gap-10 flex-wrap mx-auto ${inter2.className}`}>
     {[{title: "Education", link: "education"}, {title: "Research", link: "research"}, {title: "News &Events", link: "news"}, {title: "About the UVA", link: "about"}, {title: "Library", link: "library"}].map((i,e) => {
        return (
            <Link className="text-md text-gray-600" href="#">
                {i.title}
            </Link>
        )
     })}
    </div>
    </section>
   </>
    
  );
}
