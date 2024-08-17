const express = require('express');
const cors = require('cors');
const {MongoClient, ServerApiVersion, ObjectId} = require('mongodb');
require('dotenv').config();
const app = express();
const port = process.env.PORT || 5000;

// middleware
app.use(cors());
app.use(express.json());

const uri = `mongodb+srv://${process.env.DB_NAME}:${process.env.DB_PASS}@ecommercedatabase.la5qrjd.mongodb.net/?retryWrites=true&w=majority&appName=ecommerceDatabase`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    },
});

async function run() {
    try {
        // Connect the client to the server	(optional starting in v4.7)
        await client.connect();

        const coffeeCollection = client.db('coffeeDB').collection('coffee');
        const userCollection = client.db('coffeeDB').collection('users');

        app.get('/coffees', async (req, res) => {
            const cursor = coffeeCollection.find();
            const result = await cursor.toArray();
            res.send(result);
        });

        app.get('/coffees/:id', async (req, res) => {
            const id = req.params.id;
            console.log('findOne', id);
            const filter = {_id: new ObjectId(id)};
            const result = await coffeeCollection.findOne(filter);
            res.send(result);
        });

        app.post('/coffees', async (req, res) => {
            const newCoffeeData = req.body;
            console.log('new coffee', newCoffeeData);
            const result = await coffeeCollection.insertOne(newCoffeeData);
            res.send(result);
        });

        app.put('/coffees/:id', async (req, res) => {
            const id = req.params.id;
            const coffee = req.body;
            console.log('updated coffee', coffee, id);
            const query = {_id: new ObjectId(id)};
            const options = {upsert: true};
            const updatedCoffee = {
                $set: {
                    name: coffee.name,
                    chef: coffee.chef,
                    supplier: coffee.supplier,
                    taste: coffee.taste,
                    category: coffee.category,
                    details: coffee.details,
                    photo: coffee.photo,
                },
            };
            const result = await coffeeCollection.updateOne(
                query,
                updatedCoffee,
                options
            );

            res.send(result);
        });

        app.delete('/coffees/:id', async (req, res) => {
            const id = req.params.id;
            console.log('delete this ', id);
            const query = {_id: new ObjectId(id)};
            const result = await coffeeCollection.deleteOne(query);
            res.send(result);
        });

        // UserCollection apis

        app.get('/users', async (req, res) => {
            const cursor = userCollection.find();
            const result = await cursor.toArray();
            res.send(result);
        });

        app.post('/users', async (req, res) => {
            const user = req.body;
            console.log('user data', user);
            const result = await userCollection.insertOne(user);
            res.send(result);
        });

        app.patch('/users/:email', async (req, res) => {
            const email = req.params.email;
            const data = req.body;
            console.log('patch ', email);
            const filter = {email: email};
            const updatedUser = {
                $set: {
                    lastSignInTime: data.lastSignInTime,
                },
            };
            const result = await userCollection.updateOne(filter, updatedUser);
            res.send(result);
        });

        app.delete('/users/:id', async (req, res) => {
            const id = req.params.id;
            console.log('delete the id', id);
            const query = {_id: new ObjectId(id)};
            const result = await userCollection.deleteOne(query);
            res.send(result);
        });

        // Send a ping to confirm a successful connection
        await client.db('admin').command({ping: 1});
        console.log(
            'Pinged your deployment. You successfully connected to MongoDB!'
        );
    } finally {
        // Ensures that the client will close when you finish/error
        // await client.close();
    }
}
run().catch(console.dir);

app.get('/', (req, res) => {
    res.send('coffee server is running');
});

app.listen(port, () => {
    console.log(`server is running with : localhost:${port}`);
});
