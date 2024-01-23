import arrow from "../Assets/arrow.png";

const Button = () => {
  return (
    <div className=" bg-[#404040] flex h-[48px] w-[275px] items-center justify-evenly rounded-full">  
      <button className="text-[16px] font-[400]"> Create Your Account </button>
      <img src={arrow} alt="fuckarrow" srcset="" />
    </div>
  )
}

export default Button
