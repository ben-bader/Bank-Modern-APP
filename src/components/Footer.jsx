import { footerLinks, socialMedia } from "."
import { logo } from "../assets/import"
import styles from "../style"

 

const Footer = () => {
  return (
    <footer className={`${styles.paddingX} ${styles.paddingY}`}>
      <div className="flex flex-col">
          <div className="flex fklex-1 md:flex-row flex-col gap-20">
              <div className="flex flex-col gap-10">
              <img src={logo} alt="logo" className="w-64 h-20"/>
              <p className={styles.paragraph}>A new way to make the payments <br /> easy, reliable and secure.</p>
              </div>
              <div className="flex flex-1 justify-evenly flex-col md:flex-row ">
                  {footerLinks.map((link)=>(
                    <div key={link.title} className="flex flex-col justify-start items-start md:px-10 py-4 md:py-0">
                      <h4 className="text-xl font-semibold text-white pb-4 ">{link.title}</h4>
                      <ul >
                        {link.links.map((link)=>(
                          <li key={link.name} className={`${styles.paragraph} py-1 hover:text-cyan-500 duration-500`}><a href={link.link}>{link.name}</a></li>
                        ))}
                      </ul>
                    </div>
                  ))}
              </div>
          </div>
          <hr className="h-[2px] opacity-50 my-4"/>
          <div className="flex flex-1 flex-col md:flex-row justify-between items-center gap-10 pt-4">
            <p className={styles.paragraph}>Copyright &copy; 2025 Bader_in_4k. All Rights Reserved.</p>
            <div className="flex flex-1  justify-center items-center gap-4 md:absolute md:right-36">
              {socialMedia.map((media)=>(
                <img key={media.id} src={media.icon} alt={media.id} href={media.link} className="cursor-pointer "/>
              ))}
            </div>
          </div>
      </div>
    </footer>
  )
}

export default Footer
