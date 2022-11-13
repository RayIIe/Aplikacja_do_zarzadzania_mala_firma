const express = require("express")
const router = express.Router()
const Event = require("../models/calendarModel")
const moment = require("moment")

router.post("/create-event", async (req, res) => {
    const event = Event(req.body)
    await event.save()
    const {start, end, title} = req.body;
    // Event.findOne({title: title}, async (err, date) => {
    //     if ((body.start <= EndDate2) && (StartDate2 <= EndDate1)) {
            return res.send({message: "user is already scheduled for that time period"})
    res.sendStatus(201)
})


router.get("/get-events", async (req, res) => {
    const events = await Event.find({
        start: {$gte: moment(req.query.start).toDate()},
        end: {$lte: moment(req.query.end).toDate()},
    })

    res.send(events);
});


    module.exports = router;