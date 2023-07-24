# Contacts Management App 

It is a contacts-user management API made in Node-Express JS used with MongoDB and implemented JSON Web Token [JWT] authentication security. The backend app provides `Register` and `Login` user functionality. Each Registered user can view their own added contacts information or can perform 4 CRUD(`Create`, `Read`, `Update`, `Delete`) operations. JWT Authentication is implemented so that no other user can perform operations made by other user. This JWT generated token have expiry  time and if user logs in within that time than it lets user successfully login or else fails. In this project, expiration time is set for 15 minutes, don't worry perform your tests at ease:) 

## Tech Stacks
<p>
<img src="https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E" alt="JavaScript"/>
<img src="https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white" alt="NodeJS"/>
<img src="https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white" alt="ExpressJS"/>
<img src="https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white" alt="MongoDB"/>
</p>

## Documentation

 
1. Nodemon - `npm i nodemon`
2. Express - `npm i express`
3. dotenv - `npm i dotenv`
4. Mongoose - `npm i mongoose`
5. MongoDB - `npm i mongodb`
6. BCrypt - `npm i bcrypt`
7. Express Async Handler - `npm i express-async-handler`
8. JWT (JSON Web Token) - `npm i jsonwebtoken`
9. Install VScode Thunder Client extension for client sided request-response interaction.

### Setting up MongoDB Atlas cloud :

1. Create MongoDB Atlas account
2. Create a free cluster (Create database/deploy database)
3. Shared free plan
4. Choose service provider (AWS recommended)
5. Choose region (Starred ones recommended)
6. Choose your cluster name (can't be changed later)
7. In authenticate connection - choose `Username and password`
8. Choose `username` (suggested `admin`)
9. Automatically chosen IP
10. Finish and close, create cluster
11. Click `browse collections` -> `Add my own data`
12. Add your database name, and collection names - `contacts` and `users` will be made for further use.
13. Install VSCode `mongoDB` extension
14. Go to `overview` -> `connect` -> `MongoDB Compass option` -> `Copy Connection String` in Atlas website.
15. Go to VSCode, left side panel MongoDB, Click `Connect with Connection String` to establish connection of your account to VSCode.
16. In above command palette, paste that [14] copied string and replace `test` with your database name in string and your password in place of `<password>`.
17. Hit `enter` to establish successful connection.
18. Now to connect your app and code with your database, follow :
MongoDB Cloud Atlas -> `Overview` -> `Connect` -> `MongoDB Drivers option` -> `Copy Connection String`
19. Go to `.env` file and paste that newly copied string to `CONNECTION_STRING`variable.
20. Replace your database name in string before `?retryWrites=true` part i.e.
`... mongodb.net/<your_database_name>?retryWrites=true ...`.

## Running the App

`npm start` - Run in `mycontacts-backend` only `images` are for reference purpose

### Running Thunder Client queries :

◾- Base URL = `http://localhost:5000/api/`
◾- For accessing on contacts - `.../api/contacts`
◾- For accessing on users - `.../api/users`


0] Get all contacts by user1 [GET] :
`http://localhost:5000/api/contacts`

1] Registering new user and success  proof [POST] and [GET] :
`http://localhost:5000/api/users/register`

2] Wrong credentials login check handle test [GET] :
`http://localhost:5000/api/users/login`

 - In Body JSON Content
`{ "email": "youremail", "password": "wrongpassword" }`

3] Generate new token for user login [POST] :
`http://localhost:5000/api/users/login`

4] Adding access token in Auth section to login [POST] :
`http://localhost:5000/api/contacts`

5] Create contact after login [POST] :
`http://localhost:5000/api/contacts`
 
 - In Body JSON Content
`{ "name": "yourname", "email": "youremail", "phone": "phoneno" }`

6] Update contact success [PUT] :
`http://localhost:5000/api/contacts/"_id"`

7] Delete contact added by user2 [DELETE] :
`http://localhost:5000/api/contacts/"_id"`

8] Deleted contact get info handle case [GET] :
`http://localhost:5000/api/contacts/"_id"`

◾- All pictorial references are in `images` folder, [Click Here](images/)
