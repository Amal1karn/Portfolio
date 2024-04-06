import React from 'react';

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'>
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
        <p className='text-4xl font-bold inline border-b-4 border-gray-500'>About</p>
      </div>

      <p className='text-xl mt-20'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates doloribus voluptatum quod repudiandae et voluptatem vero ex veniam iste, necessitatibus molestiae tempore adipisci eveniet voluptatibus ut eaque accusantium. Iure deserunt mollitia pariatur accusamus, iusto perspiciatis corrupti animi libero architecto hic commodi ab eum est officiis, natus quis ullam totam qui.
      </p>

      <br/>

      <p className='text-xl'>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas facilis, quibusdam sed provident asperiores iusto quis, dolores nemo ullam repellat nulla saepe deleniti et iure excepturi assumenda ab itaque sit aspernatur nisi nihil tempora ipsum? Ab laborum nihil, tempora saepe ipsa, molestiae voluptatem cum assumenda placeat qui illo reprehenderit neque?
      </p>
    </div>
  );
};

export default About;
