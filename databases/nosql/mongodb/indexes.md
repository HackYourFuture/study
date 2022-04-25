# Indexes

The reasoning behind indexes in MongoDB is exactly the same as for SQL so if you want to learn the theory behind creating indexes for your database have a look at the [sql indexes](../../sql/indexes.md) section. In this section we will learn how to create an index in your MongoDB database.

## Single Field

All of your collections will always have the `_id` field as an index. This is something that MongoDB does automatically and makes it so that finding a document in a collection by their id is always a fast operation.

You can add more fields yourself by running the following command:

```js
client.db("shows").collection("movies").createIndex({
  releasedDate: -1,
});
```

This will create an index on descending order for the `releasedDate` field in the `movies` collection. That means that further queries that want to sort that information will now run against an indexed database and be way faster. This also adds an index on the field itself so a `find` command on the `releasedDate` field will also be faster.

But remember, adding new movies then also requires an extra update of an index so writing to this collection will take longer.

## Multiple fields

Creating an index on multiple fields is called a `Compound index`. This is the same as when we looked at sorting multiple fields in the [advanced operations](./advanced-operations.md) section. So if we take that example and want an index for it we can do:

```js
client
  .db("shows")
  .collection("movies")
  .createIndex({ releasedDate: -1, title: 1 });
```

If we would now want to sort our collection on both the `releasedDate` and `title` field in this way the index will help it become a fast query, fast enough for YouTube!
