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
        "https://uploads-ssl.webflow.com/5d86607a4a65571952512f06/5e70be54bf49c374de1fa946_first-principles.jpg",
      answers: [
        "Principles that are developed later in the understanding of a concept",
        "Foundational concepts or fundamental truths that serve as the basis for all other knowledge or understanding in a given field",
        "A waste of time",
        "Concepts that are not relevant in modern fields",
      ],
      correctAnswerIndex: 1,
    },
    {
      questionText: "Where did the concept of first principles originate?",
      image: "https://www.ancienthistorylists.com/wp-content/uploads/2017/10/The-Rise-of-the-Greek-Tyrants.jpg",
      answers: [ 
        "Renaissance Italy", 
        "Industrial Revolution-era England", 
        "Ancient Egypt",
        "Ancient Greece"
    ],
      correctAnswerIndex: 3,
    },
    {
      questionText: "What is the process of deriving knowledge from first principles?",
      image:
        "https://uploads-ssl.webflow.com/5d86607a4a65571952512f06/5e70be54bf49c374de1fa946_first-principles.jpg",
      answers: [
        "Breaking down a problem or concept into its most basic components", 
        "Taking complex concepts and making them more complicated",
       "Ignoring assumptions and rules to focus on practical solutions", 
       "Using analogies to arrive at a solution"
    ],
      correctAnswerIndex: 0,
    },
    {
      questionText:
        "What is the benefit of using first principles thinking?",
        image: "https://uploads-ssl.webflow.com/5d86607a4a65571952512f06/5e70be54bf49c374de1fa946_first-principles.jpg",
      answers: [ 
        "It limits creativity and innovation", 
        "It is time-consuming and inefficient", 
        "It allows for more creative and novel solutions to problems",
        "focus on practical solutions"
    ],
      correctAnswerIndex: 2,
    },
    
  ];
  
  export default firstPrincipleQuestions;
  