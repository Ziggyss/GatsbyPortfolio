import React from "react"
import Layout from "../components/Layout"
import StyledHero from "../components/StyledHero"
import { graphql } from "gatsby"

const projects = props => {
  return (
    <Layout>
      <StyledHero img={props.data.defaultHero.childImageSharp.fluid} />
      Hello from the projects page...
    </Layout>
  )
}

export const query = graphql`
  query {
    defaultHero: file(relativePath: { eq: "Hero.jpeg" }) {
      childImageSharp {
        fluid(maxWidth: 4160, quality: 90) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`

export default projects
