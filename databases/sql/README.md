# What is Structured Query Language (SQL)?

SQL (Structured Query Language) is a programming language used for managing the data that is stored in a DBMS (DataBase Management System). The `Query` part in SQL refers to the act of "asking a database" for a certain type of information; you are `querying the database`.

There are several implementations (software) of DBMS. Each software provides its own query language. For this course, you will learn [MySQL](https://www.mysql.com/).

To learn more, check out the following:

{% hyf-youtube src="https://www.youtube.com/watch?v=kqUIoOM3WEs" %}

## What are data types (as applied to databases)?

When you store data in MySQL, each datum (singular of the word data) needs to be associated with its type.

For example numbers like 42, 1636 or -345 are all associated with the type `int`.

The following is a list of the most frequently used data types.

| Type       | Description                                   | Example Value           |
| ---------- | --------------------------------------------- | ----------------------- |
| int        | Numbers                                       | 42                      |
| float      | Decimal numbers                               | 3.14                    |
| varchar(N) | String with variable maximum of N characters  | "Dragon"                |
| text       | String with fixed maximum of 65535 characters | "Positive"              |
| datetime   | Store date and time without timezone          | 2019-01-01 22:10:23     |
| timestamp  | Store date with timezone (e.g. last login)    | 2019-01-01 22:10:23 UTC |
| BLOB       | Store binary files                            | an image                |

There are many more data types. You can read about them [here](https://www.w3resource.com/mysql/mysql-data-types.php).

For a video explanation of the above table have a look at:

{% hyf-youtube src="https://www.youtube.com/watch?v=PT2GXYs9FEY" %}

## How to use SQL to Create, Read, Update and Delete (CRUD)

With the knowledge of all the datatypes, you can now create tables that contain the data with these datatypes.

Tables contain columns and columns have datatypes. For example, in a column with names of students, you cannot have numbers.

- MySQL provides a `CREATE TABLE` statement that creates a table with columns. You can choose the table name, column names but you have to choose the pre-defined datatypes supported by MySQL. For example, a column `Registration number` cannot have the data type number. It must use `int` because it represents the numeric datatype.

- MySQL provides `SELECT` statement which reads (columns and rows) from a table with or without filtration.

- MySQL provides `UPDATE` statement which changes the contents of (columns and rows of) a table.

- MySQL provides `DELETE` statement which can delete rows of tables. In order to delete columns, you need to use `ALTER` and `DROP` statements.

Check out the following to learn more about how to apply SQL:

{% hyf-youtube src="https://www.youtube.com/watch?v=WZngwCbfakc" %}

{% hyf-youtube src="https://www.youtube.com/watch?v=bEtnYWuo2Bw" %}

{% hyf-youtube src="https://www.youtube.com/watch?v=OlT3FispsMU" %}
