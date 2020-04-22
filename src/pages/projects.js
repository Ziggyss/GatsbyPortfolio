import React from "react"
import Layout from "../components/Layout"
import StyledHero from "../components/StyledHero"
import { graphql } from "gatsby"

const projects = props => {
  return (
    <Layout>
      <StyledHero img={props.data.green.childImageSharp.fluid} />
      Hello from the projects page...
    </Layout>
  )
}

export const query = graphql`
  query {
    green: file(relativePath: { eq: "green.jpeg" }) {
      childImageSharp {
        fluid(maxWidth: 4160, quality: 90) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`

export default projects
