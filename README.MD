![Meteor DevTools Extension](https://dl.dropboxusercontent.com/u/9224326/meteor-devtools-1.1.1.gif)
# Meteor Dev Tools Chrome Extension 
[![Build Status](https://travis-ci.org/thebakeryio/meteor-devtools.svg)](https://travis-ci.org/thebakeryio/meteor-devtools) 
[![Dependency Status](https://david-dm.org/thebakeryio/meteor-devtools.svg)](https://david-dm.org/thebakeryio/meteor-devtools)
[![devDependency Status](https://david-dm.org/thebakeryio/meteor-devtools/dev-status.svg)](https://david-dm.org/thebakeryio/meteor-devtools#info=devDependencies)
[![ES-2015](https://img.shields.io/badge/ES-2015-brightgreen.svg)](https://babeljs.io/docs/learn-es2015/)

Meteor Devtools (MD) is an extension for Chrome Developer Tools that makes the process of developing Meteor apps even more enjoyable. It also allows you to look under the hood of existing applications and learn how they are built. MD includes a plugin framework and currrently comes with 3 plugins: DDP Monitor, Blaze Inspector and MiniMongo Explorer. You can [install](https://chrome.google.com/webstore/detail/meteor-devtools/ippapidnnboiophakmmhkdlchoccbgje) it from Chrome Web Store.

## Development

Running local dev server

```bash
npm start
```

Running tests while developing (with reload)

```bash
npm test -- --watch
```

Building chrome extension for local testing (result in ./chrome)

```bash
npm run chrome
```

Building chrome extension for production (result in ./chrome)

```bash
npm run chrome:build
```

## Credits

Meteor Devtools Extension is made by Meteor loving folks at [The Bakery](http://thebakery.io). Blaze Inspector is inspired by [React Devtools](https://github.com/facebook/react-devtools) and uses Element highlighter from that project.