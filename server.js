import express from 'express';
import dotenv from 'dotenv';
import todoRoutes from './routes/todoRoutes.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 4000;

app.use(express.json());
app.use('/api/todos', todoRoutes); 

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});