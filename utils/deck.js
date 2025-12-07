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

export function createDeck() {
    const RANKS = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A']
    const SUITS = ['H', 'C', 'D', 'S']
    const deck = []
    for (let i = 0; i < RANKS.length; i++) {
        for (let j = 0; j < SUITS.length; j++) {
            const card = createCard(RANKS[i], SUITS[j])
            deck.push(card)
        }
    }
    return deck
}

export function shuffle(deck) {
    for (let i = 0; i < 1000; i++) {
        let firstCard = Math.floor(Math.random() * createDeck().length)
        let secondCard = Math.floor(Math.random() * createDeck().length)
        if (firstCard === secondCard) {
            secondCard = Math.floor(Math.random() * createDeck().length)
            continue
        } else {
            [deck[firstCard], deck[secondCard]] = [deck[secondCard], deck[firstCard]]
        }
    }
    return deck
}

export const deck = shuffle(createDeck())
