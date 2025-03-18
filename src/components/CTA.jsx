import styles from "../style"
import Button from "./Button"
 

const CTA = () => {
  return (
    <div className={` ${styles.paddingY}`}>
      <div className="bg-black-gradient-2 flex flex-1 md:flex-row flex-col rounded-xl gap-10 md:p-20 p-8 items-center justify-between">
        <div className="flex flex-col w-fit">
          <h2 className={`${styles.heading2} sm:leading-[66.8px] leading-normal `}>Let’s try our service now!</h2>
          <p className={`${styles.paragraph} mt-2`}>Everything you need to accept card payments <br /> and grow your business anywhere on the planet.</p>
        </div>
        <Button styles="rounded-[10px]"/>
      </div>
      
    </div>
  )
}

export default CTA
