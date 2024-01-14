import app from './app';

import mongoose from 'mongoose';
import config from './app/config';

const port = config.port;
const db_url = config.db_url as string;

async function main() {
  try {
    await mongoose.connect(db_url);
    app.listen(port, () => {
      console.log('DataBase Connection Is Successful');
      console.log(`Server is Running At the port: ${port}`);
    });
  } catch (err) {
    console.log(err);
  }
}

main();
