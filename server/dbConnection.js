const mongoose = require('mongoose');
const config = require('./confige');
// mongoose.Promise = global.Promise;
// mongoose.connect(
//     config.DATABASE_URL,
//     err => {
//         if (err) {
//             return console.log("Connection in Error!");
//         };
//         console.log('Connected Successfully!');
//     }
// )

mongoose.connect(config.DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("connection successfully"))
  .catch((err) => console.log(err))