import React from "react";
import "./App.scss";
import photo from "./asset/ridvan-foto.png";
import instagram from "./asset/instagram.png";
import github from "./asset/github.png";
import linkedIn from "./asset/linkedin.png"

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
                  <img
                    src={instagram}
                    width="20px"
                    height="20px"
                    alt="instagram"
                  />
                </div>

                <div className="icon-wrapper">
                  <img
                    src={github}
                    width="20px"
                    height="20px"
                    alt="instagram"
                  />
                </div>
                <div className="icon-wrapper">
                <img
                  src={linkedIn}
                  width="25px"
                  height="25px"
                  alt="instagram"
                />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="information-header__bottom"></div>
      </div>
    </div>
  );
}

export default App;
