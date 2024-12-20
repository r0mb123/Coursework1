const express = require('express');
const bodyParser = require('body-parser');
const sequelize = require('./config/database');
const taskRoutes = require('./routes/tasks');

const app = express();
app.use(bodyParser.json());


app.use('/tasks', taskRoutes);


sequelize.sync({ force: true }).then(() => {
    console.log('Database synced with force: true');
    app.listen(3000, () => {
        console.log('Server running on http://localhost:3000');
    });
});

