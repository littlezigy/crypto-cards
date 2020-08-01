let loadGame = function() {
    /*
    cardDeckContract.events.DeckReady({
    }, function(error, event) {
        console.log('EVENTT', event);
    })
    .on('data', function(event) {
        return cards.init({ table: '#card-table', type: STANDARD })
        .then(res => {
            startGame();
        });
    });

    let from = web3.eth.defaultAccount;
    return blackjackContract.methods.shuffleDeck().send({from})
    */
}

let startGame = function() {
//Tell the library which element to use for the table
cards.init({ table: '#card-table', type: STANDARD });

//Create a new deck of cards
deck = new cards.Deck();
//By default it's in the middle of the container, put it slightly to the side
deck.x -= 25;
deck.y -= 125;

console.log('ALL CARDS LETS SEE', cards);
//cards.all contains all cards, put them all in the deck
deck.addCards(cards.all);
//No animation here, just get the deck onto the table.
deck.render({ immediate: true });

//Now lets create a couple of hands, one face down, one face up.
upperhand = new cards.Hand({ faceUp: true, x: 0, y: 340 });//player2
lowerhand = new cards.Hand({ faceUp: true, x: 80, y: 340 });//player1
dealerhand = new cards.Hand({ faceUp: true });
dealerhand.x += 50;

//Let's deal when the Deal button is pressed:
$('#deal').click(function () {
	//Deck has a built in method to deal to hands.
	$('#deal').hide();
	// deck.deal(1, [upperhand, lowerhand], 50, function() {
	deck.deal(1, [upperhand, lowerhand, dealerhand], 700, function () {
		//This is a callback function, called when the dealing
		//is done.
		// dealerhand.addCard(deck.topCard());
        deck.deal(1, [upperhand, lowerhand, dealerhand], 700, function() {
            dealerhand.render();
            calculateScores();
        });
	});
    calculateScores();
});
let playerScore1 = document.getElementById('score1');
let playerScore2 = document.getElementById('score2');
let dealerScore = document.getElementById('dealerscore');

//hit player1
$('#hit1').click(function (card) {
	lowerhand.addCard(deck.topCard());
	lowerhand.render();
	console.log(card);

	dealerhand.addCard(deck.topCard());
	dealerhand.render();

    calculateScores();
});

let calculateScores = function() {
    // Add up cards
    let player1Score = 0;
    let player2Score = 0;
    let dealerScore = 0;

    for(let _card in lowerhand) {
        if( !isNaN(parseInt(_card)) )
            player1Score += lowerhand[_card].rank;
    }

    for(let _card in dealerhand) {
        if( !isNaN(parseInt(_card)) )
            dealerScore += dealerhand[_card].rank;
    }

    for(let _card in upperhand) {
        if( !isNaN(parseInt(_card)) )
            player2Score += upperhand[_card].rank;
    }

    playerScore1.innerHTML = player1Score;
    playerScore2.innerHTML = player2Score;

    //if any dealer score > 21, or player 1 score = 21, player 1 wins
    if(player1Score === 21 || dealerScore > 21) {
        win(true, {you: player1Score, dealer: dealerScore });
        console.log('WIN OR LOSE', true);
    }

    //else if any dealer score = 21,  or player 1 score > 21 dealer wins
    else if(player1Score > 21 || dealerScore === 21) {
        win(false, {you: player1Score, dealer: dealerScore });
        console.log('WIN OR LOSE', false);
    } 

}

//hit player2
$('#hit2').click(function (card) {
    console.info("Can't do this");
    /**
	upperhand.addCard(deck.topCard());
	upperhand.render();

    calculateScores();
	// playerScore2.innerHTML = upperhand[0].rank + upperhand[1].rank + upperhand[2].rank;
	console.log(card);
	console.log(upperhand[0].rank + upperhand[1].rank);
    */
});

upperhand.click(function (card) {
	console.log(card);
});

lowerhand.click(function (card) {
	console.log(card);
});

dealerhand.click(function (card) {
	card.showCard();
	card.render();
	console.log(card);
});
}
