import styles from '@/styles/skill.module.css'
import Image from 'next/image'

type Props = {
  name: string
  icon: {
    src: string
    width: number
    height: number
  }
}

const Skill = ({ name, icon }: Props) => {

  return (
    <div className={styles.skill}>
      <Image
        src={icon.src}
        alt={`Icon of ${name}`}
        width={icon.width}
        height={icon.height}
        className={styles.icon}
      ></Image>
      <p className={styles.name}>{name}</p>
    </div>
  )

}

export default Skill