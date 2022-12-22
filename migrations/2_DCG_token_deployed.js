const DcgTokenContract = artifacts.require("DcgToken.sol");

module.exports = function (deployer) {
    deployer.deploy(DcgTokenContract);
};