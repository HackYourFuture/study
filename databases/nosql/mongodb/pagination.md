# Pagination

A common use case that you will encounter when working the backend is pagination. As we have learned before we cannot send all of the data to the frontend at once as that would be extremely inefficient so we need to send it in batches per request. There are two ways of implementing pagination: `offset-based pagination` and `cursor-based pagination`. Have a look at the following video for an explanation of the difference between them:

{% hyf-youtube src="https://www.youtube.com/watch?v=WUICbOOtAic" %}

## Offset-based pagination

So let's look at how to implement offset-based pagination in MongoDB. We would need 2 things from the request of the frontend to give the correct results, the `limit` and the `offset`. The `limit` will say how many results are needed and the `offset` will say from where to start. So for example if I had a store with `20` items on a page and the user is on page `3` the values would be:

```js
const page = 3;

const limit = 20;
const offset = (page - 1) * 20; // 40 in the case of page 3
```

The MongoDB query would look something like this:

```js
client
  .db("db_name")
  .collection("collection_name")
  .find()
  .sort({ title: 1 })
  .limit(20)
  .skip(40);
```

As you can see, the `limit` is the same as we used in the [advanced operations section](./advanced-operations.md), the new thing here is the `skip` function. This tells MongoDB to skip over the first 40 results which means this query will give back items 41-60 in the database.

Note that we include a `sort` function here as paginating on a dataset that is not sorted provides a bad user experience as you have to remember that every time the frontend asks for a page a new query is executed and if that is not sorted the order of the elements is not guaranteed to be the same!

## Cursor-based pagination

The other common way to implement pagination is using the `cursor-based` approach which sends back information to the frontend that it needs to include in the next query. MongoDB does not have something smart for this (yet?) but it is possible to implement it yourself. Let's look at an example similar to the one used in the offset-based section:

```js
const { next } = req.query;

const items = await client
  .db("db_name")
  .collection("collection_name")
  .find({
    title: { $gt: next || "" },
  })
  .sort({ title: 1 })
  .limit(20);

const next = items[items.length - 1].title;
res.json({ items, next });
```

We are using the `req` and `res` variables from `express` here to indicate that the frontend can send a `next` variable in the query of the request that tells the backend that they want all the items _after_ that one. This will usually be the one the backend sends with the previous request that the frontend can save.

The advantage of this approach is that changes in datasets are handled smoothly and the user will not miss any items as the query always finds everything that is after the last thing the user had in their list.

For a more complex example, have a look at [this article](https://www.mixmax.com/engineering/api-paging-built-the-right-way). The article is quite opinionated that this is the best way but that is not true, use cases may require different approaches as mentioned in the video at the top of the page.
