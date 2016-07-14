'esversion: 6';

class Layout extends React.Component {
  render() {
    return (
      <div className="keyboard">
      <h1>Welcome to Soundboard!</h1>
      </div>
    );
  }
}

ReactDOM.render(
  <div>
  <Layout/>
  </div>, document.getElementById('app')
);
