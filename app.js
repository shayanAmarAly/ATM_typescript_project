import inquirer from "inquirer";
const response = await inquirer.prompt([
    {
        name: "user_id",
        type: "number",
        message: "Kindly enter your user_id"
    },
    {
        name: "user_pin",
        type: "number",
        message: "Kindly enter your user_pin"
    },
    {
        name: "account_type",
        type: "list",
        choices: ["Current", "saving"],
        message: "Select your account type",
    },
    {
        name: "transaction_type",
        type: "list",
        choices: ["Fast cash", "Withdraw"],
        message: "Select your transaction type",
        when(response) {
            return response.account_type;
        },
    },
    {
        name: "amount",
        type: "list",
        choices: [1000, 2000, 10000, 20000],
        message: "Select your amount",
        when(response) {
            return response.transaction_type == "Fast cash";
        },
    },
    {
        name: "amount",
        type: "number",
        message: "Enter your amount",
        when(response) {
            return response.transaction_type == "Withdraw";
        },
    },
]);
if (response.user_id && response.user_pin) {
    let balance = Math.floor(Math.random() * 100);
    console.log(balance);
    const entered_amount = response.amount;
    if (balance < entered_amount) {
        balance -= entered_amount;
        console.log(`Remaining balance is ${balance}`);
    }
    else {
        console.log("Insufficient balance");
    }
}
