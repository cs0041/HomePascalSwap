
import { BsShieldFillCheck } from 'react-icons/bs'
import { BiSearchAlt } from 'react-icons/bi'
import { RiHeart2Fill } from 'react-icons/ri'

const Services = () => {
  return (
    <div className="flex flex-row w-full mt-20 justify-between  items-center   ">
      <div className="flex flex-col w-full  ">
        <h1 className="text-white text-5xl">Services that we develop</h1>
        <h1 className="text-white text-5xl">and improve</h1>
      </div>

      <div className=" flex flex-col gap-4">
        <div className="bg-slate-900 rounded-3xl hover:bg-slate-800 flex flex-row p-3  max-w-[600px]  gap-5 border-gray-400 border-[1px]">
          <BsShieldFillCheck fontSize={64} className="text-[#2952E3]" />

          <div className="flex flex-col">
            <h1 className="text-white text-2xl">Security gurantee</h1>
            <p className="text-white text-base  font-light w-10/12">
              We focus on safety as the number 1 priority. by hiring experts
              smart contract comes exclusively.
            </p>
          </div>
        </div>

        <div className="bg-slate-900 rounded-3xl hover:bg-slate-800 flex flex-row p-3  max-w-[600px]  gap-5 border-gray-400 border-[1px]">
          <BiSearchAlt fontSize={80} className="text-[#8945F8]" />

          <div className="flex flex-col">
            <h1 className="text-white text-2xl">Best exchange rates</h1>
            <p className="text-white text-base  font-light w-9/12">
              Our exchange uses the most popular equation in defi, x*y = k, in
              conjunction with the router that provides the best exchange rate.
            </p>
          </div>
        </div>

        <div className="bg-slate-900 rounded-3xl hover:bg-slate-800 flex flex-row p-3  max-w-[600px]  gap-5 border-gray-400 border-[1px]">
          <RiHeart2Fill fontSize={40} className="text-[#F84550]" />

          <div className="flex flex-col">
            <h1 className="text-white text-2xl">Fastest transactions</h1>
            <p className="text-white text-base  font-light w-9/12">
              Doing transaction on our dapp is extremely fast, less than 3
              seconds.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Services
