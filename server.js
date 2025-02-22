const express = require('express')
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const authRoute = require('./routes/auth');
const eventRoute = require('./routes/event');

dotenv.config();
app.use(express.json());
app.use(cors({
    origin: ["http://localhost:5173","https://daily-event-scheduler-frontend-p64r.vercel.app"],
    credentials: true,
}));

app.use('/api/auth', authRoute);
app.use('/api/events', eventRoute);


mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('Could not connect to MongoDB...', err));

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
