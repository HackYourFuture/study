# Git

GIT is software that allows you to save your work at any given moment in time. It's typically called a `version control system`, which essentially means that it allows you to create `versions` of your workspace and makes possible to switch between older and newer states. Let's first see why we need a `version control system`:

{% hyf-youtube src="https://www.youtube.com/watch?v=2ReR1YJrNOM" %}

You can think of it like a video game. You get to a certain point in the game, after hours of struggle. You're really proud of how far you've come, and don't want to do it over again in case you die. So you decide to _save your game_. If something bad happens after that point you can always reload your game and start from that point on.

This is exactly what happens with GIT: however, instead of calling it _saving your game_ we call it **committing your changes**. A "change" is a code modification you made in one or more files. It's recommended to commit multiple times a day, every time you make something that is worth saving. Making commits often also makes it easier to reset your work to the last working state. Discarding changes with GIT is better than to trust on CTRL-Z to undo failed attempts.

If you ever would want to go back to a previous _game save_ you can make GIT help you do so by **checking out to that commit**. You will learn more about that in the next sections.

Check out the following short clip to learn about the essentials of GIT, it will go a little fast but we will go into more detail later about each step:

{% hyf-youtube src="https://www.youtube.com/watch?v=hwP7WQkmECE" %}

## Installing GIT

In order to use GIT you first have to install it. The software is different depending on your operating system:

- For Windows, install [Git Bash](https://git-scm.com/download/win)
- For MacOS, install [GIT](https://git-scm.com/download/mac)
- For Linux, install [GIT](https://git-scm.com/download/linux)

After you've installed it you can use it through the CLI. To verify that it worked, enter the command:

```bash
git --version
```

It should give you a version number which means that it is installed.

You can work with GIT using only the CLI but you can also use a GUI (graphical user interface). Two free cross-platform examples are [SourceTree](https://www.sourcetreeapp.com/) and [Gitkraken](https://www.gitkraken.com/). It's up to personal preference what works the best, both CLI and GUI will use the same underlying system. You can even use both in the same project, e.g. commands on the CLI will reflect instantly in the GUI. The main advantage of a GUI is that it has a visual overview of all commits and branches, local and remote.

Now that you have GIT installed, it's important to make a basic configuration. Inside your CLI, type in the following (Replace "Your name" and "your.email@youremailserver.com" with your own name and email address, respectively). In case you are using a GUI, it will probably ask the same data the first time you open the application, and it will do these commands for you so then you can skip this.

```bash
git config --global user.name "Your name"
git config --global user.email "your.email@yourmailserver.com"
```

This makes sure GIT is able to identify you as the person that uses it to save your files and folders.

## Basic GIT commands

You'll use GIT like any software you execute through the CLI. So let's go deeper into the commands you use and what they do so that you can start using GIT for all of your projects.

There are different ways of using GIT. For now we'll learn one procedure: **committing your workspace to a local repository**. Let's take that phrase apart first:

- **Committing** is another word for saving or storing the changes you've made to the files in your workspace. For example, changing the content of a file is a "change".
- **Workspace** is another word for the project folder (and its contents). When making a repository it will be in the root (in other words, the top level) of the folder.
- **Local** refers to your computer, with no involvement of the internet. When you create a file or folder on your computer, you are creating it "locally".
- **Repository** is a storage location containing the data regarding your project folder. GIT creates a hidden folder `.git` that functions as the local repository.

Before we start we must know the most basic command of all:

```bash
git init
```

What it does is creating a brand new **local** repository in your project folder. Only after doing this you will be able to follow along the next procedure.

Now we can continue with the actual procedure itself. This happens in 3 stages:

1. **Untracked**. In this stage GIT is not aware of the changes in your workspace.
2. **Staged**. In this stage the changes are selected for the next commit.
3. **Committed** In this stage your changes have been saved into the local repository. If you need to refer to a previous version of your workspace you can safely do that now.

This might sound very abstract, and it is. So to make it more comprehensible, let's go through all of it again with examples using this video:

{% hyf-youtube src="https://www.youtube.com/watch?v=SWYqp7iY_Tc" %}

As always, getting practical will help cement what you learned and luckily there is a great interactive website to let you practice these commands. Play around over here and see if you can create and merge a branch using the `commit`, `branch`, `checkout` and `merge` commands:

- [git-school](https://git-school.github.io/visualizing-git/)

## 1. GIT branching

`Branches` are a core feature of GIT. A branch allows you to work on a different "version" of your project. Take a look at the following image:

![branches](assets/branches.png)

Whenever you make a branch, you're creating an exact copy of your workspace that you can work with. Try it out:

```md
Go into a folder and initialize GIT to create a local repository. Then create a branch. In this new branch, create some basic files. **stage** and **commit** the changes you've made. Now, switch back to the original branch (**main**). What do you see? Nothing! That's because in that branch you didn't make those changes. If you switch back to the other branch you will see the files you've created again. Magic!
```

You can see a branch as an experiment, a possible way your project can evolve. Usually, each branch (except the `main` branch) contains code for what is called a new `feature`: a piece of functionality that you want to add to your software. Let's take Facebook as a simple example: After creating an account (which is a feature itself) you can do multiple things. Each "thing" is a feature: having a news feed, being able to send friend requests or liking posts.

Working with branches is especially important when working with other developers. This only applies when working with a **remote** repository, which we'll talk about in the next section.

When working with different branches it is useful to have one single branch that contains all the working and finished code: the `main` branch (we call it main out of convention, but in actuality you can name it whatever you want). Whenever you're working on a project that has already been put on the internet, it is the code from the main branch that is online.

However, usually there's a separate branch that contains all the development code. Of course, this is called the `development` branch. This branch is an almost exact copy of main, but contains features that have not been tested yet.

After finishing a feature, it is time to merge the branch into the main branch. This is usually either the `main` or `development` branch.

Once the new version of the software has been tested and approved, the cycle repeats! Have a look at the following video:

{% hyf-youtube src="https://www.youtube.com/watch?v=FyAAIHHClqI" %}

## Going deeper

The above simple commands will be about 95% of what you will do with git. As long as everything goes smooth you will not have to do anything else and you are now an expert. Unfortunately it doesn't always go smooth and you will have to look into ways to solve your problem. We will not cover all those here as you will only need to look into it once you encounter a problem, but what we do want to provide is a video that goes into what git does under the hood. It goes quite deep so don't expect to follow everything he says as it is aimed at people who have used git for awhile, but come back to it whenever you run into an issue:

{% hyf-youtube src="https://www.youtube.com/watch?v=1ffBJ4sVUb4" %}

This should give you a better idea of what it is exactly that you want to fix and should help you describe what you want to do. If you can describe your problem well then the internet (or ChatGPT) will always have an answer.

# Extra reading

If you just can't get enough, here are some extra links that mentors/students have found useful concerning this topic:

- [LearnGitBranching](https://learngitbranching.js.org/) & [video tutorial](https://www.youtube.com/watch?v=dG0ke9vILQM)
- [resolving conflicts with GitKraken](https://blog.axosoft.com/learn-git-merge-conflict/)
