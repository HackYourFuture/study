# Normalization and normal forms

When setting up a database, one of the most important aspects to be taken into account is to ensure that duplication of data is minimized.
If you do store data twice in your database, but on update forget to update all locations you will end up with a data conflict.

A second advantage of a fully normalized database is that it allows its structure to be extended later to accommodate new types of data without changing existing structure too much.
As a result, code interacting with the database is minimally affected.

![if you dont do database normalization you will have a bad time](https://i.imgflip.com/1uidqc.jpg)

Database normalization is a technique that helps in optimally designing the database to ensure the above points. The core idea of database normalization is to divide large tables into smaller subtables and store pointers to data rather than replicating it.

There are various database “Normal” forms. Each normal form (NF) has an importance which helps in optimizing the database to save storage and to reduce redundancies. These normal forms build incrementally. e.g. a database is in 3NF if it is already in 2NF and satisfied the rules for 3rd normal form.

## 1st normal form (1NF)

The rules for first normal form are:

- All data must be atomic (every column should only contain a single value)
- Repeating columns are not allowed
- Prevent duplicate records (by applying primary keys)
- Attribute domain should not change (all values in a column must be of the same kind or type).

Let us look at an example:

| Customer ID | First Name | Surname | Telephone Numbers                    | Shipping Address 1 | Shipping Address 2 |
| ----------- | ---------- | ------- | ------------------------------------ | ------------------ | ------------------ |
| 123         | Pooja      | Singh   | 555-861-2025, 192-122-1111           | Hoogweg 1          |                    |
| 456         | San        | Zhang   | (555) 403-1659 Ext. 53; 182-929-2929 | High av. 3254      | Low street 2       |
| 789         | John       | Doe     | 555-808-9633                         | Bergweg 2          |                    |

This table violates rule 1 because the column for telephone numbers has multiple values.
The easiest way to fix this is to have two separate phone columns: one for landline and one for mobile.

The second problem involves `Shipping Address 1` and `Shipping Address 2`
The proper way to solve this type of problem would be to identify entities represented in the table and separate them into their own respective tables.
A new table called `Shipping Addresses` would be an option or a table `Addresses` with a column `type ENUM('shipping','financial')`

## 2nd normal form (2NF) and 3rd normal form (3NF)

The second and third rules are both about eliminating redundant data.
When attributes can be split into separate entities you should split them.

Let's look at an example:

| Manufacturer (PK) | Model (PK)  | Manufacturer country | Manufacturer country code |
| ----------------- | ----------- | -------------------- | ------------------------- |
| Apple             | MacBook Air | United States        | US                        |
| Apple             | Macbook Pro | United States        | US                        |
| Lenovo            | ThinkPad    | China                | CN                        |
| Lenovo            | IdeaPad     | China                | CN                        |

This table violates the rule of 2NF and 3NF because data in the column `Manufacturer country` and `Manufacturer country code` depend on the Primary Key that is actually unrelated.
To make the database comply, we have to split up the table into three smaller tables (Countries, Models, Manufacturers):

**Countries**

| Country Code (PK) | Country Name  |
| ----------------- | ------------- |
| US                | United States |
| CN                | China         |

**Models**

| ID (PK) | Name        | Manufacturer ID (FK) |
| ------- | ----------- | -------------------- |
| 1       | MacBook Air | 1                    |
| 2       | Macbook Pro | 1                    |
| 3       | ThinkPad    | 2                    |
| 4       | IdeaPad     | 2                    |

**Manufacturers**

| ID (PK) | Name   | Country Code (FK) |
| ------- | ------ | ----------------- |
| 1       | Apple  | US                |
| 2       | Lenovo | CN                |

Before there was a risk for inconsistencies because it was possible to update a country name in just one record.
That cannot occur anymore in these normalized tables because there is only one value for country name for each country code.

## Higher normal forms

Besides these three normal forms, there are other higher normal forms, for example, the Boyce-Codd normal form (3.5 NF).
Not all of these normal forms are equally important.
Most of the time while designing databases you should aim for the third normal form.
If you still did not get what are the rules for the different normal forms, don't worry.
Over time, you will develop a feel for it.

If you want to increase your understanding, you can study the following materials:

- [Normalization in common English](https://medium.com/@mattburgess/critical-concepts-normalization-f9b5b1bf417e)
- [Reasons for Database Normalization](https://www.essentialsql.com/get-ready-to-learn-sql-database-normalization-explained-in-simple-english/)
- [Normalization Video Tutorials](https://www.studytonight.com/dbms/database-normalization.php)

# Bonus video

This is a lot of information so one of our mentors ([Unmesh](https://github.com/unmeshvrije)) has created a video to try to get the idea across as well:

{% hyf-youtube src="https://www.youtube.com/watch?v=G6nX_0lY75Y" %}
