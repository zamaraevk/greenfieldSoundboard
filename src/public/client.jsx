import React from "react";
import ReactDOM from "react-dom";

class Layout extends React.Component {
  render() {
    return (
      <div className="keyboard">
      <h1>Welcome to Soundboard!</h1>
      </div>
    );
  }
}

ReactDOM.render(
  <Layout/>,
  document.getElementById('app')
);
