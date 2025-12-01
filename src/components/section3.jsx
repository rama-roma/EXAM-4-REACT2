import { EyeOutlined, HeartOutlined } from '@ant-design/icons'
import { Rate } from 'antd'
import React from 'react'
import img1 from '../images/g92-2-500x500 1.svg'
import BtnRed from './btnRed'
import img2 from '../images/шьфпу (3).svg'
import img3 from '../images/шьфпу (2).svg'
import img4 from '../images/шьфпу (1).svg'
import { Link } from 'react-router-dom'

const Section3 = () => {
  return (
    <>
     <div className='hidden md:block'>
      <section className='mt-20 mb-10 flex items-center justify-center gap-[30px]'>
        <article className='group relative flex flex-col items-start justify-start gap-[20px] w-80 h-100'>
          <div className='bg-[#F5F5F5] w-full h-70 flex flex-col gap-[20px] p-4'>
            <div className='flex justify-between items-center'>
              <div className='bg-[#DB4444] text-[white] p-2 pl-5 pr-5 rounded-[7px]'>-40%</div>
              <HeartOutlined style={{ fontSize: "25px" }} />
            </div>
            <div className='flex justify-end'>
              <EyeOutlined style={{ fontSize: "25px" }} />
            </div>
            <div className='flex justify-center mt-[-30px]'>
              <img className='w-40' src={img1} alt="" />
            </div>
          </div>

          <div className='flex flex-col items-start gap-[10px]'>
            <p className='font-bold'>HAVIT HV-G92 Gamepad</p>
            <div className='flex items-center gap-[10px]'>
              <p className='text-[#DB4444] font-bold'>$120</p>
              <p className='text-[grey] line-through'>$160</p>
            </div>
            <div className='flex items-center gap-[10px]'>
              <Rate />
              <p className='text-[grey] font-bold'>(88)</p>
            </div>
          </div>

  
          <button className='absolute bottom-30 left-0 w-full bg-black text-white py-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
            Add to Cart
          </button>
        </article>

        <article className='group relative flex flex-col items-start justify-start gap-[20px] w-80 h-100'>
          <div className='bg-[#F5F5F5] w-full h-70 flex flex-col gap-[20px] p-4'>
            <div className='flex justify-between items-center'>
              <div className='bg-[#DB4444] text-[white] p-2 pl-5 pr-5 rounded-[7px]'>-35%</div>
              <HeartOutlined style={{ fontSize: "25px" }} />
            </div>
            <div className='flex justify-end'>
              <EyeOutlined style={{ fontSize: "25px" }} />
            </div>
            <div className='flex justify-center mt-[-30px]'>
              <img className='w-50' src={img4} alt="" />
            </div>
          </div>

          <div className='flex flex-col items-start gap-[10px]'>
            <p className='font-bold'>AK-900 Wired Keyboard</p>
            <div className='flex items-center gap-[10px]'>
              <p className='text-[#DB4444] font-bold'>$960</p>
              <p className='text-[grey] line-through'>$1160</p>
            </div>
            <div className='flex items-center gap-[10px]'>
              <Rate />
              <p className='text-[grey] font-bold'>(75)</p>
            </div>
          </div>

  
          <button className='absolute bottom-30 left-0 w-full bg-black text-white py-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
            Add to Cart
          </button>
        </article>

        <article className='group relative flex flex-col items-start justify-start gap-[20px] w-80 h-100'>
          <div className='bg-[#F5F5F5] w-full h-70 flex flex-col gap-[20px] p-4'>
            <div className='flex justify-between items-center'>
              <div className='bg-[#DB4444] text-[white] p-2 pl-5 pr-5 rounded-[7px]'>-30%</div>
              <HeartOutlined style={{ fontSize: "25px" }} />
            </div>
            <div className='flex justify-end'>
              <EyeOutlined style={{ fontSize: "25px" }} />
            </div>
            <div className='flex justify-center mt-[-30px]'>
              <img className='w-40' src={img2} alt="" />
            </div>
          </div>

          <div className='flex flex-col items-start gap-[10px]'>
            <p className='font-bold'>IPS LCD Gaming Monitor</p>
            <div className='flex items-center gap-[10px]'>
              <p className='text-[#DB4444] font-bold'>$370</p>
              <p className='text-[grey] line-through'>$400</p>
            </div>
            <div className='flex items-center gap-[10px]'>
              <Rate />
              <p className='text-[grey] font-bold'>(99)</p>
            </div>
          </div>

  
          <button className='absolute bottom-30 left-0 w-full bg-black text-white py-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
            Add to Cart
          </button>
        </article>


        <article className='group relative flex flex-col items-start justify-start gap-[20px] w-80 h-100'>
          <div className='bg-[#F5F5F5] w-full h-70 flex flex-col gap-[20px] p-4'>
            <div className='flex justify-between items-center'>
              <div className='bg-[#DB4444] text-[white] p-2 pl-5 pr-5 rounded-[7px]'>-25%</div>
              <HeartOutlined style={{ fontSize: "25px" }} />
            </div>
            <div className='flex justify-end'>
              <EyeOutlined style={{ fontSize: "25px" }} />
            </div>
            <div className='flex justify-center mt-[-50px]'>
              <img className='w-30' src={img3} alt="" />
            </div>
          </div>

          <div className='flex flex-col items-start gap-[10px]'>
            <p className='font-bold'>S-Series Comfort Chair </p>
            <div className='flex items-center gap-[10px]'>
              <p className='text-[#DB4444] font-bold'>$375</p>
              <p className='text-[grey] line-through'>$400</p>
            </div>
            <div className='flex items-center gap-[10px]'>
              <Rate />
              <p className='text-[grey] font-bold'>(99)</p>
            </div>
          </div>

  
          <button className='absolute bottom-30 left-0 w-full bg-black text-white py-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
            Add to Cart
          </button>
        </article>
      </section>
      <div className='flex justify-center'>
        <Link to='/products'>
          <BtnRed text="View All Products"/>
        </Link>
      </div>
     </div>


     <div className='block md:hidden'>
      <section className='mt-20 mb-10 flex  overflow-x-auto  gap-[30px]'>
        <article className='group relative flex-shrink-0 flex flex-col items-start justify-start gap-[20px] w-80 h-100'>
          <div className='bg-[#F5F5F5] w-full h-70 flex flex-col gap-[20px] p-4'>
            <div className='flex justify-between items-center'>
              <div className='bg-[#DB4444] text-[white] p-2 pl-5 pr-5 rounded-[7px]'>-40%</div>
              <HeartOutlined style={{ fontSize: "25px" }} />
            </div>
            <div className='flex justify-end'>
              <EyeOutlined style={{ fontSize: "25px" }} />
            </div>
            <div className='flex justify-center mt-[-30px]'>
              <img className='w-40' src={img1} alt="" />
            </div>
          </div>

          <div className='flex flex-col items-start gap-[10px]'>
            <p className='font-bold'>HAVIT HV-G92 Gamepad</p>
            <div className='flex items-center gap-[10px]'>
              <p className='text-[#DB4444] font-bold'>$120</p>
              <p className='text-[grey] line-through'>$160</p>
            </div>
            <div className='flex items-center gap-[10px]'>
              <Rate />
              <p className='text-[grey] font-bold'>(88)</p>
            </div>
          </div>

  
          <button className='absolute bottom-30 left-0 w-full bg-black text-white py-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
            Add to Cart
          </button>
        </article>

        <article className='group relative flex-shrink-0 flex flex-col items-start justify-start gap-[20px] w-80 h-100'>
          <div className='bg-[#F5F5F5] w-full h-70 flex flex-col gap-[20px] p-4'>
            <div className='flex justify-between items-center'>
              <div className='bg-[#DB4444] text-[white] p-2 pl-5 pr-5 rounded-[7px]'>-35%</div>
              <HeartOutlined style={{ fontSize: "25px" }} />
            </div>
            <div className='flex justify-end'>
              <EyeOutlined style={{ fontSize: "25px" }} />
            </div>
            <div className='flex justify-center mt-[-30px]'>
              <img className='w-50' src={img4} alt="" />
            </div>
          </div>

          <div className='flex flex-col items-start gap-[10px]'>
            <p className='font-bold'>AK-900 Wired Keyboard</p>
            <div className='flex items-center gap-[10px]'>
              <p className='text-[#DB4444] font-bold'>$960</p>
              <p className='text-[grey] line-through'>$1160</p>
            </div>
            <div className='flex items-center gap-[10px]'>
              <Rate />
              <p className='text-[grey] font-bold'>(75)</p>
            </div>
          </div>

  
          <button className='absolute bottom-30 left-0 w-full bg-black text-white py-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
            Add to Cart
          </button>
        </article>

        <article className='group relative flex-shrink-0 flex flex-col items-start justify-start gap-[20px] w-80 h-100'>
          <div className='bg-[#F5F5F5] w-full h-70 flex flex-col gap-[20px] p-4'>
            <div className='flex justify-between items-center'>
              <div className='bg-[#DB4444] text-[white] p-2 pl-5 pr-5 rounded-[7px]'>-30%</div>
              <HeartOutlined style={{ fontSize: "25px" }} />
            </div>
            <div className='flex justify-end'>
              <EyeOutlined style={{ fontSize: "25px" }} />
            </div>
            <div className='flex justify-center mt-[-30px]'>
              <img className='w-40' src={img2} alt="" />
            </div>
          </div>

          <div className='flex flex-col items-start gap-[10px]'>
            <p className='font-bold'>IPS LCD Gaming Monitor</p>
            <div className='flex items-center gap-[10px]'>
              <p className='text-[#DB4444] font-bold'>$370</p>
              <p className='text-[grey] line-through'>$400</p>
            </div>
            <div className='flex items-center gap-[10px]'>
              <Rate />
              <p className='text-[grey] font-bold'>(99)</p>
            </div>
          </div>

  
          <button className='absolute bottom-30 left-0 w-full bg-black text-white py-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
            Add to Cart
          </button>
        </article>


        <article className='group relative flex-shrink-0 flex flex-col items-start justify-start gap-[20px] w-80 h-100'>
          <div className='bg-[#F5F5F5] w-full h-70 flex flex-col gap-[20px] p-4'>
            <div className='flex justify-between items-center'>
              <div className='bg-[#DB4444] text-[white] p-2 pl-5 pr-5 rounded-[7px]'>-25%</div>
              <HeartOutlined style={{ fontSize: "25px" }} />
            </div>
            <div className='flex justify-end'>
              <EyeOutlined style={{ fontSize: "25px" }} />
            </div>
            <div className='flex justify-center mt-[-50px]'>
              <img className='w-30' src={img3} alt="" />
            </div>
          </div>

          <div className='flex flex-col items-start gap-[10px]'>
            <p className='font-bold'>S-Series Comfort Chair </p>
            <div className='flex items-center gap-[10px]'>
              <p className='text-[#DB4444] font-bold'>$375</p>
              <p className='text-[grey] line-through'>$400</p>
            </div>
            <div className='flex items-center gap-[10px]'>
              <Rate />
              <p className='text-[grey] font-bold'>(99)</p>
            </div>
          </div>

  
          <button className='absolute bottom-30 left-0 w-full bg-black text-white py-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
            Add to Cart
          </button>
        </article>
      </section>
      <div className='flex justify-center'>
        <Link to='/products'>
          <BtnRed text="View All Products"/>
        </Link>
      </div>
     </div>
    </>
  )
}

export default Section3