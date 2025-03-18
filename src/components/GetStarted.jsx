 import styles from "../style"
 import { arrowUp } from "../assets/import"

const GetStarted = () => {
  return(
    <div className={`${styles.flexCenter} w-[140px] h-[140px] rounded-full bg-blue-gradient p-[2px] cursor-pointer  hover:h-[80px] duration-500`}>
      <div className={`${styles.flexCenter} bg-primary w-[100%] h-[100%] rounded-full flex-col `}>
        <div className={`${styles.flexStart} flex-row `}>
          <p className="font-poppins font-medium text-[18px] leading-[23px] mr-2 ">
            <span className="text-gradient hover:text-black">Get</span>
          </p>
          <img src={arrowUp} alt="arrow" className="w-[23px] h-[23px] object-contain " />
        </div>
        <p className="font-poppins font-medium text-[18px] leading-[23px]">
            <span className="text-gradient">Started.</span>
            
          </p>
      </div>
    </div>
  )

}
export default GetStarted
