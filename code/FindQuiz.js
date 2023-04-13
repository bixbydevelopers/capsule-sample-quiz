import console from 'console';
import { buildQuizzes } from "./lib/util.js";

export default function ({ searchTerm }) {
  return buildQuizzes(searchTerm);
}
