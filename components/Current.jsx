import React from 'react'
import Image from 'next/image'
import localFont from '@next/font/local' 

const inter = localFont({src:'../public/utopiaBold.woff2', display: 'swap'})
const inter3 = localFont({src:'../public/utopia.woff2', display: 'swap'})

export default function Current() {
  return (
   <>
    {/* section with three grids */}
    <section className='py-20 md:px-2'>
          <div className='max-w-[87.5rem] mx-auto '>
            <div className=''>
              <p className={`text-[1.68rem] py-7 ${inter.className}`}>Current</p>
            </div>
            <div className='grid grid-cols-3 md:grid-cols-1 gap-6 '>
              {[{title:"https://www.uva.nl/binaries/_ht_1621425617139/cardsmall/content/gallery/faculteiten-en-diensten/restyling18-generiek-beeld/trap-stairs-roeterseiland.jpg",link:"Study in Amsterdam Week 20 - 24 February",sub:"Discover everything an international student needs to know about studying at the UvA."}, {title:"https://www.uva.nl/binaries/_ht_1674056828979/680x190-webp/content/gallery/onderzoek/uva-corporate/impact-stories/de-slimme-stad-donker-2.png",link:"The UVA and the smart city",sub:"Find out how our cities are becoming smarter every day.UVA researchers are examining the pitfalls and the potential."}, {title:"https://www.uva.nl/binaries/_ht_1674029674329/680x190-webp/content/gallery/evenementen/2023/voorlichting/bachelorweek-vj-2023.jpg",link:"Bachelor's Week 17 - 25 March",sub:"Discover your Bachelor's at the UvA."}].map((value, el) => {
                return (
                  <div className='card cursor-pointer transition-all duration-500 ease-in-out group'>
                    <div>
                      <img className='w-full h-48 object-cover object-center aspect-video'
                       src={value.title} alt="" />
                    </div>
                    <div className='border border-gray-200 px-5 py-3 space-y-3 flex flex-col h-40'>
                      <p className={`text-2xl transition-all  duration-150   group-hover:text-[#bd0032] group-hover:underline   cursor-pointer ${inter.className}`}>{value.link}</p>
                      <p className=''>{value.sub}</p>
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
