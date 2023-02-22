export type Question = {
    questionText: string;
    image?: string;
    answers: string[];
    correctAnswerIndex?: number;
  };
  
  const selfAnalysisQuestions: Question[] = [
    {
      questionText: "What is self-analysis?",
      image:
        "https://images.unsplash.com/photo-1604580864964-0462f5d5b1a8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      answers: [
        "A process of looking at other people's behavior",
        "A process of introspection that involves reflecting on one's thoughts, feelings, beliefs, and behaviors in order to gain a deeper understanding of oneself",
        "A process of conforming to societal norms",
        "A process of self-criticism and self-blame",
      ],
      correctAnswerIndex: 1,
    },
    {
      questionText: 'What are some benefits of self-analysis?',
      image: "https://images.unsplash.com/photo-1582034438152-77bc94ffa6ae?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGhpc3Rvcnl8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
      answers: [
        "It helps to identify strengths and weaknesses", 
        "It helps to better understand one's emotions and feelings", 
        " It can improve relationships with others", 
        "All of the above"
    ],
      correctAnswerIndex: 3,
    },
    {
      questionText: "",
      image:
        "https://images.unsplash.com/photo-1574088768814-c71125083959?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjh8fGhpc3Rvcnl8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
      answers: [
        "There is no one inventor of the concept of self-analysis as it has evolved over time through the contributions of many different individuals.",
       "Sigmund Freud", 
       "Aristotle", 
       "Socrates"
    ],
      correctAnswerIndex: 0,
    },
    {
      questionText:
        "What is the key to effective self-analysis?",
        image:
        "https://andscape.com/wp-content/uploads/2017/01/gettyimages-5307291001.jpg?w=700",
      answers: [
        "Approaching the process with an open and honest mindset",  
        "Being willing to engage in a critical evaluation of one's own behavior and thought patterns", 
        "Both a and b",
        "Blaming others"
      ],
      correctAnswerIndex: 2,
    },
    
  ];
  
  export default selfAnalysisQuestions;
  