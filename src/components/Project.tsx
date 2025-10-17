import styles from '@/styles/project.module.css'
import Image from 'next/image'

type Props = {
  title: string
  description: string
  thumbnail: {
    url: string
    width: number
    height: number
  },
  link: string
}

const Project = ({ title, description, thumbnail, link }: Props) => {

  return (
    <a target='_blank' href={link} className={styles.link}>
      <div className={styles.project}>
        <Image
          src={thumbnail.url}
          alt={`Thumbanil of the ${title} project`}
          width={thumbnail.width}
          height={thumbnail.height}
          className={styles.thumbnail}
          priority
        ></Image>
        <div className={styles.body}>
          <h3 className={styles.title}>{title}</h3>
          <p className={styles.description}>{description}</p>
        </div>
      </div>
    </a>
  )

}

export default Project