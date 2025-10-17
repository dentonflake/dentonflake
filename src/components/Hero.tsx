import Image from "next/image"
import styles from "@/styles/hero.module.css"
import BlurText from "./BlurText"

const Hero = () => {

  return (
    <section className={styles.hero}>

      <div className={styles.content}>

        <Image
          className={styles.image}
          src="/images/profile.png"
          alt="Memoji of Denton Flake"
          width={420}
          height={420}
          priority
        ></Image>

        <div className={styles.social}>
          <p className={styles.subtitle}>Software Developer</p>

          <h1 className={styles.title}>
            Hello! I&apos;m
            <p className={styles.name}>Denton Flake</p>
          </h1>

        </div>

      </div>

    </section>
  )
}

export default Hero