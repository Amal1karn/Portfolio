import React from 'react';

const Contact = () => {
  return (
    <div name='contact' className='bg-gradient-to-t from-green-900 to-purple-500 w-full h-screen
    text-white md:h-screen'>
      <div className='text-4xl font-bold inline border-b-4' >
        <p className='py-6'>Contact me</p>
      </div>
      <div className='text-xl py-5 '>
        <p>Name</p>
        <input type="text" placeholder="Enter your name" className='rounded'/>
        <p>Email</p>
        <input type="text" placeholder="Enter your email" className='rounded'/>
        <p>Subject</p>
        <input type="text" placeholder="Context" className='rounded'/>
        <p>Message</p>
        <input type="text" placeholder="Type your message" className='rounded'/>
        
        
        <div className='py-8'>
        <button className='border-3'>Submit</button>
        </div>
      </div>
    </div>
  );
}

export default Contact;
