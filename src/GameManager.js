const GameState = Object.freeze({
    ACTIVE: Symbol('active'),
    WAITING: Symbol('waiting'),
    FINISHED: Symbol('finished')
});

const Prompts = ['horse', 'beaver', 'chicken']

class GameManager {
    constructor(maxTurns) {
      this.players = [];
      this.currentTurnIndex = 0;
      this.gameState = GameState.WAITING;
      this.maxPlayers = 4;
      this.minPlayers = 3;
      this.maxPoints = 100;
      this.timeDecayFactor = 10;
      this.turnDuration = 60000;
      this.turnTimeout = null;
      this.maxTurns = maxTurns;
      this.currentPrompt = null;
    }
  
    addPlayer(player) {
      if (this.players.length < this.maxPlayers && this.gameState === GameState.WAITING) {
        this.players.push({ ...player, score: 0 });
        return true;
      }
      return false;
    }
  
    startGame() {
        this.gameState = GameState.ACTIVE;
        this.nextTurn();
    }

    endGame() {
        winner = this.players.reduce((a, b) => a.score > b.score ? a : b);
        this.resetGame();
        return winner;
    }

    makeGuess(playerId, guess) {
        if (guess.toLowerCase() === this.currentPrompt) {
            score = this.maxPoints * this.turnDuration / (new Date() - this.turnTimeout);
            this.updateScore(playerId, score);
        }
    }

    randPrompt() {
        return Prompts[Math.floor(Math.random() * Prompts.length)];
    }

    nextTurn() {
      clearTimeout(this.turnTimeout);
      
      this.currentTurnIndex++;
      this.currentPrompt = this.randPrompt();

      if (this.currentTurnIndex >= this.maxTurns) {
        this.endGame();
        return;
      }
    }
  
    updateScore(playerId, points) {
      const player = this.players.find(p => p.id === playerId);
      if (player) {
        player.score += points;
      }
    }
  
    resetGame() {
      this.players = [];
      this.currentTurnIndex = 0;
      this.gameState = GameState.WAITING;
      clearTimeout(this.turnTimeout);
    }
  }
  
  export default GameManager;
  