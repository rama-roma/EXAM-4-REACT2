import React from 'react'
import Section4 from '../components/section4'
import Section3 from '../components/section3'
import Title from '../components/title'
const Wishlist = () => {
  return (
    <>
      <div className='hidden md:block'>
    <main>
      <div className='mt-10 flex justify-between items-center'>
        <h1 className='text-[20px]'>Wishlist (4)</h1>
        <button className='p-4 border-2 pl-10 pr-10'>Move All To Bag</button>
      </div>

      <Section4/>

      <div className='mt-30 flex justify-between items-center'>
        <Title text="Just For You" />
        <button className='p-4 border-2 pl-10 pr-10'>See All</button>
      </div>

      <Section3/>
    </main>
      </div>


      <div className='block md:hidden'>
    <main>
      <div className='mt-10 flex justify-between items-center'>
        <h1 className='text-[20px]'>Wishlist (4)</h1>
        <button className='p-4 border-2 pl-10 pr-10'>Move All To Bag</button>
      </div>

      <Section4/>

      <div className='mt-30 flex justify-between items-center'>
        <Title text="Just For You" />
        <button className='p-4 border-2 pl-10 pr-10'>See All</button>
      </div>

      <Section3/>
      <br /><br />
    </main>
      </div>
    </>
  )
}

export default Wishlist