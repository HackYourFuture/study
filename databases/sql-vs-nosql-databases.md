# SQL vs NoSQL databases

_Note: This section assumes you know what SQL and NoSQL databases are, so if you have not yet have a look at those sections before reading this._

The question of how to store your data can be a tough one so we want to go over the advantages and disadvantages of the SQL and NoSQL approaches so you can decide which one to use for your own projects. Luckily, this decision will be already made in a company before you join it unless it's the company you are founding. 

## Is it either one or the other?

There are companies that would like to use both SQL and NoSQL databases at the same time. However, many companies choose only one and stick with that. E.g. banks almost mostly always use SQL databaes. Gaming companies may use SQL database for their payment system and NoSQL database for game elements like maps.

## How to choose?

So let's look at some questions that you can ask yourself that will sway the decision in one or the other direction. Decisions in programming are rarely black & white so you will have to decide what is most important for your use case to determine which database to use.

### Is your data very structured?

If your data items have to look the same then a SQL database is probably a good choice. One of the things an SQL database does well is force you to store the data in the same way every time. Every row needs to have the same columns and you can easily add many safety checks to ensure that inserted data will adhere to these rules.

A NoSQL database is generally a lot less strict about these things and will technically allow you to store anything. There are Object Document Mappers (ODMs) like `mongoose` out there that add some of these validation properties to a NoSQL database but it will always be working around the technology to apply this.

A common example of data that needs to be structured/consistent is financial data. Financial data needs to be consistent and undergo rigorous validation which means generally an SQL database is good to use for this kind of information.


### Will you need to analyse the data?

Analysing data is usually quite an intensive operation that will probably require combining information from multiple places (tables or collections) to come to the right conclusion. Although NoSQL does have aggregate capabilities, generally the combination of needing to normalize the data as well as the power of SQL make an SQL database a better choice when you foresee that you will need to aggregate complex data.


## Conclusion

There are specific use cases that will make the choice easy, but you will find in most cases that you can see advantages to using either option. For personal projects it rarely matters, the 'problems' of using one or the other usually only become an issue when the data become huge. As such it is a good practice to think this through whenever you need to store data somewhere, but for the projects you make during the curriculum there will not be a big problem associated with your choice, so don't worry about that one!
