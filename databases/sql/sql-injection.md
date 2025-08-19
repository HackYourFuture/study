# SQL injection

Some SQL clients accept input from the user to construct queries.
A malicious user can tweak the input to acquire more information from the database or even
to destroy the database! See [this Demo program](https://github.com/HackYourFuture/databases/blob/master/Week3/scripts/sql-injection.js) `sql-injection.js` in the `Week3` folder.

Consider the following query `SELECT name, salary FROM employees where id = X`.

### Injection to get more information

```sql
/* If X is `101 OR 1=1`, then the query returns all records because 1=1 is always true */
SELECT name, salary FROM employees where id = 101 OR 1=1;
```

This query demonstrates a classic SQL injection attack. Instead of returning data for just employee ID 101, the malicious input `101 OR 1=1` transforms the WHERE clause into a condition that's always true. Since `1=1` is always true, the OR operator makes the entire condition evaluate to true for every row and exposing all employee records including sensitive salary information.

### Injection to destroy the database

```sql
/* If X is `101; DROP database mydb`, then the query will delete the entire database */
SELECT name, salary FROM employees where id = 101; DROP database mydb;
```

To prevent SQL injection you have to use **prepared statements**.

## Prepared statements
With prepared statements, we instruct the database to treat certain parts of a query only as a string and nothing else. Even if the string is a valid command it will not be evaluated or executed. The syntax for prepared statements is:

Make sure that the database already contains the `employees` table
```sql
-- Prepare the statement
PREPARE example AS SELECT name, salary FROM employees WHERE id = $1;

-- Execute with a parameter
EXECUTE example(5);

-- Clean up (optional)
DEALLOCATE example;
```

If you try to provide an extra command in the input `EXECUTE('5 OR 1=1')`, it will not be executed.

To increase your understanding check the following materials:

- [What is SQL injection?](https://www.youtube.com/watch?v=ciNHn38EyRc)
- [Prepared statements](https://www.postgresql.org/docs/current/sql-prepare.html)

# Bonus video

A bonus video going over this made by one of our mentors ([Unmesh](https://github.com/unmeshvrije)):

{% hyf-youtube src="https://www.youtube.com/watch?v=wS24JiRK4vo" %}

*Note: This video uses MySQL but the concept is still the same and can be easily translated to PostgreSQL*