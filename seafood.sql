CREATE TABLE guests (
    guest_id INT AUTO_INCREMENT PRIMARY KEY,
    fname VARCHAR(255),
    lname VARCHAR(255),
    email VARCHAR(255) unique,
    password VARCHAR(255),
    phone VARCHAR(20) unique ,
role enum ('admin','customer')default 'customer'
);
drop table guests;
select * from guests ;
update guests set role='admin' where guest_id=3;

UPDATE guests SET email ='amany655@gmail' WHERE guest_id = 14;



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
delete from products where product_id=4;
select * from   products;



CREATE TABLE msgs (
    msgs_id INT AUTO_INCREMENT PRIMARY KEY,
    content VARCHAR(244),
    the_date DATETIME DEFAULT CURRENT_TIMESTAMP,
    guest_id INT,
    FOREIGN KEY (guest_id) REFERENCES guests (guest_id)
);

drop table msgs;
select * from  msgs;



CREATE TABLE review (
    review_id INT AUTO_INCREMENT PRIMARY KEY,
    content VARCHAR(244),
    the_date DATETIME DEFAULT CURRENT_TIMESTAMP,
    status enum ('pending','accepted') default 'pending',
    guest_id INT,
    FOREIGN KEY (guest_id) REFERENCES guests (guest_id)
);



drop table review;
select * from  review;