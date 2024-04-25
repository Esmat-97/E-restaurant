CREATE TABLE guests (
    guest_id INT AUTO_INCREMENT PRIMARY KEY,
    fname VARCHAR(255),
    lname VARCHAR(255),
    email VARCHAR(255) unique,
    password VARCHAR(255),
    phone VARCHAR(20) ,
role enum ('admin','customer')default 'customer'
);


drop table guests;
select * from  guests;
update guests set role='admin' where guest_id=3;





CREATE TABLE products (
    product_id INT AUTO_INCREMENT PRIMARY KEY,
   product_name VARCHAR(255)  unique,
    description VARCHAR(255),
    image VARCHAR(255),
    price int,
    stock int,
    guest_id int,
    FOREIGN KEY (guest_id) REFERENCES guests (guest_id)
);


drop table products;
select * from   products;
