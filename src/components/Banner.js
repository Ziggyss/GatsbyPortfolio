import React from "react"
import styles from "../css/banner.module.css"

const Banner = ({ title, info, subtitle, children,name }) => {
  return (
    <div className={styles.banner}>
      <h1>{title}</h1>
      <h1>{subtitle}<span>{name}</span></h1>
      <p>{info}</p>
      {children}
    </div>
  )
}

export default Banner
