import React from "react"
import StyledTitle from "../StyledTitle"
import styles from "../../css/about.module.css"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const getAbout = graphql`
  query aboutImage {
    aboutImage: file(relativePath: { eq: "mowl.jpeg" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`

const About = () => {
  const { aboutImage } = useStaticQuery(getAbout)
  return (
    <section className={styles.about}>
      <StyledTitle title="about" subtitle="me" id="about" />
      <div className={styles.aboutCenter}>
        <article className={styles.aboutImg}>
          <div className={styles.imgContainer}>
            <Img fluid={aboutImage.childImageSharp.fluid} alt="Profile pic" />
          </div>
        </article>
        <article className={styles.aboutInfo}>
          <h4>Who Am I?</h4>
          <p>
            I'm a creative, full stack web developer with a love of nature, animals, photography and design. I am most passionate about creating beautiful web applications that can solve some of life's problems in an earth-friendly, sustainable way.
          </p>
          <p>
           I recently completed a 10-month, fully remote course in full stack web development and computer science with <a href="www.lambdaschool.com">Lambda School,</a> learning a variety of new skills and technologies, including Javascript, React, NodeJs and PostgreSQL.
          </p>
          <p>In my spare time I'm a gamer, a gardener, a mother, a writer, a photographer and a multiple pet owner. I've also been known to make the odd person laugh.</p>
          <AniLink to="/contact" type="button" className="btn-primary">
            Contact me
          </AniLink>
        </article>
      </div>
    </section>
  )
}

export default About
