const http = require('http');
const app = require('./Routes/book');
const connectToDB = require('./DBCollection/mongodb');
const PORT = 9011;

http.createServer(app).listen(PORT, () => {
    new connectToDB();
    
    console.log(`Server is running on port no ${PORT}`)
});