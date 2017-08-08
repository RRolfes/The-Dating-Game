const mongoose = require('mongoose');
const uuid = require('uuid');

const Schema = mongoose.Schema;

mongoose.connect('mongodb://localhost/TheDatingGame');

const chatsSchema = new Schema({
  Objectid: {
    messages: { type: Array },
    user_ids: { type: Array },
    played_games: { type: Array }
  }
});
