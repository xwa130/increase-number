# Features
- User should be able to sign up
- User should be able to sign in
- User should be able to see his/her current number 
- User should be able to increase his/her current number
- User should be able to reset his/her current number

# Technical highlight
In this app, I used `vue` as my front end framework, `vue-router` as a front end router, `vuetify` as my style framework, `Express` as my server, `MongoDB` as my database and `webpack` as my compiler. In development environment, I also used `nodemon` to reduce my development time costs. For the token, I employed json web token as my authentication tool. I also used `bcrypt` to encrypt my password in database and `axios` as my AJAX call to server.

# Usage
Run the following commands: 
```
git clone git@github.com:xwa130/increase-number.git && cd increase-number && npm i
cd frontend && npm i && npm build
cd ../ && npm build && npm start
```
Then go to `localhost:3000`, enjoy!