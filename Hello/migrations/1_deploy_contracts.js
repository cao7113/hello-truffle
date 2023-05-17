const Hc = artifacts.require("HelloContract");

module.exports = function (deployer) {
  deployer.deploy(Hc);
};
