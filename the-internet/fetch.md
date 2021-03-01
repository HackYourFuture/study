# Fetch API

Now as we've learned, JavaScript as a language evolves continually. But so do browsers! New features get added to increase the user experience and make life easier for developers.

One of those features added to browsers is an upgraded version of the XHR object. It's called the `Fetch API` and it's the modern way to making HTTP Requests. It incorporates Promises, making it easier to handle your server responses. Here's a basic example:

```js
fetch('https://pokeapi.co/api/v2/pokemon')
  .then(response => {
    return response.json();
  })
  .then(data => {
    console.log('Pokemon data', data);
    return data;
  })
  .catch(error => {
    console.log('err', error);
  });
```

Where is this function defined, you may wonder? Simple: it's found in the global `window` object in the browser. You can check it out by opening your console in the browser. Type in `fetch` and you'll get back a function definition.

When your JavaScript file is loaded into the DOM, it automatically will have access to any of the browser's web APIs (one if which is the `Fetch API`). That's why you can use it in your JavaScript files.

> Keep in mind that `fetch` only works on newer browser versions. To figure out which browsers can use fetch, check [this](https://caniuse.com/#feat=fetch) out.

# Practice
If you want a little more practice as well as a recap of what the fetch API brings you then have a look at the following.

{% hyf-youtube src="https://www.youtube.com/watch?v=jiJJ2V8K1ik" %}

# Extra reading
If you just can't get enough, here are some extra links that mentors/students have found useful concerning this topic:

- [Fetch API Introduction](https://www.youtube.com/watch?v=Oive66jrwBs)
- [Sending JavaScript Http Requests with the fetch() API](https://www.youtube.com/watch?v=23hrM4saaMk)
- [Fetch() - Working with Data and APIs in JavaScript](https://www.youtube.com/watch?v=tc8DU14qX6I)
- [Learn Fetch API In 6 Minutes](https://www.youtube.com/watch?v=cuEtnrL9-H0&list=PLfK7GzSJCtQz1ibcScVAGuOGUpdsIVuo3&index=12&t=0s)