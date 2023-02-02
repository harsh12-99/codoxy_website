import React from 'react'
import Image from 'next/image'
const about = () => {
  return (
    <div>
      <div className='w-full border-2 bg-sky-900 text-white text-center py-44'>
        <h1 className='text-6xl font-bold'>About Us</h1>
      </div>
      <div className='' >
        <div className='container text-center m-auto mt-20'>
        <h1 className='text-3xl font-bold '>About company</h1>
        <p className='text-xl font-semibold'>Based in Central India, Codoxy Solutions has expertise in providing Web Application, Mobile Application, ERP and E-Commerce Services, digital and asset based business solutions that bridges clients execution gap to build stronger, simplified and more innovative businesses.</p>
        </div>
        <div className=' container m-auto  flex flex-row gap-x-10 justify-between items-center  '>
          <div className=''>
          <img src="/images/about-01.jpg" className="w-[1200px]  " alt="" />
          </div>
          <div className='flex flex-col items-start gap-y-5'>
          <p>We are the team of young entrepreneurs who believe in creating future with the right code</p>
          <p>Our team has some highly skilled coders cum brogrammers. Focused on our individual clients served by attentive leadership & people who aim relentless pursuit towards achieving better results every time</p>
          <p>Like our name we emphasis on fundamentals to give out a high quality. Customer satisfaction is one of the most crucial things for us and comes first in our priority list</p>
          <p>Analyzing your needs thoroughly and developing precise website. Codoxy, provide astonishing work from the scratch so that the development would be highly customizable as per clients' requirement. We have 95% of the client retention rate</p>
          </div>
        </div>
        
      </div>
    </div>
  )
}

export default about