pragma solidity ^0.6.7;
import "https://github.com/smartcontractkit/chainlink/evm-contracts/src/v0.6/interfaces/AggregatorInterface.sol";

contract Prices{
    AggregatorInterface internal priceFeed;
    constructor(address payable priceFeedAddr) public {
        if(priceFeedAddr == address(0x0))
            priceFeed = AggregatorInterface(0xec3cf275cAa57dD8aA5c52e9d5b70809Cb01D421);

        else priceFeed =  AggregatorInterface(priceFeedAddr);
    }

    function getLatestPrice() public view returns (int256) {
        return priceFeed.latestAnswer();
    }

    function getLatestPriceTimestamp() public view returns (uint256) {
        return priceFeed.latestTimestamp();
    }
}
