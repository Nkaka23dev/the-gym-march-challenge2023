import Link from 'next/link';
import { useRouter } from 'next/router'
import React from 'react'

export default function Page() {
    const route = useRouter();
    const name = route.query.name;
    
  return (
    <div className='h-[60vh] grid'>
       <div className='m-auto'>
       <h4 className='text-4xl  mb-6 max-w-xl md:text-2xl font-bold'><span className='capitalize font-bold'>{name}</span> Page....</h4>
        <Link href="/" className='underline text-blue-500 text-xl'>Back Home</Link>
       </div>
    </div>
  )
}
