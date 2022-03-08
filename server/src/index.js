const express = require('express');
const app = express();
const cors = require('cors');
const morgan = require('morgan');

const routesTodo = require('./routes/routes');

//middlewares
app.use(cors());
app.use(morgan('dev'));
app.use(express.json()); //req.body

//ROUTES//
app.use(routesTodo);

app.listen(4000, () => {
	console.log('Server running');
});
