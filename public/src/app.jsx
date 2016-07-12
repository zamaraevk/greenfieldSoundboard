// var keycodes = require("./keycode.js");

//input syntax:  {
//  targetKeyCode1: "/path/to/source/file.wav",
//  targetKeyCode2: "/path/to/next/source.wav"
//  ...
//}

//sample input:  
//This example would bind the 'a' key to the "example.wav" file.
//{
//  65: '/path/to/example'
//}

//For a comprehensive list of keycode bindings, see "keycode.js"
//in this same directory.


exports.App = function() {
  //helper that given a path, modified a dom audio element with the given path
  var setCurrentSong = (path, cb) => {
    var audio = document.getElementById("mainAudio");
    audio.src = path;
    if (cb) {
      cb();
    }
  };

  //returns a div with a keypress listener, which will call setCurrentSong 
  //on the provided path when the target key is pressed. 
  var vKey = (targetKeyCode, path) => (
      <div onKeyPress={function(event) {
          if (event.keyCode === targetKeyCode) {
            setCurrentSong(path);
          }
        }
      }></div>
    );
   
  ///returns a string of html representing all of the keybindings provided 
  //as input.
  var init = (keyBindings) => {
    var result = "";
    for (var code in keyBindings) {
      result += vKey(code, keyBindings[code]);
    }
    return result;
  };

  return{
    init: init(keyBindings)
  }
}
