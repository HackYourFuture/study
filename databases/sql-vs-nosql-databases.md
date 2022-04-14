# SQL vs NoSQL databases

_Note: This section assumes you know what SQL and NoSQL databases are, so if you have not yet have a look at those sections before reading this._

The question of how to store your data can be a tough one so we want to go over the advantages and disadvantages of the SQL and NoSQL approaches so you can decide which one to use for your own projects. Luckily, this decision in a company is always a shared decision of the team so you will always have others to debate with for choices later in your career!

## Is it either one or the other?

The first myth we want to get rid of is that at a company you either go one way or another. This may have been true in the past due to the amount of overhead a different database setup would create but with the advancements in the field this is not the case anymore. It is now quite common to have some data stored in an SQL database and other data in a NoSQL database even for the same application.

## How to choose?

So let's look at some questions that you can ask yourself that will sway the decision in one or the other direction. Decisions in programming are rarely black & white so you will have to decide what is most important for your use case to determine which database to use.

### Is your data very structured?

If your data items have to look the same then a SQL database is probably a good choice. One of the things an SQL database does well is force you to store the data in the same way every time. Every row needs to have the same columns and you can easily add many safety checks to ensure that inserted data will adhere to these rules.

A NoSQL database is generally a lot less strict about these things and will technically allow you to store anything. There are libraries like `mongoose` out there that add some of these validation properties to a NoSQL database but it will always be working around the technology to apply this.

A common example of data that needs to be structured/consistent is financial data. Financial data needs to be consistent and undergo rigorous validation which means generally an SQL database is good to use for this kind of information.

### Will you write more or read more?

Because of all of the checks that SQL does on the data, writing in general is slightly slower than in a NoSQL database. If you have an application that does a lot of mutations on the data and a lot less reading of the data then NoSQL is probably a good choice.

A common example for this is a database to store logs or statistics of your application. Let's say you want to log every time any user visits a certain page to see which pages are most popular. This would be a great use case of a NoSQL database as you will be writing a lot of stuff to the database, but you will probably only check in every now and then to get the page count.

### Will you need to analyse the data?

Analysing data is usually quite an intensive operation that will probably require combining information from multiple places (tables or collections) to come to the right conclusion. Although NoSQL does have aggregate capabilities, generally the combination of needing to normalize the data as well as the power of SQL make an SQL database a better choice when you foresee that you will need to aggregate complex data.

An example of this would be scientific databases like the covid-19 case information.

## Conclusion

There are specific use cases that will make the choice easy, but you will find in most cases that you can see advantages to using either option. For personal projects it rarely matters, the 'problems' from using one or the other usually only become an issue when the data sets become very big. As such it is good practice to think this through whenever you need to store data somewhere, but for the projects you make during the curriculum there will not be a big problem associated with your choice, so don't worry about that one!
