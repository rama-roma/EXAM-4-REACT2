import { EyeOutlined, HeartOutlined } from '@ant-design/icons'
import { Rate } from 'antd'
import React, { useEffect } from 'react'
import BtnRed from './btnRed'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getUser } from '../reducers/products/product'

const Section3 = () => {
  const { data } = useSelector((state) => state.product)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getUser())
  }, [dispatch])

  return (
    <>
      <div className='hidden md:block'>
        <section className='mt-20 mb-10 flex items-center justify-center gap-[30px]'>
          {data?.products?.slice(0, 4).map((product) => (
            <article key={product.id} className='group relative flex flex-col items-start justify-start gap-[20px] w-80 h-100'>
              <div className='bg-[#F5F5F5] w-full h-70 flex flex-col gap-[20px] p-4'>
                <div className='flex justify-between items-center'>
                  <div className='bg-[#DB4444] text-white p-2 pl-5 pr-5 rounded-[7px]'>
                    -{product.discountPrice}%
                  </div>
                  <HeartOutlined style={{ fontSize: "25px" }} />
                </div>
                <div className='flex justify-end'>
                  <Link to={`/infoproduct/${product.id}`}>
                    <EyeOutlined style={{ fontSize: "25px" }} />
                  </Link>
                </div>
                <div className='flex justify-center mt-[-30px]'>
                  <img 
                    className='w-40 h-40 object-contain'
                    src={`http://37.27.29.18:8002/images/${product.image}`}
                    alt={product.productName}
                  />
                </div>
              </div>

              <div className='flex flex-col items-start gap-[10px]'>
                <p className='font-bold'>{product.productName}</p>
                <div className='flex items-center gap-[10px]'>
                  <p className='text-[#DB4444] font-bold'>${product.price}</p>
                  {product.oldPrice && (
                    <p className='text-gray-500 line-through'>${product.quantity}</p>
                  )}
                </div>
                <p className='bg-[#bcbaba] p-2 rounded-[5px]'>{product.color}</p>
                <div className='flex items-center gap-[10px]'>
                  <Rate defaultValue={product.rating || 4} />
                  <p className='text-gray-500 font-bold'>({product.reviews || 88})</p>
                </div>
              </div>

              <button className='absolute bottom-30 left-0 w-full bg-black text-white py-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                Add to Cart
              </button>
            </article>
          ))}
        </section>
        <div className='flex justify-center'>
          <Link to='/products'>
            <BtnRed text="View All Products"/>
          </Link>
        </div>
      </div>

      <div className='block md:hidden'>
        <section className='mt-20 mb-10 flex overflow-x-auto gap-[30px]'>
          {data?.products?.slice(0, 4).map((product) => (
            <article key={product.id} className='group relative flex-shrink-0 flex flex-col items-start justify-start gap-[20px] w-80 h-100'>
              <div className='bg-[#F5F5F5] w-full h-70 flex flex-col gap-[20px] p-4'>
                <div className='flex justify-between items-center'>
                  <div className='bg-[#DB4444] text-white p-2 pl-5 pr-5 rounded-[7px]'>
                    -{product.discount || 40}%
                  </div>
                  <HeartOutlined style={{ fontSize: "25px" }} />
                </div>
                <div className='flex justify-end'>
                  <EyeOutlined style={{ fontSize: "25px" }} />
                </div>
                <div className='flex justify-center mt-[-30px]'>
                  <img 
                    className='w-40 h-40 object-contain'
                    src={`http://37.27.29.18:8002/images/${product.image}`}
                    alt={product.productName}
                  />
                </div>
              </div>

              <div className='flex flex-col items-start gap-[10px]'>
                <p className='font-bold'>{product.productName}</p>
                <div className='flex items-center gap-[10px]'>
                  <p className='text-[#DB4444] font-bold'>${product.price}</p>
                  {product.oldPrice && (
                    <p className='text-gray-500 line-through'>${product.oldPrice}</p>
                  )}
                </div>
                <div className='flex items-center gap-[10px]'>
                  <Rate defaultValue={product.rating || 4} />
                  <p className='text-gray-500 font-bold'>({product.reviews || 88})</p>
                </div>
              </div>

              <button className='absolute bottom-30 left-0 w-full bg-black text-white py-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                Add to Cart
              </button>
            </article>
          ))}
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