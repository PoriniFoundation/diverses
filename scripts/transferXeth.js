/**
 * Transfer the ENTIRE BALANCE from one account to another.
 *
 * Before you call this, you must unlock your account:
 *   personal.unlockAccount(from)
 *
 * @see https://github.com/ethereum/go-ethereum/issues/1637
 * @see https://github.com/ethereum/go-ethereum/issues/2173
 */
function transferXeth(from, to, amount) {
    var gas = new BigNumber(21000);
    var price = web3.eth.gasPrice;  // current average price; or set your own
    var balance = new BigNumber(amount); 
    var value = balance - (gas * price);
    if (value > 0) {
        var txn = eth.sendTransaction({from: from, to: to, gasPrice: price, gas: gas, value: value});
        console.log("  Transfer", from, "to", to, ":", txn);
        return txn;
    }
    console.log("  Transfer "+ from +" to "+ to +": (No funds available)");
    return null;
}

