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


exports.App = React.createClass({
  //helper that given a path, modified a dom audio element with the given path
  setCurrentSong: (path, cb) => {
    var audio = document.getElementById("mainAudio");
    //ajax call that actually returns file
    audio.src = path;
    if (cb) {
      cb();
    }
  },

  //returns a div with a keypress listener, which will call setCurrentSong 
  //on the provided path when the target key is pressed. 
  vKey: (targetKeyCode, path) => (
      <div onKeyPress={function(event) {
          //add audio tag here?
          if (event.keyCode === targetKeyCode) {
            this.setCurrentSong(path);
          }
        }
      }></div>
      ////
    );

  render: function() {

    //returns a string of html representing all of the keybindings provided 
    //as input.
    $.get({
      url: __dirname + "/soundboard",
      dataType: 'json',
      error: function(err) {
        console.error(err);
      }.bind(this)
    }).done(function(data) {      
      var result = "";
      for (var code in data) {
        result += vKey(code, data[code]);
      }
      this.setState({data: result});
    });
  }
})

