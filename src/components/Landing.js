import { graphql, useStaticQuery } from 'gatsby'
import PropTypes from 'prop-types'
import { StaticImage } from "gatsby-plugin-image"
import React from 'react'
import { Typography, Box } from '@material-ui/core'
// import { Facebook, Twitter, Instagram, LinkedIn } from '@material-ui/icons';
import BackgroundImage from 'gatsby-background-image'
import "./layout.css"

const LandingPage = ({title, description, facebookLink, twitterLink, instagramLink, linkedInLink }) => {

  const data = useStaticQuery(
    graphql`
      query {
        desktop: file(relativePath: { eq: "landing-bg.jpg" }) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 1920) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `
  )

  // Set ImageData.
  const imageData = data.desktop.childImageSharp.fluid

  return (
   
    <BackgroundImage
      Tag="section"
      className="background"
      fluid={imageData}
    >
      <div className="backgroundShadow">
      <Box className="content">   
        <Box className="logoWrapper">
          <StaticImage src="../img/dannyboy-logo.png" alt="Danny Boy Golf Links Tour Logo" layout="fixed" height={160} className="logo" placeholder="blurred" />
          <Typography className="title" variant="h2" component="h2">{title}</Typography>
        </Box>

        {(facebookLink || twitterLink || instagramLink || linkedInLink) && (
          <Box className="socialWrapper">
            <Typography className="socialHeading" variant="h6">{description} className={'large'}</Typography>
            <Box className="socialIconsWrapper">
              {/* {facebookLink && 
                <Link to={facebookLink} target="_blank">
                  <IconButton aria-label="Facebook" className="socialButton">
                    <Facebook className="socialIcon" />
                  </IconButton>
                </Link>
              }
              {twitterLink && 
                <Link to={twitterLink} target="_blank">
                  <IconButton aria-label="Twitter" className="socialButton">
                    <Twitter className="socialIcon" />
                  </IconButton>
                </Link>
              }
              {instagramLink &&
                <Link to={instagramLink} target="_blank">
                  <IconButton aria-label="Instagram" className="socialButton">
                    <Instagram className="socialIcon" />
                  </IconButton>
                </Link>
              }
              {linkedInLink &&
                <Link to={linkedInLink} target="_blank">
                  <IconButton aria-label="LinkedIn" className="socialButton">
                    <LinkedIn className="socialIcon"/>
                  </IconButton>
                </Link>
              } */} 
            </Box>
          </Box>
        )}
      </Box> 
      <Box className="footerContainer">

        <StaticImage src="../img/made-for-golf-logo.png" alt="Made For Golf Logo" layout="fixed" height={120} className="footerLogo" placeholder="blurred" />
      </Box>
      </div>
    </BackgroundImage>
  )
}

LandingPage.propTypes = {
  title: PropTypes.string,
}

LandingPage.defaultProps = {
  title: ``,
}

export default LandingPage