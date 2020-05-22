import React from "react"
import Layout from "../components/Layout"
import StyledHero from "../components/StyledHero"
import Projects from "../components/Projects/Projects"
import { graphql } from "gatsby"
import SEO from "../components/SEO"

const projects = props => {
  return (
    <Layout>
      <SEO title="Projects" />
      <StyledHero img={props.data.green.childImageSharp.fluid} />
      <Projects />
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
