import HistoryGame from "../components/quizGame";
import historyQuestions from "../questions/selfAnalysis";

export default function HistoryQuiz() {
  // Delete the correct answer fields before rendering!
  historyQuestions.forEach((q) => delete q.correctAnswerIndex);

  return <HistoryGame questions={historyQuestions} />;
}