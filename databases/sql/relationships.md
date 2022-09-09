# What are the 3 types of relationships?

There are three types of relationships that can exist between two tables:
one-to-one, one-to-many/many-to-one, and many-to-many. A table can have one-to-many relationship with another table and have a many-to-many relationship with yet another table. E.g. `Department` table has one-to-many relationship with `Employee` but `Project` has many-to-many relationship with `Employee` table.

## One-to-One (1-1)

A pair of tables bears a one-to-one relationship when a single record in the first table is related to only one record in the second table, and a single record in the second table is related to only one record in the first table.

For example: each teacher has a personal account and a personal inbox (not more than one per account) and each inbox only belongs to a single account. So there is a One-to-One relationship between entity account and entity inbox.

## One-to-many (1-M) or Many-to-one (M-1)

A one-to-many relationship exists between two tables when a single record in the first table can be related to **one or more** records in the second table, but a single record in the second table can be related to only one record in the first table. To implement this
relationship, we add primary key of the `One-side` of the relationship into the table that is the `Many-side` of the relationship. In the `Many-side` of the relationship, this acts as the foreign key.

For example: Mentor-Student is a 1 mentor - many students relationship. Thus, Primary key of mentors table (say `mentor_id`) should be added to the students table. This `metor_id` will be a foreign key that will refer to the primary key of the `mentor` table.

## Many-to-Many (M-M)

A pair of tables bears a many-to-many relationship when a single record in the first table can be related to one or more records in the second table and a single record in the second table can be related to one or more records in the first table. To implement this relationship, we should create an extra table. This table is called a junction table or a relationship table. The table should (at least) contain the primary keys from both entities.

For example: Projects-Employees is a many employees (work on) many projects relationship. We can create a `project_allocation` table that contains primary keys of both tables say `project_id` and `employee_id`

To learn more about relationships, check out the following:

{% hyf-youtube src="https://www.youtube.com/watch?v=V5DyvUfsboA" %}

{% hyf-youtube src="https://www.youtube.com/watch?v=NvrpuBAMddw" %}
