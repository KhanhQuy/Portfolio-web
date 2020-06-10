import React from "react"
import { Link } from "gatsby"

import Layout from "../layout/layout";
import HeroBecomeDriver from '../components/becomeADriver/heroBecomeDriver';
import SectionDriver from '../components/becomeADriver/sectionDriver';
import Footer from '../components/becomeADriver/footer';
import Section7 from '../components/becomeADriver/section7';

const becomeADriver = () => (
    <Layout>
        <HeroBecomeDriver></HeroBecomeDriver>
        <SectionDriver></SectionDriver>
        <Section7></Section7>
        <Footer></Footer>
    </Layout>
)

export default becomeADriver

