import React from 'react'
import EmailForm from '../Components/EmailForm/ Emailform'

function Contact() {
  return (
    <div className='p-4'>
      <div class="flex items-center justify-center p-4 ">
      <h1 class=" items-center text-5xl font-bold text-transparent bg-clip-text dark:bg-gradient-to-r from-indigo-500 to-purple-600 
              hover:tracking-widest transition-all duration-300 ease-in-out drop-shadow-lg">
    I've heard networking is good, let us connect?
  </h1>
  </div>
      <EmailForm/>
      
      </div>
  )
}

export default Contact