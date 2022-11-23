

import swappicture from '../../images/swappage.png'
import stakepicture from '../../images/stakepage.png'
import transferpicture from '../../images/transfer.png'

const ServicesAll = () => {
  return (
    <div className="flex flex-col w-full mt-20  justify-start items-center ">
      <div
        name="Swap"
        className="flex mf:flex-row flex-col items-center  justify-between  w-full "
      >
        <img src={swappicture} className="w-max " />

        <div>
          <h1 className="text-white text-5xl  py-2 ">Swap</h1>
          <h1 className="text-gray-300 text-xl py-2 font-light ">
            Swap token on Mumbai polygon in seconds
            <br /> just connecting your wallet.
          </h1>
        </div>
      </div>

      <div
        name="Stake"
        className="flex mf:flex-row flex-col items-center  justify-between  w-full "
      >
        <div className="flex-1 flex flex-col justify-start items-start ">
          <h1 className="text-white text-5xl  py-2 ">Stake</h1>
          <h1 className="text-gray-300 text-xl py-2 font-light ">
            Earn passive income with crypto staking
            <br />
            your asset on Mumbai polygon in seconds
            <br /> just connecting your wallet.
          </h1>
        </div>

        <img src={stakepicture} className="w-8/12 " />
      </div>

      <div
        name="Transfer"
        className="flex mf:flex-row flex-col items-center  justify-between  w-full "
      >
        <img src={transferpicture} className=" w-max" />

        <div>
          <h1 className="text-white text-5xl  py-2 ">Transfer</h1>
          <h1 className="text-gray-300 text-xl py-2 font-light ">
            Send Crypto across the world easily on Mumbai
            <br />
            polygon in seconds just connecting your wallet.
          </h1>
        </div>
      </div>
    </div>
  )
}
export default ServicesAll
