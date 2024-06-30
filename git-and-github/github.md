# GitHub

GitHub is **NOT the same** as GIT. While GIT is software that allows you to keep track of your files, GitHub is an online software development platform that allows you to store a copy of your code online. Check the following video to learn more:

{% hyf-youtube src="https://www.youtube.com/watch?v=w3jLJU7DT5E" %}

We use GitHub because of its main benefit: it allows us to freely store our code online (or `remote`, as we developers also call it). This is useful, for example, in the case that our computer crashes and our projects are lost.

The second benefit of using an online code storage is that it allows us to work together with other developers, using one central (and remote) repository. This is done using branches, which the [GIT](./git.md) section explained.

- [GIT Good: A Practical Introduction to GIT and GitHub I](https://codeburst.io/git-good-part-a-e0d826286a2a)
- [GIT Good: A Practical Introduction to GIT and GitHub II](https://codeburst.io/git-good-a-practical-introduction-to-git-and-github-in-git-we-trust-f18fa263ec48)

## Making pull requests

A **pull request** is a term GitHub uses to refer to a request to incorporate code changes from one branch made by a developer (whether it's you or another developer) into the code stored in a different branch of a repository.

> Sometimes you'll hear developers speak of "merge requests". This is just another name for the same thing: pulling changes from another branch or fork into your branch and merging the changes with your existing code. Software development platforms like GitLab (an alternative to GitHub) use this the term "merge request" instead of "pull request".

These changes are made in one branch, and the pull request usually is made to merge into the `main` branch. However, this doesn't happen directly: in normal circumstances, there has to be at least one other person reviewing the proposal before it is approved to be merged. The reason why is simple: it's very easy to merge code that might be buggy or conflicts with what's already there.

{% hyf-youtube src="https://www.youtube.com/watch?v=8lGpZkjnkt4" %}

Pull requests only happen in remote repositories. This can happen in 2 ways:
(1) From one branch to another **within the same repository**. For more information on this, read:

- [Creating a pull request](https://help.github.com/en/articles/creating-a-pull-request)

(2) From one branch to another branch **from a forked repository into the original repository**. A `fork` is a copy of a repository, that is stored in your personal GitHub account. Forks let you make changes to a project without affecting the original repository. You can fetch updates from or submit changes to the original repository with pull requests.

While both are important to know about, it's useful to study the second way a little more in-depth because that's how you'll submit your homework:

- [About forks](https://help.github.com/en/articles/about-forks)

## Being safe (SSH)

SSH stands for Secure Shell and is a way of providing users a secure way of accessing (the content of) a computer over an unsecure network. Simply put, it makes the connection much more difficult to hack or intercept.

When working with online (or what you'll hear more often: `remote`) code repositories, you might be dealing with unsecure connections. In order to make the connection more secure, you have to use an **SSH key**. Similar to a real key, this digital key allows your computer to be identified by the network you're trying to access. If the connection has been made you can access and modify the contents of network.

> The concept of secure networking through use of identifiers (like an SSH key) is also known as "authentication": are you who you say you are? Authentication is a central idea within programming and you should keep it in mind. You'll also be seeing more of it later!

Check the following videos:

{% hyf-youtube src="https://www.youtube.com/watch?v=qWKK_PNHnnA" %}

{% hyf-youtube src="https://www.youtube.com/watch?v=zlv9dI-9g1U" %}

# Extra reading

If you just can't get enough, here are some extra links that mentors/students have found useful concerning this topic:

- [in their own words](https://www.youtube.com/watch?v=w3jLJU7DT5E)
- [in codebasics' words](https://www.youtube.com/watch?v=Bg9IAquDsDg)
- [the git & the hub](https://www.howtogeek.com/180167/htg-explains-what-is-github-and-what-do-geeks-use-it-for/)
- [quora speaks](https://www.quora.com/What-is-GitHub-for-a-beginner-and-how-do-I-get-started-with-it)
- [GitHub CheatSheet](https://github.com/tiimgreen/github-cheat-sheet)
- [Creating a GitHub Pagess web site](https://www.youtube.com/watch?v=BA_c3bGQXlQ)
- [GitHub for Collaboration](https://mozilla.github.io/open-leadership-training-series/articles/github-for-collaboration/)
- [group practice exercises](https://github.com/HackYourFutureBelgium/git-github-practice)
- [How to Update a Fork in Github](https://rick.cogley.info/post/update-your-forked-repository-directly-on-github/)
- [Git how to update local repository and keep my changes](https://stackoverflow.com/questions/43205981/git-how-to-update-local-repository-and-keep-my-changes)
- [Updating a feature branch](https://gist.github.com/santisbon/a1a60db1fb8eecd1beeacd986ae5d3ca)
- [How to make your first pull request on GitHub](https://www.freecodecamp.org/news/how-to-make-your-first-pull-request-on-github-3/)
- [Mastering Issues](https://guides.github.com/features/issues/)

