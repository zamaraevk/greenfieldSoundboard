class Library extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentSoud: null,
      name: '',
      library: []
    }
    this.getCurrentSound = this.getCurrentSound.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  componentDidMount() {
    this.getSound('bass');
  }
  getCurrentSound(sound){
    console.log('getting sound name', sound);
    this.setState({
      currentSoud: sound
    })
  }
  handleNameChange(e) {
   this.setState({name: e.target.value});
  }
  handleSubmit(e) {
    e.preventDefault();
    console.log('name',this.state.name, this.state.currentSoud);
    var soundObject = { "name": this.state.name, "currentSoud": this.state.currentSoud}
    console.log("object being sent", soundObject);

    // $.post('/sound', {hey: 'hey'} ).done(function(data){
    //   console.log('HEEEY', data);
    // })
    $.ajax({
      type: 'POST',
      url: '/newSound',
      dataType: 'json',
      headers: {
        'Content-Type': 'application/json'
      },
      data: JSON.stringify(soundObject),
      success: function(data){
        console.log('success and ', data);
      },
      error: function(err){
        console.log('failed and ', err);
      }
    });
  }

  getSound(query) {
    var options = {
      key: '8mv3F2fRjY7HXptzrqlxrI5XLedmX862Pdp1rFnr',
      query: query
    };
    //bind this keyword, to have access to state
    var component = this;
    soundSearch(options, function(resp){
        console.log(resp);
        component.setState({
          library: resp
        })
    })
  }

  render() {
    //this.createKeyboard();
    console.log("yuck you", this.state.library)
    return (
      <div className="library-container">
        <div className="library-search">
          <h2 className="library">SOUND LIBRARY</h2>
          <Search handleInputSearch = {this.getSound.bind(this)} />
          <LibraryList library={this.state.library} getCurrentSound={this.getCurrentSound}/>
        </div>
        <div className="sound-save">
          <h2 className="library">SAVE SOUND</h2>
            <div className="sound-name">{this.state.currentSoud}</div>
             <form className="soundForm">
              <input
                className="new-name"
                type="text"
                onChange={this.handleNameChange}
                placeholder="New Sound Name..."
              />
            <pre>Hello = {this.state.name}</pre>
            <button onClick={this.handleSubmit}>Save Sound</button>
          </form>
        </div>
      </div>
      // <pre>nameOfCurrentSound = {this.state.nameOfCurrentSound}</pre>
    );
  }
}

ReactDOM.render(
  <Library />,
  document.getElementById('lib')
);
