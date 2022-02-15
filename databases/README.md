# Databases

Databases is a huge topic, so let's start with some information on what is meant by a database and what terms are going to be used throughout the whole discussion of databases.

## What is an information (system)?

Information is something that adds knowledge. It tells you something you didn't know before.

For example:

_"At 9:30 on Sunday November 10th 2019 Wouter Kleijn was walking on the Sarphatistraat in Amsterdam."_

This is information because it adds knowledge: you now know where Wouter was at a particular point in time. For a computer this might be a bit difficult to understand though because it is just an English sentence.

It's much easier if you structure it this way:

- Address:
  - Street: Sarphatistraat
  - City: Amsterdam
- Who: Wouter Kleijn
- When: 2019-11-10T09:30:00+01:00 (+01:00 refers to the Amsterdam timezone)
- Activity: Walking

A database will allow you to store structured information and at a later point in time retrieve that information again.

You can ask the database:

_"Who was walking on the Sarphatistraat on November the 10th 2019?"_

and the database will tell us: _"Wouter Kleijn"_.

Have a look at the following video for more information:

{% hyf-youtube src="https://www.youtube.com/watch?v=Qujsd4vkqFI" %}

## What are entities?

You abstract (generalize) to make sense of the world. You do it everywhere, all the time. Even without thinking about it.
As Zachery Tellman states: "To abstract is to treat things which are different as equivalent".
You speak of a dog called Bello, and since it's a dog you also know that Bello is an animal and a pet.
This is not something that Bello will tell you, humans made all this up.
Dog, animal, pet, humans, all these are abstractions.

One way of abstracting is to think of entities and their relationships.
An entity is an abstraction. It represents a certain category of things, like:
humans, women, men, animals, pets, broken bicycles, chairs, music, teachers, chewing gum, and planets.
You can think of a **pet** as an entity that has a relationship to another entity **human**, its owner.
More formally you can say a **human** owns **zero or more** **pets**.

When creating an application you need to think of all the entities and their relationships
that are relevant to our application, you call this the application's **domain**.
Together these entities and relationships form the **domain model** for your application.

Learn more about entities with the following resource:

{% hyf-youtube src="https://www.youtube.com/watch?v=hveVlCHZtsI" %}

## What is a database?

A database's primary purpose is to provide a mechanism for `storing` and `retrieving` structured information.

There are many different types of databases but they all provides these two capabilities.

If you just consider these two properties (information storage and retrieval)
you could implement a database using just a JavaScript array:

1. `Information storage`. Pushing onto the array adds knowledge:

```js
const musicians = [
  "John Coltrane",
  "Miles Davis",
  "Thelonious Monk",
  "Sonny Rollins",
];

musicians.push("Steve Lehman");
```

2. `Information retrieval`. Using the `[]` operator you can access what was previously stored:

```js
console.log(musicians[0]); // prints: 'John Coltrane'
```

While this JavaScript database is a nice and simple example, it doesn't persist the data for the next day.

In this module you will focus primarily on persisting databases, in particular the relational database MySQL.

To learn more, check out the following resources:

{% hyf-youtube src="https://www.youtube.com/watch?v=t8jgX1f8kc4" %}

{% hyf-youtube src="https://www.youtube.com/watch?v=nyymjbP0XVE" %}

## What is the role of a database in an application?

A database setup typically involves two components, a server and a client.

The server is the actual database management system (DBMS) and runs as a process on a machine either on your computer or on another computer in a data center somewhere.
Unlike applications that you are used to, DBMSes usualy do not come with a user interface.
The database server application can only be given commands using the CLI or using a separate client.

The client is a program that talks to the DBMS server, so it has to know where that server is running.
The client then creates a [TCP connection](https://www.youtube.com/watch?v=EkNq4TrHP_U) to the server. Click for a detailed guide on this.

A client would be your web application talking to the database or a GUI to interact with your database during development.
Examples of free GUIs are [SequelPro for mac](https://www.sequelpro.com) and [HeidiSQL for Windows](https://www.heidisql.com/).
These GUIs allow you to easily show the structure and contents of your database, and run your own queries.

To do this the client needs to know:

- the server's address
  - an IP address like _192.168.1.5_
  - or a name like _my-db-server_
- a username
- a password
- the name of the database (optionally)

The reason why you would want to use a database is that you can store information in a reliable and structured way. The database will ensure your information is stored safely (if setup correctly), with a high degree of reliability. The database also allows you to structure your information in such a way that we're able to find what we're looking for.

To learn more, check out the following resources:

{% hyf-youtube src="https://www.youtube.com/watch?v=Ls_LzOZ7x0c" %}
