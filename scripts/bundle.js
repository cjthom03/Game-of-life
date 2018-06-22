/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./scripts/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./scripts/actions.js":
/*!****************************!*\
  !*** ./scripts/actions.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setEventListeners = undefined;

var _sidebar_actions = __webpack_require__(/*! ./sidebar_actions */ "./scripts/sidebar_actions.js");

var _sidebar_actions2 = _interopRequireDefault(_sidebar_actions);

var _utils = __webpack_require__(/*! ./utils */ "./scripts/utils.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var setEventListeners = exports.setEventListeners = function setEventListeners(game) {
  startButtonEvents(game);
  (0, _utils.addEvent)('#pause', function () {
    return game.pause();
  });
  (0, _utils.addEvent)('#play', function () {
    return game.play();
  });
  (0, _utils.addEvent)('#clear', function () {
    return game.clearBoard();
  });
  (0, _utils.addEvent)('#speed', function (e) {
    return changeSpeed(e, game);
  }, 'change');
  (0, _utils.addEvent)('#rules', function (e) {
    return changeRules(e, game);
  }, 'change');
  var sidebar = new _sidebar_actions2.default(game);
};

var startButtonEvents = function startButtonEvents(game) {
  var startButton = document.querySelector('#start');

  startButton.addEventListener('click', function () {
    var parent = startButton.parentElement;
    startButton.addEventListener('animationend', function () {
      parent.classList.add('hide');
    });

    var children = document.querySelectorAll('.title-wrapper > div');
    children.forEach(function (child) {
      child.classList.remove('animated', 'fadeInDown');
      child.classList.add('animated', 'fadeOutUp');
    });

    (0, _utils.addEvent)('#toggle-sidebar', function () {
      return toggleSidebar();
    });
    game.start();
  });
};

var toggleSidebar = function toggleSidebar() {
  var sidebar = document.querySelector('.sidebar');
  var button = document.querySelector('#toggle-sidebar');
  sidebar.classList.remove('hide');
  if ([].concat(_toConsumableArray(sidebar.classList)).includes('slideInLeft')) {
    sidebar.classList.remove('slideInLeft');
    sidebar.classList.add('slideOutLeft');
  } else {
    sidebar.classList.remove('slideOutLeft');
    sidebar.classList.add('slideInLeft');
  }

  if ([].concat(_toConsumableArray(button.classList)).includes('fa-plus')) {
    button.classList.remove('fa-plus');
    button.classList.add('fa-chevron-circle-left');
  } else {
    button.classList.remove('fa-chevron-circle-left');
    button.classList.add('fa-plus');
  }
};

var changeSpeed = function changeSpeed(e, game) {
  game.speed = e.target.value;
  if (game.playInterval) {
    game.pause();
    game.play();
  }
};

var changeRules = function changeRules(e, game) {
  game.changeRules(e.target.value);
};

/***/ }),

/***/ "./scripts/board.js":
/*!**************************!*\
  !*** ./scripts/board.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _board_actions = __webpack_require__(/*! ./board_actions */ "./scripts/board_actions.js");

var BoardActions = _interopRequireWildcard(_board_actions);

var _cell = __webpack_require__(/*! ./cell */ "./scripts/cell.js");

var _cell2 = _interopRequireDefault(_cell);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Board = function () {
  function Board(rules) {
    _classCallCheck(this, Board);

    this.rows = 70;
    this.cols = 100;
    this.grid = [];
    this.createBoard();
    this.rules = rules;
  }

  _createClass(Board, [{
    key: 'getEvent',
    value: function getEvent(eventName, targetCell) {
      switch (eventName) {
        case "#add-row":
          return BoardActions.addRow(targetCell, this);
        case "#add-col":
          return BoardActions.addCol(targetCell, this);
        case "#glider":
          return BoardActions.addShape(BoardActions.GliderPos, targetCell, this);
        case "#gun":
          return BoardActions.addShape(BoardActions.GunPos, targetCell, this);
        case "#spaceship":
          return BoardActions.addShape(BoardActions.SpacePos, targetCell, this);
        default:
          return;
      }
    }
  }, {
    key: 'createBoard',
    value: function createBoard() {
      var gameBoard = document.querySelector('.game-board');

      for (var i = 0; i < this.rows; i++) {
        var newUl = document.createElement("ul");
        var row = [];
        for (var j = 0; j < this.cols; j++) {
          var newLi = document.createElement("li");
          newLi.classList.add('cell');
          newLi.id = i + ',' + j;
          newUl.appendChild(newLi);

          var cell = new _cell2.default(i, j);
          row.push(cell);
        }
        this.grid.push(row);
        gameBoard.appendChild(newUl);
      }
    }
  }, {
    key: 'randomClusters',
    value: function randomClusters() {
      var _this = this;

      var numCenterCells = Math.floor(Math.random() * 25 + 25);
      var centerCells = [],
          clusterCells = [];
      var minDis = 20,
          maxDis = 10;

      for (var i = 0; i < numCenterCells; i++) {
        var x = Math.floor(Math.random() * 70);
        var y = Math.floor(Math.random() * 100);
        var validCell = true;

        for (var j = 0; j < centerCells.length; j++) {
          var xDiff = Math.abs(centerCells[j].row - x) <= minDis;
          var yDiff = Math.abs(centerCells[j].col - y) <= minDis;
          if (xDiff && yDiff) {
            validCell = false;
            break;
          }
        }

        if (validCell) {
          var centerCell = this.grid[x][y];
          centerCells.push(centerCell);
          var numClusterCells = Math.floor(Math.random() * 10 + 20);
          for (var k = 0; k < numClusterCells; k++) {
            var a = Math.floor(Math.random() * 10 + 1) * (Math.random() < 0.5 ? -1 : 1);
            var b = Math.floor(Math.random() * 10 + 1) * (Math.random() < 0.5 ? -1 : 1);

            var newX = (centerCell.row + a) % this.rows;
            newX = newX < 0 ? newX + this.rows : newX;

            var newY = (centerCell.col + b) % this.cols;
            newY = newY < 0 ? newY + this.cols : newY;

            clusterCells.push(this.grid[newX][newY]);
          }
        }
      }

      var randomCells = centerCells.concat(clusterCells);

      randomCells.forEach(function (cell) {
        var newState = 1;
        if (_this.rules === 'brightlife') newState += Math.floor(Math.random() * 6 + 1);
        _this.grid[cell.row][cell.col].state = newState;
        var currentCell = document.getElementById(cell.row + ',' + cell.col);
        cell.updateClass(currentCell);
      });

      return randomCells;
    }
  }, {
    key: 'getStates',
    value: function getStates() {
      var allStates = [];
      this.grid.forEach(function (row) {
        var rowOfStates = [];
        row.forEach(function (cell) {
          rowOfStates.push(cell.state);
        });
        allStates.push(rowOfStates);
      });
      return allStates;
    }
  }, {
    key: 'setStates',
    value: function setStates(cells, state) {
      cells.forEach(function (cell) {
        cell.state = state;
      });
    }
  }, {
    key: 'updateBoard',
    value: function updateBoard() {
      var _this2 = this;

      var oldGrid = this.getStates();

      this.grid.forEach(function (row, i) {
        row.forEach(function (cell, j) {
          cell.updateState(oldGrid, _this2.rows, _this2.cols, _this2.rules);

          if (cell.state !== oldGrid[i][j]) {
            var currentCell = document.getElementById(cell.row + ',' + cell.col);
            cell.updateClass(currentCell);
          }
        });
      });
    }
  }, {
    key: 'clearBoard',
    value: function clearBoard() {
      var _this3 = this;

      this.grid.forEach(function (row) {
        _this3.setStates(row, 0);
      });

      document.querySelectorAll('.alive').forEach(function (cell) {
        cell.classList.remove('alive');
      });
    }
  }]);

  return Board;
}();

exports.default = Board;

/***/ }),

/***/ "./scripts/board_actions.js":
/*!**********************************!*\
  !*** ./scripts/board_actions.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var GliderPos = exports.GliderPos = [[-1, -1], [-1, 0], [-1, 1], [0, 1], [1, 0]];
var GunPos = exports.GunPos = [[0, -17], [-1, -17], [0, -16], [-1, -16], [0, -7], [-1, -7], [-2, -7], [1, -6], [-3, -6], [2, -5], [-4, -5], [2, -4], [-4, -4], [-1, -3], [1, -2], [-3, -2], [0, -1], [-1, -1], [-2, -1], [-1, 0], [2, 3], [1, 3], [0, 3], [2, 4], [1, 4], [0, 4], [3, 5], [-1, 5], [4, 7], [3, 7], [-1, 7], [-2, 7], [2, 17], [1, 17], [2, 18], [1, 18]];
var SpacePos = exports.SpacePos = [[5, -3], [5, -2], [5, 1], [5, 2], [4, -1], [4, 0], [3, -1], [3, 0], [2, -4], [2, -2], [2, 1], [2, 3], [1, -4], [1, 3], [-1, -4], [-1, 3], [-2, -3], [-2, -2], [-2, 1], [-2, 2], [-3, -2], [-3, -1], [-3, 0], [-3, 1], [-5, -1], [-5, 0], [-6, -1], [-6, 0]];

var addRow = exports.addRow = function addRow(targetCell, board) {
  var row = Number(targetCell.id.split(',')[0]);
  var cells = board.grid[row];
  bringThemToLife(board, cells);
};

var addCol = exports.addCol = function addCol(targetCell, board) {
  var col = Number(targetCell.id.split(',')[1]);
  var cells = [];
  board.grid.forEach(function (row) {
    return cells.push(row[col]);
  });
  bringThemToLife(board, cells);
};

var addShape = exports.addShape = function addShape(positions, targetCell, board) {
  var pos = targetCell.id.split(',');
  var row = Number(pos[0]),
      col = Number(pos[1]);
  var cells = [];

  positions.forEach(function (posDiff) {
    var x = (row + posDiff[0]) % board.rows;
    var y = (col + posDiff[1]) % board.cols;
    x = x < 0 ? x + board.rows : x;
    y = y < 0 ? y + board.cols : y;
    cells.push(board.grid[x][y]);
  });

  bringThemToLife(board, cells);
};

var bringThemToLife = function bringThemToLife(board, cells) {

  cells.forEach(function (cell) {
    var newState = 1;
    if (board.rules === 'brightlife') newState += Math.floor(Math.random() * 6 + 1);
    cell.state = newState;
    var currentCell = document.getElementById(cell.row + ',' + cell.col);
    cell.updateClass(currentCell);
  });
};

/***/ }),

/***/ "./scripts/cell.js":
/*!*************************!*\
  !*** ./scripts/cell.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var offsets = [[-1, 1], [0, 1], [1, 1], [1, 0], [1, -1], [0, -1], [-1, -1], [-1, 0]];

var cellClasses = {
  2: "orange",
  3: "blue",
  4: "red",
  5: "yellow",
  6: "green",
  7: "purple"
};

var Cell = function () {
  function Cell(row, col) {
    var state = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;

    _classCallCheck(this, Cell);

    this.row = row;
    this.col = col;
    this.state = state; // 0 = dead, 1 = alive
  }

  _createClass(Cell, [{
    key: "updateState",
    value: function updateState(oldGrid, numRows, numCols, rule) {
      var that = this;
      var numAlive = 0;
      var neighborStates = [];
      offsets.forEach(function (pos) {
        var x = (that.row + pos[0]) % numRows;
        var y = (that.col + pos[1]) % numCols;
        x = x < 0 ? x + numRows : x;
        y = y < 0 ? y + numCols : y;
        if (oldGrid[x][y] > 0) {
          numAlive++;
          neighborStates.push(oldGrid[x][y]);
        }
      });

      switch (rule) {
        case 'life':
          return this.state = this.lifeRules(numAlive);
        case 'brightlife':
          var nextState = this.getNextState(neighborStates);
          return this.state = this.brightlifeRules(numAlive, nextState);
        default:
          this.state = this.lifeRules(numAlive);
      }
    }
  }, {
    key: "getNextState",
    value: function getNextState(neighborStates) {
      var sortedStates = neighborStates.sort(function (a, b) {
        return a - b;
      });
      for (var i = 0; i < sortedStates.length; i++) {
        if (sortedStates[i] === sortedStates[i + 1]) return sortedStates[i];
      }
      return 1;
    }
  }, {
    key: "lifeRules",
    value: function lifeRules(numAlive) {
      var newState = this.state;
      if (numAlive < 2 || numAlive > 3) {
        newState = 0;
      } else if (numAlive === 3) {
        newState = 1;
      }

      if (newState > 1) newState = 1;
      return newState;
    }
  }, {
    key: "brightlifeRules",
    value: function brightlifeRules(numAlive, nextState) {
      var newState = this.state;
      if (numAlive < 2 || numAlive > 3) {
        newState = 0;
      } else if (numAlive === 3) {
        newState = nextState;
      }

      if (newState === 1) newState += Math.floor(Math.random() * 6 + 1);
      return newState;
    }
  }, {
    key: "updateClass",
    value: function updateClass(domCell) {
      domCell.classList.remove('alive', 'red', 'blue', 'green', 'orange', 'purple', 'yellow');

      if (this.state >= 1) {
        domCell.classList.add('alive');
        if (cellClasses[this.state]) domCell.classList.add(cellClasses[this.state]);
      }
    }
  }]);

  return Cell;
}();

exports.default = Cell;

/***/ }),

/***/ "./scripts/game.js":
/*!*************************!*\
  !*** ./scripts/game.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _board = __webpack_require__(/*! ./board */ "./scripts/board.js");

var _board2 = _interopRequireDefault(_board);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Game = function () {
  function Game() {
    _classCallCheck(this, Game);

    this.currentEvent = null;
    this.speed = document.querySelector('#speed').value;
    this.domBoard = document.querySelector('#board');

    var rules = document.querySelector('#rules').value;
    this.board = new _board2.default(rules);
  }

  _createClass(Game, [{
    key: 'changeRules',
    value: function changeRules(newRule) {
      this.board.rules = newRule;
    }
  }, {
    key: 'start',
    value: function start() {
      this.board.randomClusters();
      this.board.randomClusters();
      this.board.randomClusters();
      this.play();
    }
  }, {
    key: 'play',
    value: function play() {
      var _this = this;

      if (!this.playInterval) {
        this.playInterval = setInterval(function () {
          _this.board.updateBoard();
        }, this.speed);
      }
    }
  }, {
    key: 'pause',
    value: function pause() {
      if (this.playInterval) {
        clearInterval(this.playInterval);
        this.playInterval = null;
      }
    }
  }, {
    key: 'clearBoard',
    value: function clearBoard() {
      this.board.clearBoard();
    }
  }, {
    key: 'randomSeeds',
    value: function randomSeeds() {
      return this.board.randomClusters();
    }
  }, {
    key: 'setEvent',
    value: function setEvent(eventName) {
      var _this2 = this;

      this.domBoard.removeEventListener('click', this.currentEvent);
      this.currentEvent = function (e) {
        return _this2.board.getEvent(eventName, e.target);
      };
      this.domBoard.addEventListener('click', this.currentEvent);
    }
  }]);

  return Game;
}();

exports.default = Game;

/***/ }),

/***/ "./scripts/index.js":
/*!**************************!*\
  !*** ./scripts/index.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _game = __webpack_require__(/*! ./game */ "./scripts/game.js");

var _game2 = _interopRequireDefault(_game);

var _actions = __webpack_require__(/*! ./actions */ "./scripts/actions.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

document.addEventListener('DOMContentLoaded', function () {
  var game = new _game2.default();
  (0, _actions.setEventListeners)(game);
});

/***/ }),

/***/ "./scripts/sidebar_actions.js":
/*!************************************!*\
  !*** ./scripts/sidebar_actions.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _utils = __webpack_require__(/*! ./utils */ "./scripts/utils.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var SidebarActions = function () {
  function SidebarActions(game) {
    var _this = this;

    _classCallCheck(this, SidebarActions);

    this.game = game;
    this.currentEvent = null;
    (0, _utils.addEvent)('#seeds', function () {
      return game.randomSeeds();
    });
    (0, _utils.addEvent)('#add-row', function () {
      return _this.setEvent('#add-row');
    });
    (0, _utils.addEvent)('#add-col', function () {
      return _this.setEvent('#add-col');
    });
    (0, _utils.addEvent)('#glider', function () {
      return _this.setEvent('#glider');
    });
    (0, _utils.addEvent)('#gun', function () {
      return _this.setEvent('#gun');
    });
    (0, _utils.addEvent)('#spaceship', function () {
      return _this.setEvent('#spaceship');
    });
  }

  _createClass(SidebarActions, [{
    key: 'setEvent',
    value: function setEvent(eventName) {
      this.changeEvent(eventName);
      this.game.setEvent(eventName);
    }
  }, {
    key: 'changeEvent',
    value: function changeEvent(newEvent) {
      if (this.currentEvent) {
        document.querySelector(this.currentEvent).classList.remove('animated', 'infinite', 'pulse', 'active-action');
      }
      document.querySelector(newEvent).classList.add('animated', 'infinite', 'pulse', 'active-action');
      this.currentEvent = newEvent;
    }
  }]);

  return SidebarActions;
}();

exports.default = SidebarActions;

/***/ }),

/***/ "./scripts/utils.js":
/*!**************************!*\
  !*** ./scripts/utils.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var addEvent = exports.addEvent = function addEvent(selector, callback) {
  var type = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'click';

  document.querySelector(selector).addEventListener(type, callback);
};

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map