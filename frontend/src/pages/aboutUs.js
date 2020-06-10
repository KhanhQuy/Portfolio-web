import React from "react"
import { Link } from "gatsby"

import Layout from "../layout/layout";
import HeroAboutUs from '../components/aboutUs/heroAboutUs';
import SectionAboutUs from '../components/aboutUs/sectionAboutUs';
import FooterAboutUs from '../components/aboutUs/footerAboutUs';
import Section7 from '../components/aboutUs/section7';

const becomeADriver = () => (
    <Layout>
        <HeroAboutUs></HeroAboutUs>
        <SectionAboutUs></SectionAboutUs>
        <Section7></Section7>
        <FooterAboutUs></FooterAboutUs>
    </Layout>
)

export default becomeADriver

