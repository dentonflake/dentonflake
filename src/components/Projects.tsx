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
    title: 'Lacy Coombs Hairstylist',
    description: 'This website features Lacy Flake and her business.',
    thumbnail: {
      url: '/images/lacycoombshairstylist.png',
      width: 3018,
      height: 1562
    },
    link: 'https://lacycoombsharisttylist.com'
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
  },
  {
    title: 'The Divine Gift of Forgiveness',
    description: 'This website that features the The Divine Gift of Forgiveness.',
    thumbnail: {
      url: '/images/divine-gift-of-forgiveness.png',
      width: 3018,
      height: 1562
    },
    link: 'https://school.dentonflake.com/institute'
  },
  {
    title: 'Tactical Options Trading',
    description: 'This website features Kirk Flake and his business.',
    thumbnail: {
      url: '/images/tacticaloptionstrading.png',
      width: 3018,
      height: 1562
    },
    link: 'https://dentonflake.github.io/tacticaloptionstrading'
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