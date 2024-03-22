# JSON Web Token (JWT)
## What is JWT
The following video provides a great explanation on what JWT is and what it looks like.

{% hyf-youtube src="https://www.youtube.com/watch?v=7Q17ubqLfaM" %}

JSON web tokens have few advantages:

1. There is no need to create or access a session database to convert session ID to user information.
2. The token can be verified by many different applications independently. Without talking to each other or accessing a central token database.
3. The token signed and verified by using industry standard encryption algorithms. Those algorithms are keeping the token safe from unwanted modifications. 

## Examples
The signing and verifying of JWT is very complicated to implement yourself. This is why in the following examples, we use the popular [jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken) npm package to create JWT for us.

```shell
npm i jsonwebtoken
```

### Creating new token

To create a new JWT, we use the `sign()` function from the `jsonwebtoken` library:

```javascript
import jsonwebtoken from 'jsonwebtoken';

const SECRET = 'H6AIgu0wsGCH2mC6ypyRubiPoPSpV4t1';

const user = { username: 'user123', isAdmin: false };
const token = jsonwebtoken.sign(user, SECRET);

console.log(token);
```

The output of the code above will be
```
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InVzZXIxMjMiLCJpc0FkbWluIjpmYWxzZSwiaWF0IjoxNzA3NDI4NDI3fQ.Fc1h3X2xqFspbBS3UdXTNEpd8dsL10Pt_lzAgnFZYAY
```

This token can be now used to access protected endpoints. It is a bit longer than your standard opaque token, but it is more powerful and containing more information.

Note that in order to sign the token, you must provide a `secret` string. This string should be random so others will not be able to guess it. We will use the same secret string for token verification.

**Exercise:** Verify the token above in https://jwt.io/. Make sure to paste the token and the secret string. You should see a blue "signature verified" message on the website.

### Verifying a token

When our application reads a JWT from the request, it should verify that the token is valid. In order to verify the token, we use the `verify()` function from the `jsonwebtoken` library:

```javascript
import jsonwebtoken from 'jsonwebtoken';

const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InVzZXIxMjMiLCJpc0FkbWluIjpmYWxzZSwiaWF0IjoxNzA3NDI4NDI3fQ.Fc1h3X2xqFspbBS3UdXTNEpd8dsL10Pt_lzAgnFZYAY';

try {
  const decodedUser = jsonwebtoken.verify(token, SECRET);
  console.log(decodedUser.username); //user123
  console.log(decodedUser.isAdmin); // false
}
catch(error) {
  console.log('Token verification failed. Error:', error.message);
}
```

The token verification can fail and we should handle this case by using `try` and `catch` to handle the error.

If the verification process has completed successfully, we will receive back the object that was originally signed. We can now safely use all the information from the token knowing that the token is authentic and was not changed.

## Further reading
* [Introduction to JSON Web Tokens](https://jwt.io/introduction)
* [jsonwebtoken documentation](https://github.com/auth0/node-jsonwebtoken)
