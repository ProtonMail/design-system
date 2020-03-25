# Design system

Proton Design system, for all Proton Projects: https://design-system-beta.netlify.com/


## Installation

Be sure to have Ruby on your computer.

For installing Jekyll on Windows, you can [follow this tutorial](https://jekyllrb.com/docs/installation/windows/#installation-via-bash-on-windows-10), but stop before installing Jekyll with `gem install jekyll bundler`: it won't install the right Jekyll version according to needed dependency.

You may encounter an issue using `gem` without `sudo`. In this case, [this should solve the problem](https://github.com/jekyll/jekyll/issues/7594#issuecomment-509839929).

Then:

```sh
gem install bundler
bundle install

# if livereloading does not work
gem uninstall eventmachine
gem install eventmachine --platform ruby

# to check versions
jekyll -v
ruby -v
gem -v

```

## Development

```sh
jekyll serve --livereload
```

You may prefix command by `bundle exec`, example: `bundle exec jekyll serve --livereload`

## Building for prod

```sh
jekyll build --config _config_prod.yml
```

Goes to `_site` and can be exported to Netlify if you want to do it manually.

Actually, each commit/merge on `master` is deployed automatically to Netlify.

## CSS structure

-   **reusable-components**: a set of files/framework/etc. that can be used **on every project**.
-   **pm-styles**: styles used **for ProtonMail V4-style only**.
-   **pv-styles**: styles coming from <strong>ProtonVPN</strong>.
-   **react-styles**: styles coming from <strong>ProtonVPN</strong>.
-   **design-system-website**: styles for global interface, including styles only needed to make this website work properly

## Custom themes

-   update `custom-theme.scss` to your preference
-   build theme
    -   `npm run build-theme` and open `build/custom-theme.css` OR
    -   commit & push to use the GitHub Actions and to CI/CD [https://atable.github.io/design-system/index.html](https://atable.github.io/design-system/index.html). Note if you fork this repo you will need to update the url with your repository name.
-   copy paste into the protonmail appearance CSS setting. You must be using the beta version. 
