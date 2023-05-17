const HelloContract = artifacts.require("HelloContract");

/*
 * uncomment accounts to access the test accounts made available by the
 * Ethereum client
 * See docs: https://www.trufflesuite.com/docs/truffle/testing/writing-tests-in-javascript
 */
contract("HelloContract", function (/* accounts */) {
  it("should assert true", async function () {
    await HelloContract.deployed();
    return assert.isTrue(true);
  });
});
