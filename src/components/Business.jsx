import { features } from "."
import styles,{layout} from "../style"
import Button from './Button'
const Business = () => {
  return (
    <section id="features" className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>You do the business, <br className="sm:block hidden"/> we’ll handle the money.</h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>With the right credit card, you can improve your 
          financial life by building credit, 
          earning rewards and saving money. But 
          with hundreds of credit cards on the market.</p>
          <Button styles="mt-10 rounded-xl"/>
      </div>
      <div className={`${layout.sectionImg} flex-col `}>
        {features.map((feature, index) => (
          <div key={index} className={`flex flex-col md:flex-row gap-8  items-center mt-10 p-5 rounded-[30px] ${
            index == 1 ? 'bg-black-gradient':'bg-transparent'
          }`}>
            <div className=" md:bg-cyan-400 bg-transparent md:bg-opacity-10 rounded-full px-6">
            <img src={feature.icon} alt={feature.title} className=" object-contain w-[100px] h-[100px]  "/>
            </div>
            
           <div className="flex flex-col items-center md:items-start">
           <h3 className="text-white text-xl font-semibold">{feature.title}</h3>
           <p className={`${styles.paragraph} mt-1 md:text-start text-center`}>{feature.content}</p>
           </div>
          </div>
        ))}
      </div>


    </section>
  )
}

export default Business
