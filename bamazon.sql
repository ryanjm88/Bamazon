drop database if exists bamazon_db;

create database bamazon_db;

use bamazon_db;

CREATE TABLE products(
	id integer not null auto_increment,
  item_id varchar(10) NOT NULL,
  product_name VARCHAR(45) NOT NULL,
  department_name VARCHAR(45) NOT NULL,
  price DECIMAL(10,2) NOT NULL,
  stock_quantity INT(10) NOT NULL,
  primary key(id)
);
    
insert into products	(item_id, product_name, department_name, price, stock_quantity)
values ("A001", "Unsolved Mysteries Robert Stack Action Figure", "Memorabilia", 60.00, 1);

insert into products	(item_id, product_name, department_name, price, stock_quantity)
values ("A002", "Montreal Poutine Lovers T-Shirt", "Clothing", 25.50, 1);

insert into products	(item_id, product_name, department_name, price, stock_quantity)
values ("A003", "ATL Tank Top", "Clothing", 12.00, 1);

insert into products	(item_id, product_name, department_name, price, stock_quantity)
values ("A004", "Belize UltraRay UVC500L Hot Tub", "Recreation", 3500.00, 2);

insert into products	(item_id, product_name, department_name, price, stock_quantity)
values ("A005", "Oakley Prizm Sunglasses", "Accessories", 130.00, 1);

insert into products	(item_id, product_name, department_name, price, stock_quantity)
values ("A006", "Weekend (2011 Film) Blu-ray", "Electronics", 20.00, 2);

insert into products	(item_id, product_name, department_name, price, stock_quantity)
values ("A007", "BWET Swimsuit", "Clothing", 45.00, 1);

insert into products	(item_id, product_name, department_name, price, stock_quantity)
values ("A008", "The Regulators (Novel)", "Books", 16.50, 3);

insert into products	(item_id, product_name, department_name, price, stock_quantity)
values ("A009", "Pray For ATL Wood Canvas", "Art", 120.00, 1);

insert into products	(item_id, product_name, department_name, price, stock_quantity)
values ("A010", "Hey Arnold! Funko Pop Figure", "Memorabilia", 10.00, 2);

SELECT * FROM products;