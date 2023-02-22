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
        "https://media.licdn.com/dms/image/C5112AQEWvUEIBuMgNw/article-cover_image-shrink_423_752/0/1537272996699?e=1682553600&v=beta&t=j3N-J216ko1JTY_9SSoDSYeh7e-KB4eit5Xu8VHf0Kw",
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
      image: "https://media.licdn.com/dms/image/C5112AQHZPj32l7vC8g/article-cover_image-shrink_423_752/0/1554144423739?e=1682553600&v=beta&t=DbmxQmS7ZUDP3b_kS6mjOcoyPk5AKCdj4DnW-_yCt2I",
      answers: [
        "It helps to identify strengths and weaknesses", 
        "It helps to better understand one's emotions and feelings", 
        " It can improve relationships with others", 
        "All of the above"
    ],
      correctAnswerIndex: 3,
    },
    {
      questionText: "Who developed the concept of self-analysis?",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/3/30/Karen_Horney_1938.jpg",
      answers: [
        "There is no one inventor of the concept of self-analysis as it has evolved over time through the contributions of many different individuals.",
       "Sigmund Freud", 
       "Karen Horny", 
       "Socrates"
    ],
      correctAnswerIndex: 0,
    },
    {
      questionText:
        "What is the key to effective self-analysis?",
        image:
        "https://images.unsplash.com/photo-1620424393934-04e772be09f4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
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
  