import HistoryGame from "../components/historyGame";
import historyQuestions from "../questions/history";

export function getStaticProps() {
  return {
    props: {
      title: "The Sphinx ",
    },
  };
}

export default function HistoryQuiz() {
  // Delete the correct answer fields before rendering!
  historyQuestions.forEach((q) => delete q.correctAnswerIndex);

  return <HistoryGame questions={historyQuestions} />;
}