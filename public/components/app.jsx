

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
  handleAudioEnd: function(event) {
    var $vKey = $('#' + this.props.targetKey).parent();
    $vKey.removeClass('green');
    $vKey.removeClass('red');
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
    var song = "/soundfiles/" + this.props.targetSong;

    this.props.bindings.forEach(function (ele, idx) {
      if (ele.key === code) {
        this.props.bindings[idx].path = song;
      }
    }, this);
  },
  render: function() {
    return (
      <div onClick = {this.updateKeyBinding}>
        <p> {this.props.targetSong.slice(0, -4)} </p>
      </div>
    )
  }
});
var App = React.createClass({
  // componentDidMount: function(event) {
  //   $('.loading').hide();
  // },
  getInitialState: function(){
    return {
      bindings: [],
      soundList: [],
      changeKey: ""
    }
  },
  componentDidMount: function() {
    this.serverRequest = $.get("http://localhost:8000/sounds", function (result) {
      this.setState({
        soundList: result,
      });
    }.bind(this));

    this.setState({
      bindings: qwertyMap.map(function(key) {
        return key !== 0
          ? {key: key, path: testData[key], loop: false, playing: false}
          : 0;
      })
    })
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

    if (event.altKey) {
      if (keyNumber < 123 && keyNumber > 96) {
        this.setState({changeKey: key})
        this.handleAltKey();
      }
    } else if (event.shiftKey) {
      $vKey.addClass('red');
      this.handleShiftKey($audio);
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
      $vKey.removeClass('green');
      $vKey.removeClass('red');
    }
    event.preventDefault();
  },
  handleAltKey: function() {
    //insert logic for showing/hiding the divs.
  },
  handleShiftKey: function($audio) {
    $audio.loop = !$audio.loop
    $audio.currentTime = 0;
    $audio.paused ? $audio.play() : $audio.pause();
  },
  reRender: function() {
    ReactDOM.render(<div>
      <App/>
      </div>, document.getElementById('app')
    );
  },
  render: function() {

   return (
     <div id="appWindow">
       <div id = "bindingWindow" className="keyboard">
         <h1>Click on a sound that you would like to change the binding of {this.state.changeKey} to</h1>
           <ul onClick = {this.reRender}>
           {
             this.state.soundList.map(function (sound, idx) {
               return <RebindNode key={idx} targetSong = {sound} targetKey = {this.state.changeKey} bindings = {this.state.bindings}/>;
             }, this)
           }
           </ul>
       </div>
       <div className="keyboard">
       {
         this.state.bindings.map(function(keyBinding, idx) {
           if (keyBinding === 0) {
             return <br key={idx}/>
           } else {
             return <VKey key={idx} keyId = {keyBinding.key} path={keyBinding.path}/>
           }
         })
       }
       </div>
     </div>
   )
 }
})

ReactDOM.render(<div>
  <App/>
  </div>, document.getElementById('app')
);
