import React, { Component } from "react";
import { connect } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./views/Homepage";
import Quizpage from "./views/Quizpage";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage toggleMode={this.props.toggleMode}/>} />
          <Route path="/quiz" element={<Quizpage toggleMode={this.props.toggleMode} />} />
        </Routes>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {};
};


export default connect(mapStateToProps, mapDispatchToProps)(App);

