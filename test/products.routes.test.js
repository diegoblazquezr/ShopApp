const supertest = require("supertest");
const server = require("../index");
const pool = require('../config/db_pgsql');
const request = supertest(server);

afterAll(async () => {
    await server.close();
    await pool.end();
});

describe("Products Routes", () => {
    
    describe("POST /api/product", () => {
        it("should create a new product", async () => {
            const response = await request
                .post("/api/product")
                .send({
                    name: "Test Product",
                    price: 44.44,
                    description: "Description of Test Product",
                    stock: 44,
                    categoryName: "Miscellaneous"
                })
                .set("Accept", "application/json")
                .expect("Content-Type", /json/)
                .expect(201);
            expect(response.body).toHaveProperty('items_created');
        });
    });

    describe("GET /api/product", () => {
        it("should return a specific product", async () => {
            const response = await request
                .get("/api/product?productName=Test Product")
                .expect(200);
            expect(response.body).toEqual(expect.any(Array));
            expect(response.body[0]).toHaveProperty('name', 'Test Product');
        });

        it("should return filtered products", async () => {
            const response = await request
                .get("/api/product?search=Test&categoryName=Miscellaneous&filter=price&order=asc&limit=10&offset=0")
                .expect(200);
            expect(response.body).toEqual(expect.any(Array));
        });
    });

    describe("PUT /api/product", () => {
        it("should update an existing product", async () => {
            const response = await request
                .put("/api/product")
                .send({
                    name: "Test Product 2",
                    price: 444.44,
                    description: "Description of Test Product 2",
                    stock: 444,
                    categoryName: "Electronics",
                    actualName: "Test Product"
                })
                .set("Accept", "application/json")
                .expect("Content-Type", /json/)
                .expect(201);
            expect(response.body).toHaveProperty('items_updated');
        });
    });

    describe("DELETE /api/product", () => {
        it("should delete a product", async () => {
            const response = await request
                .delete("/api/product?productName=Test Product 2")
                .expect(200);
            expect(response.body).toEqual(1);
        });
    });
});