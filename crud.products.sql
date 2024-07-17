-- CRUD products

-- CREATE
INSERT INTO products(name, price, description, stock, category_id, date_added)
VALUES('Test Product', 44.44, 'Description of Test Product', 44, 5, (SELECT NOW()));

-- READ ONE
SELECT *
FROM products
WHERE name = 'Test Product';

-- READ BY SEARCH
SELECT *
FROM products
WHERE name ILIKE '%classic%'
OR description ILIKE '%classic%'
LIMIT 10
OFFSET 0;

-- READ BY FILTERS
SELECT *
FROM products
ORDER BY 
CASE
    WHEN $1 = 'date_added' THEN date_added
    WHEN $1 = 'name' THEN name
    WHEN $1 = 'price' THEN price
END DESC
LIMIT = $3
OFFSET = $4;

-- READ BY DATE
SELECT *
FROM products
ORDER BY date_added ASC
LIMIT 10
OFFSET 0;
-- READ BY NAME
SELECT *
FROM products
ORDER BY name ASC
LIMIT 10
OFFSET 0;
-- READ BY PRICE
SELECT *
FROM products
ORDER BY price ASC
LIMIT 10
OFFSET 0;
-- READ BY CATEGORY
SELECT *
FROM products
WHERE category_id = (SELECT category_id FROM categories WHERE name = Clothes)
LIMIT 10
OFFSET 0;

-- UPDATE
UPDATE products
SET name = COALESCE('Test Product 2', name),
price = COALESCE(444.44, price),
description = COALESCE('Description of Test Product', description),
stock = COALESCE(444, stock),
category_id = COALESCE((SELECT category_id FROM categories WHERE name = 'Electronics'), category_id)
WHERE name = 'Test Product';

-- DELETE
DELETE FROM products
WHERE name = 'Test Product 2';