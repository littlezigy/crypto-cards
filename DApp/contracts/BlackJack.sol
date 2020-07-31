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
    uint256 turns = 0;
    uint256 pot; //the pot for all players
    // uint256 currentCardIndex = 0;
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

    event RandomNum(
        uint256 x
    );

    event DeckReady(
        bool ready
    );

    function swapCardsInDeck() internal {
        //uint256 i = 52;
        vrf.getRandomNumber(566);

        // uint256 i = vrf.randCount();

        while (vrf.randCount() < 52) {
            uint256 i = vrf.randCount();
            uint256 j = vrf.randomResult();

            if(vrf.randIndex() == true) {
                // currentCardIndex = i;

                uint256 tempi = deck[i];

                deck[i] = deck[j];
                deck[j] = tempi;

                vrf.resetRandomIndex();

                vrf.getRandomNumber(566);
            }

            if(vrf.randCount() == 51) {
                // Last swap. Emit event
                emit DeckReady(true);
            }
        }

    }

    function shuffleDeck() public {
        // Fill deck with numbers 1 through 52
        for (uint256 i = 0; i < 52; i++) {
            deck[i] = i + 1;
        }

        vrf.resetRandomIndex();
        swapCardsInDeck();

        // Suits: clubs diamond heart spade
        // Set randIndex = -1;

    }

    function calcPoints() public {
    }

    function getDeck() public view returns (uint256[] memory d) {
        return deck;
    }
}
