import React, { useState } from 'react'

const Login = () => {

  const [currState, setCurrState] = useState("Sign in")

  return (
    <div className='login max-h-fit place-content-center flex justify-center my-20'>

      <div class="w-full sm:w-8/12 p-2 sm:p-4 min-h-full place-content-center m-auto ">
        <form className="flex flex-col gap-2 max-w-sm border-2 shadow-lg shadow-indigo-600 bg-slate-100 px-6 sm:px-8 py-8 rounded-lg m-auto ">

          <div className="sigin-title">
            <h2 className='text-semibold text-center mb-2  text-indigo-900  align-center text-[24px]'>{currState}</h2>
          </div>

          <div className="signin-input flex flex-col gap-3">

            {currState === "Sign in" ? <></> : <><input className='login-input' type="text" placeholder='Name' /></>}

            <input className='login-input' type="text" placeholder='Email' required />
            <input className='login-input' type="text" placeholder='Password' required />
          </div>

          <button className='bg-indigo-700 hover:bg-indigo-600 text-white py-2 px-5 text-base rounded-lg'>{currState === "Sign up" ? <>Create Account</> : <>Sign In</>}</button>

          <p className='text-base'>{currState === "Sign in" ? <> You don't have an account ? <  span className='login-onclick pointer' onClick={() => { setCurrState("Sign up") }}>Sign Up</span> </> : <>You have an account ? < span className='login-onclick pointer' onClick={() => { setCurrState("Sign in") }}>Sign In</span></>}</p>


        </form >
      </div>
    </div >
  )
}

export default Login