# Getting started with Node.js

## <a name="installing-node">Installing Node.js</a>

We're going to use the latest Node.js LTS version (10.x). If you happen to have already installed a later version that is fine too. Use one of the following installation instructions depending on your operating system:
* [CentOS/Fedora/RHEL](https://github.com/nodesource/distributions#rpminstall)
* [Debian/Ubuntu](https://github.com/nodesource/distributions#debinstall)
* [macOS](https://nodejs.org/en/download/)
* [Windows](https://nodejs.org/en/download/)

Run the following commands in your terminal to check if Node.js and npm were installed correctly, they show the currently installed version:
* `$ node -v`
* `$ npm -v`

## <a name="node-repl">Read-eval-print loop (REPL)</a>

A [read-eval-print loop](https://en.wikipedia.org/wiki/Read%E2%80%93eval%E2%80%93print_loop) is a simple, interactive computer programming environment that takes single user inputs, evaluates them, and returns the result to the user. Node.js comes with a REPL that understands JavaScript and can be used to experiment with JavaScript and Node.js functionalities.

To start the Node.js REPL simply run the following command in your terminal:
```bash
$ node
```

The REPL comes with a [few commands](https://nodejs.org/en/knowledge/REPL/how-to-use-nodejs-repl/) to help you out, only one of which you need to know by heart:
```bash
> .help
```
Running this command gives you the following summary of the REPL commands and what they do:

```.break    Sometimes you get stuck, this gets you out
.clear    Alias for .break
.editor   Enter editor mode
.exit     Exit the repl
.help     Print this help message
.load     Load JS from a file into the REPL session
.save     Save all evaluated commands in this REPL session to a file
```

Which other read-eval-print loop have you used before? [Answer](./Questions#browser-console)

### Example usage of the '.editor' command
We can run the following [example from the MDN documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push) about Array.push() in the Node.js REPL:

Start the REPL and enter editor mode so we can copy paste multiple lines
```bash
$ node
> .editor
```

Paste the example from MDN about Array.push().
```js
var animals = ['pigs', 'goats', 'sheep'];

console.log(animals.push('cows'));
// expected output: 4

console.log(animals);
// expected output: Array ["pigs", "goats", "sheep", "cows"]

animals.push('chickens');

console.log(animals);
// expected output: Array ["pigs", "goats", "sheep", "cows", "chickens"]
```
Press CTRL+D to finish.

```js
4
[ 'pigs', 'goats', 'sheep', 'cows' ]
[ 'pigs', 'goats', 'sheep', 'cows', 'chickens' ]
undefined
```

Why does the REPL print `undefined` at the end of the previous example? [Answer](./Questions#undefined)

### Example reading a file

First we create a plain text file with the following command.
```bash
$ echo "Hello world!" > helloworld.txt
```

Next we enter the Node.js REPL and ask it to read the file we just created.
```bash
$ node
> require('fs').readFileSync('./helloworld.txt', 'utf-8');
```
Out comes the contents of our file.
```bash
'Hello world!\n'
```

This is an example to show that you can read a file with Node.js. Don't worry too much about the `require` and `readFileSync` methods yet, we will see these later in detail but the following is what they do in short:

* `require('fs')` gives you access to your filesystem
* `readFileSync('./helloworld.txt', 'utf-8')` reads the file we just created.

## <a name="finding-docs">Finding documentation</a>

In the useful links (below) you can find links to the official Node.js documentation as well as an unofficial one with search function. Generally you should try the official documentation first but if those prove insufficient you can always find more resources with your search engine. Make sure to always be critical of what you read: don't just copy-paste and hope it works, read explanations instead and try to come up with your own implementation. [StackOverflow](https://stackoverflow.com) is another valuable resource but always think for yourself!

[Next chapter](./Setting-up-a-Node.js-project)

## [Useful links](./Useful-links#getting-started)
