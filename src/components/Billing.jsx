import { bill,apple,google } from "../assets/import"
import styles from "../style"
const Billing = () => {
  return (
    <section className={`${styles.paddingX} flex md:flex-row flex-col gap-4`} id="product">
      
         <img src={bill} alt="bill" className="object-contain w-[500px] "/>
      
      <div className="flex flex-col object-contain">
        <h2 className={styles.heading2}>Easily control your billing & invoicing.</h2>
        <p className={`${styles.paragraph} mt-5`}>Elit enim sed massa etiam. Mauris eu 
          adipiscing <br /> ultrices ametodio aenean neque. 
          Fusce ipsum orci rhoncus aliporttitor  integer 
          platea placerat.</p>
          <div className="flex gap-5 mt-10 w-fit p-0">
            <img src={apple} alt="apple" className="cursor-pointer" />
            <img src={google} alt="google" className="cursor-pointer"/>
          </div>
      </div>
     
     
    </section>
  )
}

export default Billing
