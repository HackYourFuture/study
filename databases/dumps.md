# What is a database dump?

A database `dump` (aka SQL dump) contains a record of the table structure and/or the data from a database and is usually in the form of a list of SQL statements. (An example file named `world.sql` is present in the Week1 folder, look for `databases`)

1. Collecting the dump of an existing database from terminal `mysqldump -uroot -p database_name > dump-file.sql`
2. Applying the dump from mysql command prompt (`mysql>`) `source /path/to/the/dump/file`
3. Applying the dump from the terminal(with generally a dollar prompt `$`) `mysql -uroot -p [database] < /path/to/the/dump/file`

For a video going through the idea of a database dump and how to do it have a look at:

{% hyf-youtube src="https://www.youtube.com/watch?v=eSP3afYdIKM" %}
