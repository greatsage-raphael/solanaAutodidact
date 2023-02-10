import Link from "next/link";
import { useState } from "react";
import {Question} from "../questions/history";
import QuizQuestion from "./quizQuestion";

export type QuestionWithoutAnswer = Omit<Question, "correctAnswerIndex">;

type Props = {
  questions: QuestionWithoutAnswer[];
};

export default function QuizGame({ questions }: Props) {
  const [questionIndex, setQuestionIndex] = useState(0);
  const [quizComplete, setQuizComplete] = useState(false);

  const nextQuestion = () => {
    if (questionIndex + 1 < questions.length) {
      setQuestionIndex(questionIndex + 1);
    } else {
      setQuizComplete(true);
    }
  };

  if (quizComplete) {
    return <div className="">
      <Link href="/prize">
      <button
          type="button"
          className="inline-flex items-center 	text-align: center px-4 py-2 text-sm font-medium text-indigo-700 bg-indigo-100 border border-transparent rounded-md cursor-pointer hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Horray !! 
        </button> 
        </Link>
    </div>;
  }

  const question = questions[questionIndex];

  return (
    <QuizQuestion
      key={questionIndex}
      questionIndex={questionIndex}
      questionText={question.questionText}
      image={question.image}
      answers={question.answers}
      nextQuestionFunction={nextQuestion}
    />
  );
}
