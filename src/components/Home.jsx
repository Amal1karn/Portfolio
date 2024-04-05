import React from 'react';
import Codeo from '../assets/codeo.jpg';
import { BiSolidRightArrow } from "react-icons/bi";

const Home = () => {
  return (
    <div name="home" 
    className='h-screen w-full bg-gradient-to-b from-black
    via-black to-gray-800 '>
        <div className='max-w-screen-lg mx-auto flex flex-col
        items-center justify-center h-full px-4 md:flex-row'>
            <div className="flex flex-col justify center h-full">
                <h2 className='text-4xl sm:text-5xl font-bold text-white'>
                    I am a Full Stack Developer
                </h2>
                <p className='text-gray-500 py-4 max-w-md'>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                    Officia earum, eaque dignissimos, officiis iure debitis 
                    recusandae sit velit incidunt porro illum mollitia! Repellat 
                    architecto nobis autem. Incidunt praesentium molestiae cumque?
                </p>
                <div>
                    <button className='group text-white w-fit px-6 py-3 my-3
                    flex items-center rounded-md bg-gradient-to-r 
                    from-cyan-50 to-blue-500 cursor-pointer'>
                        Protfolio  
                        <span className='group-hover:rotate-90 duration-300'>
                            
                            <  BiSolidRightArrow size={25} 
                            className='ml-1'/>
                        </span>
                    </button>

                </div>
                
            </div>
            <div>
                <img src={Codeo} alt="home image"
                className='rounded-3xl mx-auto w-2/3 md:w-full'/>
            </div>
        </div>
    </div>
  )
}

export default Home