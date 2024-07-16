-- CRUD users
-- CREATE
INSERT INTO users(name, email, password, phone, address, role, logged)
VALUES ('Test', 'test@mail.com', '123456', 123456789, 'Calle Desengaño 21', 'user', false);
-- READ ALL
SELECT *
FROM users
WHERE role = 'user';
-- READ ONE
SELECT *
FROM users
WHERE user_id = 5;
-- UPDATE
UPDATE users
SET name = 'Test2',
email = 'test2@mail.com',
password = '654321',
phone = 987654321,
address = 'Calle Desengaño 12',
role = 'admin',
logged = true
WHERE user_id = 5;
-- DELETE
DELETE FROM users
WHERE user_id = 5;