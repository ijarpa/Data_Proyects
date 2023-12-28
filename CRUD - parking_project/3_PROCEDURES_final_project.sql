USE final_project;
-- PROCEDURES
-- create user
DELIMITER //
CREATE PROCEDURE CreateUser(
	IN procedure_id_city VARCHAR(5),
    IN procedure_id_category INT,
    IN procedure_first_name VARCHAR(45),
    IN procedure_last_name VARCHAR(45),
    IN procedure_user_name VARCHAR(45),
    IN procedure_password VARCHAR(70)
)
BEGIN
    DECLARE user_count INT; -- verify if user exists
    DECLARE error_handling INT DEFAULT 0;

    DECLARE CONTINUE HANDLER FOR SQLEXCEPTION SET error_handling = 1;

    START TRANSACTION;
    SELECT COUNT(*) INTO user_count FROM users WHERE user_name = procedure_user_name;

    IF user_count = 0 THEN
        BEGIN
            INSERT INTO users (id_city, id_category, first_name, last_name, user_name, password)
            VALUES (procedure_id_city, procedure_id_category, procedure_first_name, procedure_last_name, procedure_user_name, SHA2(procedure_password, 256));
            SELECT 'New user created' AS message;
        END;
    ELSE
        SELECT 'User already exists' AS message;
    END IF;

    IF error_handling = 0 THEN
        COMMIT;
    ELSE
        ROLLBACK;
    END IF;
END //
DELIMITER ;

-- login user
DELIMITER //
CREATE PROCEDURE AuthenticateUser(
    IN userName VARCHAR(255), 
    IN userPassword VARCHAR(255)
)
BEGIN
    DECLARE userCount INT;

    START TRANSACTION;
    SELECT COUNT(*) INTO userCount FROM users WHERE user_name = userName AND password = SHA2(userPassword, 256);
    IF userCount <> 1 THEN
        SELECT 'Invalid username or password' AS 'Error';
    ELSE
        SELECT CONCAT('User: ', userName, ' logged in.') AS 'Log';
        COMMIT;
    END IF;
END //
DELIMITER ;


-- Parking Reservation
DELIMITER //
CREATE PROCEDURE Reservation(
    IN procedure_iduser INT,
    IN procedure_idparking INT,
    IN procedure_idrooms INT,
    IN procedure_idemployee INT,
    IN procedure_idpool INT,
    IN procedure_status TINYINT,
    IN procedure_status_description VARCHAR(100),
    IN procedure_start_date DATETIME,
    IN procedure_end_date DATETIME
)
BEGIN
    DECLARE user_count INT;
    DECLARE parking_count INT;
    DECLARE room_count INT;
    DECLARE pool_count INT;
    DECLARE conflicting_reservations INT;

    SELECT COUNT(*) INTO user_count FROM users WHERE idusers = procedure_iduser;
    SELECT COUNT(*) INTO parking_count FROM parking WHERE idparking = procedure_idparking;
	SELECT COUNT(*) INTO room_count FROM rooms WHERE idrooms = procedure_idrooms;
    SELECT COUNT(*) INTO pool_count FROM pools WHERE idpools = procedure_idpool;

    IF user_count = 0 THEN
        SELECT 'User ERROR' AS message;
    ELSEIF parking_count = 0 AND room_count = 0 AND pool_count = 0 THEN
        SELECT 'reservation ERROR' AS message;
    ELSE
        SELECT COUNT(*) INTO conflicting_reservations
        FROM reservation
        WHERE id_parking = procedure_idparking
            AND procedure_start_date < end_date
            AND procedure_end_date > start_date
            AND status <> 0;

        IF conflicting_reservations > 0 THEN
            SELECT 'Parking already reserved for the same time period' AS message;
        ELSE
            INSERT INTO reservation (id_users, id_parking, id_rooms, id_employee, id_pool, status, status_description, start_date, end_date)
            VALUES (procedure_iduser, procedure_idparking, procedure_idrooms, procedure_idemployee, procedure_idpool, procedure_status, procedure_status_description, procedure_start_date, procedure_end_date);
            SELECT 'Successful parking reservation' AS message;
        END IF;
    END IF;
END //
DELIMITER ;


-- Parking status update
DELIMITER //
CREATE PROCEDURE ParkingStatusUpdate(
	IN procedure_reservation_id INT,
    IN procedure_iduser INT,
    IN new_procedure_status TINYINT,
    IN new_procedure_status_description VARCHAR(100),
    IN new_procedure_start_date DATETIME,
    IN new_procedure_end_date DATETIME
)
BEGIN
	DECLARE user_id INT;
    DECLARE user_count INT;

	SELECT id_users INTO user_id FROM reservation WHERE idreservation = procedure_reservation_id;
    SELECT COUNT(*) INTO user_count FROM users WHERE idusers = procedure_iduser AND idusers = user_id;

    IF user_count = 1 THEN
        UPDATE reservation
        SET status = new_procedure_status,
            status_description = new_procedure_status_description,
            start_date = new_procedure_start_date,
            end_date = new_procedure_end_date
        WHERE idreservation = procedure_reservation_id;
        SELECT 'Reservation updated successfully' AS message;
    ELSE
        SELECT 'User cannot modify this reservation' AS message;
    END IF;
END //
DELIMITER ;

-- Delete Parking Reservation
DELIMITER //
CREATE PROCEDURE DeleteReservation(
    IN procedure_iduser INT,
    IN procedure_reservation_id INT
)
BEGIN
    DECLARE user_id INT;
    DECLARE user_count INT;

    SELECT id_users INTO user_id FROM reservation WHERE idreservation = procedure_reservation_id;
    SELECT COUNT(*) INTO user_count FROM users WHERE idusers = procedure_iduser AND idusers = user_id;

    IF user_count = 1 THEN
        DELETE FROM reservation WHERE idreservation = procedure_reservation_id;
        SELECT 'Reservation deleted successfully' AS message;
    ELSE
        SELECT 'User cannot delete this reservation' AS message;
    END IF;
END //
DELIMITER ;

-- Show Reservation Info
DELIMITER //
CREATE PROCEDURE ShowReservationData()
BEGIN
    SELECT 
        r.idreservation, 
        u.first_name AS user_first_name, 
        u.last_name AS user_last_name, 
        CASE 
            WHEN r.id_parking IS NOT NULL THEN CONCAT('Parking ', p.parking_number)
            WHEN r.id_rooms IS NOT NULL THEN CONCAT('Room ', r.id_rooms)
            WHEN r.id_pool IS NOT NULL THEN CONCAT('Pool ', pl.pool_number)
            ELSE 'N/A'
        END AS reservation_location,
        e.first_name AS employee_first_name,
        e.last_name AS employee_last_name,
        r.status_description,
        r.start_date,
        r.end_date
    FROM reservation r
    INNER JOIN users u ON r.id_users = u.idusers
    LEFT JOIN parking p ON r.id_parking = p.idparking
    LEFT JOIN rooms rm ON r.id_rooms = rm.idrooms
    LEFT JOIN pools pl ON r.id_pool = pl.idpools
    INNER JOIN employees e ON r.id_employee = e.idemployees;
END //
DELIMITER ;
