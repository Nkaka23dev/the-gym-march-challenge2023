import Image from 'next/image'
import localFont from '@next/font/local' 

const inter = localFont({src:'../public/utopiaBold.woff2', display: 'swap'})
const inter3 = localFont({src:'../public/utopia.woff2', display: 'swap'})

export default function News() {
  return (
   <>
   {/* section with 4 grids */}
   <section className='bg-[#E6E6E6] pb-20 md:px-3'>
          <div className='max-w-[87.5rem] mx-auto '>
            <div className=''>
              <p className={`text-[1.7rem] pt-16 pb-12 font-bold ${inter.className}`}>News</p>
            </div>
            <div className='grid grid-cols-4 md:grid-cols-1 gap-6 '>
              {[
                {img:"https://www.uva.nl/binaries/_ht_1677194284781/cardsmall/content/gallery/onderzoek/iop/nieuws/2023/20230219_teflon-wrijving_imgeng.png", title:"The surface of Teflon — the non-stick coat-ing in your pan — is incredibly slippery.Thanks to research carried out at the Institute of Physics (UvA) and research centre ARCNL, we finally know where this slipperiness", subTitle:"Teflon is so slippery be-cause it slides on itself"}, 
              {
                img: "https://www.uva.nl/binaries/_ht_1676632421291/680x190-webp/content/gallery/faculteiten-en-diensten/fmg/fmg-corporate-met-restricties/nieuws/rich-man.jpg",
                title:"Are the highest-paid jobs with the highest prestige performed by the smartest people? No, say sociologists who used unique information about 59,000 men to uncover the connection between intelligence and wealth.",
                subTitle:"The richest people don't turn out to be the smartest"
              },
               {
                img:"https://www.uva.nl/binaries/_ht_1676282102189/cardsmall/content/gallery/faculteiten-en-diensten/uva-bureau-communicatie/persvoorlichting/2023/honeyforaging_bryndanvanpinxteren.jpg", 
                title:"Why are human brains three times larger than those of our closest living relatives? A diverse, high-quality diet and a long child-hood in which we learn complex ways to acquire and gather food could be a major",
                subTitle:"Why are our brains so huge?"
              },
              {
                img:"https://www.uva.nl/binaries/_ht_1540568399864/cardsmall/content/gallery/faculteiten-en-diensten/restyling18-generiek-beeld/_monique-kooijmans-athenaeum-illustre.jpg",
                subTitle:"Moratorium on research  with Shell",
                title:"The UVA will not enter into research collab- orations with Shell or similar companies for the time being. A discussion with stu-dents and staff needs to be concluded first,according to the Executive Board. In recent",
              }
              
              ].map((value, el) => {
                return (
                  <div className='card group cursor-pointer transition-all duration-500 ease-in-out '>
                    <div>
                      <img className='w-full h-40 object-cover object-center aspect-video'
                        src={value.img} alt="" />
                    </div>
                    <div className='border space-y-3 flex flex-col h-72 pb-20 border-gray-200 bg-white px-3 py-3 '>
                      <p className={`text-[1.4rem] leading-7 group-hover:underline group-hover:text-red-500 cursor-pointer ${inter.className}`}>{value.subTitle}</p>
                      <p className=' leading-6 max-w-[18.3rem] text-[0.94rem]'>{value.title}</p>
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
