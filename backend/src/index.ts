import { AppDataSource } from './data-source';
import express, { Request, Response, NextFunction } from 'express';
import routes from '../src/modules/routes/Index';
import morgan from 'morgan';
import cors from 'cors';

const app = express();

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

app.use(routes);

app.use((err: Error, request: Request, response: Response, _: NextFunction) => {
  // Caso tenha problema na rota
  if (err) {
    return (
      response
        // .status(err as number)
        .json({ status: 'error', message: err.message })
    );
  }
  // Problemas após chegada na rota
  console.error(err);
  return response.status(500).json({
    status: 'error',
    message: 'Internal server error',
  });
});

app.listen(process.env.BACKEND_PORT);
console.log(
  `⚙️  Backend Server | Running on port: ${process.env.BACKEND_PORT} ⚙️`
);

AppDataSource.initialize()
  .then(() => {
    console.log(`🚀 DataBase | Running on port: ${process.env.DB_PORT} 🚀`);
  })
  .catch((err) => {
    console.log('😭 😭 😭');
    console.error(
      `Data Source not found! You tried to run on Port: ${process.env.DB_PORT}`,
      err
    );
    console.log('😭 😭 😭');
  });
