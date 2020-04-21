import React from "react"
import StyledTitle from "../StyledTitle"
import styles from "../../css/contact.module.css"

const Contact = () => {
  return (
    <section className={styles.contact}>
      <StyledTitle title="contact" subtitle="me" />
      <div className={styles.center}>
        <form  action="https://formspree.io/lisa-wilton@protonmail.com"
  method="POST" className={styles.form}>
          <div>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              id="name"
              className={styles.formControl}
              placeholder="Joe Bloggs"
            ></input>
          </div>
          <div>
          <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              className={styles.formControl}
              placeholder="email@email.com"
            ></input>
          </div>
          <div>
          <label htmlFor="message">Message</label>
            <textarea
              name="message"
              id="message"
              rows="10"
              className={styles.formControl}
              placeholder="Hello..."
            />
          </div>
          <div>
            <input type="submit" value="submit" className={styles.submit} />
          </div>
        </form>
      </div>
    </section>
  )
}

export default Contact
