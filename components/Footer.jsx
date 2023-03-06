import React, { useState } from 'react'
import { GrFacebookOption } from "react-icons/gr"
import { SlArrowUp } from "react-icons/sl"
import { FaLinkedinIn, FaTwitter, FaInstagram } from "react-icons/fa"
import { BsYoutube, BsPencilSquare } from "react-icons/bs"
import { AiOutlineWhatsApp } from "react-icons/ai"
import { useEffect, useRef } from 'react';
import { MdOutlineKeyboardArrowRight } from "react-icons/md"
import localFont from '@next/font/local' 
import Link from 'next/link'


const myFont = localFont({src:'../public/CircularXXWeb-Book.woff2', display: 'swap'})

export default function Footer() {
  const buttonRef = useRef();
  const [hidde, setHide] = useState(true);

  const whenScroll = () => {
    if (window.scrollY < 1500) {
      setHide(false);
    } else {
      setHide(true);
    }
  }; 
  useEffect(() => {
    document.addEventListener("scroll", whenScroll);
  }, [hidde]);

  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  return (
    <>
    {/* footer */}
    <footer className={`bg-[#1F1D20] md:hidden md:px-3 ${myFont.className} pt-8 pb-14 border-b border-[#d6d6d6]`}>
          <div className='max-w-[87.5rem] mx-auto '>
            <div className=''>
              <img src="/svgs/footer.svg" alt="" />
            </div>
            <div className='grid md:grid-cols-1 mt-12 grid-cols-4 text-white gap-6'>
              {[{ title: "Education & research", link: ["Bachelor's programmes", "minors", "master's programmes", "professionaldevelopment", "exchange", "summerschool", "phdatuva", "researchatuva"] }, { title: "Go to", link: ["webmailforuvastaff", "webmailuvastudents", "library", "canvas", "sis", "timetable", "coursecatalogue", "vacancies", "uvashopnlmerchandisestore"] }, { title: "Information for", link: ["prospectivestudents", "currentstudents", "staff", "journalists", "alumni", "donors", "employers", "externalsuppliers"] }, { title: "Contact", link: ["contactinformation", "locations", "contactstudentservices", "theuvaandsocialmedia"] }].map((value, el) => {
                return (
                  <div className='' key={el}>
                    <div className=''>
                      <p className={`text-[0.9rem] tracking-wide font-medium`}>
                        {value.title}
                      </p>
                      <div className='mt-5 space-y-2 '>
                        {value.link.map((e, idx) => {
                          return (
                            <div key={idx} className='flex cursor-pointer items-center'>
                              <MdOutlineKeyboardArrowRight className="text-white text-lg" />
                              <p className='text-[0.86rem] '>{e}</p>
                            </div>
                          )
                        })}
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        {hidde && <button
      ref={buttonRef}
      className="py-4 px-3 right-5  bg-[#e6e6e6] text-xl border border-black fixed top-[80%]  transition-all duration-300  z-50"
      onClick={handleClick}
    >
      <Link href="#"> <SlArrowUp/></Link>
    </button>}
        </footer>
        <section className='py-6 bg-[#1F1D20] md:hidden  md:px-3 cursor-pointer'>
          <div className='max-w-[87.5rem] mx-auto md:flex-col flex justify-between '>
            <div className='flex  gap-3 text-[#d6d6d6]'>
              {[{ title: "Copyright UVA 2023", link: "copyright" }, { title: "About this site", link: "about" }, { title: "Privacy", link: "privacy" }, { title: "Cookie settings", link: "cookie" }].map((value, index) => {
                return (
                  <p key={index} className='text-[0.78rem]'>{value.title}</p>
                )
              })}
            </div>
            <div className="flex text-[#d6d6d6] gap-5 md:flex-col items-center">
              <div>
                <p className='text-[0.78rem]'>Follow UVA on social media</p>
              </div>
              <div className='flex items-center space-x-2'>
                {[<GrFacebookOption className="text-[1.5rem] text-[#d6d6d6]" />,<FaTwitter className="text-[1.5rem] text-[#d6d6d6]" />, <FaLinkedinIn className="text-[1.5rem] text-[#d6d6d6]" />,  <AiOutlineWhatsApp className="text-[1.5rem] text-[#d6d6d6]" />, <FaInstagram className="text-[1.5rem] text-[#d6d6d6]" />, <BsYoutube className="text-[1.5rem] text-[#d6d6d6]" />].map((val, idx) => {
                  return (
                    <div className="hover:bg-[#4a4a4a]  rounded-full">
                      <p>{val}</p>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </section>
    </>
  )
}
