const { Resident, Payment } = require('../models');

const ResidentsController = {
    async index(req, res) {
        const residents = await Resident.find();
        res.send(residents);
    },
    async store(req, res){
        const resident = new Resident(req.body);
        try {
            const newResident = await resident.save();
            res.status(201).json(newResident);
        } catch (error) {
            res.status(400).json({message: error.message});
        }
    },
    async show(req, res){
        try {
            const resident = await Resident.findById(req.params.id).populate('payments');
            res.send(resident);
        } catch (error) {
            res.status(404).json({message: error.message});
        }
    },
    async update(req, res){
        // const cekId = await Resident.findById(req.params.id);
        // if (!cekId) {
        //     return res.status(404).json({message: "Data tidak ditemukan"});
        // }
        try {
            const updatedResident = await Resident.updateOne({_id: req.params.id}, {$set: req.body});
            res.status(200).json(updatedResident);
        } catch (error) {
            res.status(400).json({message: error.message});
        }
    },
    async remove(req, res){
        try {
            const deletedResident = await Resident.deleteOne({_id: req.params.id});
            await Payment.deleteMany({resident: req.params.id});
            res.status(200).json(deletedResident);
        } catch (error) {
            res.status(400).json({message: error.message});
        }
    }
}

module.exports = ResidentsController;