var console = require("console");
const { buildQuizzes } = require("./lib/util.js");

exports.function = function(searchTerm) {
  return buildQuizzes(searchTerm);
};
