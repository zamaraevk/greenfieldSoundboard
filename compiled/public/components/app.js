"use strict";

// var keycodes = require("./keycode.js");

//input syntax:  {
//  targetKeyCode1: "/path/to/source/file.wav",
//  targetKeyCode2: "/path/to/next/source.wav"
//  ...
//}

var testData = {
  65: "../../foley/28134__herbertboland__grendel.wav",
  66: "../../foley/28134__herbertboland__grendel.wav",
  67: "../../foley/28134__herbertboland__grendel.wav",
  68: "../../foley/28134__herbertboland__grendel.wav",
  69: "../../foley/28134__herbertboland__grendel.wav",
  70: "../../foley/28134__herbertboland__grendel.wav",
  71: "../../foley/28134__herbertboland__grendel.wav",
  72: "../../foley/28134__herbertboland__grendel.wav",
  73: "../../foley/28134__herbertboland__grendel.wav",
  74: "../../foley/28134__herbertboland__grendel.wav",
  75: "../../foley/28134__herbertboland__grendel.wav",
  76: "../../foley/28134__herbertboland__grendel.wav",
  77: "../../foley/28134__herbertboland__grendel.wav",
  78: "../../foley/28134__herbertboland__grendel.wav",
  79: "../../foley/28134__herbertboland__grendel.wav",
  80: "../../foley/28134__herbertboland__grendel.wav",
  81: "../../foley/28134__herbertboland__grendel.wav",
  82: "../../foley/28134__herbertboland__grendel.wav",
  83: "../../foley/28134__herbertboland__grendel.wav",
  84: "../../foley/28134__herbertboland__grendel.wav",
  85: "../../foley/28134__herbertboland__grendel.wav",
  86: "../../foley/28134__herbertboland__grendel.wav",
  87: "../../foley/28134__herbertboland__grendel.wav",
  88: "../../foley/28134__herbertboland__grendel.wav",
  89: "../../foley/28134__herbertboland__grendel.wav",
  90: "../../foley/28134__herbertboland__grendel.wav"
};

//sample input:
//This example would bind the 'a' key to the "example.wav" file.
//{
//  65: '/path/to/example'
//}

//For a comprehensive list of keycode bindings, see "keycode.js"
//in this same directory.

var App = React.createClass({
  displayName: "App",

  getInitialState: function getInitialState() {
    return { viewHTML: React.createElement(
        "div",
        null,
        " no data to show "
      ) };
  },
  //helper that given a path, modified a dom audio element with the given path
  setCurrentSong: function setCurrentSong(path, cb) {
    var audio = document.getElementById("mainAudio");
    //ajax call that actually returns file
    audio.src = path;
    if (cb) {
      cb();
    }
  },

  //returns a div with a keypress listener, which will call setCurrentSong
  //on the provided path when the target key is pressed.

  loadFile: function loadFile() {
    var vKey = function vKey(targetKeyCode, path) {
      return React.createElement(
        "div",
        { onKeyPress: function onKeyPress(event) {
            //add audio tag here?
            // if (event.keyCode === targetKeyCode) {
            //   this.setCurrentSong(path);
            // }
          } },
        React.createElement("audio", { src: "" })
      )
      ////
      ;
    };
    //DO NOT DELETE!  This has been commented out for testing purposes but will
    //be necessary for communicating with the server.

    //   $.get({
    //   url: '/',
    //   dataType: 'json',
    //   error: function(err) {
    //     console.error(err);
    //   }.bind(this)
    // }).done(function(data) {
    //   var result = <div></div>;
    //   for (var code in data) {
    //     result.append(vKey(code, data[code]));
    //   }
    //   this.setState({viewHTML: result});
    //   this.render();
    // });
    var data = testData;

    var newData = [];

    for (var code in data) {
      newData.push(vKey(code, data[code]));
    }

    var result = React.createElement(
      "div",
      null,
      newData.map(function (element) {
        return element;
      })
    );
    console.log(undefined);
    undefined.setState({ viewHTML: result });
    // this.render();
  },

  render: function render() {
    console.log('1', this);
    this.loadFile();
    //returns a string of html representing all of the keybindings provided
    //as input.
    console.log('2', this);
    return this.state.viewHTML;
  }
});

ReactDOM.render(React.createElement(
  "div",
  null,
  React.createElement(App, null)
), document.getElementById('app'));