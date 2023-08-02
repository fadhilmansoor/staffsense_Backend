import * as mongoose from 'mongoose';

export const workers = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  phone: Number,
  status: Boolean,
  isBanned: Boolean,
  role: String,
});
