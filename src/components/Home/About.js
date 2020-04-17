import React from "react"
import StyledTitle from "../StyledTitle"
import styles from "../../css/about.module.css"
import img from "../../images/mowl.jpeg"

const About = () => {
  return (
    <section className={styles.about}>
      <StyledTitle title="about" subtitle="me" />
      <div className={styles.aboutCenter}>
        <article className={styles.aboutImg}>
          <div className={styles.imgContainer}>
            <img src={img} alt="about me"></img>
          </div>
        </article>
        <article className={styles.aboutInfo}>
          <h4>blahblah blah</h4>
          <p>
            bladn gaoinasdoifna asldkf aslkfm asdfj aslkfn asldkf asdkf asldkfj
            alskdjf aslkdjf.
          </p>
          <p>
            bladn gaoinasdoifna asldkf aslkfm asdfj aslkfn asldkf asdkf asldkfj
            alskdjf aslkdjf.
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
