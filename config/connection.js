const { connect, connection } = require('mongoose');


// connects database to mongo db
const connectionString = 
    process.env.MONGODB_URI || 'mongodb://localhost:27017/socialNetworkdb';

connect(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

module.exports = connection;