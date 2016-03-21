var mongoose = require('mongoose');

// Create the MovieSchema.
var BookmarksSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  url: {
    type: String,
    required: true
  },
  embedded: {
    type: String,
    required: false
  }
});

// Export the model.
module.exports = mongoose.model('bookmark', BookmarksSchema);
