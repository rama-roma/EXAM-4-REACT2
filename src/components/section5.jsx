import { EyeOutlined, HeartOutlined } from '@ant-design/icons'
import { Rate } from 'antd'
import React from 'react'
import img1 from '../images/magaz (1).svg'
import img2 from '../images/magaz (2).svg'
import img3 from '../images/magaz (3).svg'
import img4 from '../images/magaz (4).svg'

const Section5 = () => {
  return (
    <>
     <div className='hidden md:block'>
      <section className='mt-10 flex items-center justify-between'>
        <article className='group relative flex flex-col items-start justify-start gap-[20px] w-80 h-100'>
          <div className='bg-[#F5F5F5] w-full h-70 flex flex-col gap-[20px] p-4'>
            <div className='flex flex-col justify-end items-end gap-[10px]'>
              <HeartOutlined style={{ fontSize: "25px" }} />
              <EyeOutlined style={{ fontSize: "25px" }} />
            </div>
            <div className='flex justify-center mt-[-30px]'>
              <img className='w-25' src={img1} alt="" />
            </div>
          </div>

          <div className='flex flex-col items-start gap-[10px]'>
            <p className='font-bold'>Breed Dry Dog Food</p>
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
            <div className='flex flex-col justify-end items-end gap-[10px]'>
              <HeartOutlined style={{ fontSize: "25px" }} />
              <EyeOutlined style={{ fontSize: "25px" }} />
            </div>
            <div className='flex justify-center mt-[-40px]'>
              <img className='w-40' src={img3} alt="" />
            </div>
          </div>

          <div className='flex flex-col items-start gap-[10px]'>
            <p className='font-bold'>CANON EOS DSLR Camera</p>
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
            <div className='flex flex-col justify-end items-end gap-[10px]'>
              <HeartOutlined style={{ fontSize: "25px" }} />
              <EyeOutlined style={{ fontSize: "25px" }} />
            </div>
            <div className='flex justify-center mt-[-40px]'>
              <img className='w-40' src={img2} alt="" />
            </div>
          </div>

          <div className='flex flex-col items-start gap-[10px]'>
            <p className='font-bold'>ASUS FHD Gaming Laptop</p>
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
            <div className='flex flex-col justify-end items-end gap-[10px]'>
              <HeartOutlined style={{ fontSize: "25px" }} />
              <EyeOutlined style={{ fontSize: "25px" }} />
            </div>
            <div className='flex justify-center mt-[-30px]'>
              <img className='w-40' src={img4} alt="" />
            </div>
          </div>

          <div className='flex flex-col items-start gap-[10px]'>
            <p className='font-bold'>Curology Product Set </p>
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
      </section>
     </div>


    <div className='block md:hidden'>
  <section className='mt-10 overflow-x-auto'>
    <div className='inline-flex gap-[20px] min-w-max py-2'>
      <article className='group relative flex flex-col items-start justify-start gap-[20px] w-80 h-100 flex-shrink-0'>
        <div className='bg-[#F5F5F5] w-full h-70 flex flex-col gap-[20px] p-4'>
          <div className='flex flex-col justify-end items-end gap-[10px]'>
            <HeartOutlined style={{ fontSize: "25px" }} />
            <EyeOutlined style={{ fontSize: "25px" }} />
          </div>
          <div className='flex justify-center mt-[-30px]'>
            <img className='w-25' src={img1} alt="" />
          </div>
        </div>

        <div className='flex flex-col items-start gap-[10px]'>
          <p className='font-bold'>Breed Dry Dog Food</p>
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

      <article className='group relative flex flex-col items-start justify-start gap-[20px] w-80 h-100 flex-shrink-0'>
        <div className='bg-[#F5F5F5] w-full h-70 flex flex-col gap-[20px] p-4'>
          <div className='flex flex-col justify-end items-end gap-[10px]'>
            <HeartOutlined style={{ fontSize: "25px" }} />
            <EyeOutlined style={{ fontSize: "25px" }} />
          </div>
          <div className='flex justify-center mt-[-40px]'>
            <img className='w-40' src={img3} alt="" />
          </div>
        </div>

        <div className='flex flex-col items-start gap-[10px]'>
          <p className='font-bold'>CANON EOS DSLR Camera</p>
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

      <article className='group relative flex flex-col items-start justify-start gap-[20px] w-80 h-100 flex-shrink-0'>
        <div className='bg-[#F5F5F5] w-full h-70 flex flex-col gap-[20px] p-4'>
          <div className='flex flex-col justify-end items-end gap-[10px]'>
            <HeartOutlined style={{ fontSize: "25px" }} />
            <EyeOutlined style={{ fontSize: "25px" }} />
          </div>
          <div className='flex justify-center mt-[-40px]'>
            <img className='w-40' src={img2} alt="" />
          </div>
        </div>

        <div className='flex flex-col items-start gap-[10px]'>
          <p className='font-bold'>ASUS FHD Gaming Laptop</p>
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

      <article className='group relative flex flex-col items-start justify-start gap-[20px] w-80 h-100 flex-shrink-0'>
        <div className='bg-[#F5F5F5] w-full h-70 flex flex-col gap-[20px] p-4'>
          <div className='flex flex-col justify-end items-end gap-[10px]'>
            <HeartOutlined style={{ fontSize: "25px" }} />
            <EyeOutlined style={{ fontSize: "25px" }} />
          </div>
          <div className='flex justify-center mt-[-30px]'>
            <img className='w-40' src={img4} alt="" />
          </div>
        </div>

        <div className='flex flex-col items-start gap-[10px]'>
          <p className='font-bold'>Curology Product Set</p>
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
    </div>
  </section>
    </div>
    </>
  )
}

export default Section5