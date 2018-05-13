function test3(amountInWei,times,waitMilisecs) { 
personal.unlockAccount(eth.coinbase,"Kennwort")
loadScript("scripts/array2numbers.js");
loadScript("bot/adressList.js");
loadScript("bot/playground/randomNumber1.js");
loadScript("wallet/outkomma.txt");
loadScript("bot/randomNumber2.js");
loadScript("scripts/transferXeth.js");
loadScript("scripts/wait.js");


  for(var i = 0; i < adress.length; i = i +1)
    {
       var amount2transfer = randomNumber1[i] * amountInWei ;
       console.log("multiply amount in Ether " + amountInWei/1e18);
//      console.log("i = " + i);
//      console.log("amount to transfer in ETH " + amount2transfer/1e18);
//       console.log("adress[i]  " + adress[i]);
//       console.log("randomNumber1[i] " + randomNumber1[i]);

   for(var x = 0; x < times; x = x + 1)
    { 
  var amount2transfer = randomNumber1[i+x] * amountInWei;
  console.log("amout to transfer in ETH " + amount2transfer/1e18);
  console.log("loop x , i " + x, i);
  wait(waitMilisecs);
  transferXeth(eth.coinbase,adress[i],amount2transfer); 
 
   };
   } 
};

