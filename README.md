# Spacestagram

Spacestagram is a multipage application that aquires images from NASA's Astronomy Picture of the Day (APOD) API, and displays each image in an individual card. Spacestagram was developed using React and Bootstrap, and uses Fetch and custom hooks to pull the images from NASA, along with the title of the image, and date it was shared. A user is also able to "like" and "unlike" an image by clicking on the heart icon just below the image. Future features for this application include keeping a record of the images liked by the user, and allowing the user to select the date range of images to display (currently, the date is predetermined and fixed). Another future feature would be to accomodate video links, as NASA occasionally posts Youtube links as the APOD.

## Features
- A homepage that links to the images
- A loading spinner indicates that the page is loading while the images are aquired from the API
- The navigation bar links back to the the homepage
- On the images page, the image cards are arranged in a grid and display the image, the title of the image, and a heart icon that the user can click on to "like" the image
- Each card has a hover feature, where the text becomes a purple color when the mouse hovers over it
- When an image is "liked", the heart icon fills in and becomes red
- The user can click on the image on the card, and a new page will open, linking to NASA's site of the image, giving the user a closer look 

### Main App
![Spacestagram Homepage](https://github.com/tammyanndo/Spacestagram/blob/master/Docs/HomePage.png)
*The Spacestagram homepage's background is an image from NASA, and the "Spacestagram" link connects the user to the images page.*

![Spacestagram Loading Spinner](https://github.com/tammyanndo/Spacestagram/blob/master/Docs/LoadingSpinner.png)
*While the user waits for the application to fetch the data from the API, an animated loading spinner appears, indicating that the page is loading. Once the data returns, the spinner disappears, and the images are displayed.*

![Spacestagram Images](https://github.com/tammyanndo/Spacestagram/blob/master/Docs/ImageList.png)
*Once the data is received, the images, along with title and date, are displayed on individual cards.*

![Spacestagram Card](https://github.com/tammyanndo/Spacestagram/blob/master/Docs/Card.png)
*Each card displays the image, as well as the title of the image and the date that it was shared. The user is also able to click on the heart icon to "like" the image, and click it again, to "unlike". The images have been resized and formatted to fit the dimensions of the card, regardless of the image size, and zooms in on the image, rather than distorting it.*

![Spacestagram Liked Card](https://github.com/tammyanndo/Spacestagram/blob/master/Docs/LikedCard.png)
*When the user likes the image, the heart icon fills in and becomes a purple color to indicate that it has been "liked".*

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
