const BlackJack = artifacts.require('Blackjack');
const VRFChainlink = artifacts.require('FillDeck');

module.exports = function(deployer) {
    deployer.deploy(VRFChainlink, { overwrite: false })
    // deployer.deploy(VRFChainlink)
    .then(() => {
        // return deployer.deploy(BlackJack, VRFChainlink.address, {overwrite: false });
        return deployer.deploy(BlackJack, VRFChainlink.address);
    });
}
