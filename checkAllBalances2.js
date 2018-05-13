function checkAllBalances2() { 
  var i =0;i<10 && 
  transfer1eth(eth.coinbase,eth.coinbase);
  eth.accounts.forEach( function(e){
    console.log("  eth.accounts["+i+"]: " +  e + " \tbalance: " + web3.fromWei(eth.getBalance(e), "ether") + " ether"); 
    i++; 
  })
};

