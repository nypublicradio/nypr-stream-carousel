# nypr-stream-carousel

This addon provides a component to render streams as a swipe-able carousel. It's essentially a light wrapper around `ember-cli-swiper` with some mark up and styling for NYPR purposes.

Normally something like this would live in [nypr-ui](https://github.com/nypublicradio/nypr-ui), but this component adds additional vendor packages to the consuming app. We want to reduce the payload if we can, so let's not make this additional bower package a requirement for anyone who uses the nypr-ui library.

## Installation
* `npm nypublicradio/nypr-stream-carousel`
* `ember g nypr-stream-carousel`

## Development

* `git clone git@github.com:nypublicradio/nypr-stream-carousel.git`
* `cd nypr-stream-carousel`
* `npm install`
* `bower install`

## Running

* `ember serve`
* Visit your app at [http://localhost:4200](http://localhost:4200).

## Running Tests

* `npm test` (Runs `ember try:each` to test your addon against multiple Ember versions)
* `ember test`
* `ember test --server`

## Building

* `ember build`

For more information on using ember-cli, visit [https://ember-cli.com/](https://ember-cli.com/).
