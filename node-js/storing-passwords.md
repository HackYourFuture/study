# How to store user passwords

## Why is it important?
As developers, it is our responsibility to protect our user private data. Passwords are very personal data and should be stored securely in the database. 

If we do not secure our passwords in the database and our database get stolen or leaked, all our passwords can be easily read! This is very bad for our application because with all passwords exposed, anyone can login with any user. 

Leaked passwords can lead to even more problems: Many users reuse the same passwords for their email, banking app, social media accounts and more. Hackers often check stolen passwords and try to login to many different websites to check if the user reused the password. This practice one of the most popular methods hacking into social media and email accounts.

To protect yourself, do not reuse passwords. You can enter your email in [haveibeenpwned.com](https://haveibeenpwned.com/) to check if your email was part of a security breach in the past. Spoiler alert: It is most likely that the answer is yes. But don't feel bad or panic, those data breaches are very common, happened to the largest websites like LinkedIn and Adobe. It is likely that you used one of those websites in the past. 

## How to NOT store user passwords

In this great video, Tom Scott explaining how to NOT store user passwords. 

{% hyf-youtube src="https://www.youtube.com/watch?v=8ZtInClXe1Q" %}

A few key takeouts from the video:
* At first, encryption sounds like a good idea. However, in practice, it only leads to more issues when handling passwords.
* Hashing is different from encryption and is a _one way operation_. Once the password is hashed, it is mathematically impossible to reverse it back to the original form. 

## Using bcrypt
[Bcrypt](https://en.wikipedia.org/wiki/Bcrypt) is an industry standard password hashing method. So far it was proven to be secure enough to be used in real world applications. 

In NodeJS, we can use the popular [bcrypt](https://www.npmjs.com/package/bcrypt) npm package. This is one of many implementations of the bcrypt standard.

```javascript
import { hash, compare } from 'bcrypt';
```

The library provides two very important functions:
* **hash** converts the password to a bcrypt format hash. We use this function before storing the password in the database.
* **compare** checks if a hashed string equals to another string. We use this function when we want to check if a password is correct or not.

### Hashing password
 
To securely hash a password, we use bcrypt's `hash` function:

```javascript
const secretPassword = "12345678";
const saltRounds = 12;
const hashedPassword = await hash(secretPassword, saltRounds);

console.log(hashedPassword);
```

The following code will output the hash. It looks something like this:
> $2b$12$vfQ6eiT2aU2d.Im0LVBm6.dG3r1IYJg2FxmsnNBsuUHFPHTYYZ7rO

As you can see, the hash looks completely random and is not remotely similar to the original password. It is now safe to store this hash in our database.

The format of this hash is not very important. Bcrypt uses this format when we compare two passwords. 

#### salt rounds
You may noticed that `hash` has a second parameter called `saltRounds`. The bigger the `saltRounds`, the more secure is the hash but also the slower it takes to calculate it. It is a tradeoff between speed and security. There is no magic number that works the best for all applications. In our example, we use the number `12` which is *arguably* secure enough for most applications.

### Comparing hashed password
As we learned before, it is impossible to reverse a password hash to it's original form. In order to check if a hash is the same as a given string, we use the `compare` function:

```javascript
const hashedPassword = '$2b$12$vfQ6eiT2aU2d.Im0LVBm6.dG3r1IYJg2FxmsnNBsuUHFPHTYYZ7rO';

await compare("11223344", hashedPassword); // false
await compare("12345678", hashedPassword); // true
```

#### How does it work?
We cannot reverse the hash, how does bcrypt know that "11223344" is the wrong password? 

The trick is to hash the new password "11223344" through the same process like we did with the original password. If the result hash is the same, then the new password equal to the original password. This smart trick is how the `compare` method works.

## Putting it all together
In the following example, we are using bcrypt to securely store and check user passwords:

```javascript
import { hash, compare } from 'bcrypt';

const userDatabase = [];
const SALT_ROUNDS = 12;

async function addUser(username, password) {
  const hashedPassword = await hash(password, SALT_ROUNDS);
  const user = { username, password: hashedPassword };
  userDatabase.push(user);
}

async function login(username, password) {
  const user = userDatabase.find(user => user.username === username);
  if (!user) {
    // User was not found in the database
    return false;
  }

  // Compare the password to the user's hashed password
  const isPasswordCorrect = await compare(password, user.password);
  return isPasswordCorrect;
}

// tests
await addUser('user1', 'hackYouRFuTure42');
await addUser('user2', '12345678');
await addUser('user3', 'ADF32rff2__@@@f');

console.log(userDatabase);

const loggedIn = await login('user1', 'hackYouRFuTure42');

if(loggedIn) {
  console.log('User logged in');
} else {
  console.log('Invalid username or password');
}
```

## Further Study

1. Read: https://codahale.com/how-to-safely-store-a-password/
1. Watch: [Hashing Algorithms and Security - Computerphile](https://www.youtube.com/watch?v=b4b8ktEV4Bg)
1. Watch: [Password Storage Tier List: encryption, hashing, salting, bcrypt, and beyond](https://www.youtube.com/watch?v=qgpsIBLvrGY)
1. Watch: [Password Cracking - Computerphile](https://www.youtube.com/watch?v=7U-RbOKanYs)
1. Watch: [ How to Choose a Password - Computerphile](https://www.youtube.com/watch?v=3NjQ9b3pgIg)

