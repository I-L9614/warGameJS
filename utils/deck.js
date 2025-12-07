export function createCard(rank, suite) {
    const specielRank = {
        A: 14,
        K: 13,
        Q: 12,
        J: 11
    }
    let value = +rank;
    if (Number.isNaN(value)) {
        value = specielRank[rank]
    }

    return {
        rank,
        suite,
        value
    }
}

export function compareCards(p1Card, p2Card) {
    if (p1Card.value > p2Card.value) {
        return p1
    }
    if (p2Card.value > p1Card.value) {
        return 'p2'
    }
    else {
        return 'WAR'
    }
}
const RANKS = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A']
const SUITS = ['H', 'C', 'D', 'S']

export function createDeck() {
    let desk = []
    for (let i = 0; i < RANKS.length; i++) {
        for (let j = 0; j < SUITS.length; j++) {
            let card = createCard(RANKS[i], SUITS[j])
            desk.push(card)
        }
    }
    return desk
}

function shuffle(deck) {

}
console.log(createDeck().length)