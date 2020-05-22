import React from "react"
import Layout from "../components/Layout"
import StyledHero from "../components/StyledHero"
import { graphql } from "gatsby"
import SEO from "../components/SEO"

const blog = ({data}) => {
  return (
    
      <Layout>
        <SEO title="Blog" />
        <StyledHero img={data.green.childImageSharp.fluid} />
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

export default blog
