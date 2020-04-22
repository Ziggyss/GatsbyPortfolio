import React from "react"
import ProjectsList from "./ProjectsList"
import { useStaticQuery, graphql } from "gatsby"
// don't forget to change line 8 to Project

const getProjects = graphql`
  query {
    projects: allContentfulProject {
      edges {
        node {
          name
          slug
          subtitle
          stack
          website
          github
          contentful_id
          images {
            fluid {
              ...GatsbyContentfulFluid_tracedSVG
            }
          }
        }
      }
    }
  }
`

const Projects = () => {
  const { projects } = useStaticQuery(getProjects)
  return <ProjectsList projects={projects} />
}

export default Projects
