var soundSearch = ({key, query}, callback) => {
  $.get('http://www.freesound.org/apiv2/search/text/?', {
    query: query,
    token: key
  })
  .done(({results}) => {
    console.log("hello", results);
    // if (callback) {
    //   callback(items);
    // }
  })
  .fail(({responseJSON}) => {
    responseJSON.error.errors.forEach((err) =>
      console.error(err)
    )
  });
};

window.soundSearch = soundSearch;
