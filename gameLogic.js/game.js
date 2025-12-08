import { createDeck } from "../utils/deck.js"
import { shuffle } from "../utils/deck.js"
import input from '../node_modules/analiza-sync/main.js'
import { hasSubscribers } from "diagnostics_channel"

function createPlayer(name) {
    if (name) {
        return {
            name: name,
            hand: [],
            wonPile: []
        }
    } else {
        return {
            name: 'AI',
            hand: [],
            wonPile: []
        }
    }
}

export function initGame() {
    const name =input('welcom to war game. what is your name? ')

    const player = createPlayer(name)
    const AI = createPlayer()
    const deck = createDeck()
    const shufelDeck = shuffle(deck)
    const arr = [player, AI]
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < 26; j++) {
            const card = shufelDeck.shift()
            arr[i].hand.push(card)
        }
    }
    return {
        shufelDeck,
        player,
        AI
    }
}

export function playRound(p1, p2) {
    const player = p1.hand.shift()
    const AI = p2.hand.shift()
    if (player.value > AI.value) {
        p1.wonPile.push(player, AI)
        console.log(p1.name,player ,p2.name,AI)
        console.log(`${p1.name} wone this round: `)
        console.log('==========================')
    }
    if (AI.value > player.value) {
        p2.wonPile.push(player, AI)
        console.log(p2.name,AI ,p1.name,player)
        console.log(`${p2.name} wone this round: `)
        console.log('===========================')
    }
    else {
    }
}
