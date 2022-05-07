const mongoose = require('mongoose');

const residentModel = mongoose.Schema({
    name: {
        type: String,
        required: '{PATH} is required'
    },
    payments: [
        { type: mongoose.Schema.Types.ObjectId, ref: 'Payment' }
    ],
}, {
    timestamps: true
});

module.exports = mongoose.model('Resident', residentModel)