# meteor-presentation-app

# About
This is an application made for a course in application development for internet. I made an application that is enabling live commenting and liking on a presentation using Meteor. 

I did this mostly for fun to be able use it during my presentation in class for my classmates and teachers, but i hope it could provide help for people who gonna develop their first Meteor application.

#Application
The application consists mainly of three files based on the Meteor standard application structure. 

The application also features three templates. Two of them represents the two main views. Using [iron-router](https://github.com/iron-meteor/iron-router) library and one is a template used by both main templates for listing comments.

The routes of the application defined via [iron-router](https://github.com/iron-meteor/iron-router):
```html
/                # Loads the interact template wich is mobile friendly
/presentation    # Loads the presentation template
```

#Discaimer
This application is only made for demonstration purposes on University course. 
