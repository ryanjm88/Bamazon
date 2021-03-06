var mysql = require("mysql");
var inquirer = require("inquirer");
var Table = require("cli-table");

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "passwordzrus",
    database: "bamazon_db"
});

connection.connect(function (err) {
    if (err) throw err;
    console.log("Connected with connection number " + connection.threadId + "\n");
    showProducts();
});

function showProducts() {
    connection.query("SELECT id, item_ID, product_name, department_name, price, stock_quantity FROM products", function (err, res) {
        if (err) throw err;
        var productTable = new Table({
            head: ["id", "item_id", "product_name", "department_name", "price", "stock_quantity"]
        });
        for (var i = 0; i < res.length; i++)    {
            productTable.push(
                [res[i].id, res[i].item_ID, res[i].product_name, res[i].department_name, res[i].price, res[i].stock_quantity]
            );
        }
        console.log(productTable.toString());
        askCustomer();
    });
}

function askCustomer() {
    connection.query("SELECT * FROM products", function(err, res)   {
    inquirer.prompt([
        {
            name: "whatdoyouwant",
            type: "input",
            message: "What is the ID number of the product you would like to buy?",
            validate: function (answer) {
                if (/^\d+$/.test(answer)) {
                    return true;
                }
                else {
                    return false;
                }
            }
        },
        {
            name: "howmany",
            type: "input",
            message: "How many of this item would you like?",
            filter: Number
        }
    ]).then(function(res)  {
        var productid = res.whatdoyouwant - 1;
        var selectedProduct = res[selectedProduct]
        var stockQuantity = res.howmany;
        console.log(productid);
        console.log(stockQuantity);

        if (stockQuantity < res[selectedProduct].stock_quantity)    {
            connection.query("UPDATE products SET ? WHERE ?", [{
                stock_quantity: res[selectedProduct].stock_quantity - stockQuantity
            },
            {
                id: res[selectedProduct].id
            }], function(err, res)  {
                console.log("You got it!");
                askCustomer();
            })
        }
        else {
            console.log("Insufficient quantity!");
            askCustomer();
            connection.end();
        }

        })
    })
}
