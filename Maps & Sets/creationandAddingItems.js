let cardAce = {
    name: 'Ace os Spades'
};

let cardKing = {
    name: 'King of clubs'
};

let cardQueen = {
    name: 'Queen of clubs'
};

let deck = new Map();
deck.set('as', cardAce);
deck.set('ks', cardKing);
deck.set('qe', cardQueen);

for (key of deck.keys()) {
    console.log(key);
}

for (value of deck.values()) {
    // parseInt(value, 10);
    // console.log(value.length);
    console.log(value);
}


// console.log(deck.size);

// deck.delete('as');

// deck.clear()

//
// console.log(deck.size);

// console.log(deck.get('qe'));

// console.log(deck.keys());