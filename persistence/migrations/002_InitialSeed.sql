BEGIN TRANSACTION;

-- Users
INSERT INTO users (username, password, role) VALUES
('admin', 'admin123', 'admin'),
('staff1', 'staff123', 'staff');

-- Suppliers
INSERT INTO suppliers (name, phone, email, address) VALUES
('Default Supplier', '9999999999', 'supplier@example.com', 'Main Warehouse');

-- Products
INSERT INTO products (name, description, price, quantity, supplier_id) VALUES
('Sample Product', 'Basic seeded product', 100.0, 50, 1);

-- Inventory Transactions
INSERT INTO inventory_transactions (product_id, transaction_type, quantity, user_id) VALUES
(1, 'IN', 50, 1);

COMMIT;
