//    unlocking local accounts 
//    from begin to end
//    eth.accounts[begin]
//    example usage
//
//     unlockAccountsBE(0,11)


function unlockAccountsBE(begin,end) { 
//first unlock all local accounts
// var howManyAccountsToUnlock = eth.accounts.length; 
 var howManyAccountsToUnlock = end - begin;
 console.log("unlocking " + howManyAccountsToUnlock + " accounts");

 for (var j=begin; j < begin + howManyAccountsToUnlock ; j=j+1)
  {personal.unlockAccount(eth.accounts[j],"Kennwort");
  console.log("unlocking account" +j);};

};

