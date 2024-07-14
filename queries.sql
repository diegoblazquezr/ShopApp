CREATE TABLE "users"(
    "user_id" SERIAL NOT NULL PRIMARY KEY,
    "name" VARCHAR(255) NOT NULL,
    "email" VARCHAR(255) NOT NULL,
    "password" VARCHAR(255) NOT NULL,
    "phone" INTEGER NOT NULL,
    "address" VARCHAR(255) NOT NULL,
    "role" VARCHAR(255) NOT NULL,
    "logged" BOOLEAN NOT NULL
);

CREATE TABLE "orders"(
    "order_id" SERIAL NOT NULL PRIMARY KEY,
    "order_status" VARCHAR(255) NOT NULL,
    "order_date" TIMESTAMPTZ NOT NULL,
    "user_id" INTEGER NOT NULL
);

CREATE TABLE "order_product"(
    "order_product_id" SERIAL NOT NULL PRIMARY KEY,
    "order_id" INTEGER NOT NULL,
    "product_id" INTEGER NOT NULL
);

CREATE TABLE "products"(
    "product_id" SERIAL NOT NULL PRIMARY KEY,
    "name" VARCHAR(255) NOT NULL,
    "price" DECIMAL(10, 2) NOT NULL,
    "description" TEXT NOT NULL,
    "stock" INTEGER NOT NULL,
    "category_id" INTEGER NOT NULL,
    "date_added" TIMESTAMPTZ NOT NULL
);

CREATE TABLE "product_images"(
    "image_id" SERIAL NOT NULL PRIMARY KEY,
    "product_id" INTEGER NOT NULL,
    "image_url" VARCHAR(255) NOT NULL
);

CREATE TABLE "categories"(
    "category_id" SERIAL NOT NULL PRIMARY KEY,
    "name" VARCHAR(255) NOT NULL,
    "image_url" VARCHAR(255) NOT NULL
);

ALTER TABLE "orders" ADD FOREIGN KEY ("user_id") REFERENCES "users" ("user_id");
ALTER TABLE "order_product" ADD FOREIGN KEY ("order_id") REFERENCES "orders" ("order_id");
ALTER TABLE "order_product" ADD FOREIGN KEY ("product_id") REFERENCES "products" ("product_id");
ALTER TABLE "products" ADD FOREIGN KEY ("category_id") REFERENCES "categories" ("category_id");
ALTER TABLE "product_images" ADD FOREIGN KEY ("product_id") REFERENCES "products" ("product_id") ON DELETE CASCADE;

INSERT INTO "users" (name, email, password, phone, address, role, logged)
VALUES
('Admin', 'admin@gmail.com', '123456', 123456789, 'Calle Desengaño 21', 'admin', false),
('Diego', 'diego@gmail.com', '123456', 123456789, 'Calle Desengaño 21', 'user', false),
('Alex', 'alex@gmail.com', '123456', 123456789, 'Calle Desengaño 21', 'user', false),
('Guille', 'guille@gmail.com', '123456', 123456789, 'Calle Desengaño 21', 'user', false);

INSERT INTO "categories" ("name", "image_url") 
VALUES
('Clothes', 'https://i.imgur.com/QkIa5tT.jpeg'),
('Shoes', 'https://i.imgur.com/qNOjJje.jpeg'),
('Furniture', 'https://i.imgur.com/Qphac99.jpeg'),
('Electronics', 'https://i.imgur.com/ZANVnHE.jpeg'),
('Miscellaneous', 'https://i.imgur.com/BG8J0Fj.jpg');

INSERT INTO "products" ("name", "price", "description", "stock", "category_id", "date_added") 
VALUES 
('Classic Heather Gray Hoodie', 69.00, 'Stay cozy and stylish with our Classic Heather Gray Hoodie. Crafted from soft, durable fabric, it features a kangaroo pocket, adjustable drawstring hood, and ribbed cuffs. Perfect for a casual day out or a relaxing evening in, this hoodie is a versatile addition to any wardrobe.', 100, 1, '2024-07-14T05:29:22.000Z');

INSERT INTO "product_images" ("product_id", "image_url") 
VALUES 
(1, 'https://i.imgur.com/cHddUCu.jpeg'),
(1, 'https://i.imgur.com/CFOjAgK.jpeg'),
(1, 'https://i.imgur.com/wbIMMme.jpeg');