import styles from '@/styles/skills.module.css'
import Skill from '@/components/Skill'

const data = [
  { key: 1, name: 'HTML', icon: { src: '/images/icon-html.png', width: 48, height: 48 } },
  { key: 2, name: 'CSS', icon: { src: '/images/icon-css.png', width: 48, height: 48 } },
  { key: 3, name: 'SASS', icon: { src: '/images/icon-sass.png', width: 48, height: 48 } },
  { key: 4, name: 'JavaScript', icon: { src: '/images/icon-js.png', width: 48, height: 48 } },
  { key: 5, name: 'TypeScript', icon: { src: '/images/icon-ts.png', width: 48, height: 48 } },
  // { key: 6, name: 'Next.js', icon: { src: '', width: 0, height: 0 } },
  // { key: 7, name: 'React', icon: { src: '', width: 0, height: 0 } },
  { key: 10, name: 'C#', icon: { src: '/images/icon-c.png', width: 48, height: 48 } },
  { key: 13, name: 'Git', icon: { src: '/images/icon-git.png', width: 48, height: 48 } },
  { key: 8, name: 'Node.js', icon: { src: '/images/icon-node.png', width: 48, height: 48 } },
  { key: 9, name: 'Python', icon: { src: '/images/icon-python.png', width: 48, height: 48 } },
  { key: 11, name: 'MySQL', icon: { src: '/images/icon-mysql.png', width: 48, height: 48 } },
  { key: 12, name: 'PostgreSQL', icon: { src: '/images/icon-postgresql.png', width: 48, height: 48 } },
  { key: 14, name: 'GitHub', icon: { src: '/images/icon-github.png', width: 48, height: 48 } },
  { key: 15, name: 'NPM', icon: { src: '/images/icon-npm.png', width: 48, height: 48 } },
  { key: 16, name: 'VS Code', icon: { src: '/images/icon-vscode.png', width: 48, height: 48 } },
]

const Skills = () => {

  const skills = data.map(({ key, name, icon }) => <Skill
    key={key}
    name={name}
    icon={icon}
  />)

  return (
    <section className={styles.skills}>

      <div className={styles.content}>
        <h2 className={styles.title}>Skills</h2>
        <div className={styles.cards}>
          {skills}
        </div>
      </div>

    </section>
  )

}

export default Skills