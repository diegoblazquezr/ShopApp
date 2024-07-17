const queries = {
    createProduct: `INSERT INTO products(name, price, description, stock, category_id, date_added)
    VALUES($1, $2, $3, $4, (SELECT category_id FROM categories WHERE name = $5), (SELECT NOW()));`,

    readProduct: `SELECT *
    FROM products
    WHERE name = $1;`,

    readProductsBySearch: `SELECT *
    FROM products
    WHERE name ILIKE $1
    OR description ILIKE $1
    LIMIT $2
    OFFSET $3;`,

    readProductsByFilterAsc: `SELECT * FROM products 
    ORDER BY 
    CASE 
        WHEN $1 = 'date_added' THEN date_added::text 
        WHEN $1 = 'name' THEN name::text
        WHEN $1 = 'price' THEN price::text
        ELSE date_added::text
    END ASC
    LIMIT $2 OFFSET $3`,

    readProductsByFilterDesc: `SELECT * FROM products 
    ORDER BY 
    CASE 
        WHEN $1 = 'date_added' THEN date_added::text 
        WHEN $1 = 'name' THEN name::text
        WHEN $1 = 'price' THEN price::text
        ELSE date_added::text
    END DESC
    LIMIT $2 OFFSET $3`,

    readByProductsCategory: `SELECT *
    FROM products
    WHERE category_id = (SELECT category_id FROM categories WHERE name = $1)
    LIMIT $2
    OFFSET $3;`,

    updateProduct: `UPDATE products
    SET name = COALESCE($1, name),
    price = COALESCE($2, price),
    description = COALESCE($3, description),
    stock = COALESCE($4, stock),
    category_id = COALESCE((SELECT category_id FROM categories WHERE name = $5), category_id)
    WHERE name = $6;`,

    deleteProduct: `DELETE FROM products
    WHERE name = $1;`
}
module.exports = queries;