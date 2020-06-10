import React from "react"
import { Link } from "gatsby"


import Layout from "../layout/layout"
import Image from "../components/image"
import Hero from '../components/headerHomepage/hero';
import Section1 from '../components/sectionHomepage/section1';
import Section2 from '../components/sectionHomepage/section2';
import Section3 from '../components/sectionHomepage/section3';
// import Section4 from '../components/sectionHomepage/section4';
// import Section5 from '../components/sectionHomepage/section5';
// import Section6 from '../components/sectionHomepage/section6';
import Section7 from '../components/sectionHomepage/section7';
import Footer from '../components/footerHomepage/footer';


const IndexPage = () => (
  <Layout>
      <Hero></Hero>
      <Section1/>
      <Section2/>
      <Section3/>
      {/* <Section4/>
      <Section5/>
      <Section6/>*/}
      <Section7/> 
      <Footer/>
  </Layout>
)

export default IndexPage