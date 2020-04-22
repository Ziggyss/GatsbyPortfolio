import React, { Component } from "react"
import styles from "../../css/items.module.css"
import Project from "./Project"
import StyledTitle from "../StyledTitle"

export default class ProjectsList extends Component {
  state = {
    projects: [],
    sortedProjects: [],
  }

  componentDidMount() {
    this.setState({
      projects: this.props.projects.edges,
      sortedProjects: this.props.projects.edges,
    })
  }

  render() {
    return (
      <section className={styles.tours}>
        <StyledTitle title="My" subtitle="Projects" />
        <div className={styles.center}>
          {this.state.sortedProjects.map(({ node }) => {
            return <Project key={node.contentful_id} project={node} />
          })}
        </div>
      </section>
    )
  }
}
