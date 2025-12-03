import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { getUser } from '../reducers/products/product'
import { HeartOutlined,  EyeOutlined } from '@ant-design/icons'
import { Rate, Radio } from 'antd'
import { addCart, getCart } from '../reducers/cart/cart'
import { Link } from 'react-router-dom'

const Section7 = () => {
  const { data } = useSelector((state) => state.product)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getUser())
  }, [dispatch])

  const handleAddToFavorites = (product) => {
    let favorites = JSON.parse(localStorage.getItem("favorites")) || []
    const exists = favorites.some(item => item.id === product.id)
    if (!exists) {
      favorites.push(product)
      localStorage.setItem("favorites", JSON.stringify(favorites))
      console.log("added to favorites:", product)
    } 
    else {
      console.log("already in favorites")
    }
  }

  return (
    <>
      <section className='mt-10 flex flex-wrap gap-[30px] items-center justify-center'>
        {data?.products?.map((product, index) => (
          <article key={product.id} className='group relative flex flex-col items-start justify-start gap-[20px] w-80 h-110'>
            <div className='bg-[#F5F5F5] w-full h-70 flex flex-col gap-[20px] p-4'>
              <div className='flex justify-between items-center'>
                <div className='bg-[#DB4444] text-white p-2 pl-5 pr-5 rounded-[7px]'>-{product.discountPrice}%</div>
                <HeartOutlined 
                  style={{ fontSize: "25px", cursor: "pointer" }}
                  onClick={() => handleAddToFavorites(product)}
                />
              </div>
              <div className='flex justify-end'>
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
                  <p className='text-gray-500 line-through'>${product.oldPrice}</p>
                )}
              </div>
              <div className='flex items-center gap-[10px]'>
                <Rate defaultValue={4} />
                <p className='text-gray-500 font-bold'>({product.reviewCount || 88})</p>
              </div>

              <p>{product.color}</p>

              {(index === 3 || index === 4 || index === 5 || index === 7) && (
                <Radio.Group defaultValue="red">
                  <div className="flex items-center">
                    <Radio value="red" className="radio-red" />
                    <Radio value="blue" className='radio-blue' />
                  </div>
                </Radio.Group>
              )}

              
            </div>

            <button 
              onClick={() => dispatch(addCart(product.id)).then(() => dispatch(getCart()))} 
              className='absolute bottom-40 left-0 w-full bg-black text-white py-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300'
            >
              Add to Cart
            </button>
          </article>
        ))}
      </section>
    </>
  )
}

export default Section7