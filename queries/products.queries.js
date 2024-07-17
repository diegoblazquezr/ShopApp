const queries = {
    createProduct: `INSERT INTO products(name, price, description, stock, category_id, date_added)
    VALUES($1, $2, $3, $4, (SELECT category_id FROM categories WHERE name = $5), (SELECT NOW()));`,

    readProduct: `SELECT p.*, array_agg(pi.image_url) AS image_urls
    FROM products p
    LEFT JOIN product_images pi ON pi.product_id = p.product_id
    WHERE p.name = $1
    GROUP BY p.product_id;`,

    readProductsByFilterAsc: `SELECT p.*, array_agg(pi.image_url) AS image_urls
    FROM products p
    LEFT JOIN product_images pi ON pi.product_id = p.product_id
    WHERE (p.name ILIKE $1 OR p.description ILIKE $1)
    AND (COALESCE($2, '') = '' OR p.category_id = (SELECT category_id FROM categories WHERE name = $2))
    GROUP BY p.product_id
    ORDER BY 
        CASE 
            WHEN $3 = 'date_added' THEN p.date_added::text
            WHEN $3 = 'name' THEN p.name::text
            WHEN $3 = 'price' THEN p.price::text
            ELSE p.date_added::text
        END ASC
    LIMIT $4 
    OFFSET $5;`,

    readProductsByFilterDesc: `SELECT p.*, array_agg(pi.image_url) AS image_urls
    FROM products p
    LEFT JOIN product_images pi ON pi.product_id = p.product_id
    WHERE (p.name ILIKE $1 OR p.description ILIKE $1)
    AND (COALESCE($2, '') = '' OR p.category_id = (SELECT category_id FROM categories WHERE name = $2))
    GROUP BY p.product_id
    ORDER BY 
        CASE 
            WHEN $3 = 'date_added' THEN p.date_added::text
            WHEN $3 = 'name' THEN p.name::text
            WHEN $3 = 'price' THEN p.price::text
            ELSE p.date_added::text
        END DESC
    LIMIT $4 
    OFFSET $5;`,

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