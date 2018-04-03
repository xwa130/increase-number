# Overview
A web app which enables users to signup, signin and see their system-assigned number.

# Technical highlights
* Front end framework: [Vue](https://cn.vuejs.org/index.html)
* Front end router: [Vue-Router](https://router.vuejs.org/zh-cn/)
* Style Framework: [vuetify](https://vuetifyjs.com/zh-Hans/)
* Backend Server: [Express](http://expressjs.com/zh-cn/)
* Database: [MongoDB](https://www.mongodb.com/)
* Compiler: [webpack](https://webpack.js.org/)
* To reduce deployment time: [nodemon](https://nodemon.io/)
* Encrypt web tokens as authentication tool.
* Encrypt password in dabase: [bcrypt](https://www.npmjs.com/package/bcrypt)
* AJAX call: [axios](https://www.axios.com/)

# Features
- Sign up.
- Sign in.
- Displaying current number. 
- Increase the current number.
- Reset current number.

# Usage
Run the following commands: 
```
git clone git@github.com:xwa130/increase-number.git && cd increase-number && npm i
cd frontend && npm i && npm run build
cd ../ && npm run build && npm start
```
Then go to `localhost:3000`, enjoy!