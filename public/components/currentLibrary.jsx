class CurrentLibrary extends React.Component{
  constructor(props) {
    super(props);

    this.state = {
      library: []
    }
    this.bindKey = this.bindKey.bind(this);
  }
  componentDidMount() {
    this.getLibrary();
  }

  getLibrary() {
    $.get('/soundLibrary', function (sounds) {
     this.setState({
       library: sounds
     });
   }.bind(this));
 }

  bindKey(idx) {
    console.log("bindKey called");
    console.log("index of song", idx);
    var name = this.state.library[idx].name;
    if(this.state.library[idx].uploaded){
      console.log("song was uploaded...")
      $.ajax({
        method: "POST",
        headers: {
          'Content-Type': 'json'
        },
        data: {
          "name": name
        }
      }).done(function(){
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
  }

  render(){
    return(
      <div>
        <h1> CURRENT LIBRARY </h1>
        <ul>
          {this.state.library.map(function(sound, index){
            return <li key={index}> Name: {sound.name} Link: {sound.soundLink} <button onClick={this.bindKey(index)}> Bind Key </button>
             </li>
          })}
        </ul>
    </div>
    )
  }

}
ReactDOM.render(
  <CurrentLibrary />,
  document.getElementById('currentLib')
);
