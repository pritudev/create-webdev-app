# Create Webdev app

Powerful command line interface to generate a web developer starter app in few seconds ⚡.

<p align="center">

![Downloads](https://img.shields.io/npm/dm/create-webdev-app.svg?style=flat)
![Version](https://img.shields.io/npm/v/create-webdev-app.svg?style=flat)

![Github Stars](https://img.shields.io/github/stars/pritudev/create-webdev-app?style=social)
![Github Followers](https://img.shields.io/github/followers/pritudev?style=social)
![Github Forks](https://img.shields.io/github/forks/pritudev/create-webdev-app?style=social)

![YouTube Subscribers](https://img.shields.io/youtube/channel/subscribers/UCP7U_JVdBLP9Idb5PKm-Iww?label=YouTube%20Subscribers&style=social)

</p>

## Quick Overview

```sh
npx create-webdev-app my-app
cd my-app
```

If you've previously installed `create-webdev-app` globally via `npm install -g create-webdev-app`, we recommend you uninstall the package using `npm uninstall -g create-webdev-app` to ensure that npx always uses the latest version.

_([npx](https://medium.com/@maybekatz/introducing-npx-an-npm-package-runner-55f7d4bd282b) comes with npm 5.2+ and higher, see [instructions for older npm versions](https://gist.github.com/gaearon/4064d3c23a77c74a3614c498a8bb1c5f))_

By using an extension like [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) on [VSCode](https://code.visualstudio.com/), you can view the file live at [http://localhost:5500/](http://localhost:5500/)

## Creating an App

**You’ll need to have Node 8.16.0 or Node 10.16.0 or later version on your local development machine** (but it’s not required on the server). You can use [nvm](https://github.com/creationix/nvm#installation) (macOS/Linux) or [nvm-windows](https://github.com/coreybutler/nvm-windows#node-version-manager-nvm-for-windows) to switch Node versions between different projects.

To create a new app, you may choose one of the following methods:

### Using npx

```bash
npx create-webdev-app my-app
```

_([npx](https://medium.com/@maybekatz/introducing-npx-an-npm-package-runner-55f7d4bd282b) is a package runner tool that comes with npm 5.2+ and higher, see [instructions for older npm versions](https://gist.github.com/gaearon/4064d3c23a77c74a3614c498a8bb1c5f))_

### Using npm

```bash
npm create-webdev-app -g
create-webdev-app my-app
```

Once you've created the app, cd into your project by running the follwing command:

```bash
cd my-app
```

### Get Started Immediately

Don't need all the crazy frameworks and tools? Start fresh with a minimal HTML, CSS, and Javascript folder structure.

By running the simple CLI, you can generate a folder structure like so:

```bash
my-app
├─ dist
│  ├─ css
│  │  ├─ style.css
│  │
│  ├─ js
│  │  ├─ app.js
│  │
│  ├─ index.html
├─ src
│  ├─ css
│  │  ├─ style.css
│  │
│  ├─ js
│  │  ├─ index.js
│  │
│  ├─ html
│  │  ├─ index.html
│  │
│  ├─ .gitignore
│  ├─ README.md
```

## Contributing guide 👊

Thanks for showing interest to contribute to Create Webdev App 💖, you guys rock!

Follow the directions below to setup your project and contribute to this repository.

1. Fork the repo ( Click on <kbd>Fork</kbd> button at top right of [this page](https://github.com/pritudev/create-webdev-app) )

2. Clone your fork locally

```bash
git clone https://github.com/<YOUR_GITHUB_USERNAME>/create-webdev-app.git
cd create-webdev-app
```

3. Setup all the dependencies and packages

```bash
npm install
```

Once you submit a PR (Pull Request), we'll respond as soon as possible so we can take a look at what you've made!

## Making a Pull Request? 🔁

That's **awesome**! Start by following the instructions given earlier of how to run this project on your system locally.

Then, commit and push your changes:

```bash
git add .
git commit -m "My commit message"
git push
```

Once finished, you can create a pull request!

Is it your first time? Check out [this link](https://docs.github.com/en/github/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request-from-a-fork) to learn how to submit a pull request.

## Think you found a bug? 🐛

Please [submit an issue](https://github.com/pritudev/create-webdev-app/issues/new) and **provide a clear path to reproduction with a code example**.

The clearer you are, the easier it will be for us help!

## License

Create Webdev App is open source software [licensed as MIT](https://github.com/pritudev/create-webdev-app/blob/master/LICENSE).

---

## Like my work?

Give a star to repo.

<a href="https://github.com/pritudev/create-webdev-app">
<img style="border-radius: 5px;" src="https://user-images.githubusercontent.com/75468116/135848893-bf1d8fb6-3037-4cb9-a577-a02bae8867ea.png" width="140" alt="Give star on Github" />
</a>

<a href="https://ko-fi.com/pritu" target="_blank"><img style="" src="https://cdn.discordapp.com/attachments/867419109574049802/893774739653402624/5cbed8a4ae2b88347c06c923_BuyMeACoffee_blue.png" alt="Buy Me A Coffee" width="250" ></a>

Made with 💖 by [@Pritudev](https://github.com/pritudev)
