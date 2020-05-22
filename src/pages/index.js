import React from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import Layout from "../components/Layout"
import Banner from "../components/Banner"
import About from "../components/Home/About"
import Skills from "../components/Home/Skills"
import StyledHero from "../components/StyledHero"
import { graphql } from "gatsby"
import styled from "styled-components"
import SEO from "../components/SEO"
export default ({ data }) => (
  <Layout>
    <SEO title="Home"  />
    <StyledHero home="true" img={data.defaultHero.childImageSharp.fluid}>
      <Banner
        title="Hello,"
        subtitle="I'm "
        name="Lisa."
        info="I'm a web developer from Belfast with a passion for creativity, design and nature. Welcome to my site. "
      >
        <StyledButton fade to="/projects" className="btn-white">
          Explore Projects
        </StyledButton>
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
const StyledButton = styled(AniLink)`
  margin: 0 1rem;
`
