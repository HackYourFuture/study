# Authentication

Authentication is the process of verifying the identity of a user, process, or device, to granting access to resources in a system. This process is critical for the security and privacy when multiple users share the same resource. 

For example, when we want to withdraw cash from an ATM machine, we authenticate with our bank card and a 4 digit PIN code. After the authentication, we are entering a special screen that is personal for our bank account and we can only perform actions for that account. Because many users use the same ATM, it is important for such authentication to exist and work well. A failed authentication system may cause security breaches. For example, when a user is allowed to withdraw money from a different bank account. 

Authentication systems are complicated and being researched by many scholars and companies. In this section, we will provide you with the basics on how to implement authentication in your NodeJS application.


## Authentication vs Authorization
While Authentication allows us to verify the identity of a user, Authorization allows us to tell what resources this user is allowed to access to. 

For example, a user can be successfully authenticated by providing the correct username and password combination but with no access to the system. In this scenario, the user successfully passed the authentication process but still got rejected from using the system due to the lack of permissions.

In conclustion, authentication checks **who you are** and authorization checks **what are you allowed to do**.


## Types of authentication

There are many ways of implementing authentication:

* Password authentication (ex: email / password combination)
* Biometric authentication (ex: fingerprints, face scan)
* Certificate based authentication
* Hardware based authentication (ex: smart cards, NFC)
