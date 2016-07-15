'esversion: 6';

class Layout extends React.Component {
  render() {
    return (
      <div className="keyboard">
        <h1>Welcome to Soundboard!</h1>
        <img src="assets/tumblr_luxr3mmGVw1r1sjguo1_400.gif">
      </div>
    );
  }
}

ReactDOM.render(
  <div>
  <Layout/>
  </div>, document.getElementById('app')
);
