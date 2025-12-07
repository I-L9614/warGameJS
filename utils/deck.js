function createCard(rank,suite) {
    const specielRank ={
        A:14,
        K:13,
        Q:12,
        J:11
    }
    let value = +rank;
    if(Number.isNaN(value)) {
        value = specielRank[rank]
    }

    return {
        rank,
        suite,
        value
    }
}

function compareCards(p1Card,p2Card) {

}

function createDeck() {

}

function shuffle(deck) {

}
