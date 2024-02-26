import * as mongoose from 'mongoose';

export const databaseProviders = [
  {
    provide: 'DATABASE_CONNECTION',
    useFactory: (): Promise<typeof mongoose> =>
      mongoose.connect(
        'mongodb://admin:admin@ac-9126ujr-shard-00-00.obbvy8l.mongodb.net:27017,ac-9126ujr-shard-00-01.obbvy8l.mongodb.net:27017,ac-9126ujr-shard-00-02.obbvy8l.mongodb.net:27017/?replicaSet=atlas-ne371n-shard-0&ssl=true&authSource=admin',
      ),
  },
];
