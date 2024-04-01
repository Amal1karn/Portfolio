import React from 'react'
import Codeo from '../assets/codeo.jpg';
import { BiSolidRightArrow } from "react-icons/bi";

const Home = () => {
  return (
    <div name="home" className='flex h-screen w-full bg-gradient-to-b from-black
    to-gray-800'>
        <div className='max-w-screen-lg mx-auto flex flex-col
        items-center justify-center h-full px-4'>
            <div>
                <h2>
                    I am a Full Stack Developer
                </h2>
                <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                    Officia earum, eaque dignissimos, officiis iure debitis 
                    recusandae sit velit incidunt porro illum mollitia! Repellat 
                    architecto nobis autem. Incidunt praesentium molestiae cumque?
                </p>
                <div>
                    <button>
                        Protfolio
                        <span>
                            
                            <BiSolidRightArrow />
                        </span>
                    </button>

                </div>
                
            </div>
        </div>
    </div>
  )
}

export default Home