var LibraryList = ({library}) => {
  console.log('I am in libraryList', library);
  var results = library;
  var audio = null;

  var playTrack = function(item){
    audio = new Audio(item);
    audio.play();
  // if(!audio){
  //   audio = new Audio(item);
  //   audio.play();
  // } else {
  //   audio.pause();
  //   audio = null;
  // }
}

  return (
    <div className="sound-library">
      <ul>
        {results.map(function(result) {
         return <li className="sound-item" key={results.indexOf(result)} onClick={() => playTrack(result.previews['preview-hq-mp3'])}></li>;
       })}
      </ul>
    </div>

  );
};

window.LibraryList = LibraryList;
