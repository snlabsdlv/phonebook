const express = require('express');
const db = require('./app/db/db.connection.js').dbInstance();
const swaggerUi = require('swagger-ui-express');


const app = express();
app.use(express.json());

app.use((err, req, res, next) => {
    res.header('Content-Type', 'application/json');
    res.status(422).send({ error: err.message });
});

app.listen(process.env.PORT || 4000, () => {
    console.log('Node.js server listening on port 4000 ');
});