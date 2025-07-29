import x3 from "../../assets/test-drive.png"
import { PiSteeringWheelDuotone } from "react-icons/pi";

function Testdrive() {
  return (
    <>
      <div className="bg-gradient-to-r from-[#008ac9] via-[#522dae] to-[#f11a22] h-[22rem] sm:h-[28rem] lg:h-[35rem] w-full absolute overflow-x-hidden overflow-y-hidden text-gray-900">
        <h1 className="flex font-black text-3xl relative top-8 left-6 lg:text-6xl "><PiSteeringWheelDuotone className="relative top-0.5 right-2" />Book Test Drive Now</h1>
        <p className="font-bold relative top-15 left-2.5 sm:w-[450px] sm:left-10 md:hidden">Don't just dream it. Book your BMW test drive and ignite your senses.</p>
        <p className="hidden md:block relative top-15 font-bold w-[600px] left-8 lg:top-25 lg:text-3xl lg:w-[70rem]">Ready to feel the road like never before? Schedule your exclusive BMW test drive and discover true driving pleasure.</p>
        <img className="lg:h-[35rem] bg-cover bg-center bg-no-repeat relative left-15 sm:bottom-8 md:left-50 lg:left-130" src={x3} alt="" />
        <button className="bg-[#5c5c5c] w-[180px] relative left-6 p-2 rounded-[10px] bottom-8 font-semibold hover:bg-[#5c5c5cbb] duration-300 hover:cursor-pointer sm:bottom-25 md:bottom-50 md:left-8 lg:w-[400px] lg:bottom-75 lg:p-6 lg:bg-transparent lg:border-[4px] lg:border-[#5c5c5c] lg:text-2xl lg:active:bg-[#5c5c5cbb]">Book Test Drive</button>
      </div>
    </>
  )
}

export default Testdrive