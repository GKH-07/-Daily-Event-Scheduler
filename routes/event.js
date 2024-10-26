const router = require('express').Router();
const Event = require('../model/event');
const verifyToken = require('./verifyToken');

router.post('/add', verifyToken, async (req, res) => {
    const { name, start_time, end_time, date } = req.body;

    const overlap = await Event.findOne({
        user: req.user._id,
        date,
        $or: [
            { start_time: { $lt: end_time, $gte: start_time } },
            { end_time: { $gt: start_time, $lte: end_time } }
        ]
    });

    if (overlap) {
        return res.status(400).json({
            success: false,
            message: 'Event overlaps',
            error: 'There is an overlap with an existing event'
        });
    }

    const event = new Event({
        name,
        start_time,
        end_time,
        date,
        user: req.user._id
    });

    try {
        const savedEvent = await event.save();
        res.send(savedEvent);
    } catch (err) {
        res.status(400).send(err);
    }
});

router.get('/:date', verifyToken, async (req, res) => {
    try {
        const events = await Event.find({ user: req.user._id, date: req.params.date }).sort({ start_time: 1 });

        res.status(200).json({
            success: true,
            events: events
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            message: 'Failed to retrieve events',
            error: err.message
        });
    }
});

module.exports = router;
