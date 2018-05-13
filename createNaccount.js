function createNaccount(numberOfAccountsToCreate) { 

       console.log("number of accounts before " + eth.accounts.length);
  for(var i = 0; i < numberOfAccountsToCreate; i = i +1)
    {
personal.newAccount("Kennwort");
//       console.log("account created " + i);
//       console.log("account created " + i);
//       console.log("i = " + i);

} 
       console.log("number of accounts now " + eth.accounts.length);
};

