<<<<<<< HEAD
"use strict";
=======
>>>>>>> d370b5ba4678a6d814c1623bdd2ccde99e24fad0
'esversion: 6';

class Layout extends React.Component {
  render() {
    return React.createElement(
      'div',
      { className: 'keyboard' },
      React.createElement(
        'h1',
        null,
        'Welcome to Soundboard!'
      )
    );
  }
<<<<<<< HEAD

  _createClass(Layout, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        { className: "loading" },
        React.createElement(
          "h1",
          { className: "intro" },
          "Soundboard Loading..."
        ),
        React.createElement("img", { src: "styles/tumblr_luxr3mmGVw1r1sjguo1_400.gif" })
      );
    }
  }]);

  return Layout;
}(React.Component);
=======
}
>>>>>>> d370b5ba4678a6d814c1623bdd2ccde99e24fad0

ReactDOM.render(React.createElement(
  "div",
  null,
  React.createElement(Layout, null)
), document.getElementById('app'));