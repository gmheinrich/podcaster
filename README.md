# PODCASTER - REACT APP

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

And use this libraries, React Router V6, Axios, Boostrap, Reactstrap, Styled-componentes, and other utils like moment, lodash and interweave.

## CORS NOTES

The App use 'https://cors-anywhere.herokuapp.com/' as a PREFIX in the URLs to get data from iTunes API

If your request come with 403 html code, you can use CORS utils and activate it in your browser. I recommend https://mybrowseraddon.com/access-control-allow-origin.html

To use CORS Utils in your browser change the prop prefixURL in file routes.js (prefixURL: '').

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
