import React from "react";
import About from "../about/About";
import LatestPortfolio from "../latestportfolio/LatestPortfolio";
import Rating from "../rating/Rating";
import Service from "../service/Service";
import Footer from "../footer/Fotter";
import "./style.css";
const Home = () => {
  return (
    <div id="homePage">
      <div className="content ">
        <div className="quickIntro">
          <span className="heading">
            Lorem ipsum <br />
            dolor consae,powcjw
          </span>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem amet
            ullam error alias possimus temporibus odio optio ex ut quos
            asperiores sunt, necessitatibus neque dolore tempore perferendis
            dolorum odit ipsa.
          </p>
          <div className="btn_ltsk">
            <span>let's talk</span>
            <span className="material-symbols-outlined arrowbtn ">
              arrow_forward
            </span>
          </div>
        </div>
      </div>
      <div className="body_image">
        <div className="img_bx_bd">
          <img
            src="https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="home"
          />
        </div>
      </div>
      <div className="publicProfiles">
        <div className="icon_box">
          <img
            src="https://cdn.worldvectorlogo.com/logos/linkedin-icon-1.svg"
            height={"100%"}
            width={"100%"}
            alt=""
          />
        </div>
        <div className="icon_box">
          <img
            src="https://cdn.worldvectorlogo.com/logos/medium-4.svg"
            height={"100%"}
            width={"100%"}
            alt=""
          />
        </div>
        <div className="icon_box">
          <img
            src="https://cdn.worldvectorlogo.com/logos/github-icon-1.svg"
            height={"100%"}
            width={"100%"}
            alt=""
          />
        </div>
        <div className="icon_box">
          <img
            src="https://cdn.worldvectorlogo.com/logos/instagram-glyph-1.svg"
            height={"100%"}
            width={"100%"}
            alt=""
          />
        </div>
      </div>
      <About />
      <Service />
      <div style={{ marginBlockStart: "10rem", marginBlockEnd: "2rem" }}>
        <LatestPortfolio />
      </div>
      <Rating />
      <div style={{ marginBlockStart: "10rem", width:'100%'}}>

      <Footer />
      </div>
    </div>
  );
};

export default Home;
