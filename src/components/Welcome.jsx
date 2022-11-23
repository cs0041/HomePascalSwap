import twitter from '../../images/twitter.svg'
import instagram from '../../images/instagram.svg'
import facebook from '../../images/facebook.svg'
import linkedin from '../../images/linkedin.svg'
import pngwelcome from '../../images/businessman.png'
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



const Welcome = () => {
 

  return (
    <div className="flex flex-col w-full justify-center items-center">
      <div className="flex mf:flex-row flex-col items-start gap-60 pt-20">
        <div className="flex flex-1 justify-start flex-col mt-24 ">
          <h1 className="text-7xl font-normal  text-gradient">PASCALSWAP</h1>

          <p className="text-left mt-3 text-white font-light md:w-9/12 w-11/12 text-base">
            Explore the crypto world swap, earn and transfer easily on
            decentralized platform.
          </p>

          <div className="flex flex-row  my-6">
            {socialMedia.map((social, index) => (
              <img
                key={social.id}
                src={social.icon}
                alt={social.id}
                className={`w-[21px] h-[21px] object-contain cursor-pointer ${
                  index !== socialMedia.length - 1 ? 'mr-6' : 'mr-0'
                }`}
                onClick={() => window.open(social.link)}
              />
            ))}
          </div>

          <button
            type="button"
            onClick={() => window.open('https://pascal-swap.vercel.app/')}
            className="flex flex-row w-4/12 justify-center items-center  bg-blue-700 p-3 rounded-xl cursor-pointer hover:bg-blue-800"
          >
            <p className="text-white text-base font-semibold">Launch App</p>
          </button>
        </div>

        <div className="items-center justify-center  flex ">
          <img src={pngwelcome} className="w-max animate-pulse" />
        
        </div>
      </div>

      <div className="flex flex-row w-full justify-center items-center text-4xl gap-8 ">
        <div className="text-white flex flex-col w-full justify-center items-center">
          <h1 className="font-bold  ">$1M+</h1>
          <span className="text-base font-light">Total Value Locked</span>
        </div>
        <div className="text-white flex flex-col w-full justify-center items-center">
          <h1 className="font-bold  ">$100M+ </h1>
          <span className="text-base font-light">Trade Volume</span>
        </div>
        <div className="text-white flex flex-col w-full justify-center items-center">
          <h1 className="font-bold  ">100,000+</h1>
          <span className="text-base font-light">Transanction</span>
        </div>
        <div className="text-white flex flex-col w-full justify-center items-center">
          <h1 className="font-bold  ">30,000+</h1>
          <span className="text-base font-light">User active</span>
        </div>
      </div>
    </div>
  )
}
export default Welcome
