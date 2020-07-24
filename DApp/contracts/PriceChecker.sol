pragma solidity ^0.6.7;
import "https://github.com/smartcontractkit/chainlink/evm-contracts/src/v0.6/interfaces/AggregatorInterface.sol";

/*
contract Prices{
    uint256 priceFeed;
    constructor(uint256 priceFeedAddr) public {
        if( !priceFeedAddr)
            priceFeed = priceFeedAddr;

        else priceFeed =  0xec3cf275cAa57dD8aA5c52e9d5b70809Cb01D421;
    }

    function getLatestPrice() public view returns (int256) {
        return priceFeed.latestAnswer();
    }

    function getLatestPriceTimestamp() public view returns (uint256) {
        return priceFeed.latestTimestamp();
    }
}
*/



contract Prices {
    AggregatorInterface internal priceFeed;

    /**
     * Network: Ropsten
     * Aggregator: ETH/USD
     * Address: 0x8468b2bDCE073A157E560AA4D9CcF6dB1DB98507
     */

    constructor() public {
        priceFeed = AggregatorInterface(0xec3cf275cAa57dD8aA5c52e9d5b70809Cb01D421);
    }

    /**
     * Returns the latest price
     */
    function getLatestPrice() public view returns (int256) {
        return priceFeed.latestAnswer();
    }

    /**
     * Returns the timestamp of the latest price update
     */
    function getLatestPriceTimestamp() public view returns (uint256) {
        return priceFeed.latestTimestamp();
    }
}
