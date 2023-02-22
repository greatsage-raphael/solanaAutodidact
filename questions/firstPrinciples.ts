export type Question = {
    questionText: string;
    image?: string;
    answers: string[];
    correctAnswerIndex?: number;
  };
  
  const firstPrincipleQuestions: Question[] = [
    {
      questionText: "What are first principles?",
      image:
        "https://images.unsplash.com/photo-1604580864964-0462f5d5b1a8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      answers: [
        "Foundational concepts or fundamental truths that serve as the basis for all other knowledge or understanding in a given field",
        "Principles that are developed later in the understanding of a concept",
        "A waste of time",
        "Concepts that are not relevant in modern fields",
      ],
      correctAnswerIndex: 0,
    },
    {
      questionText: "Where did the concept of first principles originate?",
      image: "https://images.unsplash.com/photo-1582034438152-77bc94ffa6ae?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGhpc3Rvcnl8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
      answers: [
        "Ancient Greece", 
        "Renaissance Italy", 
        "Industrial Revolution-era England", 
        "Ancient Egypt"
    ],
      correctAnswerIndex: 0,
    },
    {
      questionText: "What is the process of deriving knowledge from first principles?",
      image:
        "https://images.unsplash.com/photo-1574088768814-c71125083959?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjh8fGhpc3Rvcnl8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
      answers: [
        "Taking complex concepts and making them more complicated",
       "Breaking down a problem or concept into its most basic components", 
       "Ignoring assumptions and rules to focus on practical solutions", 
       "Using analogies to arrive at a solution"
    ],
      correctAnswerIndex: 1,
    },
    {
      questionText:
        "What is the benefit of using first principles thinking?",
        image:
        "https://andscape.com/wp-content/uploads/2017/01/gettyimages-5307291001.jpg?w=700",
      answers: [
        " It allows for more creative and novel solutions to problems", 
        "It limits creativity and innovation", 
        "It is time-consuming and inefficient", 
        "focus on practical solutions"
    ],
      correctAnswerIndex: 0,
    },
    
  ];
  
  export default firstPrincipleQuestions;
  