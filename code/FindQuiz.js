import console from 'console';
import quizzbuild from "./lib/util.js";

export default function ({ searchTerm }) {
  return quizzbuild.buildQuizzes(searchTerm);
}
