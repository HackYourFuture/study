# Transactions

A transaction is a set of SQL commands that you want to treat as "one command." It has to either happen in full or not at all.

Imagine writing a program for transferring money from one bank account to another. To do that you have first to withdraw the amount from the source account, and then deposit it to the destination account. The operation has to succeed in full. If there is an error halfway, the money will be lost.

![he did not use transactions](https://i.imgflip.com/3hkxnl.jpg)

To start a transaction in MySQL we use the keyword `START TRANSACTION;`. Then we execute a series of commands. More concretely, in our money transfer example: `UPDATE account SET balance = balance - 100 WHERE account_no = 987654 ;` and `UPDATE account SET balance = balance + 100 WHERE account_no = 123456 ;`. If there are no errors we use the command `COMMIT;` which finalizes the changes from both update commands. If there was an error we can use the command `ROLLBACK;` which will _undo_ the changes from all commands in the transaction.

Transactions are essentials when building applications since it is very rare that a certain complex functionality can be written as a single SQL command. To do anything useful, several SQL commands need to be executed and in that case transactions are there to ensure that if something fails halfway the data does not stay in this half-changed state.

To increase your understanding, study the following materials:

- [Transaction examples](https://www.mysqltutorial.org/mysql-transaction.aspx/)

# Bonus video

A bonus video going over this made by one of our mentors ([Unmesh](https://github.com/unmeshvrije)):

{% hyf-youtube src="https://www.youtube.com/watch?v=mzAs7YQYNog" %}
