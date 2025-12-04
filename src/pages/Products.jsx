import { Checkbox, Input, Radio, Rate, Slider, Menu } from 'antd'
import React, { useEffect } from 'react'
import '../index.css'
import { TextField } from '@mui/material'
import Section7 from '../components/section7'
import BtnRed from '../components/btnRed'
import { useDispatch, useSelector } from 'react-redux'
import { getCategory } from '../reducers/categories/category'
import { getBrand } from '../reducers/brands/brand'
import { getByColor, getColor } from '../reducers/color/color'
import { getSubcategory } from '../reducers/subcategory/subcategory'

const Products = () => {
 
  const { data: categoryData } = useSelector((state) => state.category);
  const { data: brandData } = useSelector((state) => state.brand);
  const { data: colorData, selectedColor } = useSelector((state) => state.color);
  const { data: subcategoryData } = useSelector((state) => state.subcategory);

  const dispatch = useDispatch();

  useEffect(() => {
  dispatch(getCategory());
  dispatch(getBrand());
  dispatch(getColor());
  dispatch(getSubcategory());
  }, [dispatch]);


  const handleSelectColor = (id) => {
    dispatch(getByColor(id))
  }



  return (
    <>
      <div className='hidden md:block'>
    <main>
      <div className='mt-10 flex items-center justify-between'>
        <div className='flex items-center gap-[10px]'>
          <p className='text-[grey]'>Home</p>
          <p className='text-[grey]'>/</p>
          <p>Explore Our Products</p>
        </div>
      </div>
      <div className='flex justify-end gap-[30px] items-center'>
        {
          subcategoryData?.map((e) => {
            return(
              <div key={e?.id} className='p-2 w-30 text-center rounded-[10px] bg-[#cbcbcb82]'>
                <span>{e?.subCategoryName}</span>
              </div>
            )
          })
        }
      </div>
      <section className='mt-10 flex items-baseline justify-between'>
        <div className='flex flex-col items-start gap-[10px] w-[20%]'>
          <div className='border w-full border-[#d0cbcbb7] '></div>
          <p>Category</p>
          <div className="w-full flex flex-col gap-2">
          <button className="text-left py-2 px-3 text-[#DB4444] font-semibold hover:bg-gray-100 rounded">All Products</button>
         {
         categoryData?.map((e) => (
         <button key={e.id} className="text-left py-2 px-3 hover:bg-gray-100 rounded" >{e.categoryName}</button>
         ))}
         <button className="text-left py-2 px-3 text-[#DB4444] font-semibold hover:bg-gray-100 rounded">See All </button>
          </div>
          <br />

          <div className='border w-full border-[#d0cbcbb7] '></div>
          <p>Brands</p>
          <div className="w-full flex flex-col gap-2">
            {
              brandData?.map((e) => {
                return(
                  <button className="text-left py-2 px-3 hover:bg-gray-100 rounded" key={e.id}>
                    {e.brandName}
                  </button>
                )
              })
            }
          </div>
          <br />

          <div className='border w-full border-[#d0cbcbb7] '></div>
          <p>Colors</p>
          <div className="w-full flex flex-col gap-2">
          {
            colorData?.map((e) => {
              return(
                <div key={e?.id}>
                  <Checkbox checked={selectedColor?.id === e.id}  onChange={() => handleSelectColor(e.id)}/>
                  <button className="text-left py-2 px-3 hover:bg-gray-100 rounded" >
                    {e?.colorName}
                  </button>
                </div>
              )
            })
          }
          </div>
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
      <div className='mt-10 flex justify-center'>
        <BtnRed text="More Products"/>
      </div>
        </div>
      </section>
    </main>
      </div>


      <div className='block md:hidden'>
  <main className='px-4 mt-10'>
    <div className='flex items-center gap-2 mb-5'>
      <p className='text-[grey]'>Home</p>
      <p className='text-[grey]'>/</p>
      <p>Explore Our Products</p>
    </div>

    {/* Subcategories */}
    <div className='flex gap-3 overflow-x-auto mb-5'>
      {subcategoryData?.map((e) => (
        <div key={e?.id} className='p-2 min-w-[80px] text-center rounded-[10px] bg-[#cbcbcb82]'>
          <span>{e?.subCategoryName}</span>
        </div>
      ))}
    </div>

    {/* Category Filter */}
    <p className='font-semibold mb-2'>Category</p>
    <div className='flex flex-col gap-2 mb-4'>
      <button className="text-left py-2 px-3 text-[#DB4444] font-semibold hover:bg-gray-100 rounded">All Products</button>
      {categoryData?.map((e) => (
        <button key={e.id} className="text-left py-2 px-3 hover:bg-gray-100 rounded">{e.categoryName}</button>
      ))}
      <button className="text-left py-2 px-3 text-[#DB4444] font-semibold hover:bg-gray-100 rounded">See All</button>
    </div>

    {/* Brand Filter */}
    <p className='font-semibold mb-2'>Brands</p>
    <div className='flex flex-col gap-2 mb-4'>
      {brandData?.map((e) => (
        <button key={e.id} className="text-left py-2 px-3 hover:bg-gray-100 rounded">{e.brandName}</button>
      ))}
    </div>

    {/* Colors */}
    <p className='font-semibold mb-2'>Colors</p>
    <div className='flex flex-col gap-2 mb-4'>
      {colorData?.map((e) => (
        <div key={e.id} className='flex items-center gap-2'>
          <Checkbox checked={selectedColor?.id === e.id} onChange={() => handleSelectColor(e.id)} />
          <span>{e?.colorName}</span>
        </div>
      ))}
    </div>

    {/* Price Range */}
    <p className='font-semibold mb-2'>Price Range</p>
    <div className='mb-4'>
      <Slider
        range
        min={0}
        max={10000}
        value={[0, 9999]}
        onChange={(value) => console.log(value)}
        style={{ marginBottom: 16 }}
      />
      <div className='flex gap-2 mb-3'>
        <TextField size="small" label="Min" placeholder='0' variant="outlined" fullWidth />
        <TextField size="small" label="Max" placeholder='9999' variant="outlined" fullWidth />
      </div>
      <button className='text-[#DB4444] p-2 border-2 border-[#DB4444] w-full rounded-[5px]'>Apply</button>
    </div>

    {/* Condition */}
    <p className='font-semibold mb-2'>Condition</p>
    <Menu
      style={{ width: "100%", marginBottom: 16 }}
      mode="vertical"
      items={[
        { key: 'any', label: <span className='flex items-center gap-2'><Radio/> Any</span> },
        { key: 'refurbished', label: <span className='flex items-center gap-2'><Radio/> Refurbished</span> },
        { key: 'new', label: <span className='flex items-center gap-2'><Radio/> Brand new</span> },
        { key: 'old', label: <span className='flex items-center gap-2'><Radio/> Old items</span> },
      ]}
    />

    {/* Ratings */}
    <p className='font-semibold mb-2'>Ratings</p>
    <Menu
      style={{ width: "100%", marginBottom: 16 }}
      mode="vertical"
      items={[
        { key: 'rate1', label: <span className='flex items-center gap-2'><Checkbox/><Rate/></span> },
        { key: 'rate2', label: <span className='flex items-center gap-2'><Checkbox/><Rate/></span> },
        { key: 'rate3', label: <span className='flex items-center gap-2'><Checkbox/><Rate/></span> },
        { key: 'rate4', label: <span className='flex items-center gap-2'><Checkbox/><Rate/></span> },
      ]}
    />

    {/* Products */}
    <div className='flex flex-wrap items-center justify-center gap-4 mt-6'>
      <Section7/>
      <div className='mt-10 flex justify-center w-full'>
        <BtnRed text="More Products"/>
      </div>
    </div>
  </main>
      </div>

    </>
  )
}

export default Products