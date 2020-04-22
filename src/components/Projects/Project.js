import React from "react"
import Image from "gatsby-image"
import styles from "../../css/tour.module.css"
// import AniLink from "gatsby-plugin-transition-link"
import { FaLink, FaGithub } from "react-icons/fa"

const Project = ({ project }) => {
  const { name, github, images, subtitle, stack, website } = project
  let mainImage = images[0].fluid

  return (
    <article className={styles.tour}>
      <div className={styles.imgContainer}>
        <Image fluid={mainImage} className={styles.img} alt="single project" />

        <a
          className={styles.link}
          href={website}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLink />
        </a>

        {/* Don't forget to use slug if creating a detailed project page */}
      </div>
      <div className={styles.footer}>
        <h3>{name}</h3>
        <div className={styles.info}>
          <h4 className={styles.country}>{subtitle}</h4>
          <div className={styles.details}>
            <h6>{stack}</h6>
            {/* <h6>{website}</h6> */}
          </div>
          <div>
            {/* <a
              className={styles.lowerLink}
              href={website}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLink />
            </a> */}
            <a
              className={styles.lowerLink}
              href={github}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub />
            </a>
          </div>
        </div>
      </div>
    </article>
  )
}

export default Project
