import React from "react"
import { Link } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faTwitter,
  faFacebook,
  faInstagram,
  faLinkedin,
  faYoutube,
  faPinterest,
} from "@fortawesome/free-brands-svg-icons"
import { Header, Footer, GenericH2, GenericPara } from "../styles/IndexStyles"

function Layout({ children }) {
  return (
    <>
      <Header>
        <GenericH2 none>
          <Link to="/" style={{ color: "#fff" }}>
            YourWebDev
          </Link>
        </GenericH2>
        <div className="menu__items">
          <Link to="/works">
            <GenericPara lessSize lessSpacing grey>
              Works
            </GenericPara>
          </Link>
          <Link to="/about">
            <GenericPara lessSize lessSpacing grey>
              About
            </GenericPara>
          </Link>
        </div>
      </Header>
      {children}
      <Footer>
        <div className="icons">
          <FontAwesomeIcon icon={faTwitter} size="2x" fixedWidth />
          <FontAwesomeIcon icon={faFacebook} size="2x" fixedWidth />
          <FontAwesomeIcon icon={faInstagram} size="2x" fixedWidth />
          <FontAwesomeIcon icon={faLinkedin} size="2x" fixedWidth />
          <FontAwesomeIcon icon={faYoutube} size="2x" fixedWidth />
          <FontAwesomeIcon icon={faPinterest} size="2x" fixedWidth />
        </div>
        <div className="copyright">
          <span>&copy; 2022, YourWebDev | </span>
          <span>Made with ♥️ and ☕️</span>
        </div>
      </Footer>
    </>
  )
}

export default Layout
