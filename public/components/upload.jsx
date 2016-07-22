var Upload = React.createClass ({
  getInitialState: function() {
   return {value: 'Hello!'};
  },


  readFile: function(){
    var file = $('#audio').val();
    console.log("FILE", file);
    if(file){
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
  render: function(){
    return (
      <div>
        <h1> Upload file </h1>
        <form encType="multipart/form-data" method="post" onChange={console.log("form changed!")} action='/soundUpload'>
          <input id="audio" type="file" name='sound' accept='audio/*'/>
          <button onClick={this.readFile()}> Submit</button>
        </form>
      </div>
    )
  }
})

ReactDOM.render(<div>
  <Upload/>
  </div>, document.getElementById('upload')
);
