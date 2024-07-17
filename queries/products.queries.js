const queries = {
    createProduct: `INSERT INTO products(name, price, description, stock, category_id, date_added)
    VALUES($1, $2, $3, $4, (SELECT category_id FROM categories WHERE name = $5), (SELECT NOW()));`,

    readProduct: `SELECT *
    FROM products
    WHERE name = $1;`,

    readByProductsSearch: `SELECT *
    FROM products
    WHERE name ILIKE $1
    OR description ILIKE $1
    LIMIT $2
    OFFSET $3;`,

    readByProductsDateAddedAsc: `SELECT *
    FROM products
    ORDER BY date_added ASC
    LIMIT $1
    OFFSET $2;`,
    readByProductsDateAddedDesc: `SELECT *
    FROM products
    ORDER BY date_added DESC
    LIMIT $1
    OFFSET $2;`,
    readByProductsNameAsc: `SELECT *
    FROM products
    ORDER BY name ASC
    LIMIT $1
    OFFSET $2;`,
    readByProductsNameDesc: `SELECT *
    FROM products
    ORDER BY name DESC
    LIMIT $1
    OFFSET $2;`,
    readByProductsPriceAsc: `SELECT *
    FROM products
    ORDER BY price ASC
    LIMIT $1
    OFFSET $2;`,
    readByProductsPriceDesc: `SELECT *
    FROM products
    ORDER BY price DESC
    LIMIT $1
    OFFSET $2;`,

    readProductCategory: `SELECT *
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