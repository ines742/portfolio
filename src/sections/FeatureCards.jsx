import React from 'react'
import { abilities } from '../constants'

// this section is for the 3 feature cards that show up in the hero section, showcasing some of my skills and abilities as a front-end developer. Each card will have an icon, a title, and a description of the skill or ability.
const FeatureCards = () => {
  return (
    <div className='w-full padding-x-lg py-15' >
        <div className='mx-auto grid-3-cols' >
            {abilities.map(({ icon, color, title, desc}) => (
                <div key={title} className='card-border rounded-xl p-8 flex flex-col gap-4'>
                    <div className='size-14 flex items-center justify-center rounded-full'>
                        <i className={`${icon} ${color} text-4xl`} />
                    </div>
                    <h3 className='text-white text-2xl font-semibold'>{title}</h3>
                    <p className='text-white-50 text-lg'>{desc}</p>
                </div>
            ))}

        </div>
    </div>
  )
}

export default FeatureCards