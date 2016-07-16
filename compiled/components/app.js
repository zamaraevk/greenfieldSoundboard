"use strict";

//input syntax:  {
//  targetKeyCode1: "/path/to/source/file.wav",
//  targetKeyCode2: "/path/to/next/source.wav"
//  ...
//}

var testData = {
  97: "/soundfiles/deep-techno-groove.wav",
  98: "/soundfiles/beltbuckle.wav",
  99: "/soundfiles/footsteps.wav",
  100: "/soundfiles/grendel.wav",
  101: "/soundfiles/beads.wav",
  102: "/soundfiles/beltbuckle.wav",
  103: "/soundfiles/footsteps.wav",
  104: "/soundfiles/grendel.wav",
  105: "/soundfiles/beads.wav",
  106: "/soundfiles/beltbuckle.wav",
  107: "/soundfiles/footsteps.wav",
  108: "/soundfiles/grendel.wav",
  109: "/soundfiles/beads.wav",
  110: "/soundfiles/beltbuckle.wav",
  111: "/soundfiles/footsteps.wav",
  112: "/soundfiles/grendel.wav",
  113: "/soundfiles/beltbuckle.wav",
  114: "/soundfiles/footsteps.wav",
  115: "/soundfiles/grendel.wav",
  116: "/soundfiles/beads.wav",
  117: "/soundfiles/beltbuckle.wav",
  118: "/soundfiles/footsteps.wav",
  119: "/soundfiles/grendel.wav",
  120: "/soundfiles/beads.wav",
  121: "/soundfiles/beltbuckle.wav",
  122: "/soundfiles/footsteps.wav"
};

var qwertyMap = [113, 119, 101, 114, 116, 121, 117, 105, 111, 112, 0, 97, 115, 100, 102, 103, 104, 106, 107, 108, 0, 122, 120, 99, 118, 98, 110, 109];

//sample input:
//This example would bind the 'a' key to the "example.wav" file.
//{
//  65: '/path/to/example'
//}

//For a comprehensive list of keycode bindings, see "keycode.js"
//in this same directory.
var VKey = React.createClass({
  displayName: "VKey",

  handleAudioEnd: function handleAudioEnd(event) {
    var $vKey = $('#' + this.props.keyId).parent();

    $vKey.removeClass('green red');
    event.preventDefault();
    this.render();
  },

  render: function render() {
    return React.createElement(
      "div",
      { className: "key" },
      React.createElement(
        "p",
        { className: "keyLabel" },
        keyCodes[this.props.keyId]
      ),
      React.createElement(
        "p",
        { className: "filename" },
        this.props.path.substr(12).slice(0, -4)
      ),
      React.createElement("audio", { id: this.props.keyId, src: this.props.path, onEnded: this.handleAudioEnd, preload: "auto" })
    ) //
    ;
  }
});
var RebindNode = React.createClass({
  displayName: "RebindNode",

  updateKeyBinding: function updateKeyBinding(event) {
    var code = this.props.targetKey.charCodeAt();
<<<<<<< HEAD
    var song = "/soundfiles/" + this.props.targetSong;

    this.props.bindings.forEach(function (ele, idx) {
      if (ele.key === code) {
        this.props.bindings[idx].path = song;
=======
    var path = "/soundfiles/" + this.props.targetSong;

    this.props.bindings.forEach(function (ele, idx) {
      if (ele.key === code) {
        this.props.bindings[idx].path = path;
>>>>>>> e124a9815b803aa9a7fb5e8aabe0e8e3ee53b5cd
      }
    }, this);
  },
  render: function render() {
    return React.createElement(
      "div",
      { onClick: this.updateKeyBinding },
      React.createElement(
        "p",
        null,
        "Click here to bind: ",
        this.props.targetSong.slice(0, -4)
      )
    );
  }
});
var App = React.createClass({
  displayName: "App",

  // componentDidMount: function(event) {
  //   $('.loading').hide();
  // },
  getInitialState: function getInitialState() {
<<<<<<< HEAD
    return {
      bindings: [],
      soundList: [],
      changeKey: ""
    };
  },
  componentDidMount: function componentDidMount() {
    this.serverRequest = $.get("http://localhost:8000/sounds", function (result) {
      this.setState({
        soundList: result
      });
    }.bind(this));

    this.setState({
      bindings: qwertyMap.map(function (key) {
        return key !== 0 ? { key: key, path: testData[key], loop: false, playing: false } : 0;
      })
    });
=======
    return (//playing with es6
      {
        bindings: [],
        soundList: [],
        changeKey: ""
      }
    );
  },
  componentDidMount: function componentDidMount() {
    $('#bindingWindow').hide();
    this.serverRequest = $.get(window.location.href + "sounds", function (result) {
      this.setState({
        soundList: result,
        bindings: qwertyMap.map(function (key) {
          return key !== 0 ? { key: key, path: testData[key], loop: false, playing: false } : 0;
        })
      });
    }.bind(this));

>>>>>>> e124a9815b803aa9a7fb5e8aabe0e8e3ee53b5cd
    window.addEventListener('keypress', this.handleKeyPress);
  },
  componentWillUnmount: function componentWillUnmount() {
    this.serverRequest.abort(); //not sure what this is for but online said to put it in.
  },
  handleKeyPress: function handleKeyPress(event) {
<<<<<<< HEAD
=======
    console.log(event);
>>>>>>> e124a9815b803aa9a7fb5e8aabe0e8e3ee53b5cd
    var key = event.code.toLowerCase()[3],
        keyNumber = key.charCodeAt(),
        $audio = document.getElementById(keyNumber),
        $vKey = $('#' + keyNumber).parent();

<<<<<<< HEAD
    if (event.altKey) {
      if (keyNumber < 123 && keyNumber > 96) {
        this.setState({ changeKey: key });
        this.handleAltKey();
=======
    if (event.ctrlKey && $('#keyboardWindow').is(':visible')) {
      if (keyNumber < 123 && keyNumber > 96) {
        this.setState({ changeKey: key });
        this.handleCtrlKey();
>>>>>>> e124a9815b803aa9a7fb5e8aabe0e8e3ee53b5cd
      }
    } else if (event.shiftKey) {
      $vKey.addClass('red');
      this.handleShiftKey($audio);
    } else {
      this.triggerKey($vKey, $audio);
    }
  },
  triggerKey: function triggerKey($vKey, $audio) {
    $vKey.addClass('green');
    $audio.currentTime = 0;
<<<<<<< HEAD
=======

>>>>>>> e124a9815b803aa9a7fb5e8aabe0e8e3ee53b5cd
    if ($audio.paused) {
      $audio.play();
    } else {
      $audio.pause();
<<<<<<< HEAD
      $vKey.removeClass('green');
      $vKey.removeClass('red');
    }
    event.preventDefault();
  },
  handleAltKey: function handleAltKey() {
    //insert logic for showing/hiding the divs.
  },
  handleShiftKey: function handleShiftKey($audio) {
=======
      $vKey.removeClass('green red');
    }
    event.preventDefault();
  },
  handleCtrlKey: function handleCtrlKey() {

    $('#bindingWindow').animate({ height: 'toggle' }, 350);
    $('#keyboardWindow').animate({ width: 'toggle' }, 350);
  },
  handleShiftKey: function handleShiftKey($audio) {

>>>>>>> e124a9815b803aa9a7fb5e8aabe0e8e3ee53b5cd
    $audio.loop = !$audio.loop;
    $audio.currentTime = 0;
    $audio.paused ? $audio.play() : $audio.pause();
  },
  reRender: function reRender() {
<<<<<<< HEAD
=======

    $('#bindingWindow').animate({ height: 'toggle' }, 350);
    $('#keyboardWindow').animate({ width: 'toggle' }, 350);
>>>>>>> e124a9815b803aa9a7fb5e8aabe0e8e3ee53b5cd
    ReactDOM.render(React.createElement(
      "div",
      null,
      React.createElement(App, null)
    ), document.getElementById('app'));
  },
  render: function render() {
<<<<<<< HEAD
=======
    var _this = this;
>>>>>>> e124a9815b803aa9a7fb5e8aabe0e8e3ee53b5cd

    return React.createElement(
      "div",
      { id: "appWindow" },
      React.createElement(
        "div",
        { id: "bindingWindow", className: "keyboard" },
        React.createElement(
          "h1",
          null,
<<<<<<< HEAD
          "Click on a sound that you would like to change the binding of ",
=======
          "Click on a file to change the binding of ",
>>>>>>> e124a9815b803aa9a7fb5e8aabe0e8e3ee53b5cd
          this.state.changeKey,
          " to"
        ),
        React.createElement(
          "ul",
          { onClick: this.reRender },
          this.state.soundList.map(function (sound, idx) {
<<<<<<< HEAD
            return React.createElement(RebindNode, { key: idx, targetSong: sound, targetKey: this.state.changeKey, bindings: this.state.bindings });
=======
            return (//es6 again
              React.createElement(RebindNode, { key: idx, targetSong: sound, targetKey: _this.state.changeKey, bindings: _this.state.bindings })
            );
>>>>>>> e124a9815b803aa9a7fb5e8aabe0e8e3ee53b5cd
          }, this)
        )
      ),
      React.createElement(
        "div",
<<<<<<< HEAD
        { className: "keyboard" },
        this.state.bindings.map(function (keyBinding, idx) {
          if (keyBinding === 0) {
            return React.createElement("br", { key: idx });
          } else {
            return React.createElement(VKey, { key: idx, keyId: keyBinding.key, path: keyBinding.path });
          }
=======
        { id: "keyboardWindow", className: "keyboard" },
        this.state.bindings.map(function (keyBinding, idx) {
          return (//yay es6
            keyBinding === 0 ? React.createElement("br", { key: idx }) : React.createElement(VKey, { key: idx, keyId: keyBinding.key, path: keyBinding.path })
          );
>>>>>>> e124a9815b803aa9a7fb5e8aabe0e8e3ee53b5cd
        })
      )
    );
  }
});

ReactDOM.render(React.createElement(
  "div",
  null,
  React.createElement(App, null)
), document.getElementById('app'));