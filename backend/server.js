const express = require('express');
const connectDB = require('./dbconnect/db'); 

const routes = require('./routes'); 
const authRoutes = require('./routes/auth');
const profileRoutes = require('./routes/profiles');
const feedbackRoutes = require('./routes/feedbackRoutes');

const cors = require('cors');

const app = express();
const PORT = 3000;


connectDB();  // idhr mongo se connect kia hai
app.use(express.json()); 
app.use(cors());

app.use('/', feedbackRoutes);


//  parse ho rha to JSON

app.use('/api/auth', authRoutes);
app.use('/api/profile', profileRoutes);

app.use('/', routes);  // routes module use ho rha hai

// Starttig the serverr
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
