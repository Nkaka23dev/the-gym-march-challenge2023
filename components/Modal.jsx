import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import {HiOutlineArrowNarrowRight} from "react-icons/hi"

export default function Modal() {
  return (
    <section
      className={`h-screen fixed grid -z-50 top-[4.5rem] inset-0 border-t-2 border-white  `}
    >
      <div className="bg-[#D6D6D6] h-72">
        <div className="border-b border-b-white flex py-3 gap-1 items-center text-red-500 px-16">
          <HiOutlineArrowNarrowRight />
          <p> Home</p>
        </div>
        <div>
          <div className="flex">
            <div className="flex flex-col bg-white space-y-8 py-4 px-4">
              {[1, 2, 3, 4].map(() => {
                return (
                  <div>
                    <MdOutlineArrowForwardIos />
                  </div>
                );
              })}
            </div>
            <div className="w-full">
              {[{title: "Education", link: "education"}, {title: "Research", link: "research"}, {title: "News Events", link: "news"}, {title: "About the UVA", link: "about"}, {title: "Library", link: "library"}].map((val,e) => {
                return (
                  <Link key={e} href={val.title}>
                  <div  className="border-b border-b-white text-sm cursor-pointer w-full py-3 px-3">
                    {val.title}
                  </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
