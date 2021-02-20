# Quilava

A social, creative studio for artists.

Created by Dory Kahale, Jack Battle, Carson Scholberg, and Seth Zygarlicke.

### Links

Github Repository: https://github.com/ElderBass/Quilava.git 

Heroku: https://quilava-project2.herokuapp.com/

## Table of Contents


* [Description](#description)


* [Technologies](#technologies)


* [Installation](#installation)

    
* [Contributing](#contributing)

    
* [Questions](#questions)


## Description

Quilava is a social media platform that doubles as a creative studio for artists and DJs. The goal is to connect artists with each other for collaboration while offering services for creating and sharing projects.

Quilava allows you to sign up for a free account, where you have your own profile page that you can customize further. ADD personal information and links to other sites with which you are affiliated (e.g. Twitch, Discogs), add your mixes from YouTube or other sites for others to consume, and post blog updates about what you're working on or what you're listening to.

Quilava also offers a full drumkit emulator ("drumulator"), which allows artists to create beats with seven varieties of kits on hand. Unfortunately, the user cannot at this time record and save their creations on the site, but the Quilava staff are working hard to implement this feature. 

### Future Developments

As mentioned above, Quilava hopes to deliver a fully functional studio in the future, allowing artists to create, save, and share mixes they procure from the site. Quilava aims to be a one-stop-shop for artists - connecting, creating, collaborating, and networking all on one site.

We also hope to flesh out our search system, allowing users to find individual artists, search artists by genre, and stay connected with artists in their area. One feature we aim to add soon will be the ability to 'follow' other artists you like, which will link their profiles to your profile page and update you when that artist creates new music.

Quilava also plans on utilizing the Bands in Town third party API to show upcoming shows in your area right on your profile page. These features and many more are currently in development.

## Technologies

Quilava is a node.js application that uses the express npm package to establish a server connection. The backend code was written with javascript/jQuery. The database of users and user content was generated and stored with MySQL, in conjunction with the mysql2 and sequelize npm packages to streamline data collection and database queries

User authentication took advantage of both the passport and bcrypt npm packages to verify a user being logged in and authenticate their password.

On the fronted, html pages were generated via the npm package express-handlebars. This allowed flexibility for rendering content specific to certain users, as well as developing 'view-only' pages for visitors not signed up on the site. 

The nodemon npm package was used for running and testing code in real time.

All of the code was written with VS Code and the repository is stored on Github.


## Installation

Upon cloning the repository to your machine, open a new terminal and enter the following command to install all the necessary npm packages required for this application:

```
npm i 
```

## Contributing

The principal staff contributing to this project are as follows:

* __Dory Kahale__: Frontend styling and CSS, graphic design for 'featured artists' pictures and carousel functionality, drumkit integration and mapping.

* __Jack Battle__: Fronted styling and CSS across all pages, drumkit development, testing, and integration. 

* __Carson Scholberg__: Palatte selection and execution, fronted styling, passport/login integration, timestamping blog posts, page layouts and design.

* __Seth Zygarlicke__: Backend functionality, routing requests and responses from client to server and back, button functions.

If you wish to contribute to this repository, please reach out to one of the above creators of the site before forking it to your machine.


## Questions

If you have any questions, please email Seth Zygarlicke at zygster11@gmail.com.