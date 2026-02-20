import React from 'react'
import NavBar from '../components/NavBar'
import TitleHeader from '../components/TitleHeader'
import { projects } from '../constants'
import Footer from '../sections/Footer'

const Projects = () => {
  return (
    <div className='w-full md:mt-50 mt-35 xl:px-20 '>
      <NavBar />
      <div className='w-full h-full md:px-20 px-5 '>
        <TitleHeader
         title='Projects & Experience'
         sub='More details of my recent work and projects' />
      </div>
      <div className='flex flex-col gap-30 mt-20' >
        {projects.map(({name, imgPath, desc, tech, live, github }, index) => (
          <div key={name}
              className={`flex flex-col lg:flex-row gap-18 px-5 items-center  ${
               index % 2 !== 0 ? 'lg:flex-row-reverse' : ''
               }`}>
               <div className='lg:w-1/2 '>
                 <img src={imgPath}
                    className='rounded-xl shadow-xl w-full object-cover'/>
               </div>
               <div className='lg:w-1/2'>
                 <h1 className='font-semibold text-3xl'>{name}</h1>
                 <p className='my-5 text-white-50'>{desc}</p>
                 <div className='flex flex-wrap gap-3 mb-6' >
                    {tech.map((item) =>(
                     <span key={item}
                       className='px-3 py-1 bg-white/30 rounded-full text-sm'>
                       {item}
                      </span>
                    ))}
                  </div>
                  <div className='flex gap-5'>
                    <a
                      href={live}
                      target='_blank'
                      rel="noopener noreferrer"
                      className='px-6 py-2 bg-white text-black rounded-lg font-medium hover:opacity-80 transition'>
                        Live Site
                    </a>
                    <a
                      href={github}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='px-6 py-2 border border-white-50 rounded-lg font-medium hover:bg-white hover:text-black transition'>
                      GitHub
                    </a>
                  </div>
                </div>
             </div>
        ))}

      </div>
      <Footer />
    </div>
  )
}

export default Projects