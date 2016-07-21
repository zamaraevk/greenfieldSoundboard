var soundSearch = ({key, query}, callback) => {
  $.get('http://www.freesound.org/apiv2/search/text/?query=', {
    q: query,
    key: key
  })
  .done(({items}) => {
    if (callback) {
      callback(items);
    }
  })
  .fail(({responseJSON}) => {
    responseJSON.error.errors.forEach((err) =>
      console.error(err)
    )
  });
};

window.searchYouTube = searchYouTube;
