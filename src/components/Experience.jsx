import React from 'react'
import bslogo from '../assets/bslogo.jpg'
import csslogo from '../assets/csslogo.png'
import htmlicon from '../assets/htmlicon.jpg'
import jslogo from '../assets/jslogo.png'
import pylogo from '../assets/pylogo.jpg'
import reactlogo from '../assets/reactlogo.png'



const Experience = () => {

  const experiences = [
    {
      id: 1,
      src:bslogo
    },
    {
      id: 2,
      src: pylogo
    },
    {
      id: 3,
      src: csslogo
    },
    {
      id: 4,
      src: htmlicon
    },
    {
      id: 5,
      src: jslogo
    },
    {
      id: 6,
      src: reactlogo
    }

  ]


  return (
    
  <div name='experience' className='bg-gradient-to-r from-blue-900 to-green-50
  w-full h-screen
  text-white md:h-screen'>
    <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
      <div className='pb-8'>
        <p className='text-4xl font-bold inline border-b-4  border-gray-500'>Experience</p>
        <p className='py-6'> I have been trying to learn as much skills as I want</p>
      </div>

      <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8
        px-12 sm:px-0'>

{
      experiences.map(({id, src}) => (

        <div className='shadow-md shadow-gray-600 rounded-lg'>
          <img src={src} alt='' className='rounded-md duration-200 hover:scale-105'/>

          <div className='flex items-center justify-center'>
            <button className='w-1/2 px-6 py-3 duration-200 hover:scale-105 font-semibold'>Demo</button>
            <button className='w-1/2 px-6 py-3 duration-200 hover:scale-105 font-semibold'>Code</button>
          </div>
        </div>


))
}
        
      </div>
    </div>
  </div>
    
  )
}

export default Experience