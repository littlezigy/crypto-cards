pragma solidity >=0.4.22 <0.7.0;
pragma experimental ABIEncoderV2;
import './Chainlink/Randomness.sol';

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

        deck [1...52]

    */
    address player1;
    address player2;
    uint256[] public deck = new uint256[](52);
    uint256[] public playerMoves
    uint256 turns = 0;
    uint256 pot; //the pot for all players
    //player/game metadata

    RandomNumberConsumer vrf;

    constructor(address randomNumberConsumerAddress) public{
        vrf =  RandomNumberConsumer(randomNumberConsumerAddress);
    }

    struct BlackJackPlayer {
        string playername;
        uint256 card;
        string suit; //card suites D,C,H,S
        uint256 bet;
    }

    BlackJackPlayer blackjack;

    //Setters
    function setPlayerName(string memory p) public {
        blackjack.playername = p;
    }

    function setRank(uint256 c) public {
        blackjack.card = c;
    }

    function setSuit(string memory s) public {
        blackjack.suit = s;
    }

    function setBet(uint256 b) public payable {
        blackjack.bet = b;
    }

    function setPot(uint256 p) public {
        pot = p;
    }

    //Getters
    function getPlayerName() public view returns (string memory) {
        return blackjack.playername;
    }

    function getRank() public view returns (uint256) {
        return blackjack.card;
    }

    function getSuit() public view returns (string memory) {
        return blackjack.suit;
    }

    function getBet() public view returns (uint256) {
        return blackjack.bet;
    }

    function getBlackjackPlayer() public view returns (BlackJackPlayer memory) {
        return blackjack;
    }

    // Events

    event FillingDeck(
        uint256 i
    );

    function shuffleDeck() public {
        // Fill deck with numbers 1 through 52
        for (uint256 i = 0; i < 52; i++) {
            deck[i] = i + 1;
        }

        // Suits: clubs diamond heart spade

        // 1 through 13 is clubs
        // 14 through 26 is diamonds
        // 27 through 39 is heart
        // 40 through 52 is spades

        // Will use mod function to get card suit and number

        // Fisher-Yates shuffle
        for(uint256 i = 51; i > 0; i--) {
            uint256 tempi = deck[i];
            // Use Chainlink VRF function to make random number
            vrf.getRandomNumber(566);
            uint256 j = vrf.randomResult();


            deck[i] = i;
            deck[i] = deck[j];
            deck[j] = tempi;
            // deck = [12, 3 ,52 ...];
            // cards[12] = {shortname: 'c7', }
        }
    }
    function hitOrStay(bytes32 requestId, uint256 randomness) external override onlyVRFCoordinator {
        //Will choose either 0 or 1 (Hit or Stay)
        uint256 playerMove = randomness.mod(1);
        playerMoves.push(playerMove);
    }

    function getHitOrStay() public view returns (uint256 playerMove){
        return playerMoves[playerMoves.length - 1];
    }
 
    function latestRoll() public view returns (uint256 d20result) {
        return d20Results[d20Results.length - 1];
    }

    function calcPoints() public {
    }

    function getDeck() public view returns (uint256[] memory d) {
        return deck;
    }
}
