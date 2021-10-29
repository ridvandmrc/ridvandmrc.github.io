import React from "react";
import "./App.scss";
import photo from "./asset/ridvan-foto.png";
import instagram from "./asset/instagram.png";
import github from "./asset/github.png";
import linkedIn from "./asset/linkedin.png";

function App() {
  return (
    <div className="wrapper">
      <div className="information-header">
        <div className="information-header__top">
          <div className="content">
            <div className="image-wrapper">
              <img
                src={photo}
                alt="Ridvan Demirci"
                width="200px"
                height="200px"
              />
            </div>
            <div className="generic-info">
              <div className="generic-info__name">Rıdvan Demirci</div>
              <div className="generic-info__social">
                <div className="icon-wrapper">
                  <a
                    href="https://www.instagram.com/demirci.r/"
                    target="_parent"
                  >
                    <img
                      src={instagram}
                      width="20px"
                      height="20px"
                      alt="instagram"
                    />
                  </a>
                </div>

                <div className="icon-wrapper">
                  <a href="https://github.com/ridvandmrc" target="_parent">
                    <img
                      src={github}
                      width="20px"
                      height="20px"
                      alt="instagram"
                    />
                  </a>
                </div>
                <div className="icon-wrapper">
                  <a
                    href="https://www.linkedin.com/in/r%C4%B1dvan-demirci-324a37108/"
                    target="_parent"
                  >
                    <img
                      src={linkedIn}
                      width="15px"
                      height="15px"
                      alt="instagram"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="information-header__bottom">
          <div className="about">
            <div>
              About <span className="about--me">Me</span>{" "}
            </div>
            <div className="about__info">
              Hello, I was born in Kocaeli on 08/03/1995 and I am sitting there.
              I had some opportunities to develop myself in research and
              self-learning about the issues that I did not know. I also had
              opportunities to work and adapt in a team with the projects given.
            </div>
            <div className="about__resume">
              <a
                href="https://drive.google.com/file/d/1KaPAK2_tEU-65ho4QNAf3dO_iJxNaDhS/view?usp=sharing"
                target="_parent"
              >
                Download Resume
              </a>
            </div>
          </div>
          <div className="vertical-sep"></div>
          <div className="personal-info">
            <div className="info">
              <span className="key">Age: </span>
              <span className="value">27</span>
            </div>
            <div className="info">
              <span className="key">Bachelor: </span>
              <span className="value">Gebze Teknical University</span>
            </div>
            <div className="info">
              <span className="key">Address: </span>
              <span className="value">Kocaeli, Gebze</span>
            </div>
            <div className="info">
              <span className="key">E-mail: </span>
              <span className="value">
                <a href="mailto:rdvndmrc@gmail.com">rdvndmrc@gmail.com</a>
              </span>
            </div>
            <div className="info">
              <span className="key">Hobbies: </span>
              <span className="value">
                Football, Music, film and video Game
              </span>
            </div>
            <div className="info">
              <span className="key">Note: </span>
              <span className="value">
                If you need help something that I interested before, feel free
                to reach me !
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
