var LibraryListEntry = () => (
  <div className="sound-entry">
    <ul>
      <li>
        {this.props.library}
      </li>
    </ul>
  </div>
);

window.LibraryListEntry = LibraryListEntry;
