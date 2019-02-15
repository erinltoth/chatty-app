## Chatty 
Chatty is a real-time chat app that allows users to send and receive messages and notifications, change their username and view the number of online users. Chatty is built using React, Node, Webpack, and Babel. It is based on [React-Simple-Boilerplate](https://github.com/lighthouse-labs/react-simple-boilerplate)

### Usage

Clone this repo and create your own git repo.

```
git clone git@github.com:erinltoth/chatty-app.git chatty-app
cd chatty-app
git remote rm origin
git remote add origin [YOUR NEW REPOSITORY]
# Manually update your package.json file
```

Install the dependencies and start the server.

In /chatty-app
```
npm install
npm start
```
In a separate terminal tab or window navigate to /chatty-app/chatty_server

```
npm install
npm start
```

open http://localhost:3000 in your browser window


### Dependencies

* React
* Webpack
* [babel-loader](https://github.com/babel/babel-loader)
* [webpack-dev-server](https://github.com/webpack/webpack-dev-server)
* SASS

### Screenshots

![Chatty Main Page](https://github.com/erinltoth/chatty-app/blob/master/docs/main-page.png?raw=true)
The Main Page of Chatty

![User Count](https://github.com/erinltoth/chatty-app/blob/master/docs/user-count.png?raw=true)
The user count is live depending on when users open or close their connection to the server.