const mongoose = require('mongoose')

const goalSchema = mongoose.Schema({
    text: {
        type: String,
        requuired: [true, 'Please Add a text value']
    }
}, 
{
    timestamps: true,
})

module.exports = mongoose.model('Goal', goalSchema)