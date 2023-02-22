import HistoryGame from "../components/historyGame";
import historyQuestions from "../questions/firstPrinciples";

export default function HistoryQuiz() {
  // Delete the correct answer fields before rendering!
  historyQuestions.forEach((q) => delete q.correctAnswerIndex);

  return <HistoryGame questions={historyQuestions} />;
}