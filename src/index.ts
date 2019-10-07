import * as inquirer from 'inquirer';
import { play as playSnake } from './snake';

const games = {
  snake: playSnake,
};

inquirer
  .prompt([
    {
      type: 'list',
      name: 'game',
      message: 'What game do you want to play?',
      choices: ['snake'],
    },
  ])
  .then(answers => {
    if (!answers || !answers.game) {
      console.warn('Choose a game');
    }

    const playGame = games[answers.game];

    if (!playGame) {
      console.warn(`No Game ${answers.game} found`);
    }

    playGame();
  });
