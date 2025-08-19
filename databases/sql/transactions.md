# Transactions

A transaction is a set of SQL commands that you want to treat as "one command." It means execute all commands or execute none at all.

Imagine writing a program for transferring money from one bank account to another. To do that, you have to first withdraw the amount from the source account, and then deposit it to the destination account. Both operations must complete. If there is an error halfway, the money will be lost.

![he did not use transactions](https://i.imgflip.com/3hkxnl.jpg)

To start a transaction in PostgreSQL we use the command: 
```sql
BEGIN;
```
 Then we execute a series of commands. More concretely, in our money transfer example: 
 
 ```sql
 -- Update 1
 UPDATE account SET balance = balance - 100 WHERE account_no = 987654 ;
 
 -- Update 2
 UPDATE account SET balance = balance + 100 WHERE account_no = 123456 ;
```

 If there are no errors we use the command:
 ```sql
 COMMIT;
 ``` 
 This command finalizes the changes from both update commands. If there was an error we can use the command 
 ```sql
 ROLLBACK;
 ```
 Which will _undo_ the changes from all commands in the transaction.

Transactions are essentials when building applications since it is very rare that a certain complex functionality can be written as a single SQL command. To do anything useful, several SQL commands need to be executed and in that case transactions are there to ensure that if something fails halfway, then the data does not stay in an inconsistent state.

To increase your understanding, study the following materials:

- [Transaction examples](https://www.postgresql.org/docs/current/tutorial-transactions.html)

# Extra videos

* [What is a Database Transaction?](https://www.youtube.com/watch?v=wHUOeXbZCYA)
* [How to implement Transactions (COMMIT, ROLLBACK, SavePoint) in PostgreSQL.](https://www.youtube.com/watch?v=DvJq4L41ru0)