1. Generate a list of all the subjects taught at Jefferson Middle School.   
   1. SELECT name FROM Subjects;  
2. How many students do they have at Jefferson Middle School?  
   1. SELECT COUNT(id) FROM Students;  
3. What’s Yvette Levy’s student ID number?  
   1. SELECT id FROM Students WHERE first\_name='Yvette' AND last\_name='Levy';  
4. Generate a list of teachers sorted alphabetically.  
   1. SELECT first\_name || ' ' || last\_name as "Full Name" FROM Teachers ORDER BY last\_name;  
5. Which students have last names starting with 'A'?  
   1. SELECT first\_name || ' ' || last\_name as "Full Name" FROM Students WHERE last\_name LIKE "A%";  
6. What's the total capacity of the school?  
   1. SELECT SUM(capacity) FROM Rooms;  
7. Which room has the largest capacity?  
   1. SELECT id, MAX(capacity) FROM Rooms;  
8. Which Subjects are taught in the largest room?  
   1. SELECT DISTINCT Subjects.name FROM Classes JOIN Subjects ON Classes.subject\_id=Subjects.id WHERE Classes.room\_ID IN (SELECT Rooms.id FROM Rooms WHERE Rooms.capacity \= 40);  
9. Which teachers teach only students in 8th grade?  
   1. SELECT DISTINCT t.first\_name, t.last\_name from Teachers as t   
   2. JOIN Classes as c on t.id=C.teacher\_id  
   3. JOIN Subjects as sub ON sub.id=c.subject\_id  
   4. WHERE sub.grade=8;  
10. Which teacher teaches 7th grade science?  
    1. SELECT DISTINCT t.first\_name, t.last\_name from Teachers as t   
    2. JOIN Classes as c on t.id=C.teacher\_id  
    3. JOIN Subjects as sub ON sub.id=c.subject\_id  
    4. WHERE sub.grade=7 and sub.name='Science';  
11. Which teachers teach elective courses?  
    1. SELECT DISTINCT t.first\_name, t.last\_name from Teachers as t   
    2. JOIN Classes as c on t.id=C.teacher\_id  
    3. JOIN Subjects as sub ON sub.id=c.subject\_id  
    4. WHERE sub.grade is NULL;  
12. Generate a Schedule for Rex Rios  
    1. SELECT period\_id, name, sub.grade  FROM Students as s  
    2. JOIN Schedule as sch ON sch.student\_id=s.id  
    3. JOIN Classes as c ON sch.class\_id=c.id  
    4. JOIN Subjects as sub ON sub.id=c.subject\_ID  
    5. where first\_name='Rex' AND last\_name='Rios';  
13. Which students have Physical Education during the first period?  
    1. SELECT s.first\_name, s.last\_name, COUNT(s.first\_name) FROM Students as s  
    2. JOIN Schedule as sch ON sch.student\_id=s.id  
    3. JOIN Classes as c ON sch.class\_id=c.id  
    4. JOIN Subjects as sub ON sub.id=c.subject\_ID  
    5. where c.period\_id=1 AND sub.name='Physical Education';  
14. Generate a list of students with last names from A to M.  
    1. SELECT first\_name, last\_name FROM Students WHERE last\_name BETWEEN "A" AND "N" ORDER BY last\_name;  
15. How many students are in each grade? And how many 6th graders do you think they'll have next year?  
    1. SELECT grade, COUNT(\*) FROM Students GROUP BY grade;  
16. Do they have room for that many 6th graders?  
    1. SELECT MIN(capacity) \* 7 FROM Rooms   
    2. JOIN Classes ON Classes.room\_id=Rooms.id  
    3. JOIN Subjects ON Subjects.id=Classes.subject\_id  
    4. WHERE grade=6;  
17.  Which teachers teach a class during all 7 periods?  
    1. SELECT first\_name, last\_name, COUNT(1) as "number\_of\_classes\_taught" FROM Teachers  
    2. JOIN Classes WHERE Teachers.id=Classes.teacher\_id  
    3. GROUP BY last\_name  
    4. HAVING number\_of\_classes\_taught=7;  
18. Do any teachers teach multiple subjects? If so, who and which subjects?  
    1. SELECT first\_name, last\_name, COUNT(DISTINCT subject\_id) FROM Teachers  
    2. JOIN Classes WHERE Teachers.id=Classes.teacher\_id  
    3. GROUP BY last\_name HAVING COUNT(DISTINCT subject\_id) \> 1;  
19. What class does Janis Ambrose teach during each period? Be sure to include all 7 periods in your report\!  
    1. WITH janis\_classes AS (SELECT period\_id, name FROM Teachers  
    2. JOIN Classes ON Teachers.id=Classes.teacher\_id  
    3. JOIN Subjects on Subjects.id=Classes.subject\_id  
    4. WHERE first\_name='Janis' AND last\_name='Ambrose')  
    5.   
    6. SELECT Periods.id, janis\_classes.name FROM Periods LEFT OUTER JOIN Janis\_classes on Periods.id=Period\_id;  
20. Which subject is the least popular, and how many students are taking it?  
    1. SELECT name, COUNT(1) as "Number of Students Taking It" FROM Schedule   
    2. JOIN Classes ON Classes.id=Schedule.class\_id  
    3. JOIN Subjects ON Subjects.id=Classes.subject\_id  
    4. GROUP BY name  
    5. ORDER BY COUNT(1) LIMIT 1;  
21. Which students have 5th period science and 7th period art?  
    1. SELECT first\_name, last\_name FROM Students WHERE id IN (SELECT DISTINCT Students.id FROM Schedule   
    2.   JOIN Classes ON Classes.id=Schedule.class\_id  
    3.   JOIN Subjects ON Subjects.id=Classes.subject\_id  
    4.   JOIN Students ON Students.id=Schedule.student\_id  
    5.   WHERE (period\_id=5 AND Name="Science")) AND id IN (SELECT DISTINCT Students.id FROM Schedule   
    6.   JOIN Classes ON Classes.id=Schedule.class\_id  
    7.   JOIN Subjects ON Subjects.id=Classes.subject\_id  
    8.   JOIN Students ON Students.id=Schedule.student\_id  
    9.   WHERE (period\_id=7 AND Name="Art"));  
22. Which elective teacher is the most popular?  
    1. WITH elective\_teachers as (  
    2.   SELECT Distinct Teachers.id, first\_name, last\_name FROM Teachers   
    3.   JOIN Classes ON Teachers.id=Classes.teacher\_id  
    4.   JOIN Subjects ON Subjects.id=Classes.subject\_id  
    5.   WHERE Subjects.grade is NULL )  
    6.     
    7. SELECT \*, COUNT(Schedule.student\_id) FROM elective\_teachers  
    8. JOIN Classes ON elective\_teachers.id \= Classes.teacher\_id  
    9. JOIN Schedule ON Classes.id=Schedule.class\_id  
    10. GROUP BY elective\_teachers.id  
    11. ORDER BY COUNT(Schedule.student\_id) DESC  
    12. LIMIT 1;  
23. Which teachers don't have a class during 1st period?  
    1. WITH teachers\_teaching\_first\_period as (  
    2.   SELECT DISTINCT Teachers.id FROM Teachers   
    3.   JOIN Classes ON Teachers.id=Classes.teacher\_id  
    4.   JOIN Subjects ON Subjects.id=Classes.subject\_id  
    5.   WHERE Classes.period\_id=1 )  
    6.     
    7. SELECT \* FROM Teachers WHERE Teachers.id NOT IN (SELECT \* FROM teachers\_teaching\_first\_period);