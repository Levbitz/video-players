import React from "react";
import Plyr from "plyr-react";

const videoSrc = {
  type: "video",
  sources: [
    {
      src: "https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4",
      //provider: "youtube",
    },
  ],
};

function Home() {
  return (
    <div style={{ zIndex: "-999px !important" }}>
      <p>this is the home page</p>
      <div className="container">
        <div className="row">
          <div className="col l2 s12"></div>
          <div style={{ zIndex: "-999" }} className="col l10 s12">
            <Plyr source={videoSrc} />
          </div>
          <div className="col l2 s12"></div>
        </div>
      </div>
    </div>
  );
}

export default Home;
