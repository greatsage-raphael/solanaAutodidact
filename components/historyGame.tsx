import Link from "next/link";
import { useState } from "react";
import {Question} from "../questions/history";
import QuizQuestion from "./quizQuestion";
import { useRouter } from "next/router";

export type QuestionWithoutAnswer = Omit<Question, "correctAnswerIndex">;

type Props = {
  questions: QuestionWithoutAnswer[];
};

export default function QuizGame({ questions }: Props) {
  const [questionIndex, setQuestionIndex] = useState(0);
  const [quizComplete, setQuizComplete] = useState(false);
  const router = useRouter();

  const nextQuestion = () => {
    if (questionIndex + 1 < questions.length) {
      setQuestionIndex(questionIndex + 1);
    } else {
      setQuizComplete(true);
    }
  };

  if (quizComplete) {
    router.push('/prize')
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
