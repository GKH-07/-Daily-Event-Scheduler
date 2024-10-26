const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
    name: { type: String, required: true },
    start_time: { type: Number, required: true },
    end_time: { type: Number, required: true },
    date: { type: String, required: true },  // "YYYY-MM-DD"
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
});

module.exports = mongoose.model('Event', eventSchema);
