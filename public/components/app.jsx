//input syntax:  {
//  targetKeyCode1: "/path/to/source/file.wav",
//  targetKeyCode2: "/path/to/next/source.wav"
//  ...
//}
var testData = {
  97: "/soundfiles/deep-techno-groove.wav",
  98: "/soundfiles/bam-bam-bolam.wav",
  99: "/soundfiles/nyan-cat.wav",
  100: "/soundfiles/day.wav",
  101: "/soundfiles/beads.wav",
  102: "/soundfiles/drums.wav",
  103: "/soundfiles/pew-pew.wav",
  104: "/soundfiles/grendel.wav",
  105: "/soundfiles/derp-yell.mp3",
  106: "/soundfiles/beltbuckle.wav",
  107: "/soundfiles/oh-yeah.wav",
  108: "/soundfiles/power-up.wav",
  109: "/soundfiles/straight-techno-beat.wav",
  110: "/soundfiles/kamehameha.wav",
  111: "/soundfiles/fart.wav",
  112: "/soundfiles/heavy-rain.wav",
  113: "/soundfiles/jet-whoosh.wav",
  114: "/soundfiles/mystery-chime.ogg",
  115: "/soundfiles/space-bloop.wav",
  116: "/soundfiles/techno-drums2.wav",
  117: "/soundfiles/whale.wav",
  118: "/soundfiles/vegeta-big-bang.wav",
  119: "/soundfiles/piano-mood.wav",
  120: "/soundfiles/boing-a.wav",
  121: "/soundfiles/techno-drums.wav",
  122: "/soundfiles/guitar-chord.wav"
};

var qwertyMap = [
 113,
 119,
 101,
 114,
 116,
 121,
 117,
 105,
 111,
 112,
 0,
 97,
 115,
 100,
 102,
 103,
 104,
 106,
 107,
 108,
 0,
 122,
 120,
 99,
 118,
 98,
 110,
 109
];

//sample input:
//This example would bind the 'a' key to the "example.wav" file.
//{
//  65: '/path/to/example'
//}

//For a comprehensive list of keycode bindings, see "keycode.js"
//in this same directory.

//VKey React class.  Represents one key on our virtual keyboard.
var VKey = React.createClass ({
  //method for removing styling from key after its audio element has stopped playing.
  handleAudioEnd: function (event) {
    var $vKey = $('#' + this.props.keyId).parent();

    $vKey.removeClass('green red pressed');
    event.preventDefault();
    this.render();
  },

  render: function() {
    return (
      <div className="key">
        <p className="keyLabel">{keyCodes[this.props.keyId]}</p>
        <p className="filename">{ this.props.path.substr(12).slice(0, -4)}</p>
        <audio id={this.props.keyId} src={ this.props.path } onEnded={ this.handleAudioEnd } preload="auto"></audio>
      </div>  //
    )
  }
});

//RebindNode React class.  Represents one entry in the drop-down list for rebinding keys.
var RebindNode = React.createClass({
  //this is the function that actually changes the binding of the key.
  updateKeyBinding: function(event) {
    var code = this.props.targetKey.charCodeAt();
    var path = "/soundfiles/" + this.props.targetSong;

    this.props.bindings.forEach(function (ele, idx) {
      if (ele.key === code) {
        this.props.bindings[idx].path = path;
      }
    }, this);
  },
  //method for previewing sound before binding it.
  playSample: () => {
    console.log("ding ding ding");
    var soundNode = $('#secretSound');
    soundNode.pause();
    soundNode.attr("src", this.targetSong);
    soundNode.play();
  },
  render: function() {
    return (
      <div onClick = {this.updateKeyBinding}>
        <p onClick = {this.props.reRender}> {this.props.targetSong.slice(0, -4)} </p>
        <img src="assets/listen.png" onClick={this.playSample}/>
      </div>
    )
  }
});
//


// App React class.  Contains a number of methods which control the audio, as well as rendering pretty much the whole damn app.
var App = React.createClass({
  //declaring some states.
  getInitialState: function() (
     {
      bindings: [],
      soundList: [],
      changeKey: ""
    }
  ),
  //once the component mounts, we set those states equal to the correct data.  We also hide the binding window using JQuery until it is required.
  componentDidMount: function() {
    $('#bindingWindow').hide();
    this.serverRequest = $.get(window.location.href + "sounds", function (result) {
      this.setState({
        soundList: result,
        bindings: qwertyMap.map(function(key) {
          return key !== 0
            ? {key: key, path: testData[key], loop: false, playing: false}
            : 0;
        })
      });
    }.bind(this));

    window.addEventListener('keypress', this.handleKeyPress);
  },

  componentWillUnmount: function() {
    this.serverRequest.abort();//not sure what this is for but online said to put it in.
  },


  //this is our keyhandler function.  It handles all keypress events on the DOM.  Plays/stops the appropriate sound file,
  //as well as changing the styling on the appropriate hey.
  handleKeyPress: function(event) {
    //store all our relevent DOM elements as variables so that we can reference them easily later.
    var key = event.code.toLowerCase()[3],
        keyNumber = key.charCodeAt(),
        $audio = document.getElementById(keyNumber),
        $vKey = $('#' + keyNumber).parent();

    //handles the ctrl+key menu drop.
    if (event.ctrlKey && $('#keyboardWindow').is(':visible')) {
      if (keyNumber < 123 && keyNumber > 96) {
        this.setState({changeKey: key})
        this.handleCtrlKey();
      }
    } else if (event.shiftKey) { //handles the shift+key loop functionality
      $vKey.addClass('red pressed');
      this.handleShiftKey($audio, event);
    } else {  //handles a bare keypress.
      this.triggerKey($vKey, $audio);
    }
  },

  //All this does is change the styling of a key as appropriate, and plays/pauses the audio element as appropriate.
  triggerKey: function($vKey, $audio) {
    $vKey.addClass('green pressed');
    $audio.currentTime = 0;

    if ($audio.paused) {
      $audio.play()
    }
    else {
      $audio.pause()
      $vKey.removeClass('green red pressed');
    }
    event.preventDefault();
  },

  //Hides and shows the rebinding menu using jQuery.
  handleCtrlKey: function() {
    $('#bindingWindow').animate({height:'toggle'},350);
    $('#keyboardWindow').animate({width:'toggle'},350);
  },

  //Sets the specified audio element to loop, then plays/pauses and styles as appropriate.
  handleShiftKey: function($audio, event) {
    var key = event.code.toLowerCase()[3],
      keyNumber = key.charCodeAt(),
      $vKey = $('#' + keyNumber).parent();
    $audio.loop = !$audio.loop
    $audio.currentTime = 0;
    if ($audio.paused ) {
      $audio.play();
    } else {
      $audio.pause();
      $vKey.removeClass('green red pressed');
    }
  },

  //useful helper for re-rendering DOM when a new binding is assigned.
  reRender: function() {
    $('#bindingWindow').animate({height:'toggle'},350);
    $('#keyboardWindow').animate({width:'toggle'},350);
    ReactDOM.render(<div>
      <App/>
      </div>, document.getElementById('app')
    );
  },


  render: function() {
   return (
     <div id="appWindow">
       <div id = "bindingWindow" className="keyboard">
         <h1>Click on a file to change the binding of {this.state.changeKey} to</h1>
           <ul>
           {
             this.state.soundList.map( (sound, idx) => ( //es6 again
               <RebindNode key={idx} targetSong = {sound} targetKey = {this.state.changeKey} bindings = {this.state.bindings} reRender={this.reRender}/>
             ), this)
           }
           </ul>
       </div>
       <div id='keyboardWindow' className="keyboard">
       {
         this.state.bindings.map( (keyBinding, idx) => //yay es6
           keyBinding === 0
            ? <br key={idx}/>
            : <VKey key={idx} keyId = {keyBinding.key} path={keyBinding.path}/>
         )
       }
       </div>
     </div>
   )
 }
})

setTimeout(function() {
ReactDOM.render(<div>
  <App/>
  </div>, document.getElementById('app')
);
}, 2000);
