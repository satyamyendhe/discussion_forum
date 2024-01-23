import rocket from "../Assets/rocket.png"
import Button from "./Button"
const Hero = () => {
  return (
    <div className="text-white flex flex-col items-center justify-center h-full w-full mt-[173px]">

        {/* rocket */}
        <div className="border-[#292929] border w-[228px] h-[40px] rounded-full flex flex-row items-center justify-evenly ">
    
                <img src={rocket} alt="rocket" />
                <p className=" text-[14px] font-[400]"> For Indian User Only</p>
            
        </div>

        {/* heading */}
        <div className=" text-center mt-5 mb-5 ">
            <h1 className=" text-[50px] font-[700] leading-[58.75px]">Start posting anonymously<br></br> where no one will judge.</h1>
        </div>

        {/* extra */}
        <div className=" text-center">
            <h3 className="text-[20px] font-[400] leading-[23.5px]">Welcome to Stranger discussion forum</h3>
        </div>

        {/* Button */}
        <div className=" mt-20">
            <Button/>
        </div>

        {/* Login Text */}
        <div className="leading-10">
            <p className="text-[16px] font-[400] ">Already have account? <span className="border-b-[1px]">Login</span></p>
        </div>
    </div>
  )
}

export default Hero
