const mongoose = require('mongoose');

const paymentModel = mongoose.Schema({
    date: {
        type: Date,
    },
    nominal: {
        type: Number
    },
    description: {
        type: String
    },
    resident: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Resident'
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Payment', paymentModel);