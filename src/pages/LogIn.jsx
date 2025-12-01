import { Input } from 'antd'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { SaveToken } from '../utils/token'
import { useDispatch } from 'react-redux'
import { loginUser } from '../reducers/auth/auth'
const LogIn = () => {
   
  const [userName, setUserName] = useState("")
  const [password, setPassword] = useState("")
  
  const dispatch = useDispatch()
  const navigate = useNavigate()

  function ForLog() {
    const user = {
      userName: userName,
      password: password 
    }
    
    dispatch(loginUser(user))
    navigate("/")
  }


  return (
    <main>
      <section className='mt-25 mb-25 flex justify-center items-center h-100'>
        <article className='flex flex-col items-start'>
          <h1 className='text-[30px]'>Log in to Exclusive</h1>
          <p>Enter your details below</p><br />
          <div className='flex flex-col gap-[10px]'>
            <Input value={userName} onChange={(e) => setUserName(e.target.value)} style={{width:"330px", height:"50px"}} placeholder='Username'/>
            <Input value={password} onChange={(e) => setPassword(e.target.value)} style={{width:"330px", height:"50px"}} placeholder='Password'/>
            <Link className='flex justify-center' to='/error'>
              <button className='p-3 pl-10 pr-10 text-[#DB4444] font-bold  rounded-[3px] bg-[white] flex justify-center gap-[10px] '>Forget Password?</button>
            </Link>
            <button onClick={ForLog} className='p-3 pl-10 pr-10 font-medium rounded-[3px] bg-[#DB4444] text-[white] '>Log In</button>
          </div><br />
        </article>
      </section>
    </main>
  )
}

export default LogIn