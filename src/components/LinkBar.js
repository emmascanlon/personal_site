import React from "react"
import Link from "react-router-dom"

class LinkBar extends React.Component {
  render() {
    return (
      <>
      <a href="https://www.linkedin.com/in/emmascanlon/" target="_blank">
      <img src="https://www.pinclipart.com/picdir/middle/55-557142_banner-black-and-white-download-linkedin-svg-instagram.png" style={{width: "40px", height: "40%"}}/>
      </a>

      <a href="https://github.com/emmascanlon" target="_blank">
      <img src="" style={{width: "40px", height: "40%"}}/>
      </a>
      </>
    )
  }
}

export default LinkBar 