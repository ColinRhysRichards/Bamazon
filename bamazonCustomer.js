var mysql = require("mysql");
var inquirer = require("inquirer");

// create the connection information for the sql database
var connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "root",
  database: "bamazonDB"
});

// connect to the mysql server and sql database

connection.connect(function (err) {
  if (err) throw err;
  connection.query("SELECT item_id, product_name, price FROM products", function (err, result, fields) {
    if (err) throw err;
    console.log(result);
    start();
  });
});

function start() {
  inquirer
    .prompt([
      {
        name: "whatItem",
        type: "rawlist",
        message: "What item_id would you like to purchase?",
        choices: ["1", "21", "17", "4", "36", "18", "1", "18", "22", "12"]
      },
      {
        type: 'input',
        name: 'quantity',
        message: 'How many do you need?',
      }

    ]).then(function (answer) {
      var chosenItem = answer.whatItem
      console.log(chosenItem);
      var amount = answer.quantity
      console.log(amount);

      // connection.connect(function (err) {
      //   if (err) throw err;
      connection.query("SELECT stock_quantity FROM products WHERE item_id = " + chosenItem + "", function (err, result, fields) {
        if (err) throw err;
        console.log(result);
       var answer = result[0].stock_quantity - amount;
       console.log(answer);
       if ( answer < 0 )
        console.log("Sorry your order couldn't be placed because of insufficient quantity")
        else console.log("Your order was placed succesfully!");
      });
    });
  // });
  //use typeof to find out what type the object is
};

        // I need to put the results in an array and then compare the array to the chosenItem variable.
        // Then I need to do an if else statment. If they match up then do the math and change the stock.
        // If there isn't enough stock then prompt the user saying sorry there isn't enough stock.

        // "item_id: " +




