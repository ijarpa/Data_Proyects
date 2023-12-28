CREATE DATABASE IF NOT EXISTS parking_project;
USE parking_project;

CREATE TABLE users(
	id int auto_increment not null,
    first_name varchar(100),
    last_name varchar(100),
    user_name varchar(50),
    password varchar(100),
    constraint pk_parking_project primary key(id),
    constraint uq_user_name unique(user_name)
    )ENGINE=InnoDB;

CREATE TABLE parking(
	id int auto_increment not null,
    parking_number int,
	status bool,
    start_date datetime,
    end_date datetime,
    constraint pk_parking primary key(id)
    )ENGINE=InnoDB;
    
CREATE TABLE reservation(
    id int auto_increment not null,
    user_id int,
    parking_id int,
    status bool,
    start_date datetime,
    end_date datetime,
    constraint pk_reservation primary key(id),
    constraint fk_reservation_user foreign key(user_id) references users(id),
    constraint fk_reservation_parking foreign key(parking_id) references parking(id)
    )ENGINE=InnoDB;


-- INSERT DATA IN PARKING TABLE
-- status 1 free / 0 reserved
INSERT parking(parking_number,status, start_date, end_date) 
VALUES(1,1,null,null),
    (2, 1, null, null),
    (3, 1, null, null),
    (4, 1, null, null),
    (5, 1, null, null),
    (6, 1, null, null),
    (7, 1, null, null),
    (8, 1, null, null),
    (9, 1, null, null),
    (10, 1, null, null);