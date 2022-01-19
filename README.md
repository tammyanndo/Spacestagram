# Spacestagram

Spacestagram is a multipage application that acquires images from NASA's Astronomy Picture of the Day (APOD) API, and displays each image in an individual card. Spacestagram was developed using React and Bootstrap, and uses Fetch and custom hooks to pull the images from NASA, along with the title of the image, and date it was shared. A user is also able to "like" and "unlike" an image by clicking on the heart icon just below the image. Future features for this application include keeping a record of the images liked by the user, and pushing these images to a "liked images" page. Another feature is allowing the user to select the date range of images to display, as currently, the date is predetermined and fixed). The final future feature for this Spacestagram app would be to accommodate video links on the card, as NASA occasionally posts Youtube links as the APOD.

## Features
- Minimalistic homepage features a link that directs to the images pages
- As the image cards page loads, a loading spinner indicates that the page is loading, while the images are acquired from the NASA API
- The simple navigation bar on the image cards page links back to the homepage
- On the images page, the image cards are arranged in a grid and display the image, the title of the image, and a heart icon that the user can click on to "like" and "unlike" the image
- When an image is "liked", the heart icon fills in and becomes purple; if the icon is clicked again, it goes back to its original state
- Each card has a hover feature, where the text becomes purple when the mouse hovers over it
- The user can click on the image on the card, and a new tab will open, linking to NASA's site of the image, giving the user a closer look 

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

## Setup

Install dependencies with `npm install`.

To start the application, run `npm start`. Your browser should automatically open to [http://localhost:3000](http://localhost:3000). If not, you can navigate to the link manually. 

Once on the homepage, you should be able to click on the "Spacestagram" title to be redirected to the images page. 

## Project Stack
> React, Bootstrap, JavaScript, HTML

## Dependencies
```
@emotion/react
Bootstrap
React
React-Bootstrap
React-Dom
React-Router-Dom
React-Scripts
React-Spinners
```