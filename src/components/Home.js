import React from "react";
import { Link } from "react-router-dom";

function Home() {

  return (
    <>
      <div className="home">
        <Link className="moon-link" to="/images">Spacestagram<br /></Link>

        <div>
          <p className="subtitle">
            A collection of images from NASA's <br /> Astronomy Picture of the Day
          </p>
        </div>
      </div>
    </>
  );
}

export default Home;