import { GameConfig } from './config.js';

// Create the game instance
const game = new Phaser.Game(GameConfig);

// Handle window resize
window.addEventListener('resize', () => {
    game.scale.refresh();
});
