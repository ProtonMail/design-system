# Design system

Proton Design system, for all Proton Projects: https://design-system-beta.netlify.com/

You will need:

-   bash
-   node (mini latest LTS)
-   npm (latest too, it's better)

## How to dev 1

1. Clone this repository
2. Run `$ npm i`
3. `$ npm start`

It will give you the URL where it's available.

## Sync translations [App to crowdin]

You can sync them via `$ npm run i18n:upgrade`, it will:

-   Extract translations
-   Push them to crowndin
-   Create a commit with them on the repo

## How to deploy

-   `$ npm run deploy -- --branch=<deploy-X> --api=<target>` _Deploy the app as /\$config_

`$config`: See package.json config.publicPathFlag

-   `$ npm run deploy:standalone -- --branch=<deploy-X> --api=<target>` _Deploy the app as deploy + /login_

Based on [proton-bundler](https://github.com/ProtonMail/proton-bundler)

## Sync translations [Crowdin to our App]

To get latest translations available on crowdin, you can run `$ npm run i18n:getlatest`. It will:

-   Get list of translations available (default same as proton-i18n crowdin --list --type --limit=95)
-   Upgrade our translations with ones from crowdin
-   Store a cache of translations available in the app
-   Export translations as JSON
-   Commit everything

> :warning: If you want to get only a **custom** list of translations, configure it inside `po/i18n.txt` and run `$ npm run i18n:getlatest -- --custom`

## CSS structure

-   **reusable-components**: a set of files/framework/etc. that can be used **on every project**.
-   **pm-styles**: styles used **for ProtonMail V4 only**.</li>
-   **design-system-website**: extra-styles only needed to make this website work properly.
