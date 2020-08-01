pragma solidity >=0.4.22 <0.7.0;
pragma experimental ABIEncoderV2;
import './Chainlink/Randomness.sol';
import './Chainlink/Randomness.sol.old';
import './Chips.sol';

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
    uint256[] public playerMoves;
    uint256 turns = 0;
    uint256 pot; //the pot for all players
    // uint256 currentCardIndex = 0;
    //player/game metadata

    Chip chip;

//     VRFTestnetD20 d20;

    FillDeck vrf;

    constructor(address fillDeckAddr) public{
        vrf =  FillDeck(fillDeckAddr);
  //       d20 = VRFTestnetD20(d20addr);
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
        pot += 2 * b;
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

    function getPot() public view returns (uint256 p){
        return pot;
    }

    // Other functions
    function shuffleDeck() public {
        // Call vrf function 52 times
        for (uint256 i = 0; i < 52; i++) {
            vrf.getRandomNumber(566);
        }
    }

    // function hitOrStay(bytes32 requestId, uint256 randomness) external override onlyVRFCoordinator {
    function hitOrStay() external {
        //Will choose either 0 or 1 (Hit or Stay)
        /*
        uint256 playerMove = randomness.mod(1);
        playerMoves.push(playerMove);
        */

        vrf.getRandomNumber(8983);

        while(vrf.randIndex() != true) {
            uint256 playerMove = vrf.randomResult() % 2;
            playerMoves.push(playerMove);
            vrf.resetRandomIndex();
        }
    }

    function getHitOrStay() public view returns (uint256 playerMove){
        return playerMoves[playerMoves.length - 1];
    }

    function getDeck() public view returns (uint256[] memory d) {
        return vrf.getDeck();
        // return deck;
    }

    function collectWinnings(address addr) public {
        chip.transfer(addr, pot);
    }
}
