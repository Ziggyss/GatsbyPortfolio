import React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout"
import SimpleHero from "../components/SimpleHero"
import Banner from "../components/Banner"
import About from "../components/Home/About"
export default () => (
  <>
    <Layout>
      <SimpleHero>
        <Banner
          title="Hello, I'm Lisa."
          info="I'm a web developer from Belfast with a passion for creativity, design and nature. 
           Welcome to my site. "
        >
          <Link to="/projects" className="btn-white">
            Explore Projects
          </Link>
        </Banner>
      </SimpleHero>
      <About />
    </Layout>
  </>
)
