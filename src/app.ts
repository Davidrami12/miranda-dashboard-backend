import express from 'express';
import { json, urlencoded } from 'body-parser';

// Importación de los routers de cada controlador
/* import loginRouter from './controllers/login';
import roomRouter from './controllers/room';
import bookingRouter from './controllers/booking';
import userRouter from './controllers/user';
import contactRouter from './controllers/contact'; */

const app = express();

// Configuración de middlewares
app.use(json());
app.use(urlencoded({ extended: false }));


app.get('/', (req, res) => {
    res.send('API running on root path');
});

// Configuración de rutas
/* app.use('/login', loginRouter);
app.use('/room', roomRouter);
app.use('/booking', bookingRouter);
app.use('/user', userRouter);
app.use('/contact', contactRouter); */

export default app;
