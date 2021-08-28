const mongodb = require('mongodb');
const uri = process.env.DB_HOST;
const dataBase = process.env.DB_NAME;
let db;

const client = new mongodb.MongoClient(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const connect = async (dbName = dataBase) => {
    const conn = await client.connect();
    db = conn.db(dbName);
    console.log('<===== Database connected =====>')
}

const getDbRef = () => {
    return db ? db : new Error('Connection error');
}

module.exports = {connect, getDbRef}


