//  sends random Ether in the Order of  amountInWei ether
//  from random eth.accounts[0]
//  to all accounts from eth.account[0] to eth.accounts[maxNumber]
//  example usage: 
//
//
//sendEtherToAllLocalAccounst(1e13)
//

function sendEtherToAllLocalAccounts(amountInWei) { 
personal.unlockAccount(eth.coinbase,"Kennwort")
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
var howManyAccounts = maxNumber; // comment this line if you want to have all of them

  for(var i = 0; i < howManyAccounts; i = i +1)

    {
       var amount2transfer = randomNumber1[i] * amountInWei ;
//       console.log("multiply amount in Ether " + amountInWei/1e18);
//      console.log("i = " + i);
//      console.log("amount to transfer in ETH " + amount2transfer/1e18);
//       console.log("adress[i]  " + adress[i]);
//       console.log("randomNumber1[i] " + randomNumber1[i]);

   for(var x = 0; x < howManyAccounts; x = x + 1)
    { 
  var amount2transfer = randomNumber1[x+5] * randomNumber1[x+1] * amountInWei * 100;
//  console.log("amout to transfer in ETH " + amount2transfer/1e18);
//  console.log("loop x , i " + x, i);
//   wait(waitMilisecs);
  transferXeth(eth.accounts[0],eth.accounts[x],amount2transfer); 
 
   };
   } 
};

