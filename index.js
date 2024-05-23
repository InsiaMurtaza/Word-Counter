import inquirer from "inquirer";
let condition = true;
while (condition) {
    const answers = await inquirer.prompt([{
            name: "sentences",
            message: "Enter Your Text here!",
            type: "input"
        }]);
    let words = answers.sentences.trim().split(" ");
    console.log(`You have entered ${words.length} words`);
    let answer1 = await inquirer.prompt([{
            name: "askquestion",
            message: "Do you want to enter more text?",
            type: "list",
            choices: ["Yes", "No"]
        }]);
    if (answer1.askquestion == "No") {
        condition = false;
    }
    else {
        condition = true;
    }
}
