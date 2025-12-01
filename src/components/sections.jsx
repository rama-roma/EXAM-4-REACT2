import React from 'react'
import img1 from '../images/Services (3).svg'
import img2 from '../images/Services (4).svg'
import img3 from '../images/Services (5).svg'
const Sections = () => {
  return (
    <>
      <div className='hidden md:block'>
    <section className='mt-30 flex items-center justify-center gap-[170px] mb-20'>
        <article className='flex flex-col items-center gap-[20px]'>
            <img src={img1} alt="" />
            <p className='text-[20px] font-bold'>FREE AND FAST DELIVERY</p>
            <p>Free delivery for all orders over $140</p>
        </article>
        <article className='flex flex-col items-center gap-[20px]'>
            <img src={img2} alt="" />
            <p className='text-[20px] font-bold'>24/7 CUSTOMER SERVICE</p>
            <p>Friendly 24/7 customer support</p>
        </article>
        <article className='flex flex-col items-center gap-[20px]'>
            <img src={img3} alt="" />
            <p className='text-[20px] font-bold'>MONEY BACK GUARANTEE</p>
            <p>We reurn money within 30 days</p>
        </article>
    </section>
      </div>


      <div className='block md:hidden'>
    <section className='mt-30 flex flex-col items-center justify-center gap-[170px] mb-20'>
        <article className='flex flex-col items-center gap-[20px]'>
            <img src={img1} alt="" />
            <p className='text-[20px] font-bold'>FREE AND FAST DELIVERY</p>
            <p>Free delivery for all orders over $140</p>
        </article>
        <article className='flex flex-col items-center gap-[20px]'>
            <img src={img2} alt="" />
            <p className='text-[20px] font-bold'>24/7 CUSTOMER SERVICE</p>
            <p>Friendly 24/7 customer support</p>
        </article>
        <article className='flex flex-col items-center gap-[20px]'>
            <img src={img3} alt="" />
            <p className='text-[20px] font-bold'>MONEY BACK GUARANTEE</p>
            <p>We reurn money within 30 days</p>
        </article>
    </section>
      </div>
    </>
  )
}

export default Sections