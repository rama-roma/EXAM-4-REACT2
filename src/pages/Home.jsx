import React from 'react'
import Section1 from '../components/section1'
import { Section2 } from '../components/section2'
import Title from '../components/title'
import {LeftOutlined,  RightOutlined, SearchOutlined, SendOutlined } from '@ant-design/icons'
import Section3 from '../components/section3'
import Card3 from '../components/card3'
import { Camera, Gamepad2, Headphones, LaptopMinimal, Section, Smartphone, Watch } from 'lucide-react'
import BtnRed from '../components/btnRed'
import Section4 from '../components/section4'
import img1 from '../images/Frame 694.svg'
import Section5 from '../components/section5'
import Section6 from '../components/section6'
import img2 from '../images/play.svg'
import img3 from '../images/attractive-woman-wearing-hat-posing-black-background 1.svg'
import img4 from '../images/smart (1).svg';
import img5 from '../images/smart (2).svg';
import Sections  from '../components/sections';
import { Link } from 'react-router-dom'
import { Input } from 'antd'

const Home = () => {
  return (
    <>
      <div className='hidden md:block'>
    <main>
      <section  className=' mt-10 flex items-center justify-between mb-10'>
        <Section1/>
        <div className='border border-[#0000001A] ml-10 mr-10  h-100'></div>
        <Section2/>
      </section>

      <section className='mt-20 flex flex-col items-start gap-[20px]'>
        <div className='flex items-center gap-[90px]'>
          <div>
            <Title text="Today's" text2="Flash Sales" />
          </div>
          <div className='flex mt-10 items-center gap-[20px]'>
            <div className='flex flex-col items-center'>
              <h1 className='font-bold'>Days</h1>
              <h1 className='text-[40px] font-bold'>03</h1>
            </div>
            <p className='text-[#E07575] font-bold text-[40px]'>:</p>
            <div className='flex flex-col items-center'>
              <h1 className='font-bold'>Hours</h1>
              <h1 className='text-[40px] font-bold'>23</h1>
            </div>
            <p className='text-[#E07575] font-bold text-[40px]'>:</p>
            <div className='flex flex-col items-center'>
              <h1 className='font-bold'>Minutes</h1>
              <h1 className='text-[40px] font-bold'>19</h1>
            </div>
            <p className='text-[#E07575] font-bold text-[40px]'>:</p>
            <div className='flex flex-col items-center'>
              <h1 className='font-bold'>Seconds</h1>
              <h1 className='text-[40px] font-bold'>56</h1>
            </div>
          </div>
          
          <div className='flex mt-10 ml-119 items-center gap-[20px]'>
            <div className='bg-[#F5F5F5] w-15 h-15 rounded-[100%] flex justify-center items-center'>
              <LeftOutlined />
            </div>
            <div className='bg-[#F5F5F5] w-15 h-15 rounded-[100%] flex justify-center items-center'>
              <RightOutlined />
            </div>
          </div>
        </div>
      </section>

      <Section3 />

      <section className='mt-20 flex flex-col items-start gap-[20px]'>
        <div className='flex justify-between'>
        <div>
          <Title text="Categories" text2="Browse By Category" />  
        </div>
        <div className='flex mt-10 ml-200 items-center gap-[20px]'>
            <div className='bg-[#F5F5F5] w-15 h-15 rounded-[100%] flex justify-center items-center'>
              <LeftOutlined />
            </div>
            <div className='bg-[#F5F5F5] w-15 h-15 rounded-[100%] flex justify-center items-center'>
              <RightOutlined />
            </div>
        </div>
        </div>
      </section>   

      <section className='mt-10 flex items-center  justify-between'>
          <Card3  icon={<Smartphone size={48} />} text="Phones" />
          <Card3  icon={<LaptopMinimal  size={48} />} text="Computers" />
          <Card3  icon={<Watch  size={48} />} text="Watch" />
          <Card3  icon={<Camera  size={48} />} text="Camera" />
          <Card3  icon={<Headphones size={48} />} text="HeadPhones" />
          <Card3  icon={<Gamepad2 size={48} />} text="Gaming" /> 
      </section>   

      <div className='border-[0.5px] w-full mt-20 mb-20 border-[#bdbabab8]'></div>

      <section className='flex items-end justify-between'>
        <div>
          <Title text="This Month" text2="Best Selling Products" />
        </div>
        <Link to="/products">
          <BtnRed text="View All"/>
        </Link>
      </section>
  
      <Section4/>

      <section className='mt-30 bg-[black] p-4 pt-10 pb-10 rounded-[5px] flex items-center justify-center gap-[70px] '>
        <div className='flex flex-col items-start gap-[20px]'>
          <h1 className='text-[#00FF66] font-bold text-[20px]'>Categories</h1>
          <h1 className='text-[white] text-[50px] w-120'>Enhance Your Music Experience</h1>
          <div className='flex items-center gap-[20px]'>
            <div className='bg-[white] text-[10px]  w-15 h-15 rounded-[100%] flex flex-col justify-center items-center'>
               <p className='font-bold text-[17px]'>25</p>
               <p>Hours</p>
            </div>
            <div className='bg-[white] text-[10px]  w-15 h-15 rounded-[100%] flex flex-col justify-center items-center'>
               <p className='font-bold text-[17px]'>05</p>
               <p>Days</p>
            </div>
            <div className='bg-[white] text-[10px]  w-15 h-15 rounded-[100%] flex flex-col justify-center items-center'>
               <p className='font-bold text-[17px]'>59</p>
               <p>Minutes</p>
            </div>
            <div className='bg-[white] text-[10px]  w-15 h-15 rounded-[100%] flex flex-col justify-center items-center'>
               <p className='font-bold text-[17px]'>35</p>
               <p>Seconds</p>
            </div>
          </div>
          <button className='bg-[#00FF66] p-4 rounded-[2px] pl-10 pr-10'>Buy Now!</button>
        </div>
        <div>
          <img src={img1} alt="" />
        </div>
      </section>

      <section className='mt-20 flex flex-col gap-[20px]'>
        <div>
          <Title text="Our Products" text2="Explore Our Products"/>
        </div>
        <Section5/>
        <Section6/>
      </section>

      <section className='mt-20 flex flex-col gap-[20px]'>
        <div>
          <Title text="Featured" text2="New Arrival" />
        </div>
        <div className='flex items-center justify-between'>
          <article className='bg-[#0D0D0D] p-4 rounded-[5px] w-[48%] pt-20 '>
            <img src={img2} alt="" />
            <div className='mt-[-140px] flex flex-col w-70 items-start gap-[10px] text-[white]'>
              <h1 className='text-[25px] font-bold'>PlayStation 5</h1>
              <p>Black and White version of the PS5 coming out on sale.</p>
              <p className='underline'>Shop Now</p>
            </div>
          </article>
          <article className='flex flex-col items-center gap-[20px] '>
            <div className='bg-[#0D0D0D] p-4 rounded-[5px] w-170 h-[50%] flex items-end justify-center gap-[20px]'>
              <div className='flex flex-col items-start w-90 gap-[10px] text-[white]'>
                <h1 className='text-[20px] font-bold'>Women’s Collections</h1>
                <p>Featured woman collections that give you another vibe.</p>
                <p className='underline'>Shop Now</p>
              </div>
              <div>
                <img src={img3} alt="" />
              </div>
            </div>
            <div className='h-[50%] flex items-center justify-center gap-[20px]'>
              <article className='bg-[#0D0D0D] p-4 w-82 h-80 rounded-[5px] flex flex-col items-start'>
                <img src={img4} alt="" />
                <div className='mt-[-30px] flex flex-col items-start gap-[10px] text-[white]'>
                  <h1 className='text-[20px] font-bold'>Speakers</h1>
                  <p>Amazon wireless speakers</p>
                  <p className='underline'>Shop Now</p>
                </div>
              </article>
              <article className='bg-[#0D0D0D] p-4 w-82 h-80 rounded-[5px] flex flex-col items-start'>
                <img src={img5} alt="" />
                <div className='mt-[-15px] flex flex-col items-start gap-[10px] text-[white]'>
                  <h1 className='text-[20px] font-bold'>Perfume</h1>
                  <p>GUCCI INTENSE OUD EDP</p>
                  <p className='underline'>Shop Now</p>
                </div>
              </article>
            </div>
          </article>
        </div>
      </section>

      <Sections/><br /><br />
    </main>
      </div>


      <div className='block md:hidden overflow-hidden'>
    <main>
      <section className='mt-10'>
        <Input  placeholder="What are you looking for?"  style={{padding:"14px"}} suffix={<SearchOutlined />} />
      </section>
      
      <section  className=' mt-10 flex items-center justify-between mb-10'>
        <Section1/>
      </section>

      <section>
        <Section2/>
      </section>

      <section className='mt-20 flex flex-col'>
        <div className='flex flex-col'>
          <div>
            <Title text="Today's" text2="Flash Sales" />
          </div>
          <div className='flex mt-10 items-center gap-[20px]'>
            <div className='flex flex-col items-center'>
              <h1 className='font-bold'>Days</h1>
              <h1 className='text-[40px] font-bold'>03</h1>
            </div>
            <p className='text-[#E07575] font-bold text-[40px]'>:</p>
            <div className='flex flex-col items-center'>
              <h1 className='font-bold'>Hours</h1>
              <h1 className='text-[40px] font-bold'>23</h1>
            </div>
            <p className='text-[#E07575] font-bold text-[40px]'>:</p>
            <div className='flex flex-col items-center'>
              <h1 className='font-bold'>Minutes</h1>
              <h1 className='text-[40px] font-bold'>19</h1>
            </div>
            <p className='text-[#E07575] font-bold text-[40px]'>:</p>
            <div className='flex flex-col items-center'>
              <h1 className='font-bold'>Seconds</h1>
              <h1 className='text-[40px] font-bold'>56</h1>
            </div>
          </div>
        </div>
      </section>

      <Section3 />

      <section className='mt-20 flex flex-col items-start gap-[20px]'>
        <div className='flex justify-between'>
        <div>
          <Title text="Categories" text2="Browse By Category" />  
        </div>
        </div>
      </section>   

      <section className='mt-10 flex items-center overflow-x-auto gap-[20px]'>
          <Card3  icon={<Smartphone size={48} />} text="Phones" />
          <Card3  icon={<LaptopMinimal  size={48} />} text="Computers" />
          <Card3  icon={<Watch  size={48} />} text="Watch" />
          <Card3  icon={<Camera  size={48} />} text="Camera" />
          <Card3  icon={<Headphones size={48} />} text="HeadPhones" />
          <Card3  icon={<Gamepad2 size={48} />} text="Gaming" /> 
      </section>   


      <div className='border-[0.5px] w-full mt-20 mb-20 border-[#bdbabab8]'></div>

      <section className='flex flex-col items-start gap-[20px]'>
        <div>
          <Title text="This Month" text2="Best Selling Products" />
        </div>
        <Link to="/products">
          <BtnRed text="View All"/>
        </Link>
      </section>

      <Section4/>

      <section className='mt-30 bg-[black] p-6 md:pt-10 md:pb-10 rounded-none md:rounded-[5px] flex flex-col md:flex-row items-center justify-center gap-[40px] md:gap-[70px] w-screen -ml-4 md:ml-0 md:w-auto'>
  <div className='flex flex-col items-center md:items-start gap-[20px] text-center md:text-left px-4 md:px-0'>
    <h1 className='text-[#00FF66] font-bold text-[16px] md:text-[20px]'>Categories</h1>
    <h1 className='text-[white] text-[32px] md:text-[50px] w-full md:w-120 leading-tight'>Enhance Your Music Experience</h1>
    
    <div className='flex items-center gap-[15px] md:gap-[20px]'>
      <div className='bg-[white] text-[8px] md:text-[10px] w-12 h-12 md:w-15 md:h-15 rounded-[100%] flex flex-col justify-center items-center'>
        <p className='font-bold text-[14px] md:text-[17px]'>25</p>
        <p>Hours</p>
      </div>
      <div className='bg-[white] text-[8px] md:text-[10px] w-12 h-12 md:w-15 md:h-15 rounded-[100%] flex flex-col justify-center items-center'>
        <p className='font-bold text-[14px] md:text-[17px]'>05</p>
        <p>Days</p>
      </div>
      <div className='bg-[white] text-[8px] md:text-[10px] w-12 h-12 md:w-15 md:h-15 rounded-[100%] flex flex-col justify-center items-center'>
        <p className='font-bold text-[14px] md:text-[17px]'>59</p>
        <p>Minutes</p>
      </div>
      <div className='bg-[white] text-[8px] md:text-[10px] w-12 h-12 md:w-15 md:h-15 rounded-[100%] flex flex-col justify-center items-center'>
        <p className='font-bold text-[14px] md:text-[17px]'>35</p>
        <p>Seconds</p>
      </div>
    </div>
    
    <button className='bg-[#00FF66] p-3 md:p-4 rounded-[2px] px-8 md:pl-10 md:pr-10 text-sm md:text-base font-medium'>
      Buy Now!
    </button>
  </div>
  
  <div className='flex justify-center px-4 md:px-0'>
    <img className='w-60 md:w-auto max-w-full' src={img1} alt="Music Experience" />
  </div>
      </section>
   
      <section className='mt-20 flex flex-col gap-[20px]'>
        <div>
          <Title text="Our Products" text2="Explore Our Products"/>
        </div>
        <Section5/>
        <Section6/> 
      </section>
 
      <section className='mt-20 flex flex-col gap-[20px] overflow-hidden'>
  <div className='px-4'>
    <Title text="Featured" text2="New Arrival" />
  </div>
  
  <div className='flex flex-col gap-[20px] px-4'>
    <article className='bg-[#0D0D0D] p-6 rounded-[5px] w-full flex flex-col items-center'>
      <div className='flex justify-center'>
        <img className='w-40' src={img2} alt="PlayStation 5" />
      </div>
      <div className='flex flex-col items-center gap-[10px] text-[white] text-center mt-4'>
        <h1 className='text-[20px] font-bold'>PlayStation 5</h1>
        <p className='text-sm'>Black and White version of the PS5 coming out on sale.</p>
        <p className='underline'>Shop Now</p>
      </div>
    </article>

    <article className='bg-[#0D0D0D] p-6 rounded-[5px] w-full flex flex-col items-center'>
      <div className='flex justify-center'>
        <img className='w-40' src={img3} alt="Women's Collections" />
      </div>
      <div className='flex flex-col items-center gap-[10px] text-[white] text-center mt-4'>
        <h1 className='text-[20px] font-bold'>Women's Collections</h1>
        <p className='text-sm'>Featured woman collections that give you another vibe.</p>
        <p className='underline'>Shop Now</p>
      </div>
    </article>

    <article className='bg-[#0D0D0D] p-6 rounded-[5px] w-full flex flex-col items-center'>
      <div className='flex justify-center'>
        <img className='w-40' src={img4} alt="Speakers" />
      </div>
      <div className='flex flex-col items-center gap-[10px] text-[white] text-center mt-4'>
        <h1 className='text-[20px] font-bold'>Speakers</h1>
        <p className='text-sm'>Amazon wireless speakers</p>
        <p className='underline'>Shop Now</p>
      </div>
    </article>

    <article className='bg-[#0D0D0D] p-6 rounded-[5px] w-full flex flex-col items-center'>
      <div className='flex justify-center'>
        <img className='w-40' src={img5} alt="Perfume" />
      </div>
      <div className='flex flex-col items-center gap-[10px] text-[white] text-center mt-4'>
        <h1 className='text-[20px] font-bold'>Perfume</h1>
        <p className='text-sm'>GUCCI INTENSE OUD EDP</p>
        <p className='underline'>Shop Now</p>
      </div>
    </article>
  </div>
      </section>
  
      <Sections/><br /><br />
    </main>
      </div>
    </>
  )
}

export default Home