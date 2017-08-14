import mongoose, { Schema } from 'mongoose';

// Define model schema
export const userSchema = new Schema({
  oauth_id: {
    type: String,
    unique: true,
    index: true,
  },
  name: String,
  avatar: String,
  email: String,
  gender: String,
  age: {
    type: Number,
    min: 18,
    max: 65,
  },
  age_range_low: Number,
  age_range_high: Number,
  location: String,
  occupation: String,
  education: String,
  about: String,
  interested_in: String,
  liked_users: Array,
  disliked_users: Array,
  matches: Array
 });

// Export Mongoose model
const User = mongoose.model('user', userSchema);

module.exports = User;
