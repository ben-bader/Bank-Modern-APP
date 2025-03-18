import styles from "../style"
import Button from "./Button"
import { card } from "../assets/import"
 

const CardDeal = () => {
  return (
    <section className={`${styles.paddingX} ${styles.paddingY} md:flex felx-col md:flex-row md:flex-1 gap-10`}>
      <div className="">
        <h2 className={`${styles.heading2} md:leading-[78px] py-5`}>Find a better card deal in few easy steps.</h2>
        <p className={`${styles.paragraph} my-3`}>Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau.</p>
        <Button  styles="rounded-[10px]"/>
      </div>
      <div>
        <img src={card} alt="card" />
      </div>
    </section>
  )
}

export default CardDeal
