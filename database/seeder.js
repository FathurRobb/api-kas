require('./index');
const mongoose = require('mongoose');
const { Resident, Payment } = require('../server/models');

async function seedResidents() {
    console.log('Seeding residents to ' + mongoose.connection.name + '...');
    const residents = [
        { name: 'Farhan Muhammad' },
        { name: 'Ilham Fathur' }
    ];

    for (resident of residents) {
        var newResident = new Resident(resident);
        await newResident.save();
    }

    const a = await Resident.find();
    console.log('residents: ', a);
}

async function seedPayments() {
    console.log('Seeding payments to ' + mongoose.connection.name + '...');

    const farhanMuhammad = await Resident.findOne({ name: 'Farhan Muhammad' });
    const ilhamFathur = await Resident.findOne({ name: 'Ilham Fathur' });

    let pay1 = new Payment({ date: 2022-04-28, nominal: 15000, description: "bayar iuran sampah", resident: ilhamFathur._id });
    let pay2 = new Payment({ date: new Date("2022-05-05"), nominal: 10000, description: "bayar iuran keamanan", resident: farhanMuhammad._id });
    let pay3 = new Payment({ date: new Date("2022-05-05"), nominal: 10000, description: "bayar iuran keamaman", resident: ilhamFathur._id });
    
    await pay1.save();
    await pay2.save();
    await pay3.save();
    
    ilhamFathur.payments.push(pay1);
    farhanMuhammad.payments.push(pay2);
    ilhamFathur.payments.push(pay3);
    
    await ilhamFathur.save();
    await farhanMuhammad.save();
}

seedResidents();
seedPayments();