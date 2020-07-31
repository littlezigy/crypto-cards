pragma solidity ^0.6.6;

// import "https://raw.githubusercontent.com/smartcontractkit/chainlink/7a4e19a8ff07db1be0b397465d38d175bc0bb5b5/evm-contracts/src/v0.6/VRFConsumerBase.sol";
import "@chainlink/contracts/src/v0.6/VRFConsumerBase.sol";

/*
//For dev testing
contract RandomNumberConsumer {
    
    bytes32 internal keyHash;
    uint256 internal fee;
    
    uint256 public randomResult;

    bool public randIndex;
    uint256 public randCount = 0;
    
    constructor() public{
        keyHash = 0xced103054e349b8dfb51352f0f8fa9b5d20dde3d06f9f43cb2b85bc64b238205;
        fee = 0.1 * 10 ** 18; // 0.1 LINK
    }
    
    event GotRandomNumber(
        bytes32 reqid
    );

    function resetRandomIndex() public {
        randIndex = false;
    }

    // * Callback function used by VRF Coordinator
    function fulfillRandomness(bytes32 requestId) external {
        randomResult = 42;
        randIndex = true;
        randCount++;
        // randomResult = randomness.mod(52);
        // randIndex = randomness.mod(52);
    }

    //* Requests randomness from a user-provided seed
    function getRandomNumber(uint256 userProvidedSeed) public {
    // function getRandomNumber(uint256 userProvidedSeed) public returns (bytes32 requestId) {
        // bytes32 _requestId =  requestRandomness(keyHash, fee, userProvidedSeed);
        // emit GotRandomNumber(_requestId);

        randomResult = 31;
        // uint8(uint256(keccak256(block.timestamp, block.difficulty))%251);
        // randomResult = uint256(keccak256(abi.encode(block.timestamp, block.difficulty)))%251;
        randIndex = true;
        randCount++;
        // return _requestId;
//        fulfillRandomness(0x626c616869646b00000000000000000000000000000000000000000000000000);
    }

}
*/

// For live testing
contract FillDeck is VRFConsumerBase {
    
    bytes32 internal keyHash;
    uint256 internal fee;
    
    uint256 public randomResult;
    uint256[52] public deck;

    bool public randIndex;
    uint256 public randCount = 0;
    
    constructor() 
        VRFConsumerBase(
            0xf720CF1B963e0e7bE9F58fd471EFa67e7bF00cfb, // VRF Coordinator
            0x20fE562d797A42Dcb3399062AE9546cd06f63280  // LINK Token
        ) public
    {
        keyHash = 0xced103054e349b8dfb51352f0f8fa9b5d20dde3d06f9f43cb2b85bc64b238205;
        fee = 0.1 * 10 ** 18; // 0.1 LINK
    }
    
    event GotRandomNumber(
        bytes32 reqid
    );

    function resetRandomIndex() public {
        randIndex = false;
    }

     //* Requests randomness from a user-provided seed
    function getRandomNumber(uint256 userProvidedSeed) public returns (bytes32 requestId) {
        require(LINK.balanceOf(address(this)) > fee, "Not enough LINK - fill contract with faucet");
        // bytes32 _requestId =  requestRandomness(keyHash, fee, userProvidedSeed);
        // emit GotRandomNumber(_requestId);
        // return _requestId;
    }

    // * Callback function used by VRF Coordinator
    function fulfillRandomness(bytes32 requestId, uint256 randomness) external override {
        require(msg.sender == vrfCoordinator, "Fulfilment only permitted by Coordinator");
        randomResult = randomness.mod(52).add(1);
        deck.push(randomResult);
        randIndex = true;
        randCount++;
        // randomResult = randomness.mod(52);
        // randIndex = randomness.mod(52);
    }

    function getDeck() public view returns (uint256[] memory d) {
        return deck;
    }
}
