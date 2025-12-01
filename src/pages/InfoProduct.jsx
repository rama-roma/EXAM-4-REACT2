import React from 'react'
import img1 from '../images/phon (1).svg'
import img2 from '../images/phon (2).svg'
import img3 from '../images/phon (3).svg'
import img4 from '../images/phon (4).svg'
import img5 from '../images/image 63.svg'
import { Rate } from 'antd'
import { HeartOutlined, MinusOutlined, PlusOutlined } from '@ant-design/icons'
import { RefreshCcw, TruckElectric } from 'lucide-react'
import Title from '../components/title'
import Section5 from '../components/section5'
const InfoProduct = () => {
  return (
    <main>
      <div className='mt-10 flex items-center gap-[10px]'>
        <p className='text-[grey]'>Account</p>
        <p className='text-[grey]'>/</p>
        <p className='text-[grey]'>Gaming</p>
        <p className='text-[grey]'>/</p>
        <p>Havic HV G-92 Gamepad</p>
      </div>

      <section className='mt-10 flex items-center justify-between'>
        <div className='flex flex-col items-center gap-[10px]'>
          <article className='p-4 w-40 h-40 flex items-center justify-center bg-[#e9e6e6b0]'>
            <img src={img4} alt="" />
          </article>
          <article className='p-4 w-40 h-40 flex items-center justify-center bg-[#e9e6e6b0]'>
            <img src={img2} alt="" />
          </article>
          <article className='p-4 w-40 h-40 flex items-center justify-center bg-[#e9e6e6b0]'>
            <img src={img3} alt="" />
          </article>
          <article className='p-4 w-40 h-40 flex items-center justify-center bg-[#e9e6e6b0]'>
            <img src={img1} alt="" />
          </article>
        </div>
        <div className='bg-[#e9e6e6b0] p-10 pt-44 pb-44 pl-20 pr-20'>
          <img src={img5} alt="" />
        </div>
        <div className='flex flex-col items-start gap-[30px] w-110'>
          <h1 className='text-[30px]'>Havic HV G-92 Gamepad</h1>
          <div className='flex items-center gap-[20px]'>
            <Rate/>
            <p className='text-[grey]'>(150 Reviews)</p>
            <p className='text-[#12CA5B]'>In Stock</p>
          </div>
          <p className='text-[20px] font-bold'>$192.00</p>
          <p className='text-[grey]'>PlayStation 5 Controller Skin High quality vinyl with air channel adhesive for easy bubble free install & mess free removal Pressure sensitive.</p>
          <div className='border border-[#d1cfcf] w-full'></div>
          <div className='flex items-center gap-[10px]'>
            <p>Colours:</p>
            <div className='bg-[#A0BCE0] p-2 rounded-[100%]'></div>
            <div className='bg-[#E07575] p-2 rounded-[100%]'></div>
          </div>
          <div className='flex items-center gap-[10px]'>
            <p>Size:</p>
            <div className='flex w-10 h-10 items-center justify-center border p-2 rounded-[3px] text-[13px] hover:bg-[#DB4444] hover:text-[white]'>XS</div>
            <div className='flex w-10 h-10 items-center justify-center border p-2 rounded-[3px] text-[13px] hover:bg-[#DB4444] hover:text-[white]'>S</div>
            <div className='flex w-10 h-10 items-center justify-center border p-2 rounded-[3px] text-[13px] hover:bg-[#DB4444] hover:text-[white]'>M</div>
            <div className='flex w-10 h-10 items-center justify-center border p-2 rounded-[3px] text-[13px] hover:bg-[#DB4444] hover:text-[white]'>L</div>
            <div className='flex w-10 h-10 items-center justify-center border p-2 rounded-[3px] text-[13px] hover:bg-[#DB4444] hover:text-[white] '>XL</div>
          </div>
          <div className='flex items-center gap-[10px]'>
            <div className='flex items-center gap-[10px] border pl-5 pr-5 h-10 rounded-[5px]'>
              <MinusOutlined />
              <div className='border h-7'></div>
              <p className='pr-5 pl-5'>2</p>
              <div className='border h-7'></div>
              <PlusOutlined />
            </div>
            <div> <button className='text-[white] bg-[#DB4444] p-2 pl-10 pr-10 rounded-[5px]'>Buy Now</button> </div>
            <div className='flex w-10 h-10 items-center justify-center border p-2 rounded-[3px] text-[23px] '><HeartOutlined /></div>
          </div>
          <div className='border rounded-[5px] p-4 flex flex-col items-start justify-center gap-[20px]'>
            <div className='flex items-center justify-center w-110 gap-[10px]'>
              <TruckElectric size={50} />
              <div className='flex flex-col items-start'>
                <h1 className='font-bold'>Free Delivery</h1>
                <p>Enter your postal code for Delivery Availability</p>
              </div>
            </div>
            <div className='border w-full border-[#c0bcbc]'></div>
            <div className='flex items-center justify-between w-110 gap-[10px]'>
              <RefreshCcw  size={50} />
              <div className='flex flex-col items-start relative left-[-60px]'>
                <h1 className='font-bold'>Return Delivery</h1>
                <p>Free 30 Days Delivery Returns. Details</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='mt-20 mb-20 flex flex-col gap-[20px]'>
        <div>
          <Title text="Related Item"/>
        </div>
        <Section5/>
      </section>
    </main>
  )
}

export default InfoProduct