# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).


In my URL shortener service, I used to develop this in Reactjs. I used a Map to track the relationships between long URLs and their corresponding shortened versions. Here’s how I approached it:

Data Structure: Map
A Map is ideal for this purpose because it allows me to quickly check if I’ve already created a short URL for a long URL. This makes my application efficient, as it can look things up almost instantly.

1. Generating Short URLs: 
The function generateShortUrl() generates short URLs by creating a random string of 6 characters, including letters and numbers. This keeps the short URLs concise and easy to remember.
I recognize that there's a possibility of two different long URLs ending up with the same short URL, and I want to avoid that.

2. Handling Collisions: 
Inside the shortUrlGenerator(originalUrl) function, if I generate a short URL and discover that it already exists in my Map, I keep generating new ones until I find a unique one. This process guarantees that each long URL has its own distinct short URL.

3. Validating Long URLs: 
Before I create a short URL, I validate the long URL using the `isUrlValid(urlString)` function to ensure it’s in the correct format. If it's not valid, I throw an error. This helps prevent any issues with incorrect or malformed URLs.

4. Retrieving Existing Short URLs: 
 Suppose someone tries to shorten a URL that I’ve already processed. In that case, the shortUrlGenerator(originalUrl) function returns the existing short URL associated with that long URL instead of generating a new one. This saves time and keeps everything organized.

In summary, my approach combines a user-friendly interface with a robust system that ensures each long URL is paired with a unique short URL. By using a Map, I can efficiently check for existing URLs and handle potential duplicates. This way, users can quickly and easily shorten their URLs without worrying about errors or duplicates.


## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
