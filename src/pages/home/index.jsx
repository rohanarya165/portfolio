import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Typewriter from "typewriter-effect";
import { introdata, meta } from "../../content_option";
import { Link } from "react-router-dom";

export const Home = () => {
  const [bgImage, setBgImage] = React.useState(localStorage.getItem("theme"));

  React.useEffect(() => {
    const handleStorageChange = () => {
      setBgImage(localStorage.getItem("theme")); // Update state when localStorage changes
    };

    window.addEventListener("storage", handleStorageChange);
    
    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  },[]);

  React.useEffect(() => {
    const interval = setInterval(() => {
      const theme = localStorage.getItem("theme") || "light";
      setBgImage(theme);
    }, 100); // Check every 500ms (adjust if needed)

    return () => clearInterval(interval);
  }, []);

  return (
    <HelmetProvider>
      <section id="home" className="home">
        <Helmet>
          <meta charSet="utf-8" />
          <title> {meta.title}</title>
          <meta name="description" content={meta.description} />
        </Helmet>
        <div className="intro_sec d-block d-lg-flex align-items-center ">
          <div
            className="h_bg-image order-1 order-lg-2 h-100 "
            style={{
              backgroundImage: bgImage === "light" 
                ? `url(https://www.w3webschool.com/wp-content/uploads/2022/10/developer.gif)` 
                : `url(https://i.pinimg.com/originals/ed/ec/57/edec57b70e496d6310c0ba533909acb2.gif)`,
              backgroundSize: "cover", // Ensures image covers the div
              backgroundPosition: "center", // Centers the image
              backgroundRepeat: "no-repeat", // Prevents tiling
            }}
          ></div>
          <div className="text order-2 order-lg-1 h-100 d-lg-flex justify-content-center">
            <div className="align-self-center ">
              <div className="intro mx-auto">
                <h2 className="mb-1x">{introdata.title}</h2>
                <h1 className="fluidz-48 mb-1x" style={{ fontFamily: "'Press Start 2P', cursive", color: "green" }}>
                  <Typewriter
                    options={{
                      strings: [
                        introdata.animated.first,
                        introdata.animated.second,
                        introdata.animated.third,
                      ],
                      autoStart: true,
                      loop: true,
                      deleteSpeed: 10,
                    }}
                  />
                </h1>
                <p id="nintendo" className="mb-1x"> {introdata.description}</p>
                <div className="intro_btn-action pb-5">
                  <Link to="/about" className="text_2">
                    <div id="button_p" className="ac_btn btn ">
                      About me
                      <div className="ring one"></div>
                      <div className="ring two"></div>
                      <div className="ring three"></div>
                    </div>
                  </Link>
                  <Link to="/contact">
                    <div id="button_h" className="ac_btn btn">
                      Contact Me
                      <div className="ring one"></div>
                      <div className="ring two"></div>
                      <div className="ring three"></div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </HelmetProvider>
  );
};
