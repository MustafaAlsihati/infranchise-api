/**
 ** Setup DotEnv
 */
import DotEnv from 'dotenv';
DotEnv.config();
/**
 ** Setup Express App
 */
import {
  default as express,
  Request as ExpressRequest,
  Response,
  NextFunction,
} from 'express';
import { default as cors } from 'cors';
import routes from './routes';

const app = express();

const allowCrossDomain = (
  req: ExpressRequest,
  res: Response,
  next: NextFunction,
) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
};
const badRequest = (_: ExpressRequest, res: Response) => {
  res.status(404).send({
    error: {
      name: 'Error',
      status: 404,
      message: 'Invalid Request',
      statusCode: 404,
    },
    message: 'Invalid Request',
  });
};

// App:
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({ origin: true }));
app.use(allowCrossDomain);
app.use(routes);
app.use(badRequest);

// ? Listen for ports:
app.listen(process.env.PORT || 5000, () => {
  if (process.env.NODE_ENV === 'dev') {
    console.log(
      `Server is running on http://localhost:${process.env.PORT || 5000}`,
    );
  }
});
