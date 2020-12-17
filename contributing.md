## Contributing

First of all, thanks for considering to help keep this study book effective and up to date. There are quite a few ways to help and as usual all help is welcome. Thanks for being a part of this community.

This book is hosted on the HackYourFuture repository [here](https://github.com/HackYourFuture/study). When browsing the gitbook there is also a link at the top to get to that page to immediately make a PR there.

### Link management
There is a huge amount of information on the internet and we will be linking to many videos / articles / code / guides. To keep this manageable we appreciate the following feedback:

* Do you know a resource we have missed?  Send a PR with the link. We will check it out and add it!
* Was a certain link super helpful? Send us a PR with a `+` after the link.  The more `+` the more helpful!
* Was a link not very helpful, or even confusing? Send us a patch with a `-` after the link. If a link has too many `-` and not enough `+`, we'll remove it.
* All good things come to an end. If you find a link that has gone dead, send us a Patch with a `X` after the link.

### Adding a programming topic
To explain a concept we use the 4 E's system: Explanation > Example > Exercise > Essence:

First *explain* the concept in broad terms. Add text, images, feel free to embed a video here as well (or make your own). 

Then we want to show an *example* of the concept in action, embed some code. Try to get it as close to a real world situation as possible.

After that it is time to let the student practice the concept with some *exercises*. There are never too many exercises, but try to order them on difficulty, with the easiest first.

At the end we want to recap the *essence* of the concept to really hit that part home.

Try to embed as much as possible onto the page, we want to keep them focused on the topic at hand and clicking different links in different tabs.

#### Embedding a video
To embed a video use the following code:

```
{% youtube src="https://www.youtube.com/watch?v=oHg5SJYRHA0" %}{% endyoutube %}
```

{% youtube src="https://www.youtube.com/watch?v=oHg5SJYRHA0" %}{% endyoutube %}

#### Embedding a codesandbox
For examples or exercises where some code is needed a codesandbox is the preferred environment. To embed it go to the sandbox and click on the embed button to the top right. There will be a link on the left (not the iframe one). Remember to also set it to dark theme. For example:

```
{% codesandbox %}
https://codesandbox.io/s/charming-cdn-57lm0?fontsize=14&hidenavigation=1&theme=dark
{% endcodesandbox %}
```

{% codesandbox %}
https://codesandbox.io/s/charming-cdn-57lm0?fontsize=14&hidenavigation=1&theme=dark
{% endcodesandbox %}

