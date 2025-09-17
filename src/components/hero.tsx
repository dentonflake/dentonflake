import Image from "next/image"
import Link from "next/link"
import styles from "@/styles/hero.module.css"

const links = [
  { name: "GitHub", href: "https://github.com/dentonflake", icon: "/images/icon-github.png" },
  { name: "LinkedIn", href: "https://www.linkedin.com/in/dentonflake/", icon: "/images/icon-github.png" },
  { name: "Instagram", href: "https://www.instagram.com/dentonflake/", icon: "/images/icon-github.png" },
  { name: "Facebook", href: "https://www.facebook.com/dentonflake/", icon: "/images/icon-github.png" }
]

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
        <h1 className={styles.title}>Hello! I'm <span className={styles.name}>Denton Flake</span></h1>
      </div>

    </section>
  )
}

export default Hero