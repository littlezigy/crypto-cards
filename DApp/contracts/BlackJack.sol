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
    //player/game metadata
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

    function shuffleDeck() public {
        //hardcoding values for now
        //A = 1/11 2......10 J,Q,K = 10
        //Hearts

        // Fill deck with numbers 1 through 52
        for (uint256 i = 0; i < 52; i++) {
            deck[i] = i + 1;
        }

        // Fisher-Yates shuffle
        for(uint256 i = 52; i > 0; i++) {
            uint256 tempi = deck[i];
            // Make random number using Chainlink VRF function
            VRFTestnetD20 vrf = VRFTestnetD20();
            await vrf.fulfillRandomness()
            uint256 j = await vrf.latestRoll();

            deck[i] = i;
            deck[i] = deck[j];
            deck[j] = tempi;
        }
        /*
        deck.push(1);
        deck.push(2);
        deck.push(3);
        deck.push(4);
        deck.push(5);
        deck.push(6);
        deck.push(7);
        deck.push(8);
        deck.push(9);
        deck.push(10); // Either a King, Queen, or Jack
        deck.push(11); // Either a King, Queen, or Jack
        deck.push(12); // Either a King, Queen, or Jack
        deck.push(13); // Either a King, Queen, or Jack

        //Diamonds
        deck.push(1);
        deck.push(2);
        deck.push(3);
        deck.push(4);
        deck.push(5);
        deck.push(6);
        deck.push(7);
        deck.push(8);
        deck.push(9);
        deck.push(10); // Either a King, Queen, or Jack
        deck.push(11); // Either a King, Queen, or Jack
        deck.push(12); // Either a King, Queen, or Jack
        deck.push(13); // Either a King, Queen, or Jack

        //Spades
        deck.push(1);
        deck.push(2);
        deck.push(3);
        deck.push(4);
        deck.push(5);
        deck.push(6);
        deck.push(7);
        deck.push(8);
        deck.push(9);
        deck.push(10); // Either a King, Queen, or Jack
        deck.push(11); // Either a King, Queen, or Jack
        deck.push(12); // Either a King, Queen, or Jack
        deck.push(13); // Either a King, Queen, or Jack

        //Clubs
        deck.push(1); // Ace
        deck.push(2);
        deck.push(3);
        deck.push(4);
        deck.push(5);
        deck.push(6);
        deck.push(7);
        deck.push(8);
        deck.push(9);
        deck.push(10); // Either a King, Queen, or Jack
        deck.push(11); // Either a King, Queen, or Jack
        deck.push(12); // Either a King, Queen, or Jack
        deck.push(13); // Either a King, Queen, or Jack
        */
    }

    function getDeck() public view returns (uint256[] memory d) {
        return deck;
    }
}
