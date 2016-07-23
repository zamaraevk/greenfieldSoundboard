'use strict';

var Upload = React.createClass({
  displayName: 'Upload',

  getInitialState: function getInitialState() {
    return { value: 'Hello!' };
  },

  readFile: function readFile() {
    var file = $('#audio').val();
    console.log("FILE", file);
    if (file) {
      console.log("file", file.val());
    }
    var reader = new FileReader();
    // reader.onload = function(e)
    // {
    //     document.getElementById('outputDiv').innerHTML = e.target.result;
    // };
    console.log("hi");
    console.log("READER", reader);
    // console.log("FILE READING", reader(file));
  },
  render: function render() {
    return React.createElement(
      'div',
      null,
      React.createElement(
        'h1',
        null,
        ' Upload file '
      ),
      React.createElement(
        'form',
        { encType: 'multipart/form-data', method: 'post', action: '/soundUpload' },
        React.createElement('input', { id: 'audio', type: 'file', name: 'sound', accept: 'audio/*' }),
        React.createElement(
          'button',
          { onClick: this.readFile() },
          ' Submit'
        )
      )
    );
  }
});

ReactDOM.render(React.createElement(
  'div',
  null,
  React.createElement(Upload, null)
), document.getElementById('upload'));