const express = require('express'),
	path = require('path'),
	rootPath = path.normalize(__dirname + '/../'),
	router = express.Router(),
	{ ResidentsController, 
		HomeController, 
		PaymentsController } = require('./controllers');

module.exports = function(app){	

	router.get('/', HomeController.index);

	router.get('/residents', ResidentsController.index);
	router.post('/residents', ResidentsController.store);
	router.get('/residents/:id', ResidentsController.show);
	router.put('/residents/:id', ResidentsController.update);
	router.delete('/residents/:id', ResidentsController.remove);

    router.get('/payments', PaymentsController.index);
	router.post('/payments', PaymentsController.store);
	router.get('/payments/:id', PaymentsController.show);
	router.put('/payments/:id', PaymentsController.update);
	router.delete('/payments/:id', PaymentsController.remove);

	app.use('/api', router);
};