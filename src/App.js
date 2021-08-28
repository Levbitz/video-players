import React from "react";
import Plyr from "plyr-react";
import "plyr-react/dist/plyr.css";

const videoSrc = {
  type: "video",
  sources: [
    {
      src: "https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4",
      //provider: "youtube",
    },
  ],
};

// learn more https://github.com/sampotts/plyr#the-source-setter

export default function App() {
  return (
    <div className="container">
      <Plyr source={videoSrc} />
    </div>
  );
}

// export const MyComponent = () => {
//   return (
//     <>
//       <Plyr source={videoSrc} />
//     </>
//   );
// };

//export default App;
