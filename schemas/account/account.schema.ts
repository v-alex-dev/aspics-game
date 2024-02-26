import * as mongoose from 'mongoose';

export const AccountSchema = new mongoose.Schema({
  username: String,
  password: String,
  email: String,
  created: { type: Date, default: Date.now },
  updated: { type: Date, default: Date.now },
});
