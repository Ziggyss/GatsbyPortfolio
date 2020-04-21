import React from "react"
import StyledTitle from "../StyledTitle"
import styles from "../../css/about.module.css"
// import img from "../../images/mowl.jpeg"
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
            <h4>blahblah blah</h4>
            <p>
              bladn gaoinasdoifna asldkf aslkfm asdfj aslkfn asldkf asdkf
              asldkfj alskdjf aslkdjf.
            </p>
            <p>
              bladn gaoinasdoifna asldkf aslkfm asdfj aslkfn asldkf asdkf
              asldkfj alskdjf aslkdjf.
            </p>
            <button type="button" className="btn-primary">
              read more
            </button>
          </article>
        </div>
      </section>
    
  )
}

export default About
