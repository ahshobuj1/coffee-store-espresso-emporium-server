/**
 * * Setup server
 * 1. npm init -y
 * 2. npm i express cors mongodb dotenv
 * 3. require express cors etc and setup middleware
 *
 * * Setup MongoDb database
 * 1. create user
 * 2. connect database with server
 * 3. create .env file and set Mongodb Username and Password
 * 4. import from .env file - process.env.DB_NAME
 * 5. make sure use - require('dotenv').config();
 * 6. at last off/comment - await client.close();
 *
 * * Add New Coffee to Database
 * 1. create a post api > async - await
 * 2. get New Coffee value from - req.body
 * 3. Follow Doc : crud operations - node.js - Usages Examples >Insert operations >Insert a Document
 * 4. create coffeeCollection
 * 5. coffeeCollection.InsertOne()
 * 6. res.send()
 *
 *
 */
