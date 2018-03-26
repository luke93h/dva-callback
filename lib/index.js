"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require("babel-runtime/regenerator");

var _regenerator2 = _interopRequireDefault(_regenerator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ALIAS = 'callback';

function createCallback() {
  var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  var alias = opts.alias || ALIAS;
  function onEffect(effect, _ref, model, actionType) {
    var put = _ref.put;
    var namespace = model.namespace;

    return (/*#__PURE__*/_regenerator2.default.mark(function _callee() {
        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        var cb;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return effect.apply(undefined, args);

              case 2:
                cb = args[0][alias];

                if (cb && typeof cb === "function") {
                  cb();
                }

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      })
    );
  }
  return {
    onEffect: onEffect
  };
}

exports.default = createCallback;
module.exports = exports["default"];