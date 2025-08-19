# What is a database dump?

A database `dump` (aka SQL dump) contains a record of the table structure and the data from a database which is used as a backup to restore the database in case of losing it. A database dump is usually in the form of a list of SQL statements. ([An example file named world.sql](https://github.com/HackYourFuture/databases/blob/main/Week1/databases/world.sql) is present in the `Week1` folder)
## Why use database dumps?

Database dumps serve two primary purposes: **creating backups** to protect against data loss, and **migrating data** between different database instances or environments. Whether you're moving from development to production, switching database servers, or simply ensuring you have a recovery plan, dumps provide a reliable way to preserve and transfer your database structure and content safely.

### Backing up your database
Collecting the dump of an existing database from the terminal:
```bash
pg_dump -U username -d database_name > dump-file.sql
```

If your database is inside a Docker container, add `docker exec container_name` before the `pg_dump` command:

```bash
docker exec container_name pg_dump -U username -d database_name  > dump-file.sql
```


### Restoring from a backup

Restoring the dump from the terminal
```bash
psql -U username database_name < /path/to/the/dump/file
```

If your database is inside a Docker container:
```bash
cat /path/to/the/dump/file | docker exec -i container_name psql -U username -d database_name
```

The command above is actually executing all the SQL commands that are in the dump file one by one to restore the database.

Alternatively, you can use the `pg_restore` command to restore from a dump.

### Alternative: Using Database management tools
Many Database management tools like `pgAdmin` or `Datagrip` have the ability to export or restore a dump directly from the user interface without executing any terminal commands yourself.
[Here is an example](https://www.youtube.com/watch?v=vdd66leSDa4) how you can do it with `pgAdmin`.

### Further reading

For a video going through the idea of a database dump and how to do it. Have a look at:

{% hyf-youtube src="https://www.youtube.com/watch?v=WB6WzuFHcP8" %}
