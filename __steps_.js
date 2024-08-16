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
 * * Find Multiple Documents
 * 1. create a get request
 * 2. coffeeCollection.find()
 * 3. make sure convert - toArray()
 * 4. res.send()
 *
 * * Delete a Document
 * 1. create a delete api
 * 2. get specific id for document - req.params.id
 * 3. Query/filter for a coffee that has the id
 * 4. coffeeCollection.deleteOne()
 * 5. res.send()
 *
 * * Find a document with id
 * 1. create a get request with params - ex -> '/coffee/:id'
 * 2. get id from -> req.params.id
 * 3. Query/filter for the doc/coffee that has the id
 * 4. await coffeeCollection.findOne()
 * 5. res.send()
 *
 * * Update a Document
 * 1. create a put request
 * 2. get id from -> req.params.id
 * 3. get updatedCoffee from - req.body
 * 4. Query/filter for the doc/coffee that has the id
 * 5. create a document that sets the plot of the coffee
 * 6. await coffeeCollection.updateOne(para,para,para)
 * 7. res.send()
 */
