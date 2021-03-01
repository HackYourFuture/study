# The Event Loop

If a webpage contains JavaScript, then the browser knows it has to execute the instructions contained in the script files. But how does the browser know what to do first? This is where the `Event Loop` comes in.

Note: while this mechanism is important to be aware of, keep in mind that you won't be using it actively in development.

In simple terms, the `Event Loop` is a mechanism that operates in the browser. It keeps track of the order of execution of JavaScript commands. consists of 4 parts:

1. Heap. This is where the browser assigns space in memory to each process
2. Call Stack. This is the amount of JavaScript commands (read: function calls and events) that need to be executed
3. Web APIs. These are objects (like the document) and functions (like XMLHttpRequest) that can be used within the JavaScript commands found in the Call Stack
4. Callback Queue. This is the "waiting line" for asynchronous function calls

A good video explaining this can be seen below:

{% hyf-youtube src="https://www.youtube.com/watch?v=8aGhZQkoFbQ" %}

The tool used in the video to see it in action can be found here:

- [Loupe](http://latentflip.com/loupe/?code=!!!)

# Extra reading
If you just can't get enough, here are some extra links that mentors/students have found useful concerning this topic:

* [JavaScript Event Loop](https://www.youtube.com/watch?v=XzXIMZMN9k4)
* [Visualizing the Event Loop](https://dev.to/lydiahallie/javascript-visualized-event-loop-3dif)
* [Understanding Asynchronous JS](https://blog.bitsrc.io/understanding-asynchronous-javascript-the-event-loop-74cd408419ff)
* [javascript.info/settimeout-setinterval](https://javascript.info/settimeout-setinterval)