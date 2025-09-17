import Image from "next/image"
import styles from "@/styles/hero.module.css"

const Hero = () => {

  return (
    <section className={styles.hero}>

      <Image
        className={styles.image}
        src="/images/profile.png"
        alt="Memoji of Denton Flake"
        width={300}
        height={300}
        priority
      ></Image>

      <div className={styles.content}>
        <h1 className={styles.title}>Hello! I&apos;m <span className={styles.name}>Denton Flake</span></h1>
      </div>

    </section>
  )
}

export default Hero