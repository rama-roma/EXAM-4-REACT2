import { Checkbox, Input, Radio, Rate, Slider, Menu } from 'antd'
import React from 'react'
import '../index.css'
import { TextField } from '@mui/material'
import Section6 from '../components/section6'
import Section7 from '../components/section7'
import BtnRed from '../components/btnRed'

const Products = () => {
  return (
    <main>
      <div className='mt-10 flex items-center justify-between'>
        <div className='flex items-center gap-[10px]'>
          <p className='text-[grey]'>Home</p>
          <p className='text-[grey]'>/</p>
          <p>Explore Our Products</p>
        </div>
      </div>

      <section className='mt-20 flex items-baseline justify-between'>
        <div className='flex flex-col items-start gap-[10px] w-[20%]'>
          <div className='border w-full border-[#d0cbcbb7] '></div>
          <p>Category</p>
          <Menu
            style={{ width: "100%" }}
            mode="vertical"
            items={[
              { key: 'all', label: <span style={{ color: '#DB4444' }}>All Products</span> },
              { key: 'electronics', label: 'Electronics' },
              { key: 'home', label: 'Home & Lifestyle' },
              { key: 'medicine', label: 'Medicine' },
              { key: 'sports', label: 'Sports & Outdoor' },
              { key: 'seeAll', label: <span style={{ color: '#DB4444' }}>See All</span> },
            ]}
          />
          <br />

          <div className='border w-full border-[#d0cbcbb7] '></div>
          <p>Brands</p>
          <Menu
            style={{ width: "100%" }}
            mode="vertical"
            items={[
              { key: 'samsung', label: <span className='flex items-center gap-[10px]'> <Checkbox/> Samsung </span> },
              { key: 'apple', label: <span className='flex items-center gap-[10px]'> <Checkbox/> Apple </span> },
              { key: 'huawei', label: <span className='flex items-center gap-[10px]'> <Checkbox/> Huawei </span> },
              { key: 'pocco', label: <span className='flex items-center gap-[10px]'> <Checkbox/> Pocco </span> },
              { key: 'lenovo', label: <span className='flex items-center gap-[10px]'> <Checkbox/> Lenovo </span> },
              { key: 'seeAll', label: <span style={{ color: '#DB4444' }}>See All</span> },
            ]}
          />
          <br />

          <div className='border w-full border-[#d0cbcbb7] '></div>
          <p>Features</p>
          <Menu
            style={{ width: "100%" }}
            mode="vertical"
            items={[
              { key: 'metallic', label: <span className='flex items-center gap-[10px]'> <Checkbox/> Metallic </span> },
              { key: 'plastic', label: <span className='flex items-center gap-[10px]'> <Checkbox/> Plastic cover </span> },
              { key: 'ram', label: <span className='flex items-center gap-[10px]'> <Checkbox/> 8GB Ram </span> },
              { key: 'power', label: <span className='flex items-center gap-[10px]'> <Checkbox/> Super power </span> },
              { key: 'memory', label: <span className='flex items-center gap-[10px]'> <Checkbox/> Large Memory </span> },
              { key: 'seeAll', label: <span style={{ color: '#DB4444' }}>See All</span> },
            ]}
          />
          <br />

          <div className='border w-full border-[#d0cbcbb7] '></div>
          <p>Price range</p>
          <div style={{ width: "100%", padding: '0 16px' }}>
            <Slider style={{ marginBottom: 16 }} />
            <div className='flex items-center gap-[10px] mb-3'>
              <TextField size="small" label="Min" placeholder='0' variant="outlined" />
              <TextField size="small" label="Max" placeholder='9999' variant="outlined" />
            </div>
            <button className='text-[#DB4444] p-2 border-2 border-[#DB4444] w-full rounded-[5px]'>Apply</button>
          </div>
          <br />

          <div className='border w-full border-[#d0cbcbb7] '></div>
          <p>Condition</p>
          <Menu
            style={{ width: "100%" }}
            mode="vertical"
            items={[
              { key: 'any', label: <span className='flex items-center gap-[10px]'> <Radio/> Any </span> },
              { key: 'refurbished', label: <span className='flex items-center gap-[10px]'> <Radio/> Refurbished </span> },
              { key: 'new', label: <span className='flex items-center gap-[10px]'> <Radio/> Brand new </span> },
              { key: 'old', label: <span className='flex items-center gap-[10px]'> <Radio/> Old items </span> },
            ]}
          />
          <br />

          <div className='border w-full border-[#d0cbcbb7] '></div>
          <p>Ratings</p>
          <Menu
            style={{ width: "100%" }}
            mode="vertical"
            items={[
              { key: 'rate1', label: <span className='flex items-center gap-[10px]'> <Checkbox/> <Rate/> </span> },
              { key: 'rate2', label: <span className='flex items-center gap-[10px]'> <Checkbox/> <Rate/> </span> },
              { key: 'rate3', label: <span className='flex items-center gap-[10px]'> <Checkbox/> <Rate/> </span> },
              { key: 'rate4', label: <span className='flex items-center gap-[10px]'> <Checkbox/> <Rate/> </span> },
            ]}
          />
          <br />
        </div>

        <div className='flex flex-wrap items-center justify-center gap-[20px] w-[80%]'>
          <Section7/>
      {/* <div className='mt-10 flex justify-center'>
        <BtnRed text="More Products"/>
      </div> */}
        </div>
      </section>
    </main>
  )
}

export default Products