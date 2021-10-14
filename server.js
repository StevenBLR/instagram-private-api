import express from 'express';
//import mongoose from 'mongoose';

const app = express();
const port = 9000;

// For any get call on the server
app.get('/', (req, res) => res.status(200).send('server Ok'));

// Listen for any change on server
app.listen(port, () => console.log(`listening on port ${port}`));
