import React from "react";
import Plyr from "plyr-react";
//import "plyr-react/dist/plyr.css";

import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Reports from "./Pages/Home/Home";
import Products from "./Pages/Home/Home";

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
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/reports" component={Reports} />
          <Route path="/products" component={Products} />
        </Switch>
      </Router>

      {/*<div className="container">
        <Plyr source={videoSrc} />
  </div>*/}
    </>
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
