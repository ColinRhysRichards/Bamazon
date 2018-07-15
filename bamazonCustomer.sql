DROP DATABASE IF EXISTS bamazonDB;

CREATE DATABASE bamazonDB;

USE bamazonDB;

CREATE TABLE products (
    id INT NOT NULL AUTO_INCREMENT,
    item_id INTEGER(50),
    product_name VARCHAR(50),
    department_name VARCHAR(50),
    price INTEGER default 0,
    stock_quantity INTEGER default 0,
	PRIMARY KEY (id)
);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (1, "Nintendo Switch", "Electronics", 300, 10);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (21, "Legend of Zelda", "Electronics", 60, 15);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (17, "Batman Hush", "Books", 20, 8);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (4, "Pok Pok", "Books", 20, 13);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (36, "Wilson Evolution", "Sports", 60, 20);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (18, "Lebron Soldier 12", "Footwear", 120, 19);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (3, "Paul George 2", "Footwear", 100, 13);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (22, "Jay Birds Run", "Headphones", 160, 4);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (12, "Casper Mattress", "Mattresses", 900, 14);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (47, "Pacco Rabanne Million", "Mens Grooming", 120, 3);