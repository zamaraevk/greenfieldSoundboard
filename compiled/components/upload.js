"use strict";

var Upload = React.createClass({
  displayName: "Upload",


  render: function render() {
    return React.createElement(
      "div",
      null,
      React.createElement(
        "h1",
        null,
        " Upload file "
      ),
      React.createElement(
        "form",
        { encType: "multipart/form-data", action: "/upload/image", method: "post" },
        React.createElement("input", { id: "image-file", type: "file" })
      )
    );
  }
});

ReactDOM.render(React.createElement(
  "div",
  null,
  React.createElement(Upload, null)
), document.getElementById('upload'));