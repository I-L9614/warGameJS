
import { initGame } from './gameLogic.js/game.js'
import input from './node_modules/analiza-sync/main.js'
import { playRound } from './gameLogic.js/game.js'

function game() {
    const start = initGame()
    while (start.player.hand.length) {
        playRound(start.player, start.AI)
    }
    if (start.player.wonPile.length > start.AI.wonPile.length) {
        return `the winner is ${start.player.name}: congrats`
    }
    if (start.AI.wonPile.length > start.player.wonPile.length) {
        return `the winner is ${start.AI.name}: congrats`
    }
    else {
        console.log(start.AI.wonPile.length)
        return "no one is the winner: good game"
    }


}


const play = game()
console.log(play)