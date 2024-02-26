import dotenv from 'dotenv';
import * as mongoose from 'mongoose';

dotenv.config();

// Your code here

export const databaseProviders = [
  {
    provide: 'DATABASE_CONNECTION',
    useFactory: (): Promise<typeof mongoose> =>
      mongoose.connect(process.env.MONGO_URI),
  },
];
