var Upload = React.createClass ({

  render: function(){
    return (
      <div>
        <h1> Upload file </h1>
        <form encType="multipart/form-data" action="/upload/image" method="post">
          <input id="image-file" type="file" />
      </form>
      </div>
    )
  }
})

ReactDOM.render(<div>
  <Upload/>
  </div>, document.getElementById('upload')
);
