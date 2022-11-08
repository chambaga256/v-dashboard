let express   = require('express');
let mongoose   = require('mongoose');
let cors       = require('cors');
let bodyParser = require('body-parser');
let dbConfig    = require('./database/db');



// Express Route
const recordRoute = require('../backend/routes/record.route')


// Connecting mongoDB Database
mongoose.Promise = global.Promise;
mongoose.connect(dbConfig.db, {
  
	useNewUrlParser: true,
	useUnifiedTopology: true,
	
}).then(() => {
  console.log('Database sucessfully connected!')
},
  error => {
    console.log('Could not connect to database : ' + error)
  }
)


const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(cors());
app.use('/', recordRoute);
// app.use('/api',userRoute);


const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log('Connected to port ' + port)
})