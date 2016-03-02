var React = require('react');
var engineGame = require('./engineGame');

var ChessBoard = React.createClass({
  getInitialState: function() {
    return {
      baseTime: 5,
      increment: 2,
      playerColor: 'white',
      skillLevel: 0,
      displayScore: true
    };
  },
  componentDidMount: function() {
    this.engineGame = engineGame({ book: 'book.bin' });
    this.newGame();
  },
  newGame: function() {
    var game = this.engineGame;
    game.reset();
    game.setTime(this.state.baseTime * 60, this.state.increment);
    game.setSkillLevel(this.state.skillLevel);
    game.setPlayerColor(this.state.playerColor);
    game.setDisplayScore(this.state.displayScore);
    game.start();
  },
  changeStartPlayer: function(event) {
    this.setState({ playerColor: event.target.value });
    this.engineGame.setPlayerColor(this.state.playerColor);
  },
  changeSkillLevel: function(event) {
    this.setState({ skillLevel: event.target.value });
    this.engineGame.setSkillLevel(this.state.skillLevel);
  },
  changeBaseTime: function(event) {
    this.setState({ baseTime: event.target.value });
    this.engineGame.setTime(this.state.baseTime * 60, this.state.increment);
  },
  changeIncrement: function(event) {
    this.setState({ increment: event.target.value });
    this.engineGame.setTime(this.state.baseTime * 60, this.state.increment);
  },
  undoMove: function() {
    this.engineGame.undo();
  },
  render: function() {
    var options = [];
    for (var i = 0; i < 21; i++) {
      options.push(<option key={i} value={i}>{i}</option>);
    }
    return (
      <div className="chess">
        <div className="chess-opts">
          <button onClick={this.newGame}>New game</button>
          <div className="player-color">
            <span>Player: </span>
            <select value={this.state.playerColor} onChange={this.changeStartPlayer}>
              <option value="white">White</option>
              <option value="black">Black</option>
            </select>
          </div>
          <div className="skill-level">
            <span>Skill Level: </span>
            <select value={this.state.skillLevel} onChange={this.changeSkillLevel}>
              {options}
            </select>
          </div>
          <div className="time-per-move">
            <span>Time (min): </span>
            <input
              type="text"
              value={this.state.baseTime}
              onChange={this.changeBaseTime}
            />
          </div>
          <div className="time-per-move">
            <span>Increment (s): </span>
            <input
              type="text"
              value={this.state.increment}
              onChange={this.changeIncrement}
            />
          </div>
          <button onClick={this.undoMove}>Undo</button>
        </div>
        <div className="board-wrap">
          <span className="time" id="time1">0:05:00</span>
          <div id="board" style={{ width: 400 }} />
          <div className="below-board">
            <span className="time" id="time2">0:05:00</span>
            <span id="engine-status" className="engine-status">...</span>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = ChessBoard;
