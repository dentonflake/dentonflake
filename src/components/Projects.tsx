import styles from '@/styles/projects.module.css'
import Project from './Project'

const websites = [
  {
    title: 'Flake Family',
    description: 'This is a cool website the features each member of my family and our recent activity.',
    thumbnail: {
      url: '/images/flake-family.png',
      width: 3018,
      height: 1562
    },
    link: 'https://dentonflake.github.io/wdd231/final/'
  },
  {
    title: 'Hawkins Chamber of Commerce',
    description: 'This is a cool website the features a fictitious town in Hawkins, IN.',
    thumbnail: {
      url: '/images/hawkins-chamber-of-commerce.png',
      width: 3018,
      height: 1562
    },
    link: 'https://dentonflake.github.io/wdd231/chamber/'
  },
  {
    title: 'Book Nook',
    description: 'This website uses Google\'s Book API to fetch books related to the users search.',
    thumbnail: {
      url: '/images/book-nook.png',
      width: 3018,
      height: 1562
    },
    link: 'https://dentonflake.github.io/book-nook'
  }
]

const Projects = () => {

  const projects = websites.map(({ title, description, thumbnail, link }) => (
    <Project
      key={title}
      title={title}
      description={description}
      thumbnail={thumbnail}
      link={link}
    ></Project>
  ))

  return (
    <div className={styles.projects}>
      {projects}
    </div>
  )

}

export default Projects