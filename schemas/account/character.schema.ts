import * as mongoose from 'mongoose';

export const CharacterSchema = new mongoose.Schema({
  name: String,
  age: { type: Number, min: 18, max: 800 },
  race: {
    type: String,
    enum: [
      'Hyur',
      "Miquo'ts",
      'Elézen',
      'Roeagdyn',
      'Lalafell',
      'Au Ra',
      'Viera',
      'Hrothgar',
    ],
  },
  gender: { type: String, enum: ['Homme', 'Femme', 'Autre'] },
  server: {
    type: String,
    enum: [
      'Cerberus',
      'Lich',
      'Louisoix',
      'Moogle',
      'Odin',
      'Omega',
      'Phoenix',
      'Ragnarok',
      'Shiva',
      'Spriggan',
      'Twintania',
      'Zodiark',
    ],
  },
  account: { type: mongoose.Schema.Types.ObjectId, ref: 'Account' },
  created: { type: Date, default: Date.now },
  updated: { type: Date, default: Date.now },
});
