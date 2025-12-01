 
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { getUser } from '../reducers/products/product'

const Section7 = () => {
  const { data } = useSelector((state) => state.product);
  console.log(data)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUser());
  },[dispatch]);

  return (
    <>
      {
        data?.products?.map((e) => {
          return(
            <div key={e.id}>
              <h1>{e.productName}</h1>
              <p>{e.price}</p>
            </div>
          )
        })
      }
      {/* <section className='mt-10 flex flex-wrap gap-[20px] items-center justify-center'>
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
            <div className='flex justify-between items-center'>
              <div className='bg-[#00FF66] text-[white] p-2 pl-5 pr-5 rounded-[7px]'>NEW</div>
              <HeartOutlined style={{ fontSize: "25px" }} />
            </div>
            <div className='flex justify-end'>
              <EyeOutlined style={{ fontSize: "25px" }} />
            </div>
            <div className='flex justify-center mt-[-40px]'>
              <img className='w-50' src={img4} alt="" />
            </div>
          </div>

          <div className='flex flex-col items-start gap-[10px]'>
            <p className='font-bold'>Kids Electric Car</p>
            <div className='flex items-center gap-[10px]'>
              <p className='text-[#DB4444] font-bold'>$120</p>
              <Rate />
              <p className='text-[grey] font-bold'>(88)</p>
            </div>
            <Radio.Group defaultValue="red">
              <div className="flex items-center ">
                <Radio value="red" className="radio-red" />
                <Radio value="blue" className='radio-blue' />
              </div>
            </Radio.Group>
          </div>

  
          <button className='absolute bottom-30 left-0 w-full bg-black text-white py-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
            Add to Cart
          </button>
        </article>

        <article className='group relative flex flex-col items-start justify-start gap-[20px] w-80 h-100'>
          <div className='bg-[#F5F5F5] w-full h-70 flex flex-col gap-[20px] p-4'>
            <div className='flex justify-end flex-col items-end gap-[30px] pt-2'>
              <HeartOutlined style={{ fontSize: "25px" }} />
              <EyeOutlined style={{ fontSize: "25px" }} />    
            </div>
            <div className='flex justify-center mt-[-40px]'>
              <img className='w-40' src={img5} alt="" />
            </div>
          </div>

          <div className='flex flex-col items-start gap-[10px]'>
            <p className='font-bold'>Jr. Zoom Soccer Cleats</p>
            <div className='flex items-center gap-[10px]'>
              <p className='text-[#DB4444] font-bold'>$120</p>
              <Rate />
              <p className='text-[grey] font-bold'>(88)</p>
            </div>
            <Radio.Group defaultValue="red">
              <div className="flex items-center ">
                <Radio value="red" className="radio-red" />
                <Radio value="blue" className='radio-blue' />
              </div>
            </Radio.Group>
          </div>

  
          <button className='absolute bottom-30 left-0 w-full bg-black text-white py-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
            Add to Cart
          </button>
        </article>

       <Link to="/infoproduct">
        <article className='group relative flex flex-col items-start justify-start gap-[20px] w-80 h-100'>
          <div className='bg-[#F5F5F5] w-full h-70 flex flex-col gap-[20px] p-4'>
            <div className='flex justify-between items-center'>
              <div className='bg-[#00FF66] text-[white] p-2 pl-5 pr-5 rounded-[7px]'>NEW</div>
              <HeartOutlined style={{ fontSize: "25px" }} />
            </div>
            <div className='flex justify-end'>
              <EyeOutlined style={{ fontSize: "25px" }} />
            </div>
            <div className='flex justify-center mt-[-30px]'>
              <img className='w-40' src={img6} alt="" />
            </div>
          </div>

          <div className='flex flex-col items-start gap-[10px]'>
            <p className='font-bold'>GP11 Shooter USB Gamepad</p>
            <div className='flex items-center gap-[10px]'>
              <p className='text-[#DB4444] font-bold'>$120</p>
              <Rate />
              <p className='text-[grey] font-bold'>(88)</p>
            </div>
            <Radio.Group defaultValue="red">
              <div className="flex items-center ">
                <Radio value="red" className="radio-red" />
                <Radio value="blue" className='radio-blue' />
              </div>
            </Radio.Group>
          </div>

  
          <button className='absolute bottom-30 left-0 w-full bg-black text-white py-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
            Add to Cart
          </button>
        </article>
       </Link>


        <article className='group relative flex flex-col items-start justify-start gap-[20px] w-80 h-100'>
          <div className='bg-[#F5F5F5] w-full h-70 flex flex-col gap-[20px] p-4'>
            <div className='flex flex-col justify-end items-end gap-[10px]'>
              <HeartOutlined style={{ fontSize: "25px" }} />
              <EyeOutlined style={{ fontSize: "25px" }} />
            </div>
            <div className='flex justify-center mt-[-30px]'>
              <img className='w-40' src={img7} alt="" />
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


        <article className='group relative flex flex-col items-start justify-start gap-[20px] w-80 h-100'>
          <div className='bg-[#F5F5F5] w-full h-70 flex flex-col gap-[20px] p-4'>
            <div className='flex justify-end flex-col items-end gap-[30px] pt-2'>
              <HeartOutlined style={{ fontSize: "25px" }} />
              <EyeOutlined style={{ fontSize: "25px" }} />    
            </div>
            <div className='flex justify-center mt-[-40px]'>
              <img className='w-40' src={img8} alt="" />
            </div>
          </div>

          <div className='flex flex-col items-start gap-[10px]'>
            <p className='font-bold'>Jr. Zoom Soccer Cleats</p>
            <div className='flex items-center gap-[10px]'>
              <p className='text-[#DB4444] font-bold'>$120</p>
              <Rate />
              <p className='text-[grey] font-bold'>(88)</p>
            </div>
            <Radio.Group defaultValue="red">
              <div className="flex items-center ">
                <Radio value="red" className="radio-red" />
                <Radio value="blue" className='radio-blue' />
              </div>
            </Radio.Group>
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
              <img className='w-40' src={img9} alt="" />
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
      </section> */}
    </>
  )
}

export default Section7