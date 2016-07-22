var soundSearch = ({key, query}, callback) => {
  $.get('http://www.freesound.org/apiv2/search/text/?'  + query + '&fields=name,previews' + key)
  .done(({results}) => {
    //console.log("hello", results);
    if (callback) {
      callback(results);
    }
  })
  .fail(({responseJSON}) => {
    responseJSON.error.errors.forEach((err) =>
      console.error(err)
    )
  });
};

window.soundSearch = soundSearch;
