## Normalization and normal forms

### Explanation

The goal of normalization is to reduce duplication of data.
Different levels of normalization are called _normal forms_.
A table is said to be in `X normal form` if it satisfies all rules
defined by that normal form and all the normal forms before X.

#### 1NF (5 rules)

1. Single valued columns (each column should have atomic value, no multiple values)
2. Column domain (for any column) should not change.
3. Unique names for columns.
4. Order (of rows/columns) does not matter.
5. No duplicate records (every record has a primary key).

#### 2NF (1NF + rule)

- no non-prime column that is not a part of primary key
  should be functionally dependent on any proper subset of a candidate key.
  In other words, there should be
  No partial dependency (no column should depend on the part of the primary key).

```
Functional dependency: Denoted with A => B.
A and B are columns of a table. An oversimplified explanation of Function dependency is
as follows.
If I know a value in column A then I for sure know the value in column B
but the reverse is not true.
E.g. A is student number and B is student name.
I can tell the name of the student from student number, but
I cannot tell the student number from the name because there could be multiple students with the same name.
```

If you feel adventurous, then read this [Functional Dependency Wikipage](https://en.wikipedia.org/wiki/Functional_dependency)

#### 3NF (2NF + rule)

- No transitive dependency (i.e. no column should depend on non-key column).

#### 3.5NF AKA BCNF (3NF + rule)

- For any dependency A => B, A should be a super key.
  In other words, for a dependency A => B, A cannot be a non-prime column, if B is a prime column.

#### 4NF (3NF + rule)

- No multi-value dependency.

### Example

#### 1NF

Consider the following table

```
+-------------+------------+-----------------------+
| Employee Id |   Name     |   Contact             |
+-------------+------------+-----------------------+
|       101   |   Amit     | 0684927317            |
|       102   |   Ben      | 0634899234, ben@bu.nl |
|       103   |   Cathy    | 0647882102, cat@dog.us|
|       104   |   Dua      | 0622467559            |
+-------------+------------+-----------------------+
```

This table is not in 1NF because rule (1) of 1NF is violated because
row 2 and row 3 contain multiple values for the column `Contact`.
Also the rule (2) of 1NF is violated because the column `Contact` contains
numeric values (for phone numbers) and string value (for emails).

This table could be converted to 1NF as follows:

```
+-------------+------------+------------------------+
| Employee Id |   Name     | Phone      | Email     |
+-------------+------------+------------------------+
|       101   |   Amit     | 0684927317 | NULL      |
|       102   |   Ben      | 0634899234 | ben@bu.nl |
|       103   |   Cathy    | 0647882102 | cat@dog.us|
|       104   |   Dua      | 0622467559 | NULL      |
+-------------+------------+----------------------- +
```

In real life, you actually need to

- DROP column Contact.
- ADD column Phone with the type int.
- ADD column Email with the type varchar(50).

#### 2NF

Consider the following table (employee-project M-M relationship table).

```
+-------------+------------+-----------------------+
| Employee Id | Project ID |  Project Budget       |
+-------------+------------+-----------------------+
|       101   |   1001     | 317                   |
|       102   |   1001     | 234                   |
|       103   |   2001     | 102                   |
|       104   |   2001     | 559                   |
+-------------+------------+-----------------------+
```

2NF is violated here because

```
porj_budget (non prime column)
proj_no => proj_budget (functionally dependent on proj_no)
proj_no (It is part of the candidate key)
emp_no + proj_no (is a candidate key)
```

This table could be converted to 2NF by removing the `Project Budget` column and
adding it to the project table.

#### 3NF

Consider the following table (employees)

```
+-------------+------------+-----------------------+
| Employee Id | Dept Id    |  Dept Location        |
+-------------+------------+-----------------------+
|       101   |   2221     | Amsterdam             |
|       102   |   2221     | Amsterdam             |
|       103   |   3335     | Rome                  |
|       104   |   3335     | Rome                  |
+-------------+------------+-----------------------+
```

This table violates the 3NF because there is a transitive dependency.
`Employee Id => Dept Id` and `Dept Id => Dept Location.`
`Dept Location` column depends on the `Dept Id` which is not a primary key column.

#### 3.5 NF (AKA BCNF)

Consider the following table (students opting for subjects)

```
+-------------+------------+-----------------------+
| Student Id  | Subject    |  Professor            |
+-------------+------------+-----------------------+
|       101   |   Java     | X                     |
|       102   |   Java     | X                     |
|       101   |   C++      | Y                     |
|       103   |   C++      | Y                     |
|       103   |   Java     | X                     |
|       104   |   C++      | Y                     |
+-------------+------------+-----------------------+
```

This table violates the 3.5NF because there is a functional dependency
`Professor => Subject` and `Professor` is not a super key.
`Student Id + Subject` is the primary key. Hence `Subject` is a prime column.

This table could be converted to 3.5NF as follows:

```
+-------------+------------+
| Student Id  | Prof Id    |
+-------------+------------+
|       101   |   P0001    |
|       102   |   P0001    |
|       101   |   P0002    |
|       103   |   P0002    |
|       103   |   P0001    |
|       104   |   P0002    |
+-------------+------------+
```

and

```
+-------------+------------+----------+
| Prof Id     | Professor  |  Subject |
+-------------+------------+----------+
|   P0001     |   X        | C++      |
|   P0002     |   Y        | Java     |
+-------------+------------+----------+
```

#### 4NF

Consider the following table (students opting for subjects)

```
+-------------+------------+-----------+
| Student     | Subject    |  Hobby    |
+-------------+------------+-----------+
|    Benno    |  Excel     |  Violin   |
|    Benno    |  Python    |  Woodwork |
|    Benno    |  Dutch     |  Paint    |
|    Lukas    |  Java      |  Running  |
|    Lukas    |  C++       |  Reading  |
+-------------+------------+-----------+
```

This table violates 4NF because `Subject` and `Hobby` are independent of each other.
Hence the hobby of the student must be repeated in the table with each subject
the student chooses.

```
+-------------+------------+-----------------------+
| Student     | Subject    |  Hobby                |
+-------------+------------+-----------------------+
|    Benno    |  Excel     |  Violin               |
|    Benno    |  Excel     |  Woodwork             |
|    Benno    |  Excel     |  Paint                |
|    Benno    |  Python    |  Violin               |
|    Benno    |  Python    |  Woodwork             |
|    Benno    |  Python    |  Paint                |
|    Benno    |  Dutch     |  Violin               |
|    Benno    |  Dutch     |  Woodwork             |
|    Benno    |  Dutch     |  Paint                |
+-------------+------------+-----------------------+
```

It leads to a lot of repetition.
This table could be converted to 4NF by splitting it into two.

```
+-------------+------------+
| Student     | Subject    |
+-------------+------------+
|    Benno    |  Excel     |
|    Benno    |  Python    |
|    Benno    |  Dutch     |
|    Lukas    |  Java      |
|    Lukas    |  C++       |
+-------------+------------+
```

and

```
+-------------+-----------+
| Student     |  Hobby    |
+-------------+-----------+
|    Benno    |  Violin   |
|    Benno    |  Woodwork |
|    Benno    |  Paint    |
|    Lukas    |  Running  |
|    Lukas    |  Reading  |
+-------------+-----------+
```

- [Normalization in common English](https://medium.com/@mattburgess/critical-concepts-normalization-f9b5b1bf417e)
- [Reasons for Database Normalization](https://www.essentialsql.com/get-ready-to-learn-sql-database-normalization-explained-in-simple-english/)
- [Normalization Video Tutorials](https://www.studytonight.com/dbms/database-normalization.php)

# Bonus video

This is a lot of information so one of our mentors ([Unmesh](https://github.com/unmeshvrije)) has created a video to try to get the idea across as well:

{% hyf-youtube src="https://www.youtube.com/watch?v=G6nX_0lY75Y" %}
