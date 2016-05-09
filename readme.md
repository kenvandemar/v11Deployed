#YelpCamp

#Initial Setup
* Add Landing Page
* Add Campgrounds Page that lists all campgrounds

Each Campground has:
* Name
* Image

#Layout and Basic Styling

* Create our header and footer partials
* Add in Bootstrap

#Creating New Campgrounds
* Setup new campground POST route
* Add in body-parser
* Setup route to show form
* Add basic unstyled form

#Styling the campgrounds page
* Add a better header/title
* Make campgrounds display in a grid

#Style the Navbar and Form
* Add a navbar to all templates
* Style the new campground form

#Add Mongoose
* Install and configure mongoose
* Setup campground model
* Use campground model inside of our route

#Show Page
* Review the RESTful routes we've seen so far
* Add description to our campground model
* Show db.collection.drop() - delete all existing DB 
* Add a show route/template

#Refactor Mongoose Code
* Create a models directory
* Use module.exports
* Require everything correctly

#Add Seeds File
* Add a seeds.js file
* Run the seeds file everytime the server starts

#Add the new Comment model
* Make our errors go away !
* Display comments on campground show page

#Comment New/Create
* Discuss nested routes
* Add the comment new and create routes
* Add the new comment form

# AUTHENTICATION 

## Auth P1 - Add User Model
* Install All packaged needed for auth
* Define User model

## Auth P2 - Register
* Configure passport
* Add register routes
* Add register template

## Auth P3 - Login
* Add Login routes
* Add Login template

## Auth P4 - Logout/Navbar
* Add Logout Route
* Prevent user from adding a comment if not signed in
* Add links to navbar
* Show/hide auth links correctly

## Auth P5 - Show/Hide Links
* Show/Hide auth links in navbar correctly  

# Refactor The Routes
* Use Express router to reorganize all routes

# Users + Comments
* Associate users and comments
* Save author's name to a comment automatically

#Users + Campgrounds
* Prevent an unauthenticated user from creating a campground
* Save username + id to newly created campground

# Editing Campgrounds
* Add Method-Override
* Add Edit Route for Campground
* Add Link to Edit Page
* Add Update Route
* Fix $set problem

# Deleting Campgrounds
* Add Destroy Route
* Add Delete Button

#Authorization
* User can only edit his/her campgrounds
* User can only delete his/her campgrounds
* Hide/Show edit and delete buttons

#Editing Comments
* Add Edit route for comments
* Add Edit button
* Add Update route

Route: /campgrounds/:id/comments/:comment_id/edit

# Destroy Comments
* Add Destroy route
* Add Delete button

Comment Destroy Route: /campgrounds/:id:/comments/:comment_id

#Authorization Part 2: Comments
* User can only edit his/her comments
* User can only delete his/her comments
* Hide/Show edit and delete buttons
* Refactor Middleware

# Adding in Flash
* Demo working verion
* Install and configure connect-flash
* Add bootstrap alerts to header