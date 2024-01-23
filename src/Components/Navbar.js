import squareLogo from '../Assets/logo.png'

const Navbar = () => {
  return (
    <div id="Main" >
      <div className="border-black flex ">
          <img src={squareLogo} alt="logo" className='ml-[45px] mt-[19px] h-[40px] w-[42.22px]'/>

          <h1 className="text-white ml-[30px] mt-[25px] text-[20px] font-[700]">ANONYMOUS</h1>
      </div>
    </div>
  )
}

export default Navbar
