"use strict";

// var keycodes = require("./keycode.js");

//input syntax:  {
//  targetKeyCode1: "/path/to/source/file.wav",
//  targetKeyCode2: "/path/to/next/source.wav"
//  ...
//}

var testData = {
  97: "soundfiles/beads.wav",
  98: "soundfiles/beltbuckle.wav",
  99: "soundfiles/footsteps.wav",
  100: "soundfiles/grendel.wav"
};

//sample input:
//This example would bind the 'a' key to the "example.wav" file.
//{
//  65: '/path/to/example'
//}

//For a comprehensive list of keycode bindings, see "keycode.js"
//in this same directory.
var VKey = React.createClass({
  displayName: "VKey",

  getInitialState: function getInitialState() {
    return { playing: false };
  },

  handleKeyPress: function handleKeyPress(event) {
    if ("" + event.keyCode === "" + this.props.targetKey) {
      this.setState({ playing: true });
      document.getElementById(this.props.targetKey).play();
      event.preventDefault();
    }
    this.render();
  },
  componentDidMount: function componentDidMount(event) {
    window.addEventListener('keypress', this.handleKeyPress);
  },
  render: function render() {
    return React.createElement(
      "div",
      { onKeyPress: this.handleKeyPress },
      React.createElement(
        "p",
        null,
        " this is the ",
        this.props.targetKey,
        " div"
      ),
      React.createElement("audio", { id: this.props.targetKey, src: this.props.path })
    );
  }
});

var App = React.createClass({
  displayName: "App",

  // getInitialState:  function() {
  //   return {viewHTML: <div> no data to show </div>};
  // },
  //
  // //helper that given a path, modified a dom audio element with the given path
  // setCurrentSong: (path, cb) => {
  //   var audio = document.getElementById("mainAudio");
  //   //ajax call that actually returns file
  //   audio.src = path;
  //   if (cb) {
  //     cb();
  //   }
  // },

  //returns a div with a keypress listener, which will call setCurrentSong
  //on the provided path when the target key is pressed.

  // loadFile: () => {
  //   var vKey = (targetKeyCode, path) => (
  //       <div onKeyPress={function(event) {
  //           //add audio tag here?
  //           // if (event.keyCode === targetKeyCode) {
  //           //   this.setCurrentSong(path);
  //           // }
  //         }
  //       }>
  //       <audio src=""></audio>
  //       </div>
  ////
  // );
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
  //   var data = testData;
  //
  //   var newData = [];
  //
  //   for (var code in data) {
  //     newData.push(vKey(code, data[code]));
  //   }
  //
  //   var result = (<div>
  //
  //     {
  //       newData.map(function(element) {
  //         return element;
  //       })
  //     }
  //     </div>);
  //   console.log(this);
  //   this.setState({viewHTML: result});
  //   // this.render();
  // },

  render: function render() {
    var data = [];
    for (var code in testData) {
      data.push({ key: code,
        path: testData[code]
      });
    }
    return React.createElement(
      "div",
      null,
      data.map(function (keyBinding) {
        return React.createElement(VKey, { targetKey: keyBinding.key, path: keyBinding.path });
      })
    );
  }
});

ReactDOM.render(React.createElement(
  "div",
  null,
  React.createElement(App, null)
), document.getElementById('app'));
