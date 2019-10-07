"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var inquirer = require("inquirer");
var snake_1 = require("./snake");
var games = {
    snake: snake_1.play,
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
    .then(function (answers) {
    if (!answers || answers.game) {
        throw new Error('Choose game');
    }
    var playGame = games[answers.game];
    if (!playGame) {
        throw new Error("No Game " + answers.game + " found");
    }
    playGame();
});
//# sourceMappingURL=index.js.map