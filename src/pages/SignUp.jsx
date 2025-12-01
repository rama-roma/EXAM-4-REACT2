import { Input } from 'antd'
import { useState } from 'react'
import logo from '../images/Icon-Google.svg'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { registerUser } from '../reducers/auth/auth'

const SignUp = () => {

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const [userName, setUserName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  function ForLogin(){
    const user = {
      userName: userName,
      phoneNumber: phoneNumber,
      email: email,
      password: password,
      confirmPassword: confirmPassword
    }
    dispatch(registerUser(user))
    navigate("/login")
  }

  return (
    <main>
      <section className='mt-25 mb-25 flex justify-center items-center h-100'>
        <article className='flex flex-col items-start'>
          <h1 className='text-[30px]'>Create an account</h1>
          <p>Enter your details below</p><br />
          <div className='flex flex-col gap-[10px]'>
            <Input value={userName} onChange={(e) => setUserName(e.target.value)} style={{width:"330px", height:"50px"}} placeholder='Name'/>
            <Input value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} style={{width:"330px", height:"50px"}} placeholder='Phone number'/>
            <Input value={email} onChange={(e) => setEmail(e.target.value)} style={{width:"330px", height:"50px"}} placeholder='Email' />
            <Input value={password} onChange={(e) => setPassword(e.target.value)} style={{width:"330px", height:"50px"}} placeholder='Password'/>
            <Input value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} style={{width:"330px", height:"50px"}} placeholder='Confirm password'/>
            <button onClick={ForLogin} className='p-3 pl-10 pr-10 font-medium rounded-[3px] bg-[#DB4444] text-[white] '>Create Account</button>
            <button className='p-3 pl-10 pr-10 font-medium rounded-[3px] bg-[white] border flex justify-center gap-[10px] '> <span><img src={logo} alt="" /></span> Sign up with Google</button>
          </div><br />
          <div className='flex items-center justify-center gap-[10px] ml-10'>
            <p>Already have account?</p>
            <Link to='/login'>
              <span className="border-b-2 border-black">Log in</span>
            </Link>
          </div>
        </article>
      </section>
    </main>
  )
}

export default SignUp