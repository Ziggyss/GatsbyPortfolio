import React from "react"
import { AnchorLink } from "gatsby-plugin-anchor-links";

const AboutLink  = () => (
  <AnchorLink to="/about#about" title="Our team">
    <span>About</span>
  </AnchorLink>
);

export default AboutLink