import styles from '@/styles/contact.module.css'
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Me'
};

const Contact = () => {

  return (
    <section className={styles.contact}>
      <div className={styles.content}>
        <h1 className={styles.title}>Contact <span>Me</span></h1>
      </div>
    </section>
  )
}

export default Contact