//RebindNode React class.  Represents one entry in the drop-down list for rebinding keys.
var RebindNode = React.createClass({
  //this is the function that actually changes the binding of the key.
  updateKeyBinding: function(event) {
    var code = this.props.targetKey.charCodeAt();

    //this.props.targetSong  is going to be entire song object
    // var path = "/soundfiles/" + this.props.targetSong;
    var path = this.props.targetSong.soundLink;

    this.props.bindings.forEach(function (ele, idx) {
      if (ele.key === code) {
        this.props.bindings[idx].path = path;
      }
    }, this);
  },
  //method for previewing sound before binding it.
  playSample: function() {
    var soundExample = this.props.targetSong.soundLink;

  },
  bindKey: function(song) {
    console.log("bindKey called");
    console.log("index of song", song);
    if(song.uploaded){
      console.log("song was uploaded...")
      $.ajax({
        type: "POST",
        url: '/soundDownload',
        headers: {
          'Content-Type': 'application/json'
        },
        data: JSON.stringify({"name": song.name})
      }).done(function(){
        this.props.reRender()
        console.log("song downloaded")
      })
      .fail(function(err){
        console.log("song not downloaded", err);
      })
    }
    else{
      console.log("song was not uplaoded");
      //bind key to link
    }
  },
  render: function() {
    return (
      <div className="rebindNode" onClick = {this.updateKeyBinding}>
        <p className="rebindSong" onClick = {this.props.reRender}>{this.props.targetSong.name}</p>
        <img className="rebindIcon" src="assets/listen.png" onClick={this.playSample}/>
      </div>
    )
  }
});
//

//this is actually not needed. Just remember that you might need to do this someday.
window.rebindNode = RebindNode;
