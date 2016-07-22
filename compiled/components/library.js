'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Library = function (_React$Component) {
  _inherits(Library, _React$Component);

  function Library(props) {
    _classCallCheck(this, Library);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Library).call(this, props));

    _this.state = {
      library: []
    };
    return _this;
  }

  _createClass(Library, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.getSound('bass');
    }
  }, {
    key: 'getSound',
    value: function getSound(query) {
      var options = {
        key: '8mv3F2fRjY7HXptzrqlxrI5XLedmX862Pdp1rFnr',
        query: query
      };
      //bind this keyword, to have access to state
      var component = this;
      soundSearch(options, function (resp) {
        console.log(resp);
        component.setState({
          library: resp
        });
      });
    }
  }, {
    key: 'render',
    value: function render() {
      console.log("yuck you", this.state.library);
      return React.createElement(
        'div',
        { className: 'library-container' },
        React.createElement(
          'h2',
          { className: 'library' },
          'SOUND LIBRARY'
        ),
        React.createElement(Search, { handleInputSearch: this.getSound.bind(this) }),
        React.createElement(LibraryList, { library: this.state.library })
      );
    }
  }]);

  return Library;
}(React.Component);

ReactDOM.render(React.createElement(Library, null), document.getElementById('app'));