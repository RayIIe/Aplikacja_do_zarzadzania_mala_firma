const mongoose = require("mongoose")

const Schema = mongoose.Schema

const EventSchema = new Schema({
    user: String,
    start: Date,
    end: Date,
    title: String
})

const Event = mongoose.model("Event", EventSchema);

module.exports = Event;