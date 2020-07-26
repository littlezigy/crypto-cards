const BlackJack = artifacts.require('Blackjack');

module.exports = function(deployer) {
    deployer.deploy(BlackJack);
}
