const { Payment } = require('../models');

const PaymentsController = {
    async index(req, res) {
        const payments = await Payment.find().populate('resident');
        res.send(payments);
    },
    async store(req, res){
        const payment = new Payment(req.body);
        try {
            const newPayment = await payment.save();
            res.status(201).json(newPayment);
        } catch (error) {
            res.status(400).json({message: error.message});
        }
    },
    async show(req, res){
        const payment = await Payment.findById(req.params.id).populate('resident');
        res.send(payment);
    },
    async update(req, res){
        try {
            const updatedPayment = await Payment.updateOne({_id: req.params.id}, {$set: req.body});
            res.status(200).json(updatedPayment);
        } catch (error) {
            res.status(400).json({message: error.message});
        }
    },
    async remove(req, res){
        try {
            const deletedPayment = await Payment.deleteOne({_id: req.params.id});
            res.status(200).json(deletedPayment);
        } catch (error) {
            res.status(400).json({message: error.message});
        }
    }
}

module.exports = PaymentsController;

// module.exports = {
//     async index(){
//         return await Payment.removeAllListeners().populate('resident');
//     }
// };