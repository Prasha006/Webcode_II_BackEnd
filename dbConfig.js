const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;
const dbName = 'webscrapping'
const dbURL = `mongodb+srv://prasha006:123123@cluster0.pirtog3.mongodb.net//${dbName}`;

module.exports={dbURL,mongodb,MongoClient,dbName}
