Project 3

Shame or Fame

App for people to:
1. Create posts about something bad that user witnessed but either didn’t require police involvement (littering/smoking/being that air pod asshole on CTA) or something that happened too fast for police to get involved and that community should be aware of as well (sexual harrassment) 
2. Create posts about something/someone awesome

MVP
User Stories:
- User can register, log in and log out
- When user is logged in they can create/update/delete their posts (except for those that were created by them when they were not registered)
- User can pin location of the incident on the map
- User can upload a picture of the incident
- User can search by location or incident


Nice to have:
- Post rating (to show if other users think it was a bad or good thing)
- Other users can comment

Stretch goals:
- User rating


API to consume - map


Points of no return:

POST /app-user-register
Username and password created and saved into user model

POST /app-user-login
Username and password compared to user model data

GET /app-user:id
Retrieves data from user model “posts” and renders current user all posts results 

GET /app
Retrieves data from posts model and renders all posts results  — for all users

GET /post/:id
Retrieves data from post model and renders single post

PUT /user/:id
Updates user model with the modified post data

DELETE /user/:id
Destroys post

POST /user/:id-newpost
New post created and saved into user model