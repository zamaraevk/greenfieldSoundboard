class Library extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      library: []
    };
  }
  componentDidMount() {
    this.getSound('bass');
  }

  getSound(query) {
    var options = {
      key: '8mv3F2fRjY7HXptzrqlxrI5XLedmX862Pdp1rFnr',
      query: query
    };
    //bind this keyword, to have access to state
    var component = this;
    soundSearch(options, function(resp){
        component.setState({
          library: resp
        })
    })
  }

  render() {
    console.log("yuck you", this.state.library)
    return (
      <div>
        <LibraryList library={this.state.library}/>
      </div>
    );
  }
}

ReactDOM.render(
  <Library />,
  document.getElementById('app')
);
