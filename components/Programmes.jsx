import Image from 'next/image'
import { BsArrowRight} from "react-icons/bs"
import { Inter, Libre_Baskerville } from 'next/font/google'

const inter = Libre_Baskerville({ weight: '700', subsets: ['latin'] })
const inter3 = Libre_Baskerville({ weight: '400', subsets: ['latin'] })

export default function Programmes() {
  return (
    <>
    
        {/* next section */}
        <section className={`py-24 -ml-28 md:px-20 -mt-80 md:-ml-0 md:-mt-64 `}>
          <div className='max-w-5xl mx-auto md:grid-cols-1 grid grid-cols-3 gap-4 md:gap-1'>
            {[{ title: "Bachelor's", link: ["20+ English-taught Bachelor's", "programmes"] }, { title: "Master's", link: ["200+ English-taught Master's", "programmes"] }, { title: "Professional development", link: ["MBA's, executive programmes, and", "master classes"] }].map((e, el) => {
              return (
                <div className='border  border-[#bc0031] bg-white flex justify-between p-6 items-center'>
                  <div className=''>
                    <p className={`text-[#bc0031] text-[0.85rem] ${inter.className}`}>{e.title}</p>
                    <div className='mt-2'>
                    {[e.link.map((val, idx) => {
                      return (
                        <div >
                          <p className='text-gray-500'>{val}</p>
                        </div>
                      )
                    })]}
                    </div>
                  </div>
                  <BsArrowRight className='text-red-500' />
                </div>
              )
            })}
          </div>
        </section>
    </>
  )
}
