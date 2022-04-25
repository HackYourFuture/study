# Advanced operations

In this section we will go over some of the more advanced operations that you may need to grab the data that you want from your MongoDB. We will highlight the ones we think you will be using more often, but for a full list of all the options [the documentation](https://www.mongodb.com/docs/manual/reference/method/js-collection/) is always a great place to look!

## Sort

Sorting the data that comes back is used very often, imagine all of the websites that give the 'latest' information or all the web shops that allow you to sort the results however you like. Let's look at an example that will show the latest movies that were released on YouTube:

```js
client.db("shows").collection("movies").find().sort({ releasedDate: -1 });
```

This code will get the data out of the `movies` collection in `shows` database and give it back sorted `DESCENDING` on the `releasedDate` property. If we want to sort on which movies were released first we would provide a `1` as the value which we call `ASCENDING`.

Sorting on multiple fields is as simple as providing multiple fields. The order in which you provide the fields will also be the order in which the sort will happen. So if we go back to our example and want to sort the movies on the same `releasedDate` by the `title` we could do:

```js
client
  .db("shows")
  .collection("movies")
  .find()
  .sort({ releasedDate: -1, title: 1 });
```

This will first sort the movies on the `releasedDate` with the latest movies first and then on the `title` field in alphabetical order (a-z). Easy!

## Limit

With most collections being variable in length it is often needed to tell the database to only return the first x amount. You can usually only show so much on the frontend so it would be a waste of time, computing power and bandwidth to send all of the documents in the database. Let's go back to our shows video example and say that we only want the first 20 movies:

```js
client
  .db("shows")
  .collection("movies")
  .find()
  .sort({ releasedDate: -1, title: 1 })
  .limit(20);
```

Very simple! Note that you can add the `limit` before the `sort` command and the workings would be the same. This is a nice safety feature from mongodb as you pretty much always want to `sort` first, but we think it is best practice to put the `limit` command at the end as that is how it logically works. As mentioned, limiting results to what you actually need is one of the first optimisation steps to take!

## Aggregate

Mongodb offers a very powerful but quite complex aggregate pipeline system that allows you to do a lot of operations at the same time in one command. It is so complex that there is now also a whole GUI built to generate these commands in Atlas. Have a look at the following video of the MongoDB team that goes into this in detail:

{% hyf-youtube src="https://www.youtube.com/watch?v=iz37fDe1XoM" %}

We cannot go over all the options here as it will always be a specific scenario that these functions are being used for. What we want you to remember is that if you need some calculation done on groups of documents the `aggregate functions` are the way to go and look into.
