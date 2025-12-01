import React from 'react'
import img from '../images/Side Image.svg'
import Card1 from '../components/card1'
import img1 from '../images/Services.svg'
import img2 from '../images/Services (1).svg'
import img3 from '../images/Services (2).svg'
import Card2 from '../components/card2'
import img4 from '../images/Frame 874.svg'
import img5 from '../images/Frame 875.svg'
import img6 from '../images/Frame 876.svg'
import img7 from '../images/Frame 883.svg'
import Section from '../components/sections'

const About = () => {
  return (
    <>
      <div className='hidden md:block'>
    <main>
      <div className='mt-20 flex items-center gap-[10px]'>
        <p className='text-[grey]'>Home</p>
        <p className='text-[grey]'>/</p>
        <p>About</p>
      </div>

      <section className='mt-20 flex justify-between items-center'>
        <div className='flex flex-col items-start gap-[20px] w-[50%]'>
          <h1 className='text-[50px] font-medium'>Our Story</h1>
          <p>Launced in 2015, Exclusive is South Asia’s premier online shopping makterplace with an active presense in Bangladesh. Supported by wide range of tailored marketing, data and service solutions, Exclusive has 10,500 sallers and 300 brands and serves 3 millioons customers across the region. </p>
          <p>Exclusive has more than 1 Million products to offer, growing at a very fast. Exclusive offers a diverse assotment in categories ranging  from consumer.</p>
        </div>
        <div>
          <img src={img} alt="" />
        </div>
      </section>

      <section className='mt-30 flex justify-center gap-[30px] items-center'>
        <Card1 img={img1} text1="10.5k " text2="Sallers active our site" />
        <Card1 img={img2} text1="33k " text2="Mopnthly Produduct Sale" />
        <Card1 img={img3} text1="45.5k " text2="Customer active in our site" />
        <Card1 img={img1} text1="25k " text2="Anual gross sale in our site" />
      </section>


      <section className='mt-30 flex justify-center gap-[70px] items-center'>
        <Card2 img={img4} text1="Tom Cruise" text2="Founder & Chairman" />
        <Card2 img={img5} text1="Emma Watson" text2="Managing Director" />
        <Card2 img={img6} text1="Will Smith" text2="Product Designer" />
      </section>
      <div className='flex justify-center mt-10'>
        <img src={img7} alt="" />
      </div>


      <Section/>
    </main>
      </div>


<div className='block md:hidden'>
    <main className='px-4'>
      <div className='mt-10 flex items-center gap-[10px]'>
        <p className='text-[grey]'>Home</p>
        <p className='text-[grey]'>/</p>
        <p>About</p>
      </div>

      <section className='mt-10 flex flex-col items-center gap-[30px]'>
        <div className='flex flex-col items-center gap-[20px] w-full text-center'>
          <h1 className='text-[32px] font-medium leading-tight'>Our Story</h1>
          <p className='text-[#666] text-sm leading-relaxed'>
            Launced in 2015, Exclusive is South Asia's premier online shopping marketplace with an active presence in Bangladesh. Supported by wide range of tailored marketing, data and service solutions, Exclusive has 10,500 sellers and 300 brands and serves 3 millions customers across the region.
          </p>
          <p className='text-[#666] text-sm leading-relaxed'>
            Exclusive has more than 1 Million products to offer, growing at a very fast. Exclusive offers a diverse assortment in categories ranging from consumer.
          </p>
        </div>
        <div className='flex justify-center w-full'>
          <img className='w-100 rounded-lg' src={img} alt="Our Story" />
        </div>
      </section>

      <section className='mt-20 flex flex-col'>
        <div className='flex flex-col items-center gap-[20px] min-w-max py-4'>
          <div className='flex-shrink-0'>
            <Card1 img={img1} text1="10.5k" text2="Sellers active our site" />
          </div>
          <div className='flex-shrink-0'>
            <Card1 img={img2} text1="33k" text2="Monthly Product Sale" />
          </div>
          <div className='flex-shrink-0'>
            <Card1 img={img3} text1="45.5k" text2="Customer active in our site" />
          </div>
          <div className='flex-shrink-0'>
            <Card1 img={img1} text1="25k" text2="Annual gross sale in our site" />
          </div>
        </div>
      </section>

      <section className='mt-20 overflow-x-auto'>
        <div className='inline-flex gap-[20px] min-w-max py-4'>
          <div className='flex-shrink-0'>
            <Card2 img={img4} text1="Tom Cruise" text2="Founder & Chairman" />
          </div>
          <div className='flex-shrink-0'>
            <Card2 img={img5} text1="Emma Watson" text2="Managing Director" />
          </div>
          <div className='flex-shrink-0'>
            <Card2 img={img6} text1="Will Smith" text2="Product Designer" />
          </div>
        </div>
      </section>

      <div className='flex justify-center mt-10 px-4'>
        <img className='w-20' src={img7} alt="Services" />
      </div>

      <Section/>
    </main>
</div>
    </>
  )
}

export default About