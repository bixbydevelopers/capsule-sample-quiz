//The last score is already explained when we get here (on the action's confirmation view), just mark the last score as explained.
exports.function = function(state) {
  state.lastScore.explained = true
  return state
}