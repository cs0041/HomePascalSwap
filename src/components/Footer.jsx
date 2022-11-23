import React from 'react'
import twitter from '../../images/twitter.svg'
import instagram from '../../images/instagram.svg'
import facebook from '../../images/facebook.svg'
import linkedin from '../../images/linkedin.svg'
import logo from '../../images/logo.png'
import {
  Link,
  DirectLink,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from 'react-scroll'


function scrollTo(name) {
  scroller.scrollTo(name, {
    offset: -150,
    duration: 1000,
    delay: 0,
    smooth: 'easeInOutQuart',
  })
}
const socialMedia = [
  {
    id: 'social-media-1',
    icon: instagram,
    link: 'https://www.instagram.com/',
  },
  {
    id: 'social-media-2',
    icon: facebook,
    link: 'https://www.facebook.com/',
  },
  {
    id: 'social-media-3',
    icon: twitter,
    link: 'https://www.twitter.com/',
  },
  {
    id: 'social-media-4',
    icon: linkedin,
    link: 'https://www.linkedin.com/',
  },
]


const Footer = () => {
  return (
    <div className="w-[90%] flex md:justify-center  items-center flex-col mt-52 p-4 ">
      <div className="w-full flex flex-row   items-center ">
        <div className="text-white text-sm font-light flex  gap-12 justify-center items-center  ">
          <img 
            onClick={() => scrollTo('Welcome')}
            src={logo}
            alt="logo" 
            className="w-8 cursor-pointer" />
          <p
            onClick={() => scrollTo('Services')}
            className=" text-center  cursor-pointer hover:text-gray-400"
          >
            Services
          </p>
          <p
            onClick={() => scrollTo('Swap')}
            className=" text-center  cursor-pointer hover:text-gray-400"
          >
            Swap
          </p>
          <p
            onClick={() => scrollTo('Stake')}
            className=" text-center  cursor-pointer hover:text-gray-400"
          >
            Stake
          </p>
          <p
            onClick={() => scrollTo('Transfer')}
            className=" text-center  cursor-pointer hover:text-gray-400"
          >
            Transfer
          </p>
          <p
            onClick={() => scrollTo('Feedback')}
            className=" text-center  cursor-pointer hover:text-gray-400"
          >
            Feedback
          </p>
          <p
            onClick={() => scrollTo('Team')}
            className=" text-center  cursor-pointer hover:text-gray-400"
          >
            Team
          </p>
        </div>
      </div>

      <div className="w-full flex flex-row justify-between  items-center mt-2 ">
        <p className="text-gray-400 text-sm  font-light  text-center">
          Contact - sometimewanna01@hotmail.com
        </p>

        <div className="flex flex-row gap-3">
          {socialMedia.map((social, index) => (
            <img
              key={social.id}
              src={social.icon}
              alt={social.id}
              className="w-[21px] h-[21px] object-contain cursor-pointer  "
              onClick={() => window.open(social.link)}
            />
          ))}
        </div>
      </div>

      <div className=" w-full h-[0.25px] bg-gray-400 mt-2 " />

      <div className=" w-full flex justify-between items-center mt-3">
        <p className="text-white text-left text-xs">@pascalswap2024</p>
        <p className="text-white text-right text-xs">All rights reserved</p>
      </div>
    </div>
  )
}

export default Footer
