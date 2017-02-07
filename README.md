#React Boilerplate
A boilerplate project for a single page react web service.

Uses Redux as an application store and Redux Saga for side effects, asynchronous requests, and chained actions.

Transpiled and Bundled using Webpack and Babel with Sourcemaps and Hot Reloading. Uses Webpack HTML Template to generate the `index.html` page the app is automatically loaded into.

After running `npm install` you can run the webpack dev server by running `npm run start`.

> Note: You should set the environment variables for `PROXY_HOST` and `PROXY_PORT` if you uncomment the dev server proxy section of the webpack config.

`npm run build` will generate a `build` directory with all the static files generated by the webpack build.