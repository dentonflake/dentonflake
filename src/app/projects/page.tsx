import styles from '@/styles/about.module.css'
import type { Metadata } from 'next';
import Projects from '@/components/Projects';

export const metadata: Metadata = {
  title: 'Projects'
};

const About = () => {

  return (
    <section className={styles.about}>
      <div className={styles.content}>
        <h1 className={styles.title}>My <span>Projects</span></h1>
        <p className={styles.info}>Below are just a few of the many projects I have developed. With their live links and source code.</p>
        <Projects></Projects>
      </div>
    </section>
  )
}

export default About