/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { Component } from "react"
import PropTypes from "prop-types"
import "./../styles/styles.scss"
import Header from "./header/header"
import Footer from "./footer/footer"

class Layout extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isMenuToggle: false
    };
  }

  handleClick() {
    this.setState({isMenuToggle: !this.state.isMenuToggle});
  }

  //usage
  //siteTitle={data.site.siteMetadata.title}
  render() {
    //useStaticQuery is used for fetching static rendered data
    // const data = useStaticQuery(graphql`
    //     query SiteTitleQuery {
    //         site {
    //             siteMetadata {
    //                 title
    //             }
    //         }
    //     }
    // `);
    const children = this.props.children;
    return (
      <>
        <Header onClick={() => this.handleClick()}/>
        <main showmenu={this.state.isMenuToggle.toString()}>{children}</main>
        <Footer/>
      </>
    )
  }
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
}

export default Layout
