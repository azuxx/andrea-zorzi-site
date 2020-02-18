import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Fade } from 'react-slideshow-image';

import "./index.scss"

import img1 from '../images/home_1.jpg';
import img2 from '../images/home_2.jpg';
import img3 from '../images/home_3.jpg';


const fadeImages = [
  img1,
  img2,
  img3
];

const fadeProperties = {
  duration: 5000,
  transitionDuration: 500,
  infinite: true,
  indicators: false,
  arrows: false,
  onChange: (oldIndex, newIndex) => {
    console.log(`fade transition from ${oldIndex} to ${newIndex}`);
  }
}

const IndexPage = () => (
  <Layout>
    <SEO title="Andrea Zorzi"/>
    <div className="fade-container">
      <Fade {...fadeProperties}>
        {
          fadeImages.map((each, index) =>
            <div className="fade-container__each-fade" key={index.toString()} style={{ backgroundImage: `url(${each})` }}>

            </div>
          )
        }
      </Fade>
    </div>
  </Layout>
)

export default IndexPage

