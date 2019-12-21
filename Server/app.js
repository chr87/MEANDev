// Initialize the express framework
var express 	 	= require('express'),
	 path 			= require('path'),
	mongoose		= require('mongoose'),
	bodyParser		= require('body-parser')

// Express setup 
var app = express();
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({extended: true}));

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});
 

//DB Connectivity 
mongoose.connect('mongodb://localhost:27017/ManageGateways',{ useNewUrlParser: true });

	var db = mongoose.connection;
	db.on('error', console.error); // Log the error to the console when there is an error in connectivity?
	db.once('open', startServer); // Start the server on port '3000' upon successfull connectivity	
	
	// Start up the server
	function startServer(){
		var server = app.listen(3000, function(){
			var port = server.address().port;
			console.log('Listening on port ' + port);
			console.log('Connection succeded');
		})
	}

// Routes set up
var router 	= express.Router();
var gateway = require('./controllers/api/gateway');
var peripheral = require('./controllers/api/peripheral');
router.get('/api/gateway',gateway.getAll)
router.get('/api/gateway/:id',gateway.getGatewayById)
router.post('/api/gateway',gateway.insert)
router.delete('/api/gateway',gateway.delete)
router.delete('/api/gateway/peripheral/:id',peripheral.delete)
router.get('/api/gateway/peripherals/:id',peripheral.getAllByIdGateway)
router.post('/api/gateway/peripheral',peripheral.insert)
app.use('/', router);

