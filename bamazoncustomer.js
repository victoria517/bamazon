var mysql = require('mysql')
var inquirer = require('inquirer')

var connection = mysql.createConnection({
    host: "localhost",
  
    port: 3306,
  
    user: "root",
  
    password: "root",
    database: "bamazon_db"
  });

  connection.connect(function(error) {
      if(error) throw(error);
      listProducts();
  });

  function listProducts() {
      connection.query("SELECT * FROM products", function(error, res) {
          if (error) throw (error);
         
          for (i = 0; i < res.length; i++) {
            console.log("-------------------------------");
            console.log("item number: " + res[i].item_id)
            console.log('item: ' + res[i].product_name)
            console.log("price: $" + res[i].price)
      }
      purchase()
    })
};

let validateInput = (value) => {
    var integer = Number.isInteger(parseFloat(value))
    var sign = Math.sign(value)

    if (integer && (sign === 1)) {
        return true;
    } else {
        return 'Please enter a whole non-zero number.'
    }
}
    function purchase() {
        inquirer.prompt([{
            type: 'input',
            name: 'item_id',
            message: 'Select the item number of the product you would like to purchase.',
            validate: validateInput,
            filter: Number
        },
        {
            type: 'input',
            name: 'quantity',
            message: 'How many would you like to purchase?',
            validate: validateInput,
            filter: Number
        }
    ])
    .then(function(purchase) {
        var item = purchase.item_id
        var quantity = purchase.quantity

        var queryStr = 'SELECT * FROM products WHERE ?';

        connection.query(queryStr, { item_id: item }, function(error, res) {
            if(error) throw (error);

            if(res.length === 0) {
                console.log('Error: Invalid Item ID number. Please make another selection.')
                listProducts()
            }
            else {
                var productInfo = res[0]

                if (quantity <= productInfo.stock_quantity) {
                    console.log(productInfo.product_name + ' this item has been added to your cart.')
                    console.log('\n')

                    var updateQueryStr = "UPDATE products SET stock_quantity = " + (productInfo.stock_quantity - quantity) + " WHERE item_id = " + item
                    // console.log('updateQueryStr = ' + updateQueryStr);

                // Update the inventory
                connection.query(updateQueryStr, function(err, data) {
                    if (err) throw err;

                    console.log("Your order has been placed!");
                    console.log("Your total is $" + productInfo.price * quantity)
                    console.log(" - - - - - - - - - - - - - - - ")
                    console.log("\n")

                    // End the database connection and close the app
                    connection.end();
                })
            } else {
                console.log("Sorry, there is not enough " + productInfo.product_name + " in stock.")
                console.log("Please modify your order or select another item.")
                console.log("\n")

                // After 3 seconds display the inventory again so that the customer can make a new selcetion.
                setTimeout(function() { displayInventory() }, 3000)
            }


        }
    })


})
}