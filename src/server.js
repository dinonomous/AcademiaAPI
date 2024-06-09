import app from './app.js';
import dotenv from 'dotenv';

dotenv.config();

console.log(`PORT from .env: ${process.env.PORT}`);

const PORT = process.env.PORT || 6000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
