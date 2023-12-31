import "./App.css";

import React, { Component } from "react";
import Navbar from "./Components/Navbar";
import News from "./Components/News";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

export default class App extends Component {
  state={
     progress: 0
  }
  setProgress=(progress)=>{
    this.setState({progress: progress})
  }
  render() {
    return (
      <div>
        <Router>
          <Navbar />
          <LoadingBar
          height={3}
            color='#f11946'
            progress={this.state.progress}
              // onLoaderFinished={() => setProgress(0)}
          />
          <Routes>
            <Route
              path="/"
              element={
                <News setProgress={this.setProgress}
                  key="general"
                  pageSize={12}
                  country="in"
                  category="general"
                />
              }
            ></Route>
            <Route
              path="/business"
              element={
                <News setProgress={this.setProgress}
                  key="business"
                  pageSize={12}
                  country="in"
                  category="business"
                />
              }
            ></Route>
            <Route
              path="/entertainment"
              element={
                <News setProgress={this.setProgress}
                  key="entertainment"
                  pageSize={12}
                  country="us"
                  category="entertainment"
                />
              }
            ></Route>
            <Route
              path="/health"
              element={
                <News setProgress={this.setProgress}
                  key="health"
                  pageSize={12}
                  country="in"
                  category="health"
                />
              }
            ></Route>
            <Route
              path="/science"
              element={
                <News setProgress={this.setProgress}
                  key="science"
                  pageSize={12}
                  country="in"
                  category="science"
                />
              }
            ></Route>
            <Route
              path="/sports"
              element={
                <News setProgress={this.setProgress}
                  key="sports"
                  pageSize={12}
                  country="in"
                  category="sports"
                />
              }
            ></Route>
            <Route
              path="/technology"
              element={
                <News setProgress={this.setProgress}
                  key="technology"
                  pageSize={12}
                  country="in"
                  category="technology"
                />
              }
            ></Route>
          </Routes>
        </Router>
      </div>
      // <div>
      //   <Navbar />
      //   <News pageSize={5} country={'in'} category="business"/>
      // </div>
    );
  }
}
