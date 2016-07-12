// var keycodes = require("./keycode.js");
var $ = require('jquery');

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
  //helper that given a path, modified a dom audio element with the given pathljn  
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
      $.ajax({
      url: this.props.url,
      dataType: 'json',
      type: 'POST',
      data: input,
      success: function(data) {
        var keyBindings = data;
        var result = "";
        for (var code in keyBindings) {
          result += vKey(code, keyBindings[code]);
        }
        this.setState({data: result});
      }.bind(this),
      error: function(xhr, status, err) {
        console.log(err);
      }.bind(this)
    });
  };

  return{
    init: init(keyBindings)
  }
}
