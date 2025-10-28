'use client'

import styles from '@/styles/about.module.css'
import { useState, useEffect } from 'react';

const About = () => {

  const [count, setCount] = useState<any | null>(null);

  useEffect(() => {
    fetch("https://api.github.com/users/dentonflake")
      .then((res) => res.json())
      .then((data) => setCount(data))
      .catch(() => setCount(null));
  }, []);

  console.log(count)

  return (
    <section className={styles.about}>

      <div className={styles.content}>
        <h2 className={styles.title}>Me</h2>
        <p>I am Denton Flake. Coding has not only started to shape my career but it has also helped me discover my passion for helping people.</p>
        <p>Over the last 8 years, I have developed many professional and personal projects. Each project has honed my skills in problem-solving, team work, and innovation, enabling me to turn complex challenges into simple, impactful solutions that benefit others.</p>
      </div>

    </section>
  )
}

export default About