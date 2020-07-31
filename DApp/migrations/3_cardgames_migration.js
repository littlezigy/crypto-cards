const BlackJack = artifacts.require('Blackjack');
const VRFChainlink = artifacts.require('RandomNumberConsumer');

module.exports = function(deployer) {
    // deployer.deploy(BlackJack);
//    deployer.deploy(VRFChainlink);
    deployer.deploy(VRFChainlink)
    .then(() => {
        return deployer.deploy(BlackJack, VRFChainlink.address);
    });
}
