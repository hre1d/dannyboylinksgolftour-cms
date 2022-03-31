import { graphql, useStaticQuery } from 'gatsby'
import PropTypes from 'prop-types'
import { StaticImage } from "gatsby-plugin-image"
import React, {useState} from 'react'
import { Typography, Box, Button } from '@material-ui/core'
// import { Facebook, Twitter, Instagram, LinkedIn } from '@material-ui/icons';
import BackgroundImage from 'gatsby-background-image'
import "./layout.css"
import { navigate } from "gatsby-link";

function encode(data) {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
}

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

  const [email, setEmail] = useState([]);

  const handleChange = (e) => {
    console.log(e);
    setEmail({ [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": form.getAttribute("name"),
        ...email,
      }),
    })
      .then(() => navigate(form.getAttribute("action")))
      .catch((error) => alert(error));
  };

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
          <Typography variant="body1" className="bodyText" style={{marginTop:"12px"}}>
            Danny Boy Links Golf Tour is an escorted golf tour and vacation along the north coast of Ireland for groups of 8 -12 golfers on a selection of dates in 2023.
          </Typography>
          <Typography variant="body1" className="bodyText" style={{marginTop:"12px"}}>
            Itinerary, dates and prices to follow.
          </Typography>
          <form
                name="contact"
                method="post"
                action="/contact/thanks/"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
                onSubmit={handleSubmit}
              >
                {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
                <input type="hidden" name="form-name" value="contact" />
                <div hidden>
                  <label>
                    Don’t fill this out:{" "}
                    <input name="bot-field" onChange={handleChange} />
                  </label>
                </div>

                <div className="field">
                  <label className="label" htmlFor={"email"}>
                    Email
                  </label>
                  <div className="control">
                    <input
                      className="input"
                      type={"email"}
                      name={"email"}
                      onChange={handleChange}
                      id={"email"}
                      required={true}
                    />
                  </div>
                </div>
                <div className="field">
                  <Button type="submit">
                    Keep Me Updated
                  </Button>
                </div>
              </form>
          
        </Box>

        {(facebookLink || twitterLink || instagramLink || linkedInLink) && (
          <Box className="socialWrapper">
            <Typography className="socialHeading" variant="h6">{description}</Typography>
            
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