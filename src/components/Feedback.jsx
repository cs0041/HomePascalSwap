import { ImQuotesLeft } from 'react-icons/im'
import { BsFillEmojiSmileFill, BsPeople } from 'react-icons/bs'
const ServicesAll = () => {
  return (
    <div className="flex flex-col w-full mt-32  justify-center items-center ">
      <div className="text-white text-5xl mb-10">
        What people are <br />
        saying about us
      </div>

      <BsPeople fontSize={120} color="#1D4ED8" />
      {/* <svg width="150" height="150" xmlns="http://www.w3.org/2000/svg">
        <image
          href="../../images/undraw_male_avatar_re_y880.svg"
          height="150"
          width="150"
          color="000000"
        />
      </svg> */}
      <div className="flex flex-row w-full gap-10 mt-10  justify-center items-center">
        <div className="bg-slate-900 rounded-md hover:bg-slate-800 flex flex-col p-6 justify-between max-w-[250px] min-h-[250px] gap-5">
          <ImQuotesLeft fontSize={20} color="#fff" />
          <h1 className="text-gray-400 font-base  font-light">
            The site is very good, beautiful, easy to use for beginners like me
            in the web3 world.
          </h1>
          <div className="flex flex-row  items-center gap-2 text-white font-bold">
            <BsFillEmojiSmileFill size={24} color="#fff" />
            <span>0x232...90e7</span>
          </div>
        </div>

        <div className="bg-slate-900 rounded-md hover:bg-slate-800 flex flex-col justify-between p-6  max-w-[250px] min-h-[250px] gap-5">
          <ImQuotesLeft fontSize={20} color="#fff" />
          <h1 className="text-gray-400 font-base break-all font-light">
            I try use swap it's shockingly easy It's so fast.
          </h1>
          <div className="flex flex-row  items-center gap-2 text-white font-bold">
            <BsFillEmojiSmileFill size={24} color="#fff" />
            <span>0x649...235f</span>
          </div>
        </div>

        <div className="bg-slate-900 rounded-md hover:bg-slate-800 flex flex-col p-6  justify-between max-w-[250px]  min-h-[250px] gap-5">
          <ImQuotesLeft fontSize={20} color="#fff" />
          <h1 className="text-gray-400 font-base break-all font-light">
            I really like this site do you have plans to issue coins in the
            future?
          </h1>
          <div className="flex flex-row  items-center gap-2 text-white font-bold">
            <BsFillEmojiSmileFill size={24} color="#fff" />
            <span>0x430...BcA5</span>
          </div>
        </div>
      </div>
    </div>
  )
}
export default ServicesAll
