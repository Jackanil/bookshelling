import dotenv from 'dotenv'
 dotenv.config();
import  express  from "express";
import path ,  {dirname} from 'path'
import  jwt  from "jsonwebtoken";
import cors from 'cors'
import bodyParser from "body-parser";
import DbConnection from './database/db.js'
import defaultData from "./default.js";
import webRoute from './routes/route.js'
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();

const DB_CONNECT = process.env.DB_URL
const port = process.env.PORT || 8000;

DbConnection(DB_CONNECT)



app.use(cors())
app.use(express.json());
app.use(express.urlencoded({extended : true}));
app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json({extended : true }))

// static files
console.log(path.join(__dirname , '/../client/build') , 'here');
app.use(express.static(path.join(__dirname , '/../client/build/index.html')))
app.use(express.static(path.join(__dirname , '/../client/build/static')));
app.use(express.static(path.join(__dirname , '/../client/src')));
app.use(express.static(path.join(__dirname , '/../client/build')));

// setting for router
app.use('/' , webRoute )

// port listening
app.listen(port , ()=>{
    console.log(`server is started ${port}`);
})

// setiing default data to server
defaultData()