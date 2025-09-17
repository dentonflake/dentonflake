import Image from "next/image"
import Link from "next/link"
import styles from "@/styles/hero.module.css"

const links = [
  { name: "GitHub", href: "https://github.com/dentonflake", icon: "" },
  { name: "LinkedIn", href: "https://www.linkedin.com/in/dentonflake/", icon: "" },
  { name: "Instagram", href: "https://www.instagram.com/dentonflake/", icon: "" },
  { name: "Facebook", href: "https://www.facebook.com/dentonflake/", icon: "" }
]

const Hero = () => {

  return (
    <section>

      <Image
        src="/images/profile.png"
        alt="Memoji of Denton Flake"
        width={420}
        height={420}
        priority
      ></Image>

      <div>
        <p>Software Developer</p>
        <h1>Hello! I'm <span>Denton Flake</span></h1>
        <nav>
          {
            links.map(link => (
              <Link
                key={link.name}
                className={styles.link}
                href={link.href}
              >
                <Image
                  src=""
                  alt={`${link.name} Icon`}
                  width={0}
                  height={0}
                ></Image>
              </Link>
            ))
          }
        </nav>
      </div>

    </section>
  )
}

export default Hero