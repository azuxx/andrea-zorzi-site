import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import PropTypes from "prop-types"

/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `useStaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.dev/gatsby-image
 * - `useStaticQuery`: https://www.gatsbyjs.org/docs/use-static-query/
 */

const Image = ({ imageName }) => {
  const data = useStaticQuery(graphql`
      query($imageName: String!) {
          placeholderImage: file(relativePath: { eq: $imageName }) {
              childImageSharp {
                  fluid(maxWidth: 300) {
                      ...GatsbyImageSharpFluid
                  }
              }
          }
      }
  `)

  return <Img fluid={data.placeholderImage.childImageSharp.fluid}/>
}

Image.propTypes = {
  imageName: PropTypes.string,
}

Image.defaultProps = {
  imageName: ``,
}

export default Image
