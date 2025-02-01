---
id: SQL Reporting By Example
tags:
  - mysql
---

# SQL Reporting By Example

1. Generate a list of all the subjects taught at Jefferson Middle School.
   ```sql
   SELECT name FROM Subjects;
   ```
2. How many students do they have at Jefferson Middle School?
   ```sql
   SELECT COUNT(id) FROM Students;
   ```
3. What’s Yvette Levy’s student ID number?
   ```sql
   SELECT id FROM Students WHERE first_name='Yvette' AND last_name='Levy';
   ```
4. Generate a list of teachers sorted alphabetically.
   ```sql
   SELECT first_name || ' ' || last_name AS "Full Name" FROM Teachers ORDER BY last_name;
   ```
5. Which students have last names starting with 'A'?
   ```sql
   SELECT first_name || ' ' || last_name AS "Full Name" FROM Students WHERE last_name LIKE "A%";
   ```
6. What's the total capacity of the school?
   ```sql
   SELECT SUM(capacity) FROM Rooms;
   ```
7. Which room has the largest capacity?
   ```sql
   SELECT id, MAX(capacity) FROM Rooms;
   ```
8. Which Subjects are taught in the largest room?
   ```sql
   SELECT DISTINCT Subjects.name FROM Classes
   JOIN Subjects ON Classes.subject_id=Subjects.id
   WHERE Classes.room_ID IN (SELECT Rooms.id FROM Rooms WHERE Rooms.capacity = 40);
   ```
9. Which teachers teach only students in 8th grade?
   ```sql
   SELECT DISTINCT t.first_name, t.last_name FROM Teachers AS t
   JOIN Classes AS c ON t.id=c.teacher_id
   JOIN Subjects AS sub ON sub.id=c.subject_id
   WHERE sub.grade=8;
   ```
10. Which teacher teaches 7th grade science?
    ```sql
    SELECT DISTINCT t.first_name, t.last_name FROM Teachers AS t
    JOIN Classes AS c ON t.id=c.teacher_id
    JOIN Subjects AS sub ON sub.id=c.subject_id
    WHERE sub.grade=7 AND sub.name='Science';
    ```
11. Which teachers teach elective courses?
    ```sql
    SELECT DISTINCT t.first_name, t.last_name FROM Teachers AS t
    JOIN Classes AS c ON t.id=c.teacher_id
    JOIN Subjects AS sub ON sub.id=c.subject_id
    WHERE sub.grade IS NULL;
    ```
12. Generate a Schedule for Rex Rios
    ```sql
    SELECT period_id, name, sub.grade FROM Students AS s
    JOIN Schedule AS sch ON sch.student_id=s.id
    JOIN Classes AS c ON sch.class_id=c.id
    JOIN Subjects AS sub ON sub.id=c.subject_ID
    WHERE first_name='Rex' AND last_name='Rios';
    ```
13. Which students have Physical Education during the first period?
    ```sql
    SELECT s.first_name, s.last_name, COUNT(s.first_name) FROM Students AS s
    JOIN Schedule AS sch ON sch.student_id=s.id
    JOIN Classes AS c ON sch.class_id=c.id
    JOIN Subjects AS sub ON sub.id=c.subject_ID
    WHERE c.period_id=1 AND sub.name='Physical Education';
    ```
14. Generate a list of students with last names from A to M.
    ```sql
    SELECT first_name, last_name FROM Students WHERE last_name BETWEEN "A" AND "N" ORDER BY last_name;
    ```
15. How many students are in each grade? And how many 6th graders do you think they'll have next year?
    ```sql
    SELECT grade, COUNT(*) FROM Students GROUP BY grade;
    ```
16. Do they have room for that many 6th graders?
    ```sql
    SELECT MIN(capacity) * 7 FROM Rooms
    JOIN Classes ON Classes.room_id=Rooms.id
    JOIN Subjects ON Subjects.id=Classes.subject_id
    WHERE grade=6;
    ```
17. Which teachers teach a class during all 7 periods?
    ```sql
    SELECT first_name, last_name, COUNT(1) AS "number_of_classes_taught" FROM Teachers
    JOIN Classes WHERE Teachers.id=Classes.teacher_id
    GROUP BY last_name
    HAVING number_of_classes_taught=7;
    ```
18. Do any teachers teach multiple subjects? If so, who and which subjects?
    ```sql
    SELECT first_name, last_name, COUNT(DISTINCT subject_id) FROM Teachers
    JOIN Classes WHERE Teachers.id=Classes.teacher_id
    GROUP BY last_name HAVING COUNT(DISTINCT subject_id) > 1;
    ```
19. What class does Janis Ambrose teach during each period? Be sure to include all 7 periods in your report!
    ```sql
    WITH janis_classes AS (
      SELECT period_id, name FROM Teachers
      JOIN Classes ON Teachers.id=Classes.teacher_id
      JOIN Subjects ON Subjects.id=Classes.subject_id
      WHERE first_name='Janis' AND last_name='Ambrose'
    )
    SELECT Periods.id, janis_classes.name FROM Periods
    LEFT OUTER JOIN janis_classes ON Periods.id=Period_id;
    ```
20. Which subject is the least popular, and how many students are taking it?
    ```sql
    SELECT name, COUNT(1) AS "Number of Students Taking It" FROM Schedule
    JOIN Classes ON Classes.id=Schedule.class_id
    JOIN Subjects ON Subjects.id=Classes.subject_id
    GROUP BY name
    ORDER BY COUNT(1) LIMIT 1;
    ```
21. Which students have 5th period science and 7th period art?
    ```sql
    SELECT first_name, last_name FROM Students WHERE id IN (
      SELECT DISTINCT Students.id FROM Schedule
      JOIN Classes ON Classes.id=Schedule.class_id
      JOIN Subjects ON Subjects.id=Classes.subject_id
      JOIN Students ON Students.id=Schedule.student_id
      WHERE (period_id=5 AND Name="Science")
    ) AND id IN (
      SELECT DISTINCT Students.id FROM Schedule
      JOIN Classes ON Classes.id=Schedule.class_id
      JOIN Subjects ON Subjects.id=Classes.subject_id
      JOIN Students ON Students.id=Schedule.student_id
      WHERE (period_id=7 AND Name="Art")
    );
    ```
22. Which elective teacher is the most popular?
    ```sql
    WITH elective_teachers AS (
      SELECT DISTINCT Teachers.id, first_name, last_name FROM Teachers
      JOIN Classes ON Teachers.id=Classes.teacher_id
      JOIN Subjects ON Subjects.id=Classes.subject_id
      WHERE Subjects.grade IS NULL
    )
    SELECT *, COUNT(Schedule.student_id) FROM elective_teachers
    JOIN Classes ON elective_teachers.id = Classes.teacher_id
    JOIN Schedule ON Classes.id=Schedule.class_id
    GROUP BY elective_teachers.id
    ORDER BY COUNT(Schedule.student_id) DESC
    LIMIT 1;
    ```
23. Which teachers don't have a class during 1st period?
    ```sql
    WITH teachers_teaching_first_period AS (
      SELECT DISTINCT Teachers.id FROM Teachers
      JOIN Classes ON Teachers.id=Classes.teacher_id
      JOIN Subjects ON Subjects.id=Classes.subject_id
      WHERE Classes.period_id=1
    )
    SELECT * FROM Teachers WHERE Teachers.id NOT IN (SELECT * FROM teachers_teaching_first_period);
    ```