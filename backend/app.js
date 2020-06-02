import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import mongoose from 'mongoose';
import TestRoutes from './server/routes/main';

const app = express();
const PORT = 4000;

app.use(cors());
app.use(bodyParser.json());


mongoose.connect('mongodb://localhost/TestBank')
  .then(()=> {
    console.log('Connected to database TestBank');
  })
  .catch((error)=> {
    console.log('Error connecting to database');
  });

app.use('/admin',TestRoutes);

app.listen(PORT,()=>{
  console.log("Server is running on PORT : "+PORT);
});
