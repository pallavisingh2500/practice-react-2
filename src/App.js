import React, { Component } from "react";
import "./styles.css";
import IngradientForm from "./Component/IngradientForm";
import Search from "./Component/Search";
class App extends Component {
  render() {
    return (
      <div className="App">
        <IngradientForm />
        <Search />
      </div>
    );
  }
}
export default App;
