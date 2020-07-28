let startGame = function() {
//Tell the library which element to use for the table
cards.init({ table: '#card-table', type: STANDARD });

//Create a new deck of cards
deck = new cards.Deck();
//By default it's in the middle of the container, put it slightly to the side
deck.x -= 25;
deck.y -= 125;

//cards.all contains all cards, put them all in the deck
deck.addCards(cards.all);
//No animation here, just get the deck onto the table.
deck.render({ immediate: true });

//Now lets create a couple of hands, one face down, one face up.
upperhand = new cards.Hand({ faceUp: true, x: 0, y: 340 });//player2
lowerhand = new cards.Hand({ faceUp: true, x: 80, y: 340 });//player1
dealerhand = new cards.Hand({ faceUp: true });
dealerhand.x += 50;

//Lets add a discard pile



//Let's deal when the Deal button is pressed:
$('#deal').click(function () {
	//Deck has a built in method to deal to hands.
	$('#deal').hide();
	// deck.deal(1, [upperhand, lowerhand], 50, function() {
	deck.deal(1, [upperhand, lowerhand, dealerhand], 700, function () {
		//This is a callback function, called when the dealing
		//is done.
		// dealerhand.addCard(deck.topCard());
        deck.deal(1, [upperhand, lowerhand, dealerhand], 700);
		dealerhand.render();
	});
});
let playerScore1 = document.getElementById('score1');
let playerScore2 = document.getElementById('score2');
let dealerScore = document.getElementById('dealerscore');

//When you click on the top card of a deck, a card is added
//to your hand
    /*
deck.click(function (card) {
	if (card === deck.topCard()) {
		dealerhand.addCard(deck.topCard());
		dealerhand.render();
	}
	dealerScore.innerHTML = dealerhand[0].rank + dealerhand[1].rank + dealerhand[2].rank;
	console.log(card);
});
    */

//hit player1
$('#hit1').click(function (card) {
	lowerhand.addCard(deck.topCard());
	lowerhand.render();
	console.log(card);
	playerScore1.innerHTML = lowerhand[0].rank + lowerhand[1].rank + lowerhand[2].rank;
	console.log(lowerhand[2].rank);
	console.log(card.rank);
});

//hit player2
$('#hit2').click(function (card) {
	upperhand.addCard(deck.topCard());
	upperhand.render();
	playerScore2.innerHTML = upperhand[0].rank + upperhand[1].rank + upperhand[2].rank;
	console.log(card);
	console.log(upperhand[0].rank + upperhand[1].rank);
});

//Finally, when you click a card in your hand, if it's
//the same suit or rank as the top card of the discard pile
//then it's added to it
// lowerhand.click(function(card){

// 			discardPile.addCard(card);
// 			discardPile.render();
// 		lowerhand.render();

// });

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
