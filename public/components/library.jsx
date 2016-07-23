class Library extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentSoud: null,
      nameOfCurrentSound: null,
      library: []
    }
    this.getCurrentSound = this.getCurrentSound.bind(this);
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
  handleInputChange(e) {
    this.setState({
      nameOfCurrentSound: e.target.value
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
            <div className="sound-name">{this.state.currentSoud}</div>
              <input
                type="text"
                nameOfCurrentSound={this.state.nameOfCurrentSound}
                onChange={this.handleInputChange.bind(this)}
              />
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
