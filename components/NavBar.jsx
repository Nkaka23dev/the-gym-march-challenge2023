import Link from "next/link";
import React, { useEffect, useState } from "react";
import localFont from "@next/font/local";
import Modal from "./Modal";

const inter3 = localFont({ src: "../public/utopia.woff2", display: "swap" });

export default function NavBar() {
  const [hidde, setHide] = useState(true);
  const [hidde2, setHide2] = useState(true);
  const [hidde3, setHide3] = useState(true);
  

  const whenScroll = () => {
    if (window.scrollY < 160) {
      setHide(true);
    } else {
      setHide(false);
    }
  };

  const whenScroll2 = () => {
    if (window.scrollY < 300) {
      setHide2(true);
    } else {
      setHide2(false);
    }
  };

  const whenScroll3 = () => {
    if (window.scrollY < 30) {
      setHide3(true);
    } else {
      setHide3(false);
    }
  };

  useEffect(() => {
    document.addEventListener("scroll", whenScroll);
  }, [hidde]);

  useEffect(() => {
    document.addEventListener("scroll", whenScroll2);
  }, [hidde2]);

  
  useEffect(() => {
    document.addEventListener("scroll", whenScroll3);
  }, [hidde3]);

  return (
    <>
      <section
        className={`lg:hidden transition-all duration-700 ${
          hidde ? "py-[1.2rem]" : "py-[0.3rem]"
        } duration-500  shade fixed top-0 bg-white w-full right-0 left-0 z-50`}
      >
        <div className="max-w-[86.5rem] flex-wrap mx-auto flex justify-between items-center">
          <div className=" w-[40%] cursor-pointer">
            {hidde && <div ><img src="/svgs/header.svg" alt=""  className="transition-all delay-500  "/></div>}
            {!hidde && <img src="/svgs/headerMob.svg" className="h-[3.2rem]" />}
          </div>
          {/* second div */}
          <div className="flex w-[60%] justify-end items-center flex-wrap gap-3">
            <div className="relative w-[50%]">
              <input
                type="text"
                placeholder="Search..."
                className="placeholder-gray-400 rounded-md w-full py-[0.52rem] px-5 border border-gray-300"
              />
              <img
                src="/svgs/search.svg"
                alt=""
                className="absolute cursor-pointer right-3 border-l-2 border-gray-300 ml-3 top-[7%]  py-1 pl-2"
              />
            </div>

            <div className="flex flex-wrap  gap-5">
              <div className="flex cursor-pointer group items-center gap-2">
                <h1 className="text-md group-hover:underline">Compare programme</h1>
                <img className="" src="./svgs/heart.svg" alt="" />
              </div>
              <div className="border m border-black  p-2">
                <img src="./svgs/nl.svg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* second nav */}
      {hidde2 && (
        <section className={`bg-[#F5F5F5] py-3 ${
          hidde  ? "mt-[5.2rem] " : "mt-[3.8rem]"
        }   pt-[0.7rem] ${
          hidde3  ? "mt-[5.2rem] " : "mt-[3.8rem]"
        } shade lg:hidden fixed transition-all  duration-700 top-0 w-full right-0 left-0 z-50`}>
          <ul
            className={`max-w-[86.5rem] flex gap-10 flex-wrap mx-auto `}
          >
            {[
              { title: "Education", link: [{title: "Bachelors", link: "bachelors"}, {title: "Masters", link: "masters"}, {title: "Professional development", link: "professional"}, {title: "Summer School", link: "summer"}, {title: "Open programmes", link: "open"}, {title: "Exchange", link: "exchange"}]},


              { title: "Research", link: [{title: "Research at the UvA", link: "research"}, {title: "PhD", link: "phd"}] },

              { title: "News &Events", link: [{title: "News", link: "news"}, {title: "Events", link: "events"}, {title: "Press Office", link: "press"}, {title: "Coronavirus information", link: "coronavirus"}, {title: "Ukraine information and support", link: "ukraine"}] },
              { title: "About the UVA", link: [{title: "About the University", link: "about"}, {title: "Alumni", link: "alumni"}, {title: "Contact and locations", link: "contact"}, {title: "Organisation", link: "organisation"}, {title: "Policy and regulations", link: "policy"}, {title: "Working at the UvA", link: "working"}] },
              { title: "Library", link: [] },
            ].map((i, e) => {
              return (
                <li className="relative group">
                <Link
                  className={`text-xl border-b-2 border-transparent hover:border-b-[#bd0032]  pb-3  hover:text-[#bd0032] tracking-wide ${inter3.className} text-[#464548]`}
                  href="#" 
                >
                  {i.title}
                </Link>
                  <div className="absolute  group-hover:block bg-[#F5F5F5]  top-10 hidden">
                   <div className={`flex flex-col  w-72 pl-6 space-y-2 ${e === 4?"pt-0 pb-0":"pb-8 pt-4"} `}> 
                   {i.link.map((e,val) => {
                    return (
                      < Link className="hover:text-[#bd0032] cursor-pointer text-md tracking-wide hover:underline text-[#464548]" key={val} href="#">{e.title}</Link>
                    )
                   })}
                   </div>
                  </div>
                
                </li>
              );
            })}
          </ul>
        </section>
      )}
    </>
  );
}
