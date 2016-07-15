/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!***********************************!*\
  !*** ./public/components/app.jsx ***!
  \***********************************/
/***/ function(module, exports) {

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
	
	var qwertyMap = [113, 119, 101, 114, 116, 121, 117, 105, 111, 112, 97, 115, 100, 102, 103, 104, 106, 107, 108, 0, 122, 120, 99, 118, 98, 110, 109];
	
	//sample input:
	//This example would bind the 'a' key to the "example.wav" file.
	//{
	//  65: '/path/to/example'
	//}
	
	//For a comprehensive list of keycode bindings, see "keycode.js"
	//in this same directory.
	var VKey = React.createClass({
	  displayName: "VKey",
	
	  // the initial state houses the player, which is set to false.
	  getInitialState: function getInitialState() {
	    return {
	      isShiftPressed: false,
	      playing: false
	    };
	  },
	  // when a key is pressed, change key color, set player to true, and play it.
	  handleKeyPress: function handleKeyPress(event) {
	    var $audio = document.getElementById(this.props.targetKey);
	    var $vKey = $('#' + event.keyCode).parent();
	    if ("" + event.keyCode === "" + (this.props.targetKey - 32)) {
	      $vKey = $('#' + (event.keyCode + 32)).parent();
	      $vKey.addClass('red');
	      $audio.loop = $audio.loop ? false : true;
	      $audio.currentTime = 0;
	      $audio.paused ? $audio.play() : $audio.pause();
	    }
	    if ("" + event.keyCode === "" + this.props.targetKey) {
	      $vKey.addClass('green');
	      $audio.currentTime = 0;
	      if ($audio.paused) {
	        $audio.play();
	      } else {
	        $audio.pause();
	        $vKey.removeClass('green');
	        $vKey.removeClass('red');
	      }
	      event.preventDefault();
	    }
	    this.render();
	  },
	
	  handleAudioEnd: function handleAudioEnd(event) {
	    var $vKey = $('#' + this.props.targetKey).parent();
	    $vKey.removeClass('green');
	    $vKey.removeClass('red');
	    event.preventDefault();
	    this.render();
	  },
	
	  componentDidMount: function componentDidMount(event) {
	    window.addEventListener('keypress', this.handleKeyPress);
	  },
	
	  render: function render() {
	    return React.createElement(
	      "div",
	      { className: "key", onKeyPress: this.handleKeyPress },
	      React.createElement(
	        "p",
	        { className: "keyLabel" },
	        keyCodes[this.props.targetKey]
	      ),
	      React.createElement(
	        "p",
	        { className: "filename" },
	        this.props.path.split("/").pop()
	      ),
	      React.createElement("audio", { id: this.props.targetKey, src: this.props.path, onEnded: this.handleAudioEnd, preload: "auto" })
	    ) //
	    ;
	  }
	});
	var App = React.createClass({
	  displayName: "App",
	
	  render: function render() {
	    qwertyMap = qwertyMap.map(function (key) {
	      if (key !== 0) {
	        return { key: key, path: testData[key] };
	      } else {
	        return 0;
	      }
	    });
	    return React.createElement(
	      "div",
	      { className: "keyboard" },
	      qwertyMap.map(function (keyBinding, idx) {
	        if (keyBinding === 0) {
	          return React.createElement("br", null);
	        } else {
	          return React.createElement(VKey, { targetKey: keyBinding.key, path: keyBinding.path });
	        }
	      })
	    );
	  }
	});
	
	// ReactDOM.render(<div>
	//   <App/>
	//   </div>, document.getElementById('app')
	// );

/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map