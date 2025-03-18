import { feedback } from "."
import { quotes } from "../assets/import"
import styles from "../style"


const Testimonials = () => {
  return (
    <section className={styles.paddingX}>
      <div className="md:flex justify-between items-center py-20">
        <h1 className="font-poppins text-5xl text-white font-semibold leading-[72px] py-4">What people are saying about us</h1>
        <p className={styles.paragraph}>Everything you need to accept card payments and grow your business anywhere on the planet.</p>
      </div>
      <div className="flex flex-1 md:flex-row flex-col gap-10 justify-evenly items-center w-full">
        {feedback.map((feed,index)=>(
          <div key={feed.id} className={`flex flex-col  py-10 px-5 justify-between rounded-xl hover:bg-cyan-400 hover:bg-opacity-60 duration-700 gap-10 ${index == 0? 'bg-black-gradient-2 ':''} `}>
            <img src={quotes} alt="quotes" className="w-10 h-7" />
            <p className={`${styles.paragraph} object-contain w-72  h-32`}>{feed.content}</p>
            <div className="flex flex-1 gap-4 items-center">
              <img src={feed.img} alt={feed.name} className="w-10 h-10"/>
              <div className="flex flex-col ">
                <h4 className="font-poppins text-white text-xl">{feed.name}</h4>
                <p className={styles.paragraph}>{feed.title}</p>
              </div>
            </div>
          </div>
        ))}
        
      </div>
    </section>
  )
}

export default Testimonials
