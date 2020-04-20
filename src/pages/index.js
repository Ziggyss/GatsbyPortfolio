import React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout"
import Banner from "../components/Banner"
import About from "../components/Home/About"
import Skills from "../components/Home/Skills"
import StyledHero from "../components/StyledHero"
import { graphql } from "gatsby"
export default ({ data }) => (
  <Layout>
    <StyledHero home="true" img={data.defaultHero.childImageSharp.fluid}>
      <Banner
        title="Hello, I'm Lisa."
        info="I'm a web developer from Belfast with a passion for creativity, design and nature. 
           Welcome to my site. "
      >
        <Link to="/projects" className="btn-white">
          Explore Projects
        </Link>
      </Banner>
    </StyledHero>
    <About />
    <Skills />
  </Layout>
)

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
