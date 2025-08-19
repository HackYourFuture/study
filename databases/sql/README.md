# What is Structured Query Language (SQL)?

SQL (Structured Query Language) is a programming language used for managing the data that is stored in a DBMS (DataBase Management System). The `Query` part in SQL refers to the act of "asking a database" for a certain type of information; you are `querying the database`.

There are several implementations (software) of DBMS. Each software provides its own query language. For this course, you will learn [PostgreSQL](https://www.postgresql.org/).

To learn more, check out the following:

{% hyf-youtube src="https://www.youtube.com/watch?v=kqUIoOM3WEs" %}

## What are data types (as applied to databases)?

When you store data in PostgreSQL, each datum (singular of the word data) needs to be associated with its type.

For example numbers like 42, 1636 or -345 are all associated with the type `int`.

The following is a list of the most frequently used PostgreSQL data types.

| Type          | Description                                   | Example Value             |
| ------------- | --------------------------------------------- | ------------------------- |
| INTEGER       | Numbers                                       | 42                        |
| REAL          | Decimal numbers                               | 3.14                      |
| VARCHAR(N)    | String with variable maximum of N characters  | 'Dragon'                  |
| TEXT          | String with unlimited length                  | 'Positive'                |
| TIMESTAMP     | Store date and time without timezone          | `2019-01-01 22:10:23`     |
| TIMESTAMPTZ   | Store date with timezone (e.g. last login)    | `2019-01-01 22:10:23+00`  |
| BYTEA         | Store binary data                             | an image                  |

There are many more data types. You can read about them [here](https://www.postgresql.org/docs/current/datatype.html).

For a video explanation of the above table have a look at:

{% hyf-youtube src="https://www.youtube.com/watch?v=HnnPgdL0snI" %}

## How to use SQL to Create, Read, Update and Delete (CRUD)

With the knowledge of all the data types, you can now create tables that contain the data with these data types.

Tables contain columns and columns have data types. For example, in a column with names of students, you cannot have numbers.

- SQL provides a `CREATE TABLE` statement that creates a table with columns. You can choose the table name, column names but you have to choose the pre-defined data types supported by PostgreSQL. For example, a column `Registration number` cannot have the data type number. It must use `INTEGER` because it represents the numeric datatype.

- SQL provides `SELECT` statement which reads (columns and rows) from a table with or without filtration.

- SQL provides `UPDATE` statement which changes the contents of (columns and rows of) a table.

- SQL provides `DELETE` statement which can delete rows of tables. In order to delete columns, you need to use `ALTER` and `DROP` statements.

Check out the following to learn more about how to apply SQL:

{% hyf-youtube src="https://www.youtube.com/watch?v=WZngwCbfakc" %}

{% hyf-youtube src="https://www.youtube.com/watch?v=bEtnYWuo2Bw" %}

{% hyf-youtube src="https://www.youtube.com/watch?v=OlT3FispsMU" %}
