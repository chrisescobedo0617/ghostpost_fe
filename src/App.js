import React from "react";
import "./App.css";
import "semantic-ui-css/semantic.min.css";
import Navbar from "./Navbar";
import { Route } from "react-router-dom";
import AllPosts from "./AllPosts";
import BoastPosts from "./BoastPosts";
import RoastPosts from "./RoastPosts";
import MostPopularPosts from "./MostPopularPosts";
import Form from "./Form";

function App() {
  return (
    <div>
      <Navbar />
      <Route exact path="/" component={AllPosts} />
      <Route path="/boasts" component={BoastPosts} />
      <Route path="/roasts" component={RoastPosts} />
      <Route path="/most-popular" component={MostPopularPosts} />
      <Route path="/create-post" component={Form} />
    </div>
  );
}

export default App;
