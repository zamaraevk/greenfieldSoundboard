class Library extends React.Component {
  constructor(props) {
    super(props);

    this.state = {

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

    soundSearch(options, function(resp){
      console.log(resp);
    })
  }

  render() {
    return (
      <div>
        Helloooooooo
      <pre>{}</pre>
      </div>
    );
  }
}

ReactDOM.render(
  <Library />,
  document.getElementById('app')
);
