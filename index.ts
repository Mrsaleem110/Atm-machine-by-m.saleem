import inquirer from "inquirer";
import chalk from "chalk";
// initialize user balance and pin code
 let myBalance = 10000; //dollar
let mypin = 4240;

console.log(chalk.blue ("\n\t welcome to code with saleem\n"))
    
     let pinAnswer = await inquirer.prompt([
        {
            name: "pin",
            message: chalk.yellow ("\nplease Enter your pin code\n"),
            type: "number",
        }
    ]);
    if (pinAnswer.pin === mypin) {
        console.log(chalk.bgCyanBright("\npin is correct,login successfully!\n"));
    
    let operationAns = await inquirer.prompt([
        {
            name: "operation",
            type: "list",
            message: "select an operator",
            choices: ["withdrawamount", "checkbalance"]
        }
    ]);

    if (operationAns.operation === "withdrawamount") {
        let withdrawans = await inquirer.prompt([
            {
                name: "withdrawmethod",
                type: "list",
                message: "select a withdrawl method",
                choices: ["fastcash", "enteramount"]
            }
        ]);
        if (withdrawans.withdrawmethod === "fastcash") {
            let fastcashans = await inquirer.prompt([
                {
                    name: "fastcash",
                    type: "list",
                    message: "select amount",
                    choices: [1000, 2000, 5000, 10000, 20000, 50000]
                }
            ]);

            if (fastcashans.fastcash > myBalance) {
                console.log(chalk.red("insufficent balance"));
            } else {
                myBalance -= fastcashans.fastcash;
                console.log(chalk.bgCyan(`${fastcashans.fastcash},withdraw successfully`));
                console.log(chalk.bgWhite(`your remaining balance is : ${myBalance}`));
            }
        } if (withdrawans.withdrawmethod === "enteramount") {
            let amountans = await inquirer.prompt([{
                name: "amount",
                type: "number",
                message: "please Enter a amount to withdraw"
            }
            ]);
            if (amountans.amount > myBalance) {
                console.log(chalk.red("insufficent balance"));
            }
            else {
                myBalance -= amountans.amount;
                console.log(chalk.green(`${amountans.amount} withdraw successfully`));
                console.log(chalk.greenBright(`your reamaining balance is ${myBalance}`));
            }
        }
    }
    else if (operationAns.operation === "checkbalance") {
        console.log(chalk.blueBright(`your account balance is ${myBalance}`));
    }
}
else { console.log(chalk.red("pin is incorrect try again!")); };

