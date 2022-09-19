# SQL injection

Some SQL clients accept input from the user to construct queries.
A malicious user can tweak the input to acquire more information from the database or
to destroy the database (literally!). See [this Demo program](https://github.com/HackYourFuture/databases/blob/master/Week3/sql-injection.js) `sql-injection.js` in the `Week3` folder.

Consider the following query `SELECT name, salary FROM employees where id = X`.

## Injection to get more information

```sql
/* If X is `101 OR 1=1`, then the query returns all records because 1=1 is always true */
SELECT name, salary FROM employees where id = 101 OR 1=1;
```

## Injection to destroy the database

```sql
/* If X is `101; DROP database mydb`, then the query will delete the entire database */
SELECT name, salary FROM employees where id = 101; DROP database mydb;
```

To prevent SQL injection you have to use prepared statements. The diagram below summarizes nicely how prepared statements work:

![SQL injection](https://pics.me.me/prepared-statements-sol-injections-let-me-in-adult-swim-sol-62056759.png)

With prepared statements, we instruct the database to treat certain parts of a query only as a string and nothing else. Even if the string is a valid command it will not be evaluated or executed. The syntax for prepared statements is:

Make sure that the database already contains the `employees` table
```sql
PREPARE example FROM 'SELECT name, salary FROM employees where id = ?';
SET @id = 5;
EXECUTE example USING @id
```

If you try to provide an extra command in the input `set @id='2; show tables'`, it will not be executed.

To increase your understanding check the following materials:

- [What is SQL injection?](https://www.youtube.com/watch?v=ciNHn38EyRc)
- [Prepared statements](https://www.databasejournal.com/features/mysql/a-guide-to-mysql-prepared-statements-and-parameterized-queries.html)

# Bonus video

A bonus video going over this made by one of our mentors ([Unmesh](https://github.com/unmeshvrije)):

{% hyf-youtube src="https://www.youtube.com/watch?v=wS24JiRK4vo" %}
