import React from 'react'
import Image from 'next/image'
import localFont from '@next/font/local' 

const inter = localFont({src:'../public/utopiaBold.woff2', display: 'swap'})
const inter3 = localFont({src:'../public/utopia.woff2', display: 'swap'})

export default function Links() {
  return (
    <>
    
        {/* section with 8 grids */}
        <section className='bg-white pb-20 md:px-3'>
          <div className='max-w-[87.5rem] mx-auto '>
            <div className=''>
              <p className={`text-3xl pt-20 pb-6 font-bold ${inter.className}`}>Go to:</p>
            </div>
            <div className='grid md:grid-cols-1 grid-cols-3 gap-6'>
              {[{ title: "Alumni", link: "alumni" }, { title: " PhD", link: "uva" }, { title: "UVA Experts", link: "phd" }, { title: "UVA Experts", link: "uva" }, { title: "Staff website", link: "staff" }, { title: "Student website", link: "student" }].map((value, el) => {
                return (
                  <div className='card group  cursor-pointer transition-all duration-500 ease-in-out '>
                    <div className='border pb-10 border-gray-200 bg-white px-5 py-3 space-y-3'>
                      <p className={`text-[1.45rem] group-hover:underline font-bold group-hover:text-red-500   cursor-pointer ${inter.className}`}>
                        {value.title}
                      </p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>
    </>
  )
}
