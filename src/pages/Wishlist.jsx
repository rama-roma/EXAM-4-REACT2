import React, { useEffect, useState } from 'react'
import Section4 from '../components/section4'
import Section3 from '../components/section3'
import Title from '../components/title'
import { HeartOutlined, EyeOutlined } from '@ant-design/icons'
import { Rate } from 'antd'
import { Link } from 'react-router-dom'

const Wishlist = () => {
  const [favorites, setFavorites] = useState([])

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("favorites")) || [];
    console.log(data);
    setFavorites(data);
  }, [])

  const handleRemoveFromFavorites = (productId) => {
    const updatedFavorites = favorites.filter(item => item.id !== productId);
    setFavorites(updatedFavorites);
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
  }

  const handleMoveAllToBag = () => {
     alert("Все товары перемещены в корзину");
  }

  return (
    <>
      <div className='hidden md:block'>
        <main>
          <div className='mt-10 flex justify-between items-center'>
            <h1 className='text-[20px]'>Wishlist ({favorites.length})</h1>
            <button 
              onClick={handleMoveAllToBag}
              className='p-4 border-2 pl-10 pr-10'
            >
              Move All To Bag
            </button>
          </div>

          <div className='mt-10 flex flex-wrap gap-[20px] items-center justify-center'>
            {favorites.map((product) => (
              <article key={product.id} className='group relative flex flex-col items-start justify-start gap-[20px] w-80 h-100'>
                <div className='bg-[#F5F5F5] w-full h-70 flex flex-col gap-[20px] p-4'>
                  <div className='flex flex-col justify-end items-end gap-[10px]'>
                    <button 
                      onClick={() => handleRemoveFromFavorites(product.id)}
                      className="cursor-pointer hover:scale-110 transition-transform"
                    >
                      <HeartOutlined style={{ fontSize: "25px", color: "#DB4444" }} />
                    </button>
                    <Link to={`/infoproduct/${product.id}`}>
                      <EyeOutlined style={{ fontSize: "25px" }} />
                    </Link>
                  </div>
                  <div className='flex justify-center mt-[-30px]'>
                    <img 
                      className='w-40 max-h-40 object-contain' 
                      src={`http://37.27.29.18:8002/images/${product.image}`} 
                      alt={product.productName} 
                    />
                  </div>
                </div>

                <div className='flex flex-col items-start gap-[10px] w-full'>
                  <p className='font-bold'>{product.productName}</p>
                  <div className='flex items-center gap-[10px]'>
                    <p className='text-[#DB4444] font-bold'>${product.price}</p>
                    {product.oldPrice && (
                      <p className='text-[grey] line-through'>${product.oldPrice}</p>
                    )}
                  </div>
                  <div className='flex items-center gap-[10px]'>
                    <Rate defaultValue={product.rating || 4} />
                    <p className='text-[grey] font-bold'>({product.reviewCount || 88})</p>
                  </div>
                </div>

                <button className='absolute bottom-30 left-0 w-full bg-black text-white py-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                  Add to Cart
                </button>
              </article>
            ))}
          </div>

          {favorites.length === 0 && (
            <div className="text-center py-20">
              <p className="text-gray-500 text-lg">Ваш список избранного пуст</p>
            </div>
          )}

          <div className='mt-30 flex justify-between items-center'>
            <Title text="Just For You" />
            <button className='p-4 border-2 pl-10 pr-10'>See All</button>
          </div>

          <Section3 />
        </main>
      </div>

      <div className='block md:hidden'>
        <main>
          <div className='mt-10 flex justify-between items-center'>
            <h1 className='text-[20px]'>Wishlist ({favorites.length})</h1>
            <button 
              onClick={handleMoveAllToBag}
              className='p-4 border-2 pl-10 pr-10'
            >
              Move All To Bag
            </button>
          </div>

          <div className='mt-10 flex flex-wrap gap-[20px] items-center justify-center'>
            {favorites.map((product) => (
              <article key={product.id} className='group relative flex flex-col items-start justify-start gap-[20px] w-80 h-100'>
                <div className='bg-[#F5F5F5] w-full h-70 flex flex-col gap-[20px] p-4'>
                  <div className='flex flex-col justify-end items-end gap-[10px]'>
                    <button 
                      onClick={() => handleRemoveFromFavorites(product.id)}
                      className="cursor-pointer hover:scale-110 transition-transform"
                    >
                      <HeartOutlined style={{ fontSize: "25px", color: "#DB4444" }} />
                    </button>
                    <Link to={`/infoproduct/${product.id}`}>
                      <EyeOutlined style={{ fontSize: "25px" }} />
                    </Link>
                  </div>
                  <div className='flex justify-center mt-[-30px]'>
                    <img 
                      className='w-40 max-h-40 object-contain' 
                      src={`http://37.27.29.18:8002/images/${product.image}`} 
                      alt={product.productName} 
                    />
                  </div>
                </div>

                <div className='flex flex-col items-start gap-[10px] w-full'>
                  <p className='font-bold'>{product.productName}</p>
                  <div className='flex items-center gap-[10px]'>
                    <p className='text-[#DB4444] font-bold'>${product.price}</p>
                    {product.oldPrice && (
                      <p className='text-[grey] line-through'>${product.oldPrice}</p>
                    )}
                  </div>
                  <div className='flex items-center gap-[10px]'>
                    <Rate defaultValue={product.rating || 4} />
                    <p className='text-[grey] font-bold'>({product.reviewCount || 88})</p>
                  </div>
                </div>

                <button className='absolute bottom-30 left-0 w-full bg-black text-white py-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                  Add to Cart
                </button>
              </article>
            ))}
          </div>

          {favorites.length === 0 && (
            <div className="text-center py-20">
              <p className="text-gray-500 text-lg">Ваш список избранного пуст</p>
            </div>
          )}

          <div className='mt-30 mb-30 flex justify-between items-center'>
            <Title text="Just For You" />
            <button className='p-4 border-2 pl-10 pr-10'>See All</button>
          </div>

          <Section3 />
        </main>
      </div>
    </>
  )
}

export default Wishlist