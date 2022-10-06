import favicon from 'serve-favicon';
// Import
import express from 'express';
import dotenv from "dotenv";

// Init Routes Front
import homeRoutes from './routes/homeRoutes';
import newCarRoutes from './routes/CarRoutes';
// Init Routes API
import indexApiRoutes from './routes/api/indexApiRoutes';
import carRoutes from './routes/api/carRoutes';

// Init DB
import connectDB from './connectDB';
import bodyParser from 'body-parser';
import path from 'path';
import session from 'express-session';

async function main() {
  //Env
  dotenv.config();

  // Init app
  const app = express();
  app.set("view engine", "ejs");
  app.set("views", path.join(__dirname + "/views"));
  app.use(express.static(__dirname + '/public'));
  app.use(favicon(__dirname + '/public/image/favicon.ico'));

  app.use(session({
    secret: process.env.SECRET_SESSION_KEY,
    resave: true,
    saveUninitialized: true
  }));
  app.use(express.urlencoded({ extended: true }));
  app.use(express.json());
  app.use(bodyParser.json());
  

  //connectDB
  await connectDB();

  // Apply Routes
  app.use(homeRoutes);
  app.use(newCarRoutes);
  app.use("/api",indexApiRoutes);
  app.use("/api",carRoutes);

  // Handlers
  app.use((req : express.Request, res: express.Response) => {
    res.render('404');
  });

  // Listener App
  app.listen(process.env.PORT || 8080, () => {
    console.log(`Listening at ${process.env.URL}:${process.env.PORT}`);
    console.log(`Running in ${process.env.NODE_ENV} mode`);
  });
}
main();
