USE final_project;

-- insert calendar table data
INSERT INTO calendar (`date`, `year`, `month`, `period`)
SELECT 
    DATE(date_sequence.dates) AS date,
    YEAR(date_sequence.dates) AS year,
    MONTH(date_sequence.dates) AS month,
    CONCAT(YEAR(date_sequence.dates), '-', LPAD(MONTH(date_sequence.dates), 2, '0')) AS period
FROM (
    SELECT 
        DATE_ADD('2023-11-01', INTERVAL seq DAY) AS dates
    FROM (
        SELECT 
            (ONES.SEQ + TENS.SEQ + HUNDREDS.SEQ) AS seq
        FROM
            (SELECT 0 AS SEQ UNION ALL SELECT 1 UNION ALL SELECT 2 UNION ALL SELECT 3 UNION ALL SELECT 4 UNION ALL SELECT 5 UNION ALL SELECT 6 UNION ALL SELECT 7 UNION ALL SELECT 8 UNION ALL SELECT 9) AS ONES
            CROSS JOIN (SELECT 0 AS SEQ UNION ALL SELECT 10 UNION ALL SELECT 20 UNION ALL SELECT 30) AS TENS
            CROSS JOIN (SELECT 0 AS SEQ UNION ALL SELECT 100 UNION ALL SELECT 200) AS HUNDREDS
    ) AS num_sequence
    WHERE DATE_ADD('2023-11-01', INTERVAL seq DAY) <= '2024-01-31'
) AS date_sequence;

-- insert charges table data
INSERT INTO charges (charge_name)
VALUES 
    ('Cleaning'),
    ('Assistant'),
    ('Manager');

-- insert city table data
INSERT INTO cities (idcity, id_country, city) VALUES
    ('NWY', 1, 'New York'),
    ('LAX', 1, 'Los Angeles'),
    ('CHI', 1, 'Chicago'),
    ('HOU', 1, 'Houston'),
    ('DAL', 1, 'Dallas'),
    ('SJO', 1, 'San Jose'),
    ('LON', 2, 'London'),
    ('MAN', 2, 'Manchester'),
    ('CAM', 2, 'Cambridge'),
    ('OXF', 2, 'Oxford'),
    ('YOR', 2, 'York');
    
-- insert data into country table
INSERT INTO countries (country) VALUES
    ('United States'),
    ('United Kingdom');   

INSERT INTO employees (first_name, last_name, id_salary, id_charge)
VALUES 
    ('John', 'Doe', 1, 1),      -- Cleaning
    ('Jane', 'Smith', 2, 2),    -- Assistant
    ('Mike', 'Johnson', 3, 3),  -- Manager
    ('Emily', 'Davis', 4, 1),   -- Cleaning
    ('David', 'Brown', 5, 2),   -- Assistant
    ('Sarah', 'Wilson', 6, 3),  -- Manager
    ('Alex', 'Miller', 7, 1),   -- Cleaning
    ('Olivia', 'Martinez', 8, 2); -- Assistant

-- insert data into parking table
INSERT INTO parking (parking_number, zone)
VALUES
    -- Zona A
    (101, 'A'), (102, 'A'), (103, 'A'), (104, 'A'), (105, 'A'),
    (106, 'A'), (107, 'A'), (108, 'A'), (109, 'A'), (110, 'A'),
    -- Zona B
    (111, 'B'), (112, 'B'), (113, 'B'), (114, 'B'), (115, 'B'),
    (116, 'B'), (117, 'B'), (118, 'B'), (119, 'B'), (120, 'B'),
    -- Zona C
    (121, 'C'), (122, 'C'), (123, 'C'), (124, 'C'), (125, 'C'),
    (126, 'C'), (127, 'C'), (128, 'C'), (129, 'C'), (130, 'C'),
    -- Zona D
    (131, 'D'), (132, 'D'), (133, 'D'), (134, 'D'), (135, 'D'),
    (136, 'D'), (137, 'D'), (138, 'D'), (139, 'D'), (140, 'D');
    
-- insert data into rooms table 
INSERT INTO rooms (room_number, zone)
VALUES 
    (101, 'A'),
    (102, 'B'),
    (103, 'C'),
    (201, 'A'),
    (202, 'B'),
    (203, 'C'),
    (301, 'A'),
    (302, 'B'),
    (303, 'C'),
    (401, 'A');

-- insert data into pools table
INSERT INTO pools (pool_number) VALUES (1), (2), (3);

-- insert data into salary table
INSERT INTO salary (salary, id_employee)
VALUES 
    (50000.00, 1),
    (60000.00, 2),
    (85000.00, 3),
    (65000.00, 4),
    (70000.00, 5),
    (82000.00, 6),
    (48000.00, 7),
    (75000.00, 8);

-- insert data into user_category table
INSERT INTO user_category (category_name, description, discount)
VALUES 
    ('VIP', 'Category for VIP members', 20),
    ('New', 'Category for new members', 15),
    ('Frequent', 'Category for frequent members', 10);

-- insert data into users table
INSERT INTO users (id_city, id_category, first_name, last_name, user_name, password)
VALUES 
    ('NWY', 1, 'Alice', 'Johnson', 'alice123', SHA2('password123', 256)),
    ('LAX', 2, 'Bob', 'Smith', 'bob456', SHA2('password234', 256)),
    ('CHI', 1, 'Charlie', 'Williams', 'charlie789', SHA2('password345', 256)),
    ('YOR', 2, 'David', 'Brown', 'david01', SHA2('password456', 256)),
    ('LON', 1, 'Emma', 'Davis', 'emma02', SHA2('password567', 256)),
    ('CHI', 2, 'Frank', 'Miller', 'frank03', SHA2('password678', 256)),
    ('LON', 1, 'Grace', 'Wilson', 'grace04', SHA2('password789', 256)),
    ('LON', 2, 'Henry', 'Jones', 'henry05', SHA2('password890', 256)),
    ('LAX', 1, 'Ivy', 'Garcia', 'ivy06', SHA2('password901', 256)),
    ('NWY', 2, 'Jack', 'Lee', 'jack07', SHA2('password012', 256));

SELECT * FROM reservation;
SELECT * FROM countries;
SELECT * FROM cities;
SELECT * FROM rooms;
SELECT * FROM salary;
SELECT * FROM charges;
SELECT * FROM employees;
SELECT * FROM pools;
SELECT * from users;
SELECT * FROM calendar;
SELECT * from parking;
SELECT * FROM user_category;
