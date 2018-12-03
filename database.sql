CREATE TABLE "person" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) NOT NULL,
    "password" VARCHAR (1000) NOT NULL,
    "user_type" INT
);

CREATE TABLE "student_info" (
    "id" SERIAL PRIMARY KEY,
    "name" VARCHAR (80) NOT NULL,
    "student_pic" VARCHAR (1000) NOT NULL 
);


CREATE TABLE "user_student" (
    "id" SERIAL PRIMARY KEY,
    "user_id" INT REFERENCES "person",
    "student_id" INT REFERENCES "student_info"
    
);


CREATE TABLE "student_task_profile" (
    "id" SERIAL PRIMARY KEY,
    "task_name" VARCHAR (80) NOT NULL,
    "image" VARCHAR (1000) NOT NULL,
    "student_id" INT REFERENCES "student_info" 
);

CREATE TABLE "tasks" (
    "id" SERIAL PRIMARY KEY,
    "task_name" VARCHAR (80) NOT NULL,
    "task_id" INT REFERENCES "student_task_profile",
    "note" VARCHAR (1000),
    "student_id" INT REFERENCES "student_info",
    "task_completed" timestamp DEFAULT current_timestamp 
);

INSERT INTO "student_info" 
("name", "student_pic")
VALUES ($1, $2);
INSERT INTO "user_student" 
("user_id", "student_id")
VALUE ($1, $2); 

INSERT INTO "student_info" 
("name", "student_pic")
VALUES ('Abe Lincoln', 'image') RETURNING id;

