# Hypertext Transfer Protocol - HTTP

If you've ever typed in a URL you might've seen the letters HTTP at the beginning of it, i.e. `http://www.hackyourfuture.net`. It stands for **Hypertext Transfer Protocol** and it is the main way of sending requests and receiving data/responses on the internet.

Let's see what happens when you type in a url in your browser. First, the browser sends an HTTP request to the server. The server sends back an HTTP response that contains html code that describes how the page needs to look like.

Next, the browser scans the HTML and starts rendering elements on the page. During this process the browser may encounter an image tag in the html `<img src="my-website.com/photo.jpg" />`. The image source is a URL so the browser will automatically make another HTTP request to get the image.

A similar thing happens for script and link tags that load JavasSript and CSS files respectively. After the browser loads a JavasSript file, it will start executing it. The JavaScript code can, in turn, start new HTTP requests with `XMLHttpRequest` to load more resources, for example, some JSON data. This entire process is nicely visualized in the diagram below:

![Requests](https://fullstackopen.com/static/af6f88822db737cac2ea80d9343756fc/5a190/2e.png)

The following problem arises in HTTP communication: Because HTML, CSS, JavaScript, and JSON are ultimately just text files, the server can not automatically determine what to do with it. Therefore the client sends a special _header_ called `Content-Type` in the request. The most common content types are:

- `text/javascrpt`
- `text/html`
- `text/stylesheet`
- `application/json`

# Extra reading
If you just can't get enough, here are some extra links that mentors/students have found useful concerning this topic:

- [Easy HTTP](https://www.jmarshall.com/easy/http/)
- [HTTP Video](https://www.youtube.com/watch?v=eesqK59rhGA)