# Full-stack Sanity Next Starter

> This project is a combination of **Sanity** + **Next**, resulting in a mono-repo that gives us both a **GraphQL** API and a frontend that communicates with it. The frontend features the latest and greatest **TailwindCSS with JIT** ✨.

[![Node Version](https://img.shields.io/badge/node-v14.16.0-brightgreen.svg)](https://github.com/nodejs/node/releases/tag/v14.16.0) [![MIT Licence](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/dreamyguy/fullstack-sanity-next-starter/blob/master/LICENSE) [![GitHub release](https://img.shields.io/github/v/tag/dreamyguy/fullstack-sanity-next-starter.svg?sort=semver)](https://github.com/dreamyguy/fullstack-sanity-next-starter/releases) [![Maintenance](https://img.shields.io/badge/Maintained%3F-yes-green.svg)](https://GitHub.com/dreamyguy/fullstack-sanity-next-starter/graphs/commit-activity) [![GitHub contributors](https://img.shields.io/github/contributors/dreamyguy/fullstack-sanity-next-starter.svg)](https://GitHub.com/dreamyguy/fullstack-sanity-next-starter/graphs/contributors/)

Features:

- **Reinforced Node version** _(keep environments in sync)_
- **Code standardisation** _(ESLint + Prettier + Editor Config)_
- **Continous Integration** _(Unit Testing + Pre-configured Husky + Pre-configured Travis)_
- **Continous Delivery & Hosting** _(Pre-configured Netlify)_
- **CLI-based `git` tagging** _with SEMVER support_
- **Feature-toggling** _from Sanity's end_
- **GraphQL** _implementation **detached** from React_
- **Reusable components** _with extensive use of hooks whenever relevant_
- **Utilities** _that lift complexity from functions that would otherwise be doing too much_

Content supported out of the box:

- **Blog**
- **Musician & Technologist** sections
- **Music Release** pages: Single, EP & LP views _(Coming soon)_
- **GitHub API**: feature GitHub projects you created or contribute to _(Coming soon)_

---

## Build statuses, branches, datasets and URLs

| Netlify     |      |
|-------------|------|
| [![Netlify Status](https://api.netlify.com/api/v1/badges/b0255af3-0289-4a3e-9710-1865701162b1/deploy-status)](https://app.netlify.com/sites/fullstack-sanity-next-starter/deploys) | [Project site](https://app.netlify.com/sites/fullstack-sanity-next-starter/overview) |


| Branch     | Dataset    | Domain                                                      | Build
|------------|------------|-------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
| develop    | develop    | [Preview](https://develop--fullstack-sanity-next-starter.netlify.app) | [![Build Status](https://travis-ci.com/dreamyguy/fullstack-sanity-next-starter.svg?branch=develop)](https://travis-ci.com/dreamyguy/fullstack-sanity-next-starter)
| production | production | [Preview](https://fullstack-sanity-next-starter.netlify.app)          | [![Build Status](https://travis-ci.com/dreamyguy/fullstack-sanity-next-starter.svg?branch=production)](https://travis-ci.com/dreamyguy/fullstack-sanity-next-starter)

## Getting started

**1. Use the correct `node` version!**

This project requires specific versions of `node` and `npm`. Please check which versions are required under the `engines` field on the [package.json](https://github.com/dreamyguy/fullstack-sanity-next-starter/blob/production/package.json) file.

Once you know which `node` is current for the project, use [`nvm`](https://github.com/nvm-sh/nvm) to set the version. Install [`nvm`](https://github.com/nvm-sh/nvm) if you don't already have it (install instructions available on their [Github page](https://github.com/nvm-sh/nvm)).

    nvm install v14.16.0

If you already have that version installed:

    nvm use v14.16.0

> 👉  This version `v14.16.0` is also set in in other places in the project (ie.on `package.json` > `engines` > `node`), so if this changes there this section needs to be updated.

The `npm` version gets automatically set when setting the expected `node` version through `nvm`.

**2. Don't skip point 1**

**3. Install dependencies**

> 👉  Run _(at the root level)_:

    yarn setup

**4. Install plugins for `eslint` and `prettier` on your IDE** (VS Code, Atom, Sublime, etc)

To ensure all developers are on the "same page" when it comes to code formatting, we reinforce certain rules. It's therefore important that plugins for `eslint` and `prettier` are installed on your IDE of choice.

- Prettier: `esbenp.prettier-vscode`
- ESLint: `dbaeumer.vscode-eslint`

# Testing

I strongly believe that in letting technology take care of itself we do ourselves (technologists) a favour. **Unit Testing** is taken for granted in all my projects as I've made enough mistakes to understand we will never know or cover every possible scenario while writing code.

This project is no exception. All files ending with `.test.js` will be included in the test, both under `backend/` and `frontend/` folders.

> 👉  While developing, one is encouraged to open an extra terminal window and run _(at the root level)_:

    yarn test:watch

This will start the unit test rig (courtesy of [**Jest**](https://jestjs.io/). This way you can both write tests and ensure that what you just wrote hasn't broken any unit test. ☔

If you ever need to output the test results to a file (because the output can be too lenghty to scroll through on the terminal), use this command:

    yarn test:outputToFile

This will generate a `jestOutput.json` file at the root of the project. You can then use that file to scroll through the whole test output.

> 👉  `jestOutput.json` is ignored by `git`, so you can safely delete it once you're done debugging.

# Development

## Backend

> 👉  Navigate to the `backend` folder.

    cd backend/

You'll be running 1 separate terminal window, where Sanity Studio will continuously run at.

**Start Sanity Studio** by running:

    yarn start

**Testing Sanity:** Do a generic health check on **Sanity** by running:

    yarn test

**Deploying GraphQL:**

**Sanity** does not support `GraphQL` requests done directly to the local **Sanity Studio** server, as it does not support it natively. [**GraphQL support**](https://www.sanity.io/docs/graphql) is provided through a separate API, which in turn is used to build and deploy a `GraphQL API` based on the latest schema changes.

To make that `GraphQL API` available for the first time (or to update it) one has to deploy it. In **Sanity** that is done through the `sanity graphql deploy` command, but in this project you can do the same by running:

    yarn deploy:graphql

That will make the `GraphQL API` available through a special URL, served by **Sanity's CDN**. The relevant API endpoints are taken care of at the client level by the **_frontend_**, from the [`./frontend/config.js`](./frontend/config.js) file.

---

All available scripts are defined on the `script` section of [backend/package.json](./backend/package.json).

## Frontend

> 👉  Navigate to the `frontend` folder.

    cd frontend/

**0. Environment variables:**

🔥❗ You'll have to set **environment variables** manually to be able to fetch data from **Sanity**. This is done this way to avoid publishing the necessary secret keys.

Copy the `.env.example` and name it `.env.local`. Login into [Sanity Manage](https://manage.sanity.io/) and retrieve the secret keys from there.

_I highly recommend to keep these secret keys in services like **1Password vaults**, and only granting access to these vaults to those who need it._

> 👉  _Without this there will be no data-fetching on the frontend..._

**1. Next application:**

Open a dedicated terminal window and start the application locally, by running:

    yarn dev

This will start a local server in dev mode, that will update itself upon relevant file changes. Changes to **Tailwind**'s config will also trigger a hot reload.

All available scripts are defined on the `script` section of [frontend/package.json](./frontend/package.json).

# Continous Integration (CI) & Continuous Deployment (CD)

**We have two main branches:**

**1. `production`**

**_Absolutely no commits_** should be made directly to it, but to `feature-branches`.

**2. `develop`**

**_Ideally no commits_** should be made directly to it, but to `feature-branches`.

**Feature branches**

`feature-branches` should be named according to the feature they're adding. Keep your feature branches _small_ and _concise_, with changes related to the task at hand.

**Travis** is currently set as an extra CI layer, for unit-testing (the URL to it is also listed at the top of this file).

https://travis-ci.com/github/dreamyguy/fullstack-sanity-next-starter

**Netlify** is where we currently serve the site from. What happens there can be configured. We can choose to eventually ditch **Travis** if we do the whole CI process from **Netlify** (the URL to it is also listed at the top of this file)

https://app.netlify.com/sites/fullstack-sanity-next-starter/overview

# Releasing

Deployment differs from release in the sense that we constantly deploy to Netlify as we _merge pull-requests_ to `develop`.

A release implies that we're going to production, with a new version. To reflect that state in our code, we:

1. Checkout to `production` branch and merge `develop` branch into it.
2. While on `production` branch, run `npm run release`.

Several things will happen, in a synchronous manner:

- The version will be bumped _(you'll get a prompt asking which semver type you want to bump to)_
- All specified `package.json` files will get their `version` value set to the new version
- A `git commit` will be made, with "🚀 Release v`<% version number %>`" as a message
- A `git tag` will be created, with the same message and the corresponding chosen version
- Both the **commit** and the **tag** will be pushed to the remote
- This will only work on `production` branch

# License

[MIT](LICENSE)

# About

**Full-stack Sanity Next Starter** was put together by [Wallace Sidhrée][1]. 👨‍💻🇳🇴

[1]: https://sidhree.com
