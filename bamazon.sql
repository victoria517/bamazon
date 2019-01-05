DROP DATABASE IF EXISTS bamazon_db;

CREATE DATABASE bamazon_db;
USE bamazon_db;

CREATE TABLE products (
item_id INTEGER(11) UNIQUE,
product_name VARCHAR(50),
department_name VARCHAR(50),
price DECIMAL(4, 2),
stock_quantity INTEGER(11)
);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (24, "UFO Detector", "electronics", 87.66, 4);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (2, "Potty Putter", "entertainment", 10.99, 18);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (5, "Monkey Slingshot", "entertainment", 5.14, 7);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (18, "Wireless Microphone", "electronics", 23.99, 9);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (4, "Cat Garden Gnome", "garden", 65.00, 3);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (11, "Suncatcher", "garden", 19.95, 9);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (20, "Reptile Starter Kit", "pets", 87.99, 6);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (27, "Lizard Hammock", "pets", 6.99, 11);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (25, "Bird Tire Toy", "pets", 4.31, 5);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (14, "Mini Drone", "electronics", 59.99, 5);