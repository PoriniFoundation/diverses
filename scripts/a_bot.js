// works with the 10 accounts eth.accounts[0] up to eth.accounts[10] using bot1_10
// and creates some random traffic amongsthem
// unlocks accounts the first time if  unlocking = 1
// has nrbOL number of Loops to unlock them accounts again
// nrAccounts is the number of accounts to unlock


function a_bot(nbrOL,nbrOT,unlocking,nrAccounts){
loadScript("scripts/bot1_10.js");
var numberOfLoops = nbrOL;
//order of eth to transfer  - order of miliseconds to wait, number of transaction to do, begin_account, end_account
for  (k= 1; k < numberOfLoops; k=k+1){
console.log("=====================");
console.log("LOOP NUMBER " + k + " of " + numberOfLoops);
console.log("=====================");
bot1_10(1e12,0,nbrOT,0,11,unlocking);
if ( k> 2; unlockAccountsBE(0,nrAccounts))
};
};
