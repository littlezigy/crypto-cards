pragma solidity >=0.4.22 <0.7.0;

/**
 * @title Blackjack
 * @dev Crypto Cards
 */
contract Blackjack {
/*
You4:26 PM
{shortName: "h6", suit: "h", rank: 6, name: "H6", faceUp: false, …}
You4:30 PM
Blackjack Smartcontract will store: Player Name, Rank, Suit, Bet
*/
string private playername;
uint private rank;//card number
string private suit;//card suites D,C,H,S
uint private bet;
uint public pot;//the pot for all players

constructor() public {
    
}

Setters
function setPlayerName(string memory p) public{
   playername = p; 
}

function setRank(uint r) public{
    rank = r;
}

function setSuit(string memory s) public{
    suit = s;
}

function setBet(uint b) public payable{
    bet = b;
}

function setPot(uint p ) public {
    pot = p;
}

//Getters
function getPlayerName() public view returns(string memory){
    return playername;
}

function getRank() public view returns(uint){
    return rank;
}

function getSuit() public view returns(string memory){
    return suit;
}

function getBet() public view returns(uint){
    return bet;
}

//No need to get pot since its public

function initGame(){
    //Create new deck and shuffle using vrf 
    //gives an array of cards [{suit: "h", rank: 6, name: "H6"}, [{suit: "h", rank: 6, name: "H6"}] ===> To cardsjs as Card.deal({suit: "h", rank: 6, name: "H6"})
}
//function turn()
function playerTurn(){
    //prints out CARD:{CardName: "h6", suit: "h", rank: 6, name: "H6"}
}

function hit(){
    //Dealer card to a player
}



}