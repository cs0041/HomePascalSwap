
import teamPic from '../../images/onemanteam.jpg'


const Team = () => {
  return (
    <div className="flex flex-col w-full mt-32 justify-center items-center ">
      <div className="text-white text-5xl mb-10">Meet Our Team</div>
      <div className="w-[200px] h-[200px]">
        <img
          src={teamPic}
          alt="Name"
          className="rounded-full w-full object-cover  overflow-auto"
        />
      </div>
      <div className="flex flex-col justify-center items-center w-full bg-slate-900 rounded-md hover:bg-slate-800 p-6  max-w-[300px] maix-w-[300px] mt-10 ">
        <h1 className="  text-white text-base break-all font-bold">
          CEO <br />
        </h1>
        <h1 className="  text-gray-400 font-base break-all font-light">
          Crypto Pascal
        </h1>
      </div>
    </div>
  )
}
export default Team
