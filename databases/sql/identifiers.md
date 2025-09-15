# What’s an identifier (key)?

A key or an identifier is a single or combination of multiple fields in a table which is used to identify rows from the table.

Keys can be used to create a relationships between different database tables.

## Primary Key

The PRIMARY KEY uniquely identifies each record in a table.
Primary keys must contain UNIQUE values, and cannot contain NULL values. A table can have only ONE primary key but this primary key can consist of single or multiple columns (fields).

To define a Primary Key you can use the following syntax:

```sql
CREATE TABLE teachers (
      teacher_number INT NOT NULL AUTO_INCREMENT,
      name VARCHAR(50),
      date_of_birth DATE,
      subject TEXT,
      email VARCHAR(200),
      PRIMARY KEY (teacher_number)
);
```

If you already have the table, and you just want to change a column to Primary Key:

```sql
ALTER TABLE teachers ADD PRIMARY KEY (teacher_number);
```

## Foreign Key

A FOREIGN KEY is a key used to link two tables together. This KEY is a field (or collection of fields) in one table that refers to the PRIMARY KEY in another table.

To define a Foreign Key while creating the table, you can use the following syntax:

```sql
CREATE TABLE students (
    student_number INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(50),
    teacher_id INT,
    email VARCHAR(200),
    PRIMARY KEY (student_number),
    FOREIGN KEY (teacher_id) REFERENCES teachers(teacher_number)
);
```

A foreign key does two useful things;

- It will guarantee referential integrity: When a row in a table refers to a corresponding row in another table, then that corresponding row will
  exist.
- It will create an index on this column, giving faster results when querying on this particular column.

or you can add a foreign key later:

```sql
ALTER TABLE students
    ADD CONSTRAINT FK_TEACHER FOREIGN KEY (teacher_id) REFERENCES teachers(teacher_number);
```

## Unique key

The unique key is quite similar to a primary key, they both serve to check the uniqueness of a column value.
The difference is that there can be only a single primary key, to define the record, and multiple unique keys, to define unique values.
Columns with a unique constraint can be NULL unlike primary keys.
Foreign keys can only reference primary keys and not unique keys.

```sql
ALTER TABLE teachers ADD UNIQUE KEY (email);
```

## Composite Key

A composite key is a key composed of two or more columns in a table that can be used to uniquely identify each row in the table when the columns are combined **uniqueness is guaranteed**, but when taken individually it does not guarantee uniqueness. However, if a non-prime column (not part of the primary key) depends only on part of the composite key, the table violates the Second Normal Form (2NF).

2NF requires that every non-prime column is fully dependent on the entire primary key, not just a part of it. If a column depends only on one part of a composite key, this is called a partial dependency, which is not allowed in 2NF.

Suppose you have students from several schools, and you expect the same `student_number` across schools. You can use a composite key:

```sql
CREATE TABLE students_across_schools (
    school_id INT NOT NULL,
    student_number INT NOT NULL,
    name VARCHAR(50),
    PRIMARY KEY (school_id, student_number)
);
```

For more information, check out the following:

{% hyf-youtube src="https://www.youtube.com/watch?v=ia4eCxPPc_o" %}
