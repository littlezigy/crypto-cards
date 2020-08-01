pragma solidity ^0.6.0;

import "./Chips.sol";
import "./PriceChecker.sol";

contract ChipSale {
    address payable admin;
    Chip public chipContract;
    uint256 chipPrice;
    uint256 public chipsSold;
    uint256 daiToUSD;

    event Sell(address _buyer, uint256 _amount);

    constructor(Chip _chipContract, uint256 _chipPrice) public {
        admin = msg.sender;
        chipContract = _chipContract;
        chipPrice = _chipPrice;
    }

    // function updateDaiToUSD(uint256 multiplier) public returns {

    // }

    function chipsinusd(uint256 _numChips)  public returns (uint) {
        return _numChips * daiToUSD;
    }

    function buyChips(uint256 _numChips) public payable {
        uint256 totalPrice = _numChips * chipPrice;
        require(msg.value == totalPrice);
        require(chipContract.balanceOf(address(this)) >= _numChips);
        require(chipContract.transfer(msg.sender, _numChips));

        chipsSold += _numChips;
        emit Sell(msg.sender, _numChips);
    }
}

