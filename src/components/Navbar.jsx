
import {
  Link,
  DirectLink,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from 'react-scroll'

import logo from '../../images/logo.png'
function scrollTo(name) {
  scroller.scrollTo(name, {
    offset: -150,
    duration: 1000,
    delay: 0,
    smooth: 'easeInOutQuart',
  })
}


const NavbarItem = ({title,classProps}) => {
return(
    <li onClick={()=>{
      scrollTo(title)
    }} className={`mx-4 cursor-pointer hover:text-gray-400 ${classProps}`}>
        {title}
    </li>
)
}

const Navbar = () =>{

    return (
      <nav className="w-full flex md:justify-center justify-between items-center p-4">
        <div onClick={()=>{
           scrollTo('Welcome')
        }} className="md:flex-[0.5] flex-initial justify-center items-center cursor-pointer">
          <img src={logo}  alt="logo" className="w-16 " />
        </div>
        <ul className="text-white md:flex hidden list-none flex-row justify-between items-center flex-initial">
          {['Services', 'Swap', 'Stake', 'Transfer','Feedback','Team'].map((item, index) => (
            <NavbarItem key={item + index} title={item} />
          ))}
          <button 
          type="button"
          onClick={() =>window.open('https://pascal-swap.vercel.app/')}
          className="bg-blue-700 py-2 px-4 rounded-xl cursor-pointer hover:bg-blue-800">
            Launch App
          </button>
        </ul>
       
      </nav>
    )
 }
 export default Navbar;