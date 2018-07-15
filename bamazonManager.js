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

function start() {
    inquirer
      .prompt([
        {
          name: "whatItem",
          type: "rawlist",
          message: "What item_id would you like to purchase?",
          choices: []
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
  
        function viewProductsForSale () {
            connection.connect(function (err) {
                if (err) throw err;
                connection.query("SELECT item_id, product_name, price, product_quantity FROM products", function (err, result, fields) {
                  if (err) throw err;
                  console.log(result);
              