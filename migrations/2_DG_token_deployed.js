const DgTokenContract = artifacts.require("DgToken.sol");

module.exports = function (deployer) {
    deployer.deploy(DgTokenContract);
};