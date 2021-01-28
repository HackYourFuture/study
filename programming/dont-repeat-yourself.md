# DRY (Don't Repeat Yourself)

One of the core principles programmers follow is the concept of DRY, which stands for `Don't Repeat Yourself`. The video below explains it very well (and you can see a bit of python code as well):

{% hyf-youtube src="https://www.youtube.com/watch?v=IGH4-ZhfVDk" %}

DRY is one of the many principles of programming that often go hand in hand. The key to the DRY principle is to combine code that performs a single task into one place. Then whenever you need that task done again you can just reuse that code.

## Practical example
So let's look at it using a practical real world example of some backend code for a server (don't worry if you do not fully understand what the code does yet). Although it does what we want, it doesn't live up to code standards, which is why we call it a quick and dirty solution. Try and spot things that can be improved upon, here are a few pointers on what to look for:

- Is the code easy to read?
- Is there any repeated code?
- Is any code that covers a single task gathered together or spread out?

```js
// file: server.js
function createServer(port) {
  let state = 10;
  const server = http.createServer((request, response) => {
    const url = request.url;
    if (url === '/state') {
      response.writeHead(200, { 'Content-Type': 'application/json' });
      response.write(JSON.stringify({ state }));
      response.end();
    } else if (url === '/add') {
      state++;
      response.writeHead(200, { 'Content-Type': 'application/json' });
      response.write(JSON.stringify({ state }));
      response.end();
    } else if (url === '/subtract') {
      state--;
      response.writeHead(200, { 'Content-Type': 'application/json' });
      response.write(JSON.stringify({ state }));
      response.end();
    } else if (url === '/reset') {
      state = 10;
      response.writeHead(200, { 'Content-Type': 'application/json' });
      response.write(JSON.stringify({ state }));
      response.end();
    } else {
      response.writeHead(404, { 'Content-Type': 'application/json' });
      response.write(JSON.stringify({ error: 'Not found' }));
      response.end();
    }
  });
  return server;
}
```

Arguably the most obvious issue is repeated code, the following block is written four times:

```js
response.writeHead(200, { 'Content-Type': 'application/json' });
response.write(JSON.stringify({ state }));
response.end();
```

The next example is refactored to be dry. Take a look at what happened.

```js
// file: server.js
function createServer(port) {
  let state = 10;
  const server = http.createServer((request, response) => {
    const url = request.url;
    let message = null;
    response.writeHead(200, { 'Content-Type': 'application/json' });
    if (url === '/state') {
      // no action here
    } else if (url === '/add') {
      state++;
    } else if (url === '/subtract') {
      state--;
    } else if (url === '/reset') {
      state = 10;
    } else {
      response.writeHead(404, { 'Content-Type': 'application/json' });
      message = JSON.stringify({ error: 'Not found' });
    }
    response.write(message ? message : JSON.stringify({ state }));
    response.end();
  });
  return server;
}
```

As you can see duplicate code is moved to the top or bottom of the if-else chain. While this removes duplicate code we have introduced another issue. Take some time and consider the following questions:

- Is the code easy to read?
- Is any code that covers a single task gathered together or spread out?

### <a name="modular">2. Modular code</a>

While the previous example does not contain repeated code it has become considerably harder to read. The most glaring issue is that the code involving the `response` parameter is now spread out: one line is before the if-else chain and the rest is below.

```js
response.writeHead(200, { 'Content-Type': 'application/json' });
if (url === '/state') {
  // no action here
} else if (url === '/add') {
  state++;
} else if (url === '/subtract') {
  state--;
} else if (url === '/reset') {
  state = 10;
} else {
  response.writeHead(404, { 'Content-Type': 'application/json' });
  message = JSON.stringify({ error: 'Not found' });
}
response.write(message ? message : JSON.stringify({ state }));
response.end();
```

These lines of code involving the `response` parameter perform one single task (forming a correct response) and logically belong together. Below we bundle all the code involving `response` into one function which can be called every time we need to respond with JSON.

```js
function respondJSON(response, statusCode, messageObject) {
  response.writeHead(statusCode, { 'Content-Type': 'application/json' });
  response.write(JSON.stringify(messageObject));
  response.end();
}
```

Another issue that is perhaps harder to spot is that logic involving the `state` variable is also spread out. It is first initialized in our function and then later modified in the callback function in various places. Modifying the `state` object is one single task and code involving this task should be bundled together. Whenever some code needs to modify or get the state it should ask the module to perform that task.

```js
// file: state.js
let state = 10;
function get() {
  return { state };
}
function add() {
  state++;
  return { state };
}
function subtract() {
  state--;
  return { state };
}
function reset() {
  state = 10;
  return { state };
}
module.exports = { get, add, subtract, reset };
```

Below is our finished example. We've improved the following things compared to the first solution:

1. There is no repeated code
2. Everything involving `state` is moved to its own module
3. Response code is bundled together in the `respondJSON` function
4. For readability the if-else chain has been replaced with a switch case

Lastly because of the previous steps we can see that the callback function itself has been reduced to a very simple switch case. So now if someone unfamiliar with our homework reads the callback function they can immediately see that depending on the route (`add`, `subtract`, `reset` or `state`) the state is modified accordingly and a JSON response is given. This is because we gave meaningful names to our variables and functions.

```js
// file: server.js
const http = require('http');
const state = require('./state');
function createServer(port) {
  const server = http.createServer((request, response) => {
    const url = request.url;
    switch (url) {
      case '/state':
        respondJSON(response, 200, state.get());
        break;
      case '/add':
        respondJSON(response, 200, state.add());
        break;
      case '/subtract':
        respondJSON(response, 200, state.subtract());
        break;
      case '/reset':
        respondJSON(response, 200, state.reset());
        break;
      default:
        respondJSON(response, 404, { error: 'Not found' });
        break;
    }
  });
  return server;
}
function respondJSON(response, statusCode, messageObject) {
  response.writeHead(statusCode, { 'Content-Type': 'application/json' });
  response.write(JSON.stringify(messageObject));
  response.end();
}
module.exports = {
  createServer,
};
```

# Extra reading
If you just can't get enough, here are some extra links that mentors/students have found useful concerning this topic:

- [DRY principle cost/benefit](https://thevaluable.dev/dry-principle-cost-benefit-example/)