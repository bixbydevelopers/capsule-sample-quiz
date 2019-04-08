//Change quiz state to aborted
exports.function = function(state) {
  state.aborted = true
  return state
}