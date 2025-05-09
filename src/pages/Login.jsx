import React, { useState } from 'react'

const Login = () => {

  const [state, setState] = useState('Sign up')

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')

  const onSubmitHandler = (event) => {
    event.preventDefault()

  }


  return (
    <form className='min-h-[80vh] flex items-center'>
      <div className=' flex flex-col gap-3 m-auto items-start p-8 min-w-[340px] sm:min-w-96 border rounded-xl text-zinc-600 text-sm shadow-lg'>
        {/* yaha dekhna hai yaad se */}
        <p className='text-2xl font-semibold'>{state === 'Sign up' ? "Create Account" : "Login"}</p>
        <p>Please {state === 'Sign up' ? "sign up" : "log in"} to book appointment</p>

        {
          state === "Sign up" && <div className='w-full'>
            <p>Full Name</p>
            <input className='border border-zinc-300 rounded w-full p-2 mt-2' type="text" onChange={(e) => setName(e.target.name)} value={name} required />
          </div>
        }

        {/* <div className='w-full'>
          <p>Full Name</p>
          <input className='border border-zinc-300 rounded w-full p-2 mt-2' type="text" onChange={(e) => setName(e.target.name)} value={name} required />
        </div> */}

        <div className='w-full'>
          <p>Email</p>
          <input className='border border-zinc-300 rounded w-full p-2 mt-2' type="email" onChange={(e) => setEmail(e.target.name)} value={email} required />
        </div>

        <div className='w-full'>
          <p>Password</p>
          <input className='border border-zinc-300 rounded w-full p-2 mt-2' type="password" onChange={(e) => setPassword(e.target.name)} value={password} required />
        </div>
        <button className='bg-primary text-white w-full py-2 rounded-md text-base cursor-pointer'>{state === 'Sign up' ? "Create Account" : "log in"}</button>
        {
          state === "Sign up"
            ? <p className='cursor-pointer'>Already have an account? <span className='cursor-pointer' onClick={() => setState('Login')}>Login here</span> </p>
            : <p className='cursor-pointer'>Create an new account ? <span className='cursor-pointer' onClick={() => setState('Sign up')}>Click here</span></p>
        }
      </div>
    </form>
  )
}

export default Login