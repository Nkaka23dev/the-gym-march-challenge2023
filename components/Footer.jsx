import React from 'react'
import { GrFacebookOption } from "react-icons/gr"
import { FaLinkedinIn, FaTwitter, FaInstagram } from "react-icons/fa"
import { BsYoutube, BsPencilSquare } from "react-icons/bs"
import { AiOutlineWhatsApp } from "react-icons/ai"
import { MdOutlineKeyboardArrowRight } from "react-icons/md"
import Image from 'next/image'
import { Inter, Libre_Baskerville } from 'next/font/google'

const inter = Libre_Baskerville({ weight: '700', subsets: ['latin'] })
const inter3 = Libre_Baskerville({ weight: '400', subsets: ['latin'] })

export default function Footer() {
  return (
    <>
    {/* footer */}
    <footer className='bg-[#1F1D20] md:px-3  pt-8 pb-14 border-b border-[#d6d6d6]'>
          <div className='max-w-[87.5rem] mx-auto '>
            <div className=''>
              {/* <Image
                src="/svgs/footer.svg"
                className=''
                alt="Picture of the author"
                width={350}
                height={350}
              /> */}
              <img src="/svgs/footer.svg" alt="" />
            </div>
            <div className='grid md:grid-cols-1 mt-12 grid-cols-4 text-white gap-6'>
              {[{ title: "Education research", link: ["Bachelor's programmes", "minors", "master's programmes", "professionaldevelopment", "exchange", "summerschool", "phdatuva", "researchatuva"] }, { title: "Go to", link: ["webmailforuvastaff", "webmailuvastudents", "library", "canvas", "sis", "timetable", "coursecatalogue", "vacancies", "uvashopnlmerchandisestore"] }, { title: "Information for", link: ["prospectivestudents", "currentstudents", "staff", "journalists", "alumni", "donors", "employers", "externalsuppliers"] }, { title: "Contact", link: ["contactinformation", "locations", "contactstudentservices", "theuvaandsocialmedia"] }].map((value, el) => {
                return (
                  <div className='card' key={el}>
                    <div className=''>
                      <p className={`text-md tracking-wide font-semibold`}>
                        {value.title}
                      </p>
                      <div className='mt-5 space-y-2'>
                        {value.link.map((e, idx) => {
                          return (
                            <div key={idx} className='flex items-center'>
                              <MdOutlineKeyboardArrowRight className="text-white text-lg" />
                              <p className='text-[0.86rem] tracking-wide'>{e}</p>
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
        </footer>
        <section className='py-6 bg-[#1F1D20] md:px-3'>
          <div className='max-w-[87.5rem] mx-auto md:flex-col flex justify-between '>
            <div className='flex  gap-3 text-[#d6d6d6]'>
              {[{ title: "Copyright UVA 2023", link: "copyright" }, { title: "About this site", link: "about" }, { title: "Privacy", link: "privacy" }, { title: "Cookie settings", link: "cookie" }].map((value, index) => {
                return (
                  <p key={index} className='text-[0.78rem]'>{value.title}</p>
                )
              })}
            </div>
            <div className="flex text-[#d6d6d6] md:flex-col items-center">
              <div>
                <p className='text-[0.78rem]'>Follow UVA on social media</p>
              </div>
              <div className='flex items-center space-x-2'>
                {[<GrFacebookOption className="text-2xl text-white" />, <FaLinkedinIn className="text-2xl text-white" />, <FaTwitter className="text-2xl text-white" />, <AiOutlineWhatsApp className="text-2xl text-white" />, <FaInstagram className="text-2xl text-white" />, <BsYoutube className="text-2xl text-white" />].map((val, idx) => {
                  return (
                    <div className="hover:bg-[#4a4a4a]  rounded-full">
                      {val}
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
