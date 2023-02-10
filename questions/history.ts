export type Question = {
  questionText: string;
  image?: string;
  answers: string[];
  correctAnswerIndex?: number;
};

const historyQuestions: Question[] = [
  {
    questionText: "What is history?",
    image:
      "https://images.unsplash.com/photo-1604580864964-0462f5d5b1a8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    answers: [
      "History is a set of lies agreed upon",
      "History is the record of human actions",
      "History is a waste of time",
      "Culture Itself",
    ],
    correctAnswerIndex: 1,
  },
  {
    questionText: "The function of history is to",
    image: "https://images.unsplash.com/photo-1582034438152-77bc94ffa6ae?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGhpc3Rvcnl8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    answers: [
      "make mulla !!!!", 
      "lie to the public", 
      "Fantasize about the past", 
      "Help Us Understand People and Societies"
  ],
    correctAnswerIndex: 3,
  },
  {
    questionText: "What Skills Does a Student of History Develop?",
    image:
      "https://images.unsplash.com/photo-1574088768814-c71125083959?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjh8fGhpc3Rvcnl8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    answers: [
      "The Ability to Assess Evidence",
     "The ability to lie", 
     "prescience", 
     "The ability to supress truth 🤫"
  ],
    correctAnswerIndex: 0,
  },
  {
    questionText:
      "A people without the knowledge of their past history, origin and culture is like a tree without roots. What is the name of the author of this quote?",
      image:
      "https://andscape.com/wp-content/uploads/2017/01/gettyimages-5307291001.jpg?w=700",
    answers: ["Carl Jung", "Friedrich Nietzsche", "Marcus Garvey", "fydor dostoevsky"],
    correctAnswerIndex: 2,
  },
  
];

export default historyQuestions;
