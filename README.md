# Design system

Proton Design system, for all Proton Projects: https://design-system-beta.netlify.com/ 


## To install

Be sure to have Ruby on your computer.

```
gem install jekyll bundler

gem uninstall eventmachine
gem install eventmachine --platform ruby

jekyll -v
ruby -v
gem -v

```

## to dev

```
jekyll serve --livereload
```

## build for prod

```
jekyll build --config _config_prod.yml
```

Goes to `_site` and can be exported to NetLify.

## CSS structure

- __reusable-components__: a set of files/framework/etc. that can be used __on every project__.
- __pm-styles__: styles used __for ProtonMail V4 only__.</li>
- __design-system-website__: extra-styles only needed to make this website work properly.
