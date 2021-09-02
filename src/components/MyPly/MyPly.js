import React from "react";
import Plyr from "plyr-react";
//import "plyr-react/dist/plyr.css";

//https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4

function MyPly() {
  return (
    <Plyr
      source={{
        url: "https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4",
      }}
      options={
        {
          /* ... */
        }
      }
    />
  );
}

export default MyPly;
