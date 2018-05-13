//  sends random * amountInWei ether
//  from random eth.accounts[i]
//  to random eth.account[i]
//  in the range eth.account[beginRange] to eth.account[endRange]  
//  unlockin the accounst if unlockinFirstYN is 1
//
//   example usage
//   sendEtherFromRandom2RandomLocal(1e12,1,10,3,5,0)
//   for sending in the order of 1e12ETH with waiting in the order of 1 milisecond 10 transactions from eth.accounts[] to eth.accounst[5] not unlocking first



function sendEtherFromRandom2RandomLocal(amountInWei,waitMilisecs,howManyTransactions,beginRange,endRange,unlockingFirstYN) { 

if(unlockingFirstYN) console.log("unlocking a total of accounts activated");
if(unlockingFirstYN) console.log("unlocking account ranges from " + beginRange + " to " + endRange);
 console.log("number of planned transactions " + howManyTransactions);
 console.log("estimate number of transactions per Block (max 250)" + ( 150000 / (1 + waitMilisecs)) );  


personal.unlockAccount(eth.coinbase,"Kennwort")
loadScript("scripts/array2numbers.js");
loadScript("bot/adressList.js");
loadScript("bot/playground/randomNumber1.js");
loadScript("wallet/outkomma.txt");
loadScript("bot/randomNumber2.js");
loadScript("scripts/transferXeth.js");
loadScript("scripts/wait.js");
loadScript("scripts/createNaccount.js");
loadScript("bot/randomNumber1to100.js");
loadScript("bot/randomNumber1to10.js");
loadScript("scripts/unlockAccountsBE.js");
//first unlock all local accounts
//
// ideally use 
// unlockAccountsBE(1,eth.accounts.length);
//
// or this
  var howManyAccountsToUnlock = endRange - beginRange;
//      console.log("unlocking a total of" + howManyAccountsToUnlock + " account");

if(unlockingFirstYN) unlockAccountsBE(beginRange,endRange); 
// var howManyAccountsToUnlock = 10;
// console.log("unlocking " + howManyAccountsToUnlock + " accounts");
//
// for (var j=0; j < howManyAccountsToUnlock ; j=j+1)
//  {personal.unlockAccount(eth.accounts[j],"Kennwort");


  for(var i = 0; i < howManyTransactions  ; i = i +1)
    {
       var amount2transfer = randomNumber1[i] * amountInWei ;
       var sending_account_index = randomNumber1to10[i];
       var random_numberN = randomNumber1to10[i+10]
       var recieving_account_index = randomNumber1to10[random_numberN];
       var waiting_time = waitMilisecs * randomNumber1[i];
//      console.log("waiting time " + waiting_time);
//      console.log("amount to transfer in ETH " + amount2transfer/1e18);
//       console.log("adress[i]  " + adress[i]);
//       console.log("randomNumber1[i] " + randomNumber1[i]);
//  console.log("amout to transfer in ETH " + amount2transfer/1e18);
//  console.log("loop x , i " +  x, i);

  wait(waitMilisecs);
  transferXeth(eth.accounts[sending_account_index],eth.accounts[recieving_account_index],amount2transfer); 
   } 
};

