# testApp
> Test application

# Creating your repository
In order to deploy your app, you need to have your project in a git repository. If you have not yet created one, go to the root of your ionic app and create one. Also add all current files and make your first commit:
> git init

> git add .

> git commit -am 'Initial commit.'

# Pull other default files in github
> git remote add origin [https://github url here]

> git pull origin master

> git push -u origin master

# Add the files for Heroku deployment
Heroku can run your app in many environments, for our ionic app we need a NodeJS environment.
> npm install express --save

# app.json is needed for some meta information about your app.
{
    "name": "amaitcapstone Ionic to Heroku Example",
    "description": "A simple Ionic app for Heroku",
    "repository": "https://github.com/amaitcapstone/testApp.git",
    "logo": "http://pathToYourLogo.png",
    "keywords": ["ionic", "amait", "capstone"]
}

# The last thing we need is the file which will be executed by Heroku. Heroku will look for a server.js, so create this file as well on the top level of your ionic project and insert:

var express = require('express'),
app = express();
app.use(express.static('www'));
app.set('port', process.env.PORT || 5000);
app.listen(app.get('port'), function () {
    console.log('Express server listening on port ' + app.get('port'));
});

# Now you can test your app local. Instead of ‘ionic serve’, we will install the modules and run it with our express server, so go ahead:
> npm install
> npm start