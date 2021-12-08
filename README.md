# W08D03

## UML diagram
<img src='https://i.ibb.co/m6kpvKK/Untitled-drawio.png' alt='img'/>

## ER diagram
<img src='https://raw.githubusercontent.com/Eyad911/w08d03/main/ER-Diagram.png' alt='img'/>


## About The Project

Project "Todos/Login/Sign up" using hash password and token where only verified user can create/update/delete/seeUsers/seeTodos/deleteUser

Here's why:
* Your time should be focused on creating something amazing. A project that solves a problem and helps others for login in and singning up with encrypted password



### Built With

* [node.js](https://nodejs.org/)
* [bcrypt package](https://www.npmjs.com/package/bcrypt/)
* [json web token package](https://www.npmjs.com/package/jsonwebtoken/)


### Installation

Below is an example of how you can installing and setting up your app.


1. Clone the repo
   ```sh
   git clone https://github.com/Sulaiman122/W08D02.git
   ```
2. npm i "to install all packages for this project"

3. Install NPM packages
   ```sh
   npm install
   ```
4. Enter your env variables at `.env`
   ```js
   DB = 'ENTER YOUR DB from mongoDB'
   SALT = 'Number of rounds of salt the hash'
   PORT = 'port which you want to use it'
   SECRET_KEY = 'any word key to make token'
   ```


<p align="right">(<a href="#top">back to top</a>)</p>
