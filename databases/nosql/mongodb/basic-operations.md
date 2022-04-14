# Basic operations

In this section we will go over the basics of connecting, creating, updating and deleting data from a document-oriented database using MongoDB. The following video from MongoDB itself does an amazing job at this:

_Note: she talks about cursors, sorting and limits for the multiple find operations. This is quite complex and we will have a special section about this in the advanced operations. For now try to follow along, but don't worry too much if that part goes too fast_

{% hyf-youtube src="https://www.youtube.com/watch?v=fbYExfeFsI0" %}

If you want it in written form, there are links in the description of the video.

## Cheatsheet

As there is a lot of different commands used in the above video, we've created a little cheatsheet to keep track of them to link to the documentation.

### CRUD commands

| command                                                                                  | used for                                                                                                                                     |
| ---------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| [findOne](https://docs.mongodb.com/manual/reference/method/db.collection.findOne/)       | Find a document. Note that it will return the **first** document it finds (same as the `find` function of a JavaScript Array)                |
| [find](https://docs.mongodb.com/manual/reference/method/db.collection.find/)             | Find **all** documents that adhere to the filter provided                                                                                    |
| [insertOne](https://docs.mongodb.com/manual/reference/method/db.collection.insertOne/)   | Create a new document. Remember that the \_id field will be filled in by MongoDB. Overall it is best to just let MongoDB handle all of that! |
| [insertMany](https://docs.mongodb.com/manual/reference/method/db.collection.insertMany/) | Create multiple documents (an array of objects)                                                                                              |
| [updateOne](https://docs.mongodb.com/manual/reference/method/db.collection.updateOne/)   | Update the first document that matches the filter                                                                                            |
| [updateMany](https://docs.mongodb.com/manual/reference/method/db.collection.updateMany/) | Update **all** documents that match the filter                                                                                               |
| [deleteOne](https://docs.mongodb.com/manual/reference/method/db.collection.deleteOne/)   | Delete a single document that matches the filter                                                                                             |
| [deleteMany](https://docs.mongodb.com/manual/reference/method/db.collection.deleteMany/) | Delete _all_ documents that match the filter                                                                                                 |

## Filters

You will have noticed that for a lot of these queries you can provide a `filter` parameter. This is how to write the `WHERE` part of your SQL queries. The full documentation for this can be found [here](https://docs.mongodb.com/manual/reference/operator/query/) but let's look at some common examples and mistakes when working with MongoDB:

**To find an element by a specific id**. Note that we have to use the [ObjectId](https://docs.mongodb.com/manual/reference/method/ObjectId/) notation as that is what MongoDB uses for its ids.

```js
client
  .db("db_name")
  .collection("collection_name")
  .findOne({
    _id: ObjectId("4ecc05e55dd98a436ddcc47c"),
  });
```

**To find all elements after a specific date**. Note the `$gte` notation, this is a common way for MongoDB to define properties in objects that it does something with. Next to `$gte` you can use `$gt`, `$lte`, `$lt` to signify `greater than`, `less than or equal` or `less than` respectively. There are many other options, have a look at the documentation.

```js
client
  .db("db_name")
  .collection("collection_name")
  .find({
    createdAt: {
      $gte: new Date("2000-01-01"),
    },
  });
```

**To find all elements with a status in a specific list**. Here we want to use the `$in` option, that allows you to specify that a certain field has a value that is one of the ones in the array. This example will return all elements where the `type` field is either `pending` or `open`.

```js
client
  .db("db_name")
  .collection("collection_name")
  .find({
    type: {
      $in: ["pending", "open"],
    },
  });
```

## Projection

Projection is the process of defining what fields you want to get back from your query rather than getting the whole document back. This can be very useful to only grab the data you are interested in without having to do this yourself. The full documentation can be found [here](https://docs.mongodb.com/manual/reference/method/db.collection.find/#projection), let's have a look at an example:

```js
client.db("db_name").collection("collection_name").find(
  {},
  {
    name: true,
    status: true,
  }
);
```

_Note that it is the **second** parameter, so if you still want to find everything you need to provide an empty object in the first parameter._

In this example we are only getting the `name` and `status` fields of our database. Now if you run this code you will find that you always get the `_id` field for free. If you absolutely do not want the `_id` field then you need to explicitely say you don't want it, like so:

```js
client.db("db_name").collection("collection_name").find(
  {},
  {
    _id: false,
    name: true,
    status: true,
  }
);
```

There are many more advanced ways, but those will be for specific use cases. The documentation explains how to do that quite well.
