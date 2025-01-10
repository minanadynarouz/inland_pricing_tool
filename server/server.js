import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import loginRoutes from './routes/loginRoutes.js';
import uploadPriceTable from './routes/uploadPriceTable.js';
import queryPrice from './routes/queryPrice.js';
import insertPrice from './routes/insertPrice.js';
import addUser from './routes/addUser.js';
import getFiles from './routes/getFiles.js';
import downloadFiles from './routes/downloadFiles.js';
import session from 'express-session';
import MySQLStore from 'express-mysql-session';

dotenv.config();

const app = express();
const PORT = 5000;
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.json())

// const options = {
//   host: "localhost",
//   user: "root",
//   password: process.env.MYSQL_PASS,
//   database: "inland_db",
// };

// const sessionStore = new MySQLStore(options);

// Configure session middleware
app.use(
  session({
    key: 'user_email',
    secret: '12Ks32d1dmimiasdanoli3213-12-@_@_#Finisrong',
    // store: sessionStore,
    resave: false,
    saveUninitialized: true,
    cookie: {
      secure: false, // Set to true if using HTTPS
      httpOnly: true,
      maxAge: 3600000 * 4, // 4 hours
    },
  })
);

app.use(cors({
  origin: 'http://localhost:5173',
  credentials: true,
}
));


app.use('/login', loginRoutes);
app.use('/uploadFile', uploadPriceTable);
app.use('/queryPrice', queryPrice);
app.use('/insertPrice', insertPrice);
app.use('/addUser', addUser);
app.use('/getFiles', getFiles);
app.use('/downloadFiles', downloadFiles);


// Listen to the server
app.listen(process.env.PORT || PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
