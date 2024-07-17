CREATE TABLE "users"(
    "user_id" SERIAL NOT NULL PRIMARY KEY,
    "name" VARCHAR(255) NOT NULL,
    "email" VARCHAR(255) NOT NULL UNIQUE,
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
    "name" VARCHAR(255) NOT NULL UNIQUE,
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
('Admin', 'admin@mail.com', '123456', 123456789, 'Calle Desengaño 21', 'admin', false),
('Diego', 'diego@mail.com', '123456', 123456789, 'Calle Desengaño 21', 'user', false),
('Alex', 'alex@mail.com', '123456', 123456789, 'Calle Desengaño 21', 'user', false),
('Guille', 'guille@mail.com', '123456', 123456789, 'Calle Desengaño 21', 'user', false);

INSERT INTO "categories" ("name", "image_url") 
VALUES
('Clothes', 'https://i.imgur.com/QkIa5tT.jpeg'),
('Shoes', 'https://i.imgur.com/qNOjJje.jpeg'),
('Furniture', 'https://i.imgur.com/Qphac99.jpeg'),
('Electronics', 'https://i.imgur.com/ZANVnHE.jpeg'),
('Miscellaneous', 'https://i.imgur.com/BG8J0Fj.jpg');

INSERT INTO products (name, price, description, stock, category_id, date_added) VALUES ('Classic Heather Gray Hoodie', 9.90, 'Stay cozy and stylish with our Classic Heather Gray Hoodie. Crafted from soft, durable fabric, it features a kangaroo pocket, adjustable drawstring hood, and ribbed cuffs. Perfect for a casual day out or a relaxing evening in, this hoodie is a versatile addition to any wardrobe.', 77, 1, '2024-07-14T05:29:2.90Z');
INSERT INTO products (name, price, description, stock, category_id, date_added) VALUES ('Change title', 00.50, 'Discover the perfect blend of style and comfort with our Classic Comfort Fit Joggers. These versatile black joggers feature a soft elastic waistband with an adjustable drawstring, two side pockets, and ribbed ankle cuffs for a secure fit. Made from a lightweight and durable fabric, they are ideal for both active days and relaxed lounging.', 26, 1, '2024-07-14T05:29:2.25Z');
INSERT INTO products (name, price, description, stock, category_id, date_added) VALUES ('Sleek Wireless Headphone & Inked Earbud Set', 4.99, 'Experience the fusion of style and sound with this sophisticated audio set featuring a pair of sleek, white wireless headphones offering crystal-clear sound quality and over-ear comfort. The set also includes a set of durable earbuds, perfect for an on-the-go lifestyle. Elevate your music enjoyment with this versatile duo, designed to cater to all your listening needs.', 100, 4, '2024-07-14T05:29:2.50Z');
INSERT INTO products (name, price, description, stock, category_id, date_added) VALUES ('Classic Olive Chino Shorts', 4.25, 'Elevate your casual wardrobe with these classic olive chino shorts. Designed for comfort and versatility, they feature a smooth waistband, practical pockets, and a tailored fit that makes them perfect for both relaxed weekends and smart-casual occasions. The durable fabric ensures they hold up throughout your daily activities while maintaining a stylish look.', 187, 1, '2024-07-14T05:29:2.25Z');
INSERT INTO products (name, price, description, stock, category_id, date_added) VALUES ('Classic Black Hooded Sweatshirt', 9.99, 'Elevate your casual wardrobe with our Classic Black Hooded Sweatshirt. Made from high-quality, soft fabric that ensures comfort and durability, this hoodie features a spacious kangaroo pocket and an adjustable drawstring hood. Its versatile design makes it perfect for a relaxed day at home or a casual outing.', 26, 1, '2024-07-14T05:29:2.25Z');
INSERT INTO products (name, price, description, stock, category_id, date_added) VALUES ('Classic White Tee - Timeless Style and Comfort', 3.99, 'Elevate your everyday wardrobe with our Classic White Tee. Crafted from premium soft cotton material, this versatile t-shirt combines comfort with durability, perfect for daily wear. Featuring a relaxed, unisex fit that flatters every body type, its a staple piece for any casual ensemble. Easy to care for and machine washable, this white tee retains its shape and softness wash after wash. Pair it with your favorite jeans or layer it under a jacket for a smart look.', 45, 1, '2024-07-14T05:29:2.99Z');
INSERT INTO products (name, price, description, stock, category_id, date_added) VALUES ('Classic Red Pullover Hoodie', 0.90, 'Elevate your casual wardrobe with our Classic Red Pullover Hoodie. Crafted with a soft cotton blend for ultimate comfort, this vibrant red hoodie features a kangaroo pocket, adjustable drawstring hood, and ribbed cuffs for a snug fit. The timeless design ensures easy pairing with jeans or joggers for a relaxed yet stylish look, making it a versatile addition to your everyday attire.', 77, 1, '2024-07-14T05:29:2.50Z');
INSERT INTO products (name, price, description, stock, category_id, date_added) VALUES ('Classic Comfort Drawstring Joggers', 000.25, 'Experience the perfect blend of comfort and style with our Classic Comfort Drawstring Joggers. Designed for a relaxed fit, these joggers feature a soft, stretchable fabric, convenient side pockets, and an adjustable drawstring waist with elegant gold-tipped detailing. Ideal for lounging or running errands, these pants will quickly become your go-to for effortless, casual wear.', 30, 1, '2024-07-14T05:29:2.25Z');
INSERT INTO products (name, price, description, stock, category_id, date_added) VALUES ('Classic Red Jogger Sweatpants', 8.25, 'Experience ultimate comfort with our red jogger sweatpants, perfect for both workout sessions and lounging around the house. Made with soft, durable fabric, these joggers feature a snug waistband, adjustable drawstring, and practical side pockets for functionality. Their tapered design and elastic cuffs offer a modern fit that keeps you looking stylish on the go.', 54, 1, '2024-07-14T05:29:2.50Z');
INSERT INTO products (name, price, description, stock, category_id, date_added) VALUES ('Classic High-Waisted Athletic Shorts', 3.25, 'Stay comfortable and stylish with our Classic High-Waisted Athletic Shorts. Designed for optimal movement and versatility, these shorts are a must-have for your workout wardrobe. Featuring a figure-flattering high waist, breathable fabric, and a secure fit that ensures they stay in place during any activity, these shorts are perfect for the gym, running, or even just casual wear.', 63, 1, '2024-07-14T05:29:2.50Z');
INSERT INTO products (name, price, description, stock, category_id, date_added) VALUES ('Classic Black Baseball Cap', 8.99, 'Elevate your casual wear with this timeless black baseball cap. Made with high-quality, breathable fabric, it features an adjustable strap for the perfect fit. Whether you’re out for a jog or just running errands, this cap adds a touch of style to any outfit.', 125, 1, '2024-07-14T05:29:2.99Z');

INSERT INTO products (name, price, description, stock, category_id, date_added) VALUES ('Classic Grey Hooded Sweatshirt', 0.25, 'Elevate your casual wear with our Classic Grey Hooded Sweatshirt. Made from a soft cotton blend, this hoodie features a front kangaroo pocket, an adjustable drawstring hood, and ribbed cuffs for a snug fit. Perfect for those chilly evenings or lazy weekends, it pairs effortlessly with your favorite jeans or joggers.', 110, 1, '2024-07-14T05:29:2.99Z');

INSERT INTO products (name, price, description, stock, category_id, date_added) VALUES ('Sleek Mirror Finish Phone Case', 7.50, 'Enhance your smartphones look with this ultra-sleek mirror finish phone case. Designed to offer style with protection, the case features a reflective surface that adds a touch of elegance while keeping your device safe from scratches and impacts. Perfect for those who love a minimalist and modern aesthetic.', 100, 4, '2024-07-14T05:29:2.25Z');

INSERT INTO products (name, price, description, stock, category_id, date_added) VALUES ('Stylish Red & Silver Over-Ear Headphones', 9.25, 'Immerse yourself in superior sound quality with these sleek red and silver over-ear headphones. Designed for comfort and style, the headphones feature cushioned ear cups, an adjustable padded headband, and a detachable red cable for easy storage and portability. Perfect for music lovers and audiophiles who value both appearance and audio fidelity.', 100, 4, '2024-07-14T05:29:2.25Z');

INSERT INTO products (name, price, description, stock, category_id, date_added) VALUES ('Classic Blue Baseball Cap', 6.50, 'Top off your casual look with our Classic Blue Baseball Cap, made from high-quality materials for lasting comfort. Featuring a timeless six-panel design with a pre-curved visor, this adjustable cap offers both style and practicality for everyday wear.', 60, 1, '2024-07-14T05:29:2.99Z');

INSERT INTO products (name, price, description, stock, category_id, date_added) VALUES ('Efficient 2-Slice Toaster', 8.25, 'Enhance your morning routine with our sleek 2-slice toaster, featuring adjustable browning controls and a removable crumb tray for easy cleaning. This compact and stylish appliance is perfect for any kitchen, ensuring your toast is always golden brown and delicious.', 100, 4, '2024-07-14T05:29:2.25Z');

INSERT INTO products (name, price, description, stock, category_id, date_added) VALUES ('Classic Navy Blue Baseball Cap', 1.90, 'Step out in style with this sleek navy blue baseball cap. Crafted from durable material, it features a smooth, structured design and an adjustable strap for the perfect fit. Protect your eyes from the sun and complement your casual looks with this versatile and timeless accessory.', 69, 1, '2024-07-14T05:29:2.50Z');

INSERT INTO products (name, price, description, stock, category_id, date_added) VALUES ('Classic Black T-Shirt', 5.50, 'Elevate your everyday style with our Classic Black T-Shirt. This staple piece is crafted from soft, breathable cotton for all-day comfort. Its versatile design features a classic crew neck and short sleeves, making it perfect for layering or wearing on its own. Durable and easy to care for, its sure to become a favorite in your wardrobe.', 61, 1, '2024-07-14T05:29:2.99Z');

INSERT INTO products (name, price, description, stock, category_id, date_added) VALUES ('Sleek Smartwatch with Vibrant Display', 6.90, 'Experience modern timekeeping with our high-tech smartwatch, featuring a vivid touch screen display, customizable watch faces, and a comfortable blue silicone strap. This smartwatch keeps you connected with notifications and fitness tracking while showcasing exceptional style and versatility.', 100, 4, '2024-07-14T05:29:2.25Z');

INSERT INTO products (name, price, description, stock, category_id, date_added) VALUES ('Sleek Wireless Computer Mouse', 0.50, 'Experience smooth and precise navigation with this modern wireless mouse, featuring a glossy finish and a comfortable ergonomic design. Its responsive tracking and easy-to-use interface make it the perfect accessory for any desktop or laptop setup. The stylish blue hue adds a splash of color to your workspace, while its compact size ensures it fits neatly in your bag for on-the-go productivity.', 100, 4, '2024-07-14T05:29:2.99Z');

INSERT INTO products (name, price, description, stock, category_id, date_added) VALUES ('Classic White Crew Neck T-Shirt', 9.50, 'Elevate your basics with this versatile white crew neck tee. Made from a soft, breathable cotton blend, it offers both comfort and durability. Its sleek, timeless design ensures it pairs well with virtually any outfit. Ideal for layering or wearing on its own, this t-shirt is a must-have staple for every wardrobe.', 51, 1, '2024-07-14T05:29:2.99Z');

INSERT INTO products (name, price, description, stock, category_id, date_added) VALUES ('Sleek Modern Leather Sofa', 3.25, 'Enhance the elegance of your living space with our Sleek Modern Leather Sofa. Designed with a minimalist aesthetic, it features clean lines and a luxurious leather finish. The robust metal legs provide stability and support, while the plush cushions ensure comfort. Perfect for contemporary homes or office waiting areas, this sofa is a statement piece that combines style with practicality.', 100, 3, '2024-07-14T05:29:2.50Z');

INSERT INTO products (name, price, description, stock, category_id, date_added) VALUES ('Sleek Modern Laptop with Ambient Lighting', 3.50, 'Experience next-level computing with our ultra-slim laptop, featuring a stunning display illuminated by ambient lighting. This high-performance machine is perfect for both work and play, delivering powerful processing in a sleek, portable design. The vibrant colors add a touch of personality to your tech collection, making it as stylish as it is functional.', 100, 4, '2024-07-14T05:29:2.50Z');

INSERT INTO products (name, price, description, stock, category_id, date_added) VALUES ('Modern Elegance Teal Armchair', 5.90, 'Elevate your living space with this beautifully crafted armchair, featuring a sleek wooden frame that complements its vibrant teal upholstery. Ideal for adding a pop of color and contemporary style to any room, this chair provides both superb comfort and sophisticated design. Perfect for reading, relaxing, or creating a cozy conversation nook.', 100, 3, '2024-07-14T05:29:2.90Z');

INSERT INTO products (name, price, description, stock, category_id, date_added) VALUES ('Mid-Century Modern Wooden Dining Table', 4.90, 'Elevate your dining room with this sleek Mid-Century Modern dining table, featuring an elegant walnut finish and tapered legs for a timeless aesthetic. Its sturdy wood construction and minimalist design make it a versatile piece that fits with a variety of decor styles. Perfect for intimate dinners or as a stylish spot for your morning coffee.', 100, 3, '2024-07-14T05:29:2.90Z');

INSERT INTO products (name, price, description, stock, category_id, date_added) VALUES ('Sleek White & Orange Wireless Gaming Controller', 9.50, 'Elevate your gaming experience with this state-of-the-art wireless controller, featuring a crisp white base with vibrant orange accents. Designed for precision play, the ergonomic shape and responsive buttons provide maximum comfort and control for endless hours of gameplay. Compatible with multiple gaming platforms, this controller is a must-have for any serious gamer looking to enhance their setup.', 100, 4, '2024-07-14T05:29:2.50Z');

INSERT INTO products (name, price, description, stock, category_id, date_added) VALUES ('Rainbow Glitter High Heels', 9.99, 'Step into the spotlight with these eye-catching rainbow glitter high heels. Designed to dazzle, each shoe boasts a kaleidoscope of shimmering colors that catch and reflect light with every step. Perfect for special occasions or a night out, these stunners are sure to turn heads and elevate any ensemble.', 100, 2, '2024-07-14T05:29:2.99Z');

INSERT INTO products (name, price, description, stock, category_id, date_added) VALUES ('Modern Minimalist Workstation Setup', 9.99, 'Elevate your home office with our Modern Minimalist Workstation Setup, featuring a sleek wooden desk topped with an elegant computer, stylish adjustable wooden desk lamp, and complimentary accessories for a clean, productive workspace. This setup is perfect for professionals seeking a contemporary look that combines functionality with design.', 100, 3, '2024-07-14T05:29:2.50Z');

INSERT INTO products (name, price, description, stock, category_id, date_added) VALUES ('Elegant Solid Wood Dining Table', 7.50, 'Enhance your dining space with this sleek, contemporary dining table, crafted from high-quality solid wood with a warm finish. Its sturdy construction and minimalist design make it a perfect addition for any home looking for a touch of elegance. Accommodates up to six guests comfortably and includes a striking fruit bowl centerpiece. The overhead lighting is not included.', 100, 3, '2024-07-14T05:29:2.90Z');

INSERT INTO products (name, price, description, stock, category_id, date_added) VALUES ('Modern Ergonomic Office Chair', 1.25, 'Elevate your office space with this sleek and comfortable Modern Ergonomic Office Chair. Designed to provide optimal support throughout the workday, it features an adjustable height mechanism, smooth-rolling casters for easy mobility, and a cushioned seat for extended comfort. The clean lines and minimalist white design make it a versatile addition to any contemporary workspace.', 100, 3, '2024-07-14T05:29:2.50Z');

INSERT INTO products (name, price, description, stock, category_id, date_added) VALUES ('Sleek Modern Laptop for Professionals', 7.50, 'Experience cutting-edge technology and elegant design with our latest laptop model. Perfect for professionals on-the-go, this high-performance laptop boasts a powerful processor, ample storage, and a long-lasting battery life, all encased in a lightweight, slim frame for ultimate portability. Shop now to elevate your work and play.', 100, 4, '2024-07-14T05:29:2.90Z');

INSERT INTO products (name, price, description, stock, category_id, date_added) VALUES ('Elegant Patent Leather Peep-Toe Pumps with Gold-Tone Heel', 3.90, 'Step into sophistication with these chic peep-toe pumps, showcasing a lustrous patent leather finish and an eye-catching gold-tone block heel. The ornate buckle detail adds a touch of glamour, perfect for elevating your evening attire or complementing a polished daytime look.', 100, 2, '2024-07-14T05:29:2.50Z');

INSERT INTO products (name, price, description, stock, category_id, date_added) VALUES ('Sleek Comfort-Fit Over-Ear Headphones', 8.90, 'Experience superior sound quality with our Sleek Comfort-Fit Over-Ear Headphones, designed for prolonged use with cushioned ear cups and an adjustable, padded headband. Ideal for immersive listening, whether youre at home, in the office, or on the move. Their durable construction and timeless design provide both aesthetically pleasing looks and long-lasting performance.', 100, 4, '2024-07-14T05:29:2.25Z');

INSERT INTO products (name, price, description, stock, category_id, date_added) VALUES ('Elegant Golden-Base Stone Top Dining Table', 6.50, 'Elevate your dining space with this luxurious table, featuring a sturdy golden metal base with an intricate rod design that provides both stability and chic elegance. The smooth stone top in a sleek round shape offers a robust surface for your dining pleasure. Perfect for both everyday meals and special occasions, this table easily complements any modern or glam decor.', 100, 3, '2024-07-14T05:29:2.90Z');

INSERT INTO products (name, price, description, stock, category_id, date_added) VALUES ('Futuristic Holographic Soccer Cleats', 9.90, 'Step onto the field and stand out from the crowd with these eye-catching holographic soccer cleats. Designed for the modern player, these cleats feature a sleek silhouette, lightweight construction for maximum agility, and durable studs for optimal traction. The shimmering holographic finish reflects a rainbow of colors as you move, ensuring that youll be noticed for both your skills and style. Perfect for the fashion-forward athlete who wants to make a statement.', 100, 2, '2024-07-14T05:29:2.50Z');

INSERT INTO products (name, price, description, stock, category_id, date_added) VALUES ('Vibrant Runners: Bold Orange & Blue Sneakers', 7.25, 'Step into style with these eye-catching sneakers featuring a striking combination of orange and blue hues. Designed for both comfort and fashion, these shoes come with flexible soles and cushioned insoles, perfect for active individuals who dont compromise on style. The reflective silver accents add a touch of modernity, making them a standout accessory for your workout or casual wear.', 100, 2, '2024-07-14T05:29:2.50Z');

INSERT INTO products (name, price, description, stock, category_id, date_added) VALUES ('Radiant Citrus Eau de Parfum', 3.50, 'Indulge in the essence of summer with this vibrant citrus-scented Eau de Parfum. Encased in a sleek glass bottle with a bold orange cap, this fragrance embodies freshness and elegance. Perfect for daily wear, its an olfactory delight that leaves a lasting, zesty impression.', 100, 5, '2024-07-14T05:29:2.50Z');

INSERT INTO products (name, price, description, stock, category_id, date_added) VALUES ('Futuristic Chic High-Heel Boots', 6.90, 'Elevate your style with our cutting-edge high-heel boots that blend bold design with avant-garde aesthetics. These boots feature a unique color-block heel, a sleek silhouette, and a versatile light grey finish that pairs easily with any cutting-edge outfit. Crafted for the fashion-forward individual, these boots are sure to make a statement.', 100, 2, '2024-07-14T05:29:2.50Z');

INSERT INTO products (name, price, description, stock, category_id, date_added) VALUES ('Elegant Purple Leather Loafers', 7.50, 'Step into sophistication with our Elegant Purple Leather Loafers, perfect for making a bold statement. Crafted from high-quality leather with a vibrant purple finish, these shoes feature a classic loafer silhouette thats been updated with a contemporary twist. The comfortable slip-on design and durable soles ensure both style and functionality for the modern man.', 100, 2, '2024-07-14T05:29:2.25Z');

INSERT INTO products (name, price, description, stock, category_id, date_added) VALUES ('Classic Blue Suede Casual Shoes', 9.99, 'Step into comfort with our Classic Blue Suede Casual Shoes, perfect for everyday wear. These shoes feature a stylish blue suede upper, durable rubber soles for superior traction, and classic lace-up fronts for a snug fit. The sleek design pairs well with both jeans and chinos, making them a versatile addition to any wardrobe.', 100, 2, '2024-07-14T05:29:2.50Z');

INSERT INTO products (name, price, description, stock, category_id, date_added) VALUES ('Chic Transparent Fashion Handbag', 1.25, 'Elevate your style with our Chic Transparent Fashion Handbag, perfect for showcasing your essentials with a clear, modern edge. This trendy accessory features durable acrylic construction, luxe gold-tone hardware, and an elegant chain strap. Its compact size ensures you can carry your day-to-day items with ease and sophistication.', 100, 5, '2024-07-14T05:29:2.90Z');

INSERT INTO products (name, price, description, stock, category_id, date_added) VALUES ('Futuristic Silver and Gold High-Top Sneaker', 8.90, 'Step into the future with this eye-catching high-top sneaker, designed for those who dare to stand out. The sneaker features a sleek silver body with striking gold accents, offering a modern twist on classic footwear. Its high-top design provides support and style, making it the perfect addition to any avant-garde fashion collection. Grab a pair today and elevate your shoe game!', 100, 2, '2024-07-14T05:29:2.50Z');

INSERT INTO products (name, price, description, stock, category_id, date_added) VALUES ('Sleek All-Terrain Go-Kart', 7.99, 'Experience the thrill of outdoor adventures with our Sleek All-Terrain Go-Kart, featuring a durable frame, comfortable racing seat, and robust, large-tread tires perfect for handling a variety of terrains. Designed for fun-seekers of all ages, this go-kart is an ideal choice for backyard racing or exploring local trails.', 100, 5, '2024-07-14T05:29:2.25Z');

INSERT INTO products (name, price, description, stock, category_id, date_added) VALUES ('Chic Summer Denim Espadrille Sandals', 3.25, 'Step into summer with style in our denim espadrille sandals. Featuring a braided jute sole for a classic touch and adjustable denim straps for a snug fit, these sandals offer both comfort and a fashionable edge. The easy slip-on design ensures convenience for beach days or casual outings.', 100, 2, '2024-07-14T05:29:2.25Z');

INSERT INTO products (name, price, description, stock, category_id, date_added) VALUES ('Vibrant Pink Classic Sneakers', 4.50, 'Step into style with our Vibrant Pink Classic Sneakers! These eye-catching shoes feature a bold pink hue with iconic white detailing, offering a sleek, timeless design. Constructed with durable materials and a comfortable fit, they are perfect for those seeking a pop of color in their everyday footwear. Grab a pair today and add some vibrancy to your step!', 100, 2, '2024-07-14T05:29:2.25Z');

INSERT INTO products (name, price, description, stock, category_id, date_added) VALUES ('Sleek Futuristic Electric Bicycle', 2.90, 'This modern electric bicycle combines style and efficiency with its unique design and top-notch performance features. Equipped with a durable frame, enhanced battery life, and integrated tech capabilities, its perfect for the eco-conscious commuter looking to navigate the city with ease.', 100, 5, '2024-07-14T05:29:2.25Z');

INSERT INTO products (name, price, description, stock, category_id, date_added) VALUES ('Sleek Olive Green Hardshell Carry-On Luggage', 8.25, 'Travel in style with our durable hardshell carry-on, perfect for weekend getaways and business trips. This sleek olive green suitcase features smooth gliding wheels for easy airport navigation, a sturdy telescopic handle, and a secure zippered compartment to keep your belongings safe. Its compact size meets most airline overhead bin requirements, ensuring a hassle-free flying experience.', 100, 5, '2024-07-14T05:29:2.50Z');

INSERT INTO products (name, price, description, stock, category_id, date_added) VALUES ('Trendy Pink-Tinted Sunglasses', 8.90, 'Step up your style game with these fashionable black-framed, pink-tinted sunglasses. Perfect for making a statement while protecting your eyes from the glare. Their bold color and contemporary design make these shades a must-have accessory for any trendsetter looking to add a pop of color to their ensemble.', 100, 5, '2024-07-14T05:29:2.50Z');

INSERT INTO products (name, price, description, stock, category_id, date_added) VALUES ('Elegant Glass Tumbler Set', 0.90, 'Enhance your drinkware collection with our sophisticated set of glass tumblers, perfect for serving your favorite beverages. This versatile set includes both clear and subtly tinted glasses, lending a modern touch to any table setting. Crafted with quality materials, these durable tumblers are designed to withstand daily use while maintaining their elegant appeal.', 100, 5, '2024-07-14T05:29:3.25Z');
INSERT INTO product_images (product_id, image_url) VALUES (1, 'https://i.imgur.com/cHddUCu.jpeg ');
INSERT INTO product_images (product_id, image_url) VALUES (1,  'https://i.imgur.com/CFOjAgK.jpeg ');
INSERT INTO product_images (product_id, image_url) VALUES (1,  'https://i.imgur.com/wbIMMme.jpeg');
INSERT INTO product_images (product_id, image_url) VALUES (2, 'https://i.imgur.com/ZKGofuB.jpeg ');
INSERT INTO product_images (product_id, image_url) VALUES (2,  'https://i.imgur.com/GJi73H0.jpeg ');
INSERT INTO product_images (product_id, image_url) VALUES (2,  'https://i.imgur.com/633Fqrz.jpeg');
INSERT INTO product_images (product_id, image_url) VALUES (3, 'https://i.imgur.com/yVeIeDa.jpeg ');
INSERT INTO product_images (product_id, image_url) VALUES (3,  'https://i.imgur.com/jByJ4ih.jpeg ');
INSERT INTO product_images (product_id, image_url) VALUES (3,  'https://i.imgur.com/KXj6Tpb.jpeg');
INSERT INTO product_images (product_id, image_url) VALUES (4, 'https://i.imgur.com/UsFIvYs.jpeg ');
INSERT INTO product_images (product_id, image_url) VALUES (4,  'https://i.imgur.com/YIq57b6.jpeg');
INSERT INTO product_images (product_id, image_url) VALUES (5, 'https://i.imgur.com/cSytoSD.jpeg ');
INSERT INTO product_images (product_id, image_url) VALUES (5,  'https://i.imgur.com/WwKucXb.jpeg ');
INSERT INTO product_images (product_id, image_url) VALUES (5,  'https://i.imgur.com/cE2Dxh9.jpeg');
INSERT INTO product_images (product_id, image_url) VALUES (6, 'https://i.imgur.com/Y54Bt8J.jpeg ');
INSERT INTO product_images (product_id, image_url) VALUES (6,  'https://i.imgur.com/SZPDSgy.jpeg ');
INSERT INTO product_images (product_id, image_url) VALUES (6,  'https://i.imgur.com/sJv4Xx0.jpeg');
INSERT INTO product_images (product_id, image_url) VALUES (7, 'https://i.imgur.com/1twoaDy.jpeg ');
INSERT INTO product_images (product_id, image_url) VALUES (7,  'https://i.imgur.com/FDwQgLy.jpeg ');
INSERT INTO product_images (product_id, image_url) VALUES (7,  'https://i.imgur.com/kg1ZhhH.jpeg');
INSERT INTO product_images (product_id, image_url) VALUES (8, 'https://i.imgur.com/mp3rUty.jpeg ');
INSERT INTO product_images (product_id, image_url) VALUES (8,  'https://i.imgur.com/JQRGIc2.jpeg');
INSERT INTO product_images (product_id, image_url) VALUES (9, 'https://i.imgur.com/9LFjwpI.jpeg ');
INSERT INTO product_images (product_id, image_url) VALUES (9,  'https://i.imgur.com/vzrTgUR.jpeg ');
INSERT INTO product_images (product_id, image_url) VALUES (9,  'https://i.imgur.com/p5NdI6n.jpeg');
INSERT INTO product_images (product_id, image_url) VALUES (10, 'https://i.imgur.com/eGOUveI.jpeg ');
INSERT INTO product_images (product_id, image_url) VALUES (10,  'https://i.imgur.com/UcsGO7E.jpeg ');
INSERT INTO product_images (product_id, image_url) VALUES (10,  'https://i.imgur.com/NLn4e7S.jpeg');
INSERT INTO product_images (product_id, image_url) VALUES (11, 'https://i.imgur.com/KeqG6r4.jpeg ');
INSERT INTO product_images (product_id, image_url) VALUES (11,  'https://i.imgur.com/xGQOw3p.jpeg ');
INSERT INTO product_images (product_id, image_url) VALUES (11,  'https://i.imgur.com/oO5OUjb.jpeg');
INSERT INTO product_images (product_id, image_url) VALUES (12, 'https://i.imgur.com/R2PN9Wq.jpeg ');

INSERT INTO product_images (product_id, image_url) VALUES (12,  'https://i.imgur.com/IvxMPFr.jpeg ');

INSERT INTO product_images (product_id, image_url) VALUES (12,  'https://i.imgur.com/7eW9nXP.jpeg');

INSERT INTO product_images (product_id, image_url) VALUES (13, 'https://i.imgur.com/yb9UQKL.jpeg ');

INSERT INTO product_images (product_id, image_url) VALUES (13,  'https://i.imgur.com/m2owtQG.jpeg ');

INSERT INTO product_images (product_id, image_url) VALUES (13,  'https://i.imgur.com/bNiORct.jpeg');

INSERT INTO product_images (product_id, image_url) VALUES (14, 'https://i.imgur.com/YaSqa06.jpeg ');

INSERT INTO product_images (product_id, image_url) VALUES (14,  'https://i.imgur.com/isQAliJ.jpeg ');

INSERT INTO product_images (product_id, image_url) VALUES (14,  'https://i.imgur.com/5B8UQfh.jpeg');

INSERT INTO product_images (product_id, image_url) VALUES (15, 'https://i.imgur.com/wXuQ7bm.jpeg ');

INSERT INTO product_images (product_id, image_url) VALUES (15,  'https://i.imgur.com/BZrIEmb.jpeg ');

INSERT INTO product_images (product_id, image_url) VALUES (15,  'https://i.imgur.com/KcT6BE0.jpeg');

INSERT INTO product_images (product_id, image_url) VALUES (16, 'https://i.imgur.com/keVCVIa.jpeg ');

INSERT INTO product_images (product_id, image_url) VALUES (16,  'https://i.imgur.com/afHY7v2.jpeg ');

INSERT INTO product_images (product_id, image_url) VALUES (16,  'https://i.imgur.com/yAOihUe.jpeg');

INSERT INTO product_images (product_id, image_url) VALUES (17, 'https://i.imgur.com/R3iobJA.jpeg ');

INSERT INTO product_images (product_id, image_url) VALUES (17,  'https://i.imgur.com/Wv2KTsf.jpeg ');

INSERT INTO product_images (product_id, image_url) VALUES (17,  'https://i.imgur.com/76HAxcA.jpeg');

INSERT INTO product_images (product_id, image_url) VALUES (18, 'https://i.imgur.com/9DqEOV5.jpeg ');

INSERT INTO product_images (product_id, image_url) VALUES (18,  'https://i.imgur.com/ae0AEYn.jpeg ');

INSERT INTO product_images (product_id, image_url) VALUES (18,  'https://i.imgur.com/mZ4rUjj.jpeg');

INSERT INTO product_images (product_id, image_url) VALUES (19, 'https://i.imgur.com/LGk9Jn2.jpeg ');

INSERT INTO product_images (product_id, image_url) VALUES (19,  'https://i.imgur.com/1ttYWaI.jpeg ');

INSERT INTO product_images (product_id, image_url) VALUES (19,  'https://i.imgur.com/sPRWnJH.jpeg');

INSERT INTO product_images (product_id, image_url) VALUES (20, 'https://i.imgur.com/w3Y8NwQ.jpeg ');

INSERT INTO product_images (product_id, image_url) VALUES (20,  'https://i.imgur.com/WJFOGIC.jpeg ');

INSERT INTO product_images (product_id, image_url) VALUES (20,  'https://i.imgur.com/dV4Nklf.jpeg');

INSERT INTO product_images (product_id, image_url) VALUES (21, 'https://i.imgur.com/axsyGpD.jpeg ');

INSERT INTO product_images (product_id, image_url) VALUES (21,  'https://i.imgur.com/T8oq9X2.jpeg ');

INSERT INTO product_images (product_id, image_url) VALUES (21,  'https://i.imgur.com/J6MinJn.jpeg');

INSERT INTO product_images (product_id, image_url) VALUES (22, 'https://i.imgur.com/Qphac99.jpeg ');

INSERT INTO product_images (product_id, image_url) VALUES (22,  'https://i.imgur.com/dJjpEgG.jpeg ');

INSERT INTO product_images (product_id, image_url) VALUES (22,  'https://i.imgur.com/MxJyADq.jpeg');

INSERT INTO product_images (product_id, image_url) VALUES (23, 'https://i.imgur.com/OKn1KFI.jpeg ');

INSERT INTO product_images (product_id, image_url) VALUES (23,  'https://i.imgur.com/G4f21Ai.jpeg ');

INSERT INTO product_images (product_id, image_url) VALUES (23,  'https://i.imgur.com/Z9oKRVJ.jpeg');

INSERT INTO product_images (product_id, image_url) VALUES (24, 'https://i.imgur.com/6wkyyIN.jpeg ');

INSERT INTO product_images (product_id, image_url) VALUES (24,  'https://i.imgur.com/Ald3Rec.jpeg ');

INSERT INTO product_images (product_id, image_url) VALUES (24,  'https://i.imgur.com/dIqo03c.jpeg');

INSERT INTO product_images (product_id, image_url) VALUES (25, 'https://i.imgur.com/DMQHGA0.jpeg ');

INSERT INTO product_images (product_id, image_url) VALUES (25,  'https://i.imgur.com/qrs9QBg.jpeg ');

INSERT INTO product_images (product_id, image_url) VALUES (25,  'https://i.imgur.com/XVp8T1I.jpeg');

INSERT INTO product_images (product_id, image_url) VALUES (26, 'https://i.imgur.com/ZANVnHE.jpeg ');

INSERT INTO product_images (product_id, image_url) VALUES (26,  'https://i.imgur.com/Ro5z6Tn.jpeg ');

INSERT INTO product_images (product_id, image_url) VALUES (26,  'https://i.imgur.com/woA93Li.jpeg');

INSERT INTO product_images (product_id, image_url) VALUES (27, 'https://i.imgur.com/62gGzeF.jpeg ');

INSERT INTO product_images (product_id, image_url) VALUES (27,  'https://i.imgur.com/5MoPuFM.jpeg ');

INSERT INTO product_images (product_id, image_url) VALUES (27,  'https://i.imgur.com/sUVj7pK.jpeg');

INSERT INTO product_images (product_id, image_url) VALUES (28, 'https://i.imgur.com/3oXNBst.jpeg ');

INSERT INTO product_images (product_id, image_url) VALUES (28,  'https://i.imgur.com/ErYYZnT.jpeg ');

INSERT INTO product_images (product_id, image_url) VALUES (28,  'https://i.imgur.com/boBPwYW.jpeg');

INSERT INTO product_images (product_id, image_url) VALUES (29, 'https://i.imgur.com/4lTaHfF.jpeg ');

INSERT INTO product_images (product_id, image_url) VALUES (29,  'https://i.imgur.com/JktHE1C.jpeg ');

INSERT INTO product_images (product_id, image_url) VALUES (29,  'https://i.imgur.com/cQeXQMi.jpeg');

INSERT INTO product_images (product_id, image_url) VALUES (30, 'https://i.imgur.com/3dU0m72.jpeg ');

INSERT INTO product_images (product_id, image_url) VALUES (30,  'https://i.imgur.com/zPU3EVa.jpeg');

INSERT INTO product_images (product_id, image_url) VALUES (31, 'https://i.imgur.com/ItHcq7o.jpeg ');

INSERT INTO product_images (product_id, image_url) VALUES (31,  'https://i.imgur.com/55GM3XZ.jpeg ');

INSERT INTO product_images (product_id, image_url) VALUES (31,  'https://i.imgur.com/tcNJxoW.jpeg');

INSERT INTO product_images (product_id, image_url) VALUES (32, 'https://i.imgur.com/AzAY4Ed.jpeg ');

INSERT INTO product_images (product_id, image_url) VALUES (32,  'https://i.imgur.com/umfnS9P.jpeg ');

INSERT INTO product_images (product_id, image_url) VALUES (32,  'https://i.imgur.com/uFyuvLg.jpeg');

INSERT INTO product_images (product_id, image_url) VALUES (33, 'https://i.imgur.com/SolkFEB.jpeg ');

INSERT INTO product_images (product_id, image_url) VALUES (33,  'https://i.imgur.com/KIGW49u.jpeg ');

INSERT INTO product_images (product_id, image_url) VALUES (33,  'https://i.imgur.com/mWwek7p.jpeg');

INSERT INTO product_images (product_id, image_url) VALUES (34, 'https://i.imgur.com/NWIJKUj.jpeg ');

INSERT INTO product_images (product_id, image_url) VALUES (34,  'https://i.imgur.com/Jn1YSLk.jpeg ');

INSERT INTO product_images (product_id, image_url) VALUES (34,  'https://i.imgur.com/VNZRvx5.jpeg');

INSERT INTO product_images (product_id, image_url) VALUES (35, 'https://i.imgur.com/qNOjJje.jpeg ');

INSERT INTO product_images (product_id, image_url) VALUES (35,  'https://i.imgur.com/NjfCFnu.jpeg ');

INSERT INTO product_images (product_id, image_url) VALUES (35,  'https://i.imgur.com/eYtvXS1.jpeg');

INSERT INTO product_images (product_id, image_url) VALUES (36, 'https://i.imgur.com/hKcMNJs.jpeg ');

INSERT INTO product_images (product_id, image_url) VALUES (36,  'https://i.imgur.com/NYToymX.jpeg ');

INSERT INTO product_images (product_id, image_url) VALUES (36,  'https://i.imgur.com/HiiapCt.jpeg');

INSERT INTO product_images (product_id, image_url) VALUES (37, 'https://i.imgur.com/xPDwUb3.jpg ');

INSERT INTO product_images (product_id, image_url) VALUES (37,  'https://i.imgur.com/3rfp691.jpg ');

INSERT INTO product_images (product_id, image_url) VALUES (37,  'https://i.imgur.com/kG05a29.jpg');

INSERT INTO product_images (product_id, image_url) VALUES (38, 'https://i.imgur.com/HqYqLnW.jpeg ');

INSERT INTO product_images (product_id, image_url) VALUES (38,  'https://i.imgur.com/RlDGnZw.jpeg ');

INSERT INTO product_images (product_id, image_url) VALUES (38,  'https://i.imgur.com/qa0O6fg.jpeg');

INSERT INTO product_images (product_id, image_url) VALUES (39, 'https://i.imgur.com/Au8J9sX.jpeg ');

INSERT INTO product_images (product_id, image_url) VALUES (39,  'https://i.imgur.com/gdr8BW2.jpeg ');

INSERT INTO product_images (product_id, image_url) VALUES (39,  'https://i.imgur.com/KDCZxnJ.jpeg');

INSERT INTO product_images (product_id, image_url) VALUES (40, 'https://i.imgur.com/sC0ztOB.jpeg ');

INSERT INTO product_images (product_id, image_url) VALUES (40,  'https://i.imgur.com/Jf9DL9R.jpeg ');

INSERT INTO product_images (product_id, image_url) VALUES (40,  'https://i.imgur.com/R1IN95T.jpeg');

INSERT INTO product_images (product_id, image_url) VALUES (41, 'https://i.imgur.com/Lqaqz59.jpg ');

INSERT INTO product_images (product_id, image_url) VALUES (41,  'https://i.imgur.com/uSqWK0m.jpg ');

INSERT INTO product_images (product_id, image_url) VALUES (41,  'https://i.imgur.com/atWACf1.jpg');

INSERT INTO product_images (product_id, image_url) VALUES (42, 'https://i.imgur.com/npLfCGq.jpeg ');

INSERT INTO product_images (product_id, image_url) VALUES (42,  'https://i.imgur.com/vYim3gj.jpeg ');

INSERT INTO product_images (product_id, image_url) VALUES (42,  'https://i.imgur.com/HxuHwBO.jpeg');

INSERT INTO product_images (product_id, image_url) VALUES (43, 'https://i.imgur.com/Ex5x3IU.jpg ');

INSERT INTO product_images (product_id, image_url) VALUES (43,  'https://i.imgur.com/z7wAQwe.jpg ');

INSERT INTO product_images (product_id, image_url) VALUES (43,  'https://i.imgur.com/kc0Dj9S.jpg');

INSERT INTO product_images (product_id, image_url) VALUES (44, 'https://i.imgur.com/9qrmE1b.jpeg ');

INSERT INTO product_images (product_id, image_url) VALUES (44,  'https://i.imgur.com/wqKxBVH.jpeg ');

INSERT INTO product_images (product_id, image_url) VALUES (44,  'https://i.imgur.com/sWSV6DK.jpeg');

INSERT INTO product_images (product_id, image_url) VALUES (45, 'https://i.imgur.com/mcW42Gi.jpeg ');

INSERT INTO product_images (product_id, image_url) VALUES (45,  'https://i.imgur.com/mhn7qsF.jpeg ');

INSERT INTO product_images (product_id, image_url) VALUES (45,  'https://i.imgur.com/F8vhnFJ.jpeg');

INSERT INTO product_images (product_id, image_url) VALUES (46, 'https://i.imgur.com/BG8J0Fj.jpg ');

INSERT INTO product_images (product_id, image_url) VALUES (46,  'https://i.imgur.com/ujHBpCX.jpg ');

INSERT INTO product_images (product_id, image_url) VALUES (46,  'https://i.imgur.com/WHeVL9H.jpg');

INSERT INTO product_images (product_id, image_url) VALUES (47, 'https://i.imgur.com/jVfoZnP.jpg ');

INSERT INTO product_images (product_id, image_url) VALUES (47,  'https://i.imgur.com/Tnl15XK.jpg ');

INSERT INTO product_images (product_id, image_url) VALUES (47,  'https://i.imgur.com/7OqTPO6.jpg');

INSERT INTO product_images (product_id, image_url) VALUES (48, 'https://i.imgur.com/0qQBkxX.jpg ');

INSERT INTO product_images (product_id, image_url) VALUES (48,  'https://i.imgur.com/I5g1DoE.jpg ');

INSERT INTO product_images (product_id, image_url) VALUES (48,  'https://i.imgur.com/myfFQBW.jpg');

INSERT INTO product_images (product_id, image_url) VALUES (49, 'https://i.imgur.com/TF0pXdL.jpg ');

INSERT INTO product_images (product_id, image_url) VALUES (49,  'https://i.imgur.com/BLDByXP.jpg ');

INSERT INTO product_images (product_id, image_url) VALUES (49,  'https://i.imgur.com/b7trwCv.jpg');