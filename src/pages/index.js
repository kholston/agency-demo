import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { library } from "@fortawesome/fontawesome-svg-core"
import { faHeart, faCode, faGem, fas } from "@fortawesome/free-solid-svg-icons"
import {
  fab,
  faHtml5,
  faJs,
  faReact,
  faCss3,
  faGalacticSenate,
} from "@fortawesome/free-brands-svg-icons"
import { Link } from "gatsby"
import Layout from "../components/Layout"
import {
  Banner,
  TextWrapper,
  MoreText,
  SectionTwo,
  SectionThree,
  FlexBoxIndex,
  GenericPara,
  GenericH2,
  SectionFour,
  FormFive,
} from "../styles/IndexStyles"

library.add(faHeart, faCode, faGem, fas, fab)

const Index = () => {
  return (
    <Layout>
      <div style={{ position: "relative" }}>
        <Banner></Banner>
        <TextWrapper>
          <div>
            <GenericH2>YourWebDev</GenericH2>
            <GenericPara>
              One Stop for
              <br /> All your development
              <br /> And design needs
            </GenericPara>
            <Link to="/works">Our Works</Link>
          </div>
        </TextWrapper>
        <MoreText>Learn More</MoreText>
      </div>
      <SectionTwo>
        <div>
          <GenericH2>Our Passion</GenericH2>
          <GenericPara>
            Optimism is an occupational hazard of programming: feedback is the
            treatment.
          </GenericPara>
          <h5>- Kent Beck</h5>
          <span>
            <FontAwesomeIcon
              icon="gem"
              color="#04F5C6"
              size="6x"
              style={{ marginRight: "3rem" }}
              fixedWidth
              border
            />
            <FontAwesomeIcon
              icon="heart"
              color="#00F0FF"
              size="6x"
              style={{ marginRight: "3rem" }}
              fixedWidth
              border
            />
            <FontAwesomeIcon
              icon="code"
              color="#73DBFD"
              size="6x"
              fixedWidth
              border
            />
          </span>
        </div>
      </SectionTwo>
      <SectionThree>
        <FlexBoxIndex>
          <div className="image">
            <img src="pic01.jpg" alt="pic01" />
          </div>
          <div className="text__section3">
            <GenericH2 none>Website Development</GenericH2>
            <GenericPara lessSize lessSpacing>
              We hand code beautiful websites using HTML5, CSS3, and JS because
              they are fully customizable and efficient. No WordPress websites
              here.
            </GenericPara>
          </div>
        </FlexBoxIndex>
        <FlexBoxIndex inverse>
          <div className="text__section3">
            <GenericH2 none>Website Design</GenericH2>
            <GenericPara lessSize lessSpacing>
              We have talented and experienced Web Designers, who can design
              beautiful and usuable websites.
            </GenericPara>
          </div>
          <div className="image">
            <img src="pic02.jpg" alt="pic02" />
          </div>
        </FlexBoxIndex>
        <FlexBoxIndex>
          <div className="image">
            <img src="pic03.jpg" alt="pic03" />
          </div>
          <div className="text__section3">
            <GenericH2 none>Mobile App Development</GenericH2>
            <GenericPara lessSize lessSpacing>
              We develop Mobile apps in React Native, which can be used on both
              iOS and Android.
            </GenericPara>
          </div>
        </FlexBoxIndex>
      </SectionThree>
      <SectionFour>
        <div className="title__section4">Our Technologies</div>
        <GenericPara lessSize grey>
          We use modern and latest technologies which helps our clients
          <br />
          as they are highly scalable and maintainable.
        </GenericPara>
        <div className="grid__section4">
          <div className="item1" style={{ backgroundColor: "#4d508e" }}>
            <div className="flex__section4">
              <FontAwesomeIcon
                icon={faReact}
                color="#00FFCC"
                size="3x"
                fixedWidth
              />
              <GenericH2 none>React</GenericH2>
            </div>
            <GenericPara lessSize lessSpacing grey>
              Modern Javascript framework which will make your web application
              extremely fast and, at the same time, handy for every user.
            </GenericPara>
          </div>
          <div className="item2" style={{ backgroundColor: "#4A4D89" }}>
            <div className="flex__section4">
              <FontAwesomeIcon
                icon="code"
                color="#00FFCC"
                size="2x"
                fixedWidth
              />
              <GenericH2 none>React Native</GenericH2>
            </div>
            <GenericPara lessSize lessSpacing grey>
              Cross-platform for mobile app development based on Javascript,
              whose resulting code is compilde to Android and iOS.
            </GenericPara>
          </div>
          <div className="item3" style={{ backgroundColor: "#484A83" }}>
            <div className="flex__section4">
              <FontAwesomeIcon
                icon={faJs}
                color="#00FFCC"
                size="3x"
                fixedWidth
              />
              <GenericH2 none>JavaScript</GenericH2>
            </div>
            <GenericPara lessSize lessSpacing grey>
              JavaScript is the language of the web. It is used for Web
              development, mobile development and app development and everything
              else.
            </GenericPara>
          </div>
          <div className="item4" style={{ backgroundColor: "#45477E" }}>
            <div className="flex__section4">
              <FontAwesomeIcon
                icon={faHtml5}
                color="#00FFCC"
                size="3x"
                fixedWidth
              />
              <GenericH2 none>HTML5</GenericH2>
            </div>
            <GenericPara lessSize lessSpacing grey>
              HTML, a standardized system for tagging text files to achieve
              font, color, graphic, and hyperlink effects on World Wide Web
              pages.
            </GenericPara>
          </div>
          <div className="item5" style={{ backgroundColor: "#424479" }}>
            <div className="flex__section4">
              <FontAwesomeIcon
                icon={faCss3}
                color="#00FFCC"
                size="3x"
                fixedWidth
              />
              <GenericH2 none>CSS3</GenericH2>
            </div>
            <GenericPara lessSize lessSpacing grey>
              CSS is a style sheet language used for describing the presentation
              of a document written in a markup language like HTML.
            </GenericPara>
          </div>
          <div className="item6" style={{ backgroundColor: "#3F4174" }}>
            <div className="flex__section4">
              <FontAwesomeIcon
                icon={faGalacticSenate}
                color="#00FFCC"
                size="3x"
                fixedWidth
              />
              <GenericH2 none>Gatsby</GenericH2>
            </div>
            <GenericPara lessSize lessSpacing grey>
              Gatsby is a free and open source framework based on React that
              helps developers build blazing fast websites and apps
            </GenericPara>
          </div>
        </div>
      </SectionFour>
      <section style={{ position: "relative" }}>
        <Banner parallax></Banner>
        <FormFive>
          <form name="Contact Form" method="post" data-netlify="true">
            <input type="hidden" name="form-name" value="Contact Form" />
            <div className="fields">
              <GenericH2 none>Contact Us</GenericH2>
              <input type="text" name="name" id="name" placeholder="Name" />
              <input type="email" name="email" id="email" placeholder="Email" />
              <textarea name="message" id="message" rows="7"></textarea>
              <div className="actions">
                <input
                  type="submit"
                  value="Send Message"
                  className="button__primary"
                />
              </div>
            </div>
          </form>
        </FormFive>
      </section>
    </Layout>
  )
}

export default Index
