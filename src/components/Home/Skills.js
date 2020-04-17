import React from "react"
import StyledTitle from "../StyledTitle"
import styles from "../../css/skills.module.css"
import skills from "../../constants/skills"

const Skills = () => {
  return (
    <section classNamer={styles.skills}>
      <StyledTitle title="My" subtitle="skills" />
      <div className={styles.center}>
        {skills.map((item, index) => {
          return (
            <article key={index} className={styles.skill}>
              <span>{item.icon}</span>
              <h4>{item.title}</h4>
              <p>{item.text}</p>
            </article>
          )
        })}
      </div>
    </section>
  )
}

export default Skills
