
function sendAllEtherOfAllAccountsToTheAccount(TheAccount) { 
personal.unlockAccount(eth.coinbase,"Kennwort")
personal.unlockAccount(eth.accounts[1],"Kennwort");
loadScript("scripts/array2numbers.js");
loadScript("bot/adressList.js");
loadScript("bot/playground/randomNumber1.js");
loadScript("wallet/outkomma.txt");
loadScript("bot/randomNumber2.js");
loadScript("bot/randomNumber1.js");
loadScript("scripts/transferXeth.js");
loadScript("scripts/wait.js");
loadScript("scripts/createNaccount.js");


var maxNumber = 11;
var howManyAccounts = eth.accounts.length;
   for(var x = 0; x < howManyAccounts; x = x + 1)
    { 
//  var amount2transfer = (randomNumber1[x+5] * randomNumber1[x+1] * (amountInWei / 1000000)) ;
//  console.log("amout to transfer in ETH " + amount2transfer/1e18);
//  console.log("loop x , i " + x, i);
//   wait(waitMilisecs);
    transferEntireBalance(eth.accounts[x],TheAccount);
//  transferXeth(eth.accounts[0],eth.accounts[x],amount2transfer); 
 
   };
};

