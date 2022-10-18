let cardAce = {
    name: 'Ace of Spades'
};

let cardKing = {
    name: 'King of Clubs'
};

let  deck = new Map();
deck.set('as', cardAce);
deck.set('kc', cardKing);

for (key of deck.keys()){
    console.log(key, "\n");
}
for (value of deck.values()) {
    console.log(value, "\n");
}
for (entry of deck.entries()){
    console.log(entry,"\n");
}

for (entry of deck){
    console.log(entry, "\n");
}
