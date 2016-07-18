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
  105: "/soundfiles/derp-yell.wav",
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
var VKey = React.createClass ({
  handleAudioEnd: function (event) {
    var $vKey = $('#' + this.props.keyId).parent();

    $vKey.removeClass('green red');
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
var RebindNode = React.createClass({
  updateKeyBinding: function(event) {
    var code = this.props.targetKey.charCodeAt();
    var path = "/soundfiles/" + this.props.targetSong;

    this.props.bindings.forEach(function (ele, idx) {
      if (ele.key === code) {
        this.props.bindings[idx].path = path;
      }
    }, this);
  },
  playSample: function() {
    var soundExample = window.location.href + "soundFiles/" + this.props.targetSong;
    var $soundNode = document.getElementById('secretSound');

    $soundNode.pause();
    $soundNode.src = soundExample;
    $soundNode.currentTime = 0;
    $soundNode.play();
  },
  render: function() {
    return (
      <div className="rebindNode" onClick = {this.updateKeyBinding}>
        <p className="rebindSong" onClick = {this.props.reRender}> {this.props.targetSong.slice(0, -4)} </p>
        <img className="rebindIcon" src="assets/listen.png" onClick={this.playSample}/>
      </div>
    )
  }
});
var App = React.createClass({
  // componentDidMount: function(event) {
  //   $('.loading').hide();
  // },
  getInitialState: () => (//playing with es6
     {
      bindings: [],
      soundList: [],
      changeKey: ""
    }
  ),
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
  handleKeyPress: function(event) {
    var key = event.code.toLowerCase()[3],
        keyNumber = key.charCodeAt(),
        $audio = document.getElementById(keyNumber),
        $vKey = $('#' + keyNumber).parent();

    if (event.ctrlKey && $('#keyboardWindow').is(':visible')) {
      if (keyNumber < 123 && keyNumber > 96) {
        this.setState({changeKey: key})
        this.handleCtrlKey();
      }
    } else if (event.shiftKey) {
      $vKey.addClass('red');
      this.handleShiftKey($audio, event);
    } else {
      this.triggerKey($vKey, $audio);
    }
  },
  triggerKey: function($vKey, $audio) {
    $vKey.addClass('green');
    $audio.currentTime = 0;

    if ($audio.paused) {
      $audio.play()
    }
    else {
      $audio.pause()
      $vKey.removeClass('green red');
    }
    event.preventDefault();
  },
  handleCtrlKey: function() {
    $('#bindingWindow').animate({height:'toggle'},350);
    $('#keyboardWindow').animate({width:'toggle'},350);
  },
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
      $vKey.removeClass('green red');
    }
  },
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
       <div id = "bindingWindow">
         <h3>Click on a file to change the binding of {this.state.changeKey.toUpperCase()} to</h3>
           <ul id="binding">
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

setInterval(function() {
  // $('#secretSound').animate({volume: 0}, 2000);
  document.getElementById('secretSound').pause();
  ReactDOM.render(<div>
    <App/>
    </div>, document.getElementById('app')
  );
}, 2000);
