# What are the 3 types of relationships?

There are three specific types of relationships that can exist between a pair of tables:
one-to-one, one-to-many, and many-to-many. The tables participate in only one type of relationship at any given time. (You'll rarely need to change the type of relationship between a pair of tables. Only major changes in either of the table's structures could
cause you to change the relationship.)

## One-to-One (1-1)

A pair of tables bears a one-to-one relationship when a single record in the first table is related to only one record in the second table, and a single record in the second table is related to only one record in the first table.

For example: each teacher has a personal account and a personal inbox (not more than one per account) and each inbox only belongs to a single account. So there is a One-to-One relationship between entity account and entity inbox.

## One-to-many (1-M)

A one-to-many relationship exists between two tables when a single record in the first table can be related to **one or more** records in the second table, but a single record in the second table can be related to only one record in the first table. To implement this
relationship, we should put a foreign key in Many side that is referring to One side.

For example: each mentor can help some students, but in reverse direction each student at one time has just one mentor. So there is a One-to-many relationship between entity student and entity mentor.

## Many-to-Many (M-M)

A pair of tables bears a many-to-many relationship when a single record in the first table can be related to one or more records in the second table and a single record in the second table can be related to one or more records in the first table. To implement this relationship, we should create an extra table. This concept is called a junction table. The table should (at least) contain the primary keys from both entities.

For example: each teacher will teach a course to multiple classes
and these classes will be following several courses from different teachers. So there is a Many-to-Many relationship between the entities course and class

To learn more about relationships, check out the following:

{% hyf-youtube src="https://www.youtube.com/watch?v=V5DyvUfsboA" %}

{% hyf-youtube src="https://www.youtube.com/watch?v=NvrpuBAMddw" %}
