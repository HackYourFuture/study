# SQL clauses

In this section, we will cover some basic SQL clauses

## Joins

### Inner Joins

Let’s say we wanted to get a list of students and the details of their teacher, skipping students without a teacher.
This would be a perfect fit for an inner join, since an inner join returns records at the intersection of the two tables.

```sql
SELECT students.first_name, students.last_name, students.gender, students.grade, teachers.full_name
FROM students
INNER JOIN teachers
ON students.teacher_number = teachers.teacher_number
```

The keyword `INNER` is optional, and writing `JOIN teachers` will result in an inner join.

### Aliases

When you join two tables, there can be columns in both tables with the same name.
To be explicit about the column you need, you have to prefix the column with the table name, like `table.column`
If you have a long table name, you can create an alias for a table using `table AS alias`.
The goal is to make queries easier to read, so be aware that using short or meaningless aliases (like `a`, `b`, or `c`) can make it worse.

```sql
SELECT teachers.*, tq.title
FROM teachers
JOIN teacher_qualifications AS `tq` ON tq.teacher_id = teacher.id
```

The `AS` keyword is optional, so you could also write it like `teacher_qualifications tq`

### Right and Left Joins

If we wanted to simply append information about teachers to our students table regardless of whether a student has a teacher or not, we would use a left join. A left join returns all records from table A and any matching records from table B.

```sql
SELECT students.first_name, students.last_name, teachers.full_name
FROM students
LEFT JOIN teachers ON students.teacher_number = teachers.number
```

If you tried to keep all the teachers and wanted to see teachers with or without students, you need a right join.
The right join will keep all records from the joined table and discard records from the preceding tables that can't be joined

Check out the following to get a more visual idea of what `joins` are:

{% hyf-youtube src="https://www.youtube.com/watch?v=9yeOJ0ZMUYw" %}

Other types of joins are less common but can sometimes be needed.
If you're interested, you can read more about [self joins](https://www.w3schools.com/sql/sql_join_self.asp) and [full outer joins](https://www.w3schools.com/sql/sql_join_full.asp), or watch another video {% hyf-youtube src="https://www.youtube.com/watch?v=efpFCd8iFAQ" %}

## Aggregate Functions in SQL

In database management, an **Aggregate Function** is a function where the values of multiple rows/cells are aggregated together as input on certain criteria to form a single value of more significant meaning.

- `COUNT()`
- `SUM()`
- `AVG()`
- `MIN()`
- `MAX()`

## Distinct Keyword

The DISTINCT statement is used to return only distinct (different) values. It can be used with aggregation functions. In the example below, we retrieve the number of teachers from the students table. Note that it can also be used without an aggregation function.

```sql
SELECT COUNT(DISTINCT teacher_number) AS no_teachers
FROM students
```

## Group By

The `GROUP BY` statement groups rows that have the same values into summary rows, like "find the number of students for each teacher".

The `GROUP BY` statement is often used with aggregate functions to group the result-set by one or more columns.

E.g., To find out the number of students per teacher, we would write the following query:

```sql
SELECT COUNT(teacher_number) AS number_of_students, teacher_number
FROM students
GROUP BY teacher_number
```

## Having

The `Having` clause is like a `WHERE` statement, but applied after the grouping has happened. It restricts the query results of the `GROUP BY` clause.

In the example below, we just retrieve the teachers who teach more than three students.

```sql
SELECT COUNT(teacher_number) AS numer_of_students, teacher_number
FROM students
GROUP BY teacher_number
HAVING COUNT(teacher_number) > 3
```
