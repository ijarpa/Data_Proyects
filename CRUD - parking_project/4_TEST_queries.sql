USE final_project;
-- CREATE USER
-- id_city, id_category, first name, last name, user name, password, city id
CALL CreateUser('LAX', 1, 'Ivan', 'Jarpa', 'ijarpa', 'password123');
CALL CreateUser('CHI', 3, 'Ryan', 'Mattson', 'rmattson', 'password532');
CALL CreateUser('LAX', 1, 'Ignacio', 'Jarpa', 'ijarpa', 'password567'); -- Error, user already exists

-- LOG IN
-- user name, password 
CALL AuthenticateUser('ijarpa', 'password123');
CALL AuthenticateUser('ijarpa', '123');

-- RESERVATION
-- id user, id parking, id_rooms, id_employee, id_pool, status, status description, start date, end date
CALL Reservation(21, 5, NULL, 3, NULL, 1, 'reserved', '2023-12-9 07:30:00', '2023-12-9 11:00:00'); -- parking reservation
CALL Reservation(18, 5, NULL, 3, NULL, 1, 'reserved', '2023-12-9 10:30:00', '2023-12-9 11:00:00'); -- error for parking reservation at the same time
CALL Reservation(18, 2, NULL, 3, NULL, 1, 'reserved', '2023-12-10 10:30:00', '2023-12-11 10:30:00');
CALL Reservation(11, NULL, 4, 3, NULL, 1, 'reserved', '2023-12-22 22:30:00', '2023-12-26 11:00:00'); -- room reservation
CALL Reservation(15, NULL, 6, 6, NULL, 1, 'reserved', '2023-12-9 12:30:00', '2023-12-9 18:00:00'); -- room reservation
CALL Reservation(12, NULL, NULL, 6, 1, 1, 'reserved', '2023-12-09 13:30:00', '2023-12-09 15:00:00');
CALL Reservation(13, NULL, NULL, 6, 2, 1, 'reserved', '2023-12-10 09:00:00', '2023-12-10 11:30:00');
CALL Reservation(14, 20, NULL, 6, 1, 1, 'reserved', '2023-12-11 14:00:00', '2023-12-11 16:00:00');
CALL Reservation(15, NULL, NULL, 6, 3, 1, 'reserved', '2023-12-15 10:30:00', '2023-12-15 12:00:00');
CALL Reservation(16, 30, NULL, 6, 3, 1, 'reserved', '2023-12-18 12:00:00', '2023-12-18 14:30:00');
CALL Reservation(17, 35, NULL, 3, NULL, 1, 'reserved', '2023-12-20 15:00:00', '2023-12-20 16:30:00');
CALL Reservation(18, 40, NULL, 3, NULL, 1, 'reserved', '2023-12-22 09:30:00', '2023-12-22 11:00:00');
CALL Reservation(19, NULL, NULL, 6, 1, 1, 'reserved', '2023-12-25 11:30:00', '2023-12-25 13:00:00');
CALL Reservation(20, NULL, NULL, 3, 1, 1, 'reserved', '2023-12-28 14:00:00', '2023-12-28 15:30:00');

-- UPDATE STATUS
-- id reservation, id user, new status (0, 1), new status description, new start date, new end date
CALL ParkingStatusUpdate(1, 21, 0, 'cancelled', '2023-12-9 07:30:00', '2023-12-9 11:00:00'); -- reservation 1 cancelled
CALL ParkingStatusUpdate(3, 13, 0, 'cancelled', '2023-12-10 10:30:00', '2023-12-11 10:30:00'); -- error canceling a reservation of a different user
CALL ParkingStatusUpdate(6, 12, 1, 'extended', '2023-12-10 09:00:00', '2023-12-10 15:00:00'); -- reservation extended
CALL ParkingStatusUpdate(4, 11, 0, 'availble', '2023-12-25 11:30:00', '2023-12-25 12:30:00'); -- available reservation

-- DELETE RESERVATION
-- id user, id reservation
CALL DeleteReservation(12, 7); -- delete my own reservation
CALL DeleteReservation(14, 8); -- error when trying to delete a reservation for another user

-- SHOW RESERVATION TABLE
CALL ShowReservationData();

-- RESERVATION BY USER
SELECT u.idusers, u.first_name, u.last_name, COUNT(r.idreservation) AS total_reservations
FROM users u
LEFT JOIN reservation r ON u.idusers = r.id_users
GROUP BY u.idusers;

-- RESERVATION BY COUNTRY
SELECT c.country, COUNT(r.idreservation) AS total_reservations
FROM users u
LEFT JOIN reservation r ON u.idusers = r.id_users
LEFT JOIN cities ci ON u.id_city = ci.idcity
LEFT JOIN countries c ON ci.id_country = c.idcountries
GROUP BY c.country;

-- RESERVATIO BY TYPE
SELECT 
    CASE 
        WHEN r.id_parking IS NOT NULL THEN 'Parking'
        WHEN r.id_rooms IS NOT NULL THEN 'Room'
        WHEN r.id_pool IS NOT NULL THEN 'Pool'
        ELSE 'N/A'
    END AS reservation_location,
    COUNT(*) AS total_reservations
FROM reservation r
GROUP BY reservation_location;

-- RESERVATION BY EMPLOYEE
SELECT 
    e.idemployees,
    e.first_name,
    e.last_name,
    COUNT(r.idreservation) AS total_reservations_registered
FROM employees e
LEFT JOIN reservation r ON e.idemployees = r.id_employee
GROUP BY e.idemployees;

