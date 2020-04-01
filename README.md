# Design system

Proton Design system, for all Proton Projects: https://design-system.protontech.ch/


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

- __reusable-components__: a set of files/framework/etc. that can be used __on every project__.
- __pm-styles__: styles used __for ProtonMail V4-style only__.
- __pv-styles__: styles coming from <strong>ProtonVPN</strong>.
- __react-styles__: styles coming from <strong>ProtonVPN</strong>.
- __design-system-website__: styles for global interface, including styles only needed to make this website work properly
