import express from 'express';
import defaultRouter from './routers/default.routes.js';
import campusesRouter from './routers/campuses.router.js';

//configure Express.js app
const app = express();

//view engine
app.set("view engine", "ejs");
app.set("views", "src/views");

//static directories
app.use(express.static('public'));

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//routers
app.use("/", defaultRouter);
app.use("/campuses", campusesRouter) //Mounting 
app.use("/locations", campusesRouter) //Mounting

export default app;