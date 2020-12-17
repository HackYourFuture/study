# Setting up a Node.js project

## Initializing a new project

In the introduction we learned that **Node.js** can run JavaScript on your computer, comes with extra functionality to access files and more, and it comes with a vast ecosystem of open source **packages** that you can use freely.

Running some JavaScript with Node.js is as simple as creating a file e.g. `helloworld.js` and telling Node to run it.
```bash
$ echo 'console.log("Hello world!\n");' > helloworld.js    # Creates file with one line of JavaScript
$ node helloworld.js
```

This approach works fine for built-in Node modules but what if we want to use some of the many packages that **npm** has to offer? To initialize a project with external packages you can use the following command.

```bash
$ npm init
```

This will take you through a few steps, asking for a project name, version number, description, etc. You can safely skip any of the options you aren't sure about. In the end it will create a **package.json** file with your project configuration.

```json
{
  "name": "my-project",
  "version": "0.1.0",
  "description": "This is my little project",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "Pieter-Jan Vandenberghe",
  "license": "ISC"
}
```

Should you not be happy with the configuration you can simply change the `package.json` with a text editor. Make sure that it remains well formed JSON or your project won't be able to start anymore!

Let's go over this configuration file step by step.

### Name, author, description & license
These fields generally won't change and are self explanatory.
  * [Name](https://docs.npmjs.com/files/package.json#name): name of your project.
  * [Author](https://docs.npmjs.com/files/package.json#people-fields-author-contributors): that's you.
  * [Description](https://docs.npmjs.com/files/package.json#description): description of what your project does.
  * [License](https://docs.npmjs.com/files/package.json#license): the license under which you publish your project, check [this website](https://tldrlegal.com/) for explanations in plain English.

### Main & scripts
These fields contain ways to run your project.
  * [Main](https://docs.npmjs.com/files/package.json#main): main entry point to your project, points to a JavaScript file. When you run `$ node .` it will look in `package.json` for the `main` field and run that file.
  * [Scripts](https://docs.npmjs.com/files/package.json#scripts): this field is used to add other commands to your project. For example for testing `$ npm run test` will look in `package.json` for the entry `test` in `scripts`.

### Version
This field contains the version of your project. As projects are being updated changes will be introduced that may not be compatible with previous versions. To have an idea of compatibility between versions, a convention called [**Semantic Versioning** (SemVer)](https://semver.org/) is used. In this convention versions consist of three numbers which each have a specific meaning: `MAJOR.MINOR.PATCH`.
  * `MAJOR`: incremented when incompatible changes are introduced, this is the most important number.
  * `MINOR`: incremented when new functionalities are added that are compatible with the previous version.
  * `PATCH`: incremented whenever bugs are fixed, this is the least important number.

Whenever a number is incremented, less important numbers will reset back to 0. So if the major number is incremented both minor and patch will be reset to 0.

For your own project the version number is not that important if you don't plan on publishing it online for others to use. The version number of external packages that you use is important to know if you can safely update to a newer version (has the same `MAJOR` number as the version you currently use) or not.

## Installing external packages

Now that we have a basic project setup we can start using external packages using [npm install](https://docs.npmjs.com/cli/install). Let's start with a simple package called [cowsay](https://www.npmjs.com/package/cowsay) which can print a talking cow!

First install the package with the following command. The flag `-g` means we install the package **globally**.

```bash
$ npm install -g cowsay
```

Now you can immediately use it as a shell/terminal command.

```bash
$ cowsay Moooooooooodules!
```
```bash
 ___________________
< Moooooooooodules! >
 -------------------
        \   ^__^
         \  (oo)\_______
            (__)\       )\/\
                ||----w |
                ||     ||
```

This didn't actually change any files or folders inside our project because we installed the package **globally**. Whenever you install modules with `npm install` it will download and unpack them in a folder called `node_modules`. One such folder exists somewhere on your computer for all global modules so that you can use them anywhere.

Uninstall the module with the following commmand.

```bash
$ npm uninstall -g cowsay
```

Now we install the same module but **locally** inside our project.

```bash
$ npm install cowsay
```

As you can see a folder called `node_modules` was created inside our project to house external packages. The packages was also added to `package.json` under the field [dependencies](https://docs.npmjs.com/files/package.json#dependencies). This field keeps track of external packages we used in our project.

### Some useful commands:
`$ npm list --depth=0` list of locally installed dependencies
`$ npm list -g --depth=0` list of globally installed dependecies
Note: without the --depth=0 option all the dependencies of depencies will recursively shown!
Try for yourself: `npm list -g`

## Importing modules using `require`

> TODO: example install cowsay locally and use it in a script

```js
var cowsay = require("cowsay");

console.log(cowsay.say({
	text : "I'm a moooodule",
	e : "oO",
	T : "U "
}));
```

```bash
 ___________________
< Moooooooooodules! >
 -------------------
        \   ^__^
         \  (oo)\_______
            (__)\       )\/\
                ||----w |
                ||     ||
```


Videos:

[Modules and require()](https://www.youtube.com/watch?v=xHLd36QoS4k&list=PL4cUxeGkcC9gcy9lrvMJ75z9maRw4byYp&index=6)

[Module Patterns](https://www.youtube.com/watch?v=9UaZtgB5tQI&index=7&list=PL4cUxeGkcC9gcy9lrvMJ75z9maRw4byYp)

[Modules](https://www.youtube.com/watch?v=9JhvjhZLsEw&list=PL6gx4Cwl9DGBMdkKFn3HasZnnAqVjzHn_&index=8)

[More on Modules](https://www.youtube.com/watch?v=aNN1IKoEIdM&list=PL6gx4Cwl9DGBMdkKFn3HasZnnAqVjzHn_&index=9)

[require Function](https://www.youtube.com/watch?v=e1Ln1FrLvh8&index=3&list=PLYxzS__5yYQmHbpKMARP04F344zYRX91I)

Documentation:

[Node.js modules](https://nodejs.org/docs/latest-v8.x/api/modules.html)

## ESLint
TODO: Explanation goes here

Visual Studio Code > Extensions > ESLint > Install

`npm install --save-dev eslint eslint-config-airbnb-base eslint-plugin-import`

Add a configuration file named `.eslintrc` in your project directory

```json
{
  "extends": ["airbnb-base"],
  "env": {
    "es6":  true,
    "node": true
  },
  "rules": {
    "linebreak-style":"off",
    "no-console": "off"
  }
}

```

## Useful links
[A Beginner’s Guide to npm — the Node Package Manager](https://www.sitepoint.com/beginners-guide-node-package-manager/)

Videos:
[Node Package Manager](https://www.youtube.com/watch?v=kQ1j0rEI7EI&list=PL4cUxeGkcC9gcy9lrvMJ75z9maRw4byYp&index=20)
[The package.json File](https://www.youtube.com/watch?v=_eRwjuIDJ2Y&list=PL4cUxeGkcC9gcy9lrvMJ75z9maRw4byYp&index=21)

Documentation:
[npm init](https://docs.npmjs.com/cli/init)
[package.json](https://docs.npmjs.com/files/package.json)
### Package.json

[License explanations in plain English](https://tldrlegal.com/)
