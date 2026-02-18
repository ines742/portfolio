import React from 'react'
import { socialImgs } from '../constants'

const Footer = () => {
  return (
    <footer className='footer'>
        <div className='footer-container'>
            <div className="flex flex-col justify-center">
            </div>
            <div className='socials'>
               {socialImgs.map(({name, imgPath, url}) => (
                <a key={name} className='icon' target='_blank' href={url}>
                    <img src={imgPath} alt={name} />
                </a>
               ))} 
            </div>
            <div className='flex flex-col justify-center'>
                <p className='text-center md:text-end'>
                   © {new Date().getFullYear()} Torres Dev. All rights reserved.
                </p>
            </div>
        </div>
    </footer>
  )
}

export default Footer