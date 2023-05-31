import img from '@assets/logo/logo.png'
import circleDashed from '@assets/images/circle-dashed.png';
import Logo from '@/components/Logo';


const UsePC = ({message}) => {
  return (
    <div className="flex gap-10 relative overflow-x-clip h-screen flex-col w-full  items-center">

      <div className="absolute transition-all md:hidden border-8 border-white cxs:w-[240px] w-[200px] cxs:h-[240px] h-[200px] rounded-full cxs:top-[-60px] top-[-70px] right-[-70px]"></div>
      <img
        src={circleDashed}
        className="absolute transition-all block md:hidden object-contain aspect-square cxs:w-[350px] w-[300px] cxs:left-[-120px] left-[-120px] cxs:top-[-50px] top-[-60px]"
      />
      <div className="absolute hidden md:block w-[200px] aspect-square top-[60vh] left-[20vw] rounded-full  bg-primary"></div>

      <img src={img} alt="" className='absolute top-[20vh] opacity-50 block md:hidden h-12' />
      <div className='absolute top-[15vh] opacity-50 h-12 hidden md:block'>
          <Logo />
      </div>

      {/* Mobile Part */}
      <div className="custom-glass mx-8 h-[50%] flex flex-col gap-8 md:w-1/2 z-10 mt-[30vh] justify-center items-center">
        <p className='-mt-12 text-center w-11/12 text-sm md:text-xl'>This experience is not available on {message}</p>
      </div>  

      <p className="font-extralight text-[12px] text-[#a4a4a4] fixed bottom-3">Powered by ablaze labs</p>

    </div>
  );
}

export default UsePC