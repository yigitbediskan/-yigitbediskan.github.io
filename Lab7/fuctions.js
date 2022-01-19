const Module = function gg() {
  class Account {
    constructor(name, value) {
      this.accountType = name;
      this.depositVal = value;
    }
  }
  var accountInfoList = [];
  const textArea = document.getElementById("text");

  var addAccount = function () {
    var accountName = document.getElementById("account");
    var depositVal = document.getElementById("deposit");
    const createdAccount = new Account(accountName.value, depositVal.value);
    accountInfoList.push(createdAccount);
    cleanArea();
    listAccount();
  };

  function cleanArea() {
    textArea.value = "";
  }

  function listAccount() {
    for (const account of accountInfoList) {
      textArea.value +=
        "Account Name: " +
        account.accountType +
        " " +
        "Balance: " +
        account.depositVal +
        "\r\n";
    }
  }

  return {
    addBankAccount: addAccount,
    namexx:"dsadas"
  };
};

function addNewAccount() {
  let x = Module();
  x.addBankAccount();
  console.log(x.namexx);
}
