# Project Template - Static

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Table of Contents

1. [Available Scripts](#available-scripts)
2. [Adding Pages](#adding-pages)
3. [Server-side Rendering](#server-side-rendering)
4. [Learn More](#learn-more)

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits. You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode. See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder. It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes. Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Adding Pages

1. Add the route to `config/routes.js`.

   For a page named "About", you might add the following route.

   ```javascript
   {
     path: '/about',
     data: 'pages.about',
     exact: true,
     component: lazy(() => import('../pages/About/About'))
   }
   ```

   Note that we use dot notation for the `data` value to indicate the path to the file in the `data` directory where the data for this page will be stored.

2. Add the data file to `data/pages`.

   The file name must match the route's `data` value. So, for our "About" page, we would add the file `data/pages/about.js`. After adding the page, Once you have created the file, make sure to import it into the `data/pages/index.js` file.

3. Add the page component to the `pages` directory.

   Similar to the default, `Home` page component, for the "About" page, you would create a component file at `pages/About/About.js`. Also add a `pages/About/about.scss` file to contain any page-specific styles.

4. Build the page.

   Now you can add all your content to the `data/pages/about.js` file, This data will then be passed to your `About` page component as a prop named `pageData`, just as you added it. At minimum, you will likely want to add a `title` and a `className` for the page. The rest of the fields are up to you.

   ```javascript
   {
    title: 'About Us',
    className: 'about',
    content: 'Lorem ipsum dolor sit amet...'
   }
   ```

## Server-side Rendering

To enable server-side rendering in the project, you can use the [react-snap](https://github.com/stereobooster/react-snap) package. For more information about how to implement it, follow the documentation.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `yarn build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
