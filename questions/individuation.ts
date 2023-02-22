export type Question = {
    questionText: string;
    image?: string;
    answers: string[];
    correctAnswerIndex?: number;
  };
  
  const individuationQuestions: Question[] = [
    {
      questionText: "What is individuation?",
      image:
        "https://images.unsplash.com/photo-1604580864964-0462f5d5b1a8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      answers: [
        "A process of eliminating all negative aspects of the self",
        "A process of becoming a fully developed individual",
        "A process of conforming to societal norms",
        "A process of achieving perfection",
      ],
      correctAnswerIndex: 1,
    },
    {
      questionText: 'Who coined the term "individuation" ?',
      image: "https://images.unsplash.com/photo-1582034438152-77bc94ffa6ae?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGhpc3Rvcnl8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
      answers: [
        "Sigmund Freud", 
        "Abraham Maslow", 
        "B.F. Skinner", 
        "Carl Jung"
    ],
      correctAnswerIndex: 3,
    },
    {
      questionText: "What is the goal of individuation?",
      image:
        "https://images.unsplash.com/photo-1574088768814-c71125083959?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjh8fGhpc3Rvcnl8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
      answers: [
        "To create a sense of wholeness and balance",
       "To eliminate all negative aspects of the self", 
       "To become perfect", 
       "To conform to societal norms"
    ],
      correctAnswerIndex: 0,
    },
    {
      questionText:
        "At what stage of individuation does an individual begin to separate from their usual way of life and explore new experiences and ways of being?",
        image:
        "https://andscape.com/wp-content/uploads/2017/01/gettyimages-5307291001.jpg?w=700",
      answers: [
        "The Call to Adventure",  
        "Confrontation and Crisis", 
        "Separation and Exploration",
        "Integration"
      ],
      correctAnswerIndex: 2,
    },
    
  ];
  
  export default individuationQuestions;
  