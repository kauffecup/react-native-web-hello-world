# AUSA

The Altadis USA Trade Platform is a solution designed to connect the AUSA business with it’s premium cigar trade customers of all levels and sizes. The platform will seek to achieve the following:
- Improve the convenience of doing business
- Build loyalty with trade partners
- Streamline the ordering process, and in turn increase sales
- Enhance communication between Territory Managers and customers
- Provide a knowledge bank during FDA changes
- Gain top of mind: Known for the best brands, best promotions and best support.


## Technologies Used

  - [React](https://facebook.github.io/react/)
  - [Redux](http://redux.js.org/)
  - [Webpack](https://webpack.github.io/)
  - [Babel](https://babeljs.io/)

## Directory Structure

`web` houses the `webpack` configs and `index.html` (it is also the
destination of our minified bundle).

The `app` itself is primarily based on my [React/Webpack/Redux Boilerplate][bp],
for more info on that head over there.


## Entry Point

The entry point the web app is `app/web/index.js`.

## Configured Scripts

### Running in dev/production

There are 2 defined scripts in [package.json][pg]:

  1. `web-dev`
  2. `web-bundle`


### web town

`web-dev` kicks off a webpack server on port 4000, it utilizes hot reloading
with some redux-time-machine-magic to have a crazy awesome dev experience where
you can rewind and revert actions in your application.

`web-bundle` creates a minified JavaScript bundle (that also houses the minified
css) and places it next to the `index.html` in `web/public` that you can serve
with any static file server.


## Further Configuration

Webpack sets the `PLATFORM_ENV` environment variable to be `web`. You can use
this check to conditionally load different files depending on if you're building
your native or web app. For example - you can abstract out the difference
between local storage mechanisms.

[gs]: https://facebook.github.io/react-native/docs/getting-started.html
[bp]: https://github.com/kauffecup/react-redux-webpack-boilerplate
[bg]: http://jkaufman.io/react-web-native-codesharing/


## Dependencies to consider
"axios": "^0.12.0",
"babel-plugin-add-module-exports": "^0.1.2",
"babel-plugin-react-html-attrs": "^2.0.0",
"babel-plugin-transform-class-properties": "^6.3.13",
"babel-plugin-transform-decorators-legacy": "^1.3.4",
"babel-preset-stage-0": "^6.3.13",
"redux-promise-middleware": "^3.2.0",
