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
        "https://jungcurrents.com/wp-content/uploads/2021/12/jungcurrents-jung-quote-wholeness-121021-1000x500.jpg",
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
      image: "https://www.google.com/url?sa=i&url=http%3A%2F%2Ft3.gstatic.com%2Flicensed-image%3Fq%3Dtbn%3AANd9GcTsroDYfVtmiqwlgiEIinpOdtiLu8diDNmMJ81erl0pxGa_71naICfTCw5MYadk7Ii_0nupGTaeeX_npy4&psig=AOvVaw2fnilVO0mar_cH1fg0rflG&ust=1677142751223000&source=images&cd=vfe&ved=0CA8QjRxqFwoTCKjejOHhqP0CFQAAAAAdAAAAABAE",
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
        "https://www.azquotes.com/picture-quotes/quote-the-attainment-of-wholeness-requires-one-to-stake-one-s-whole-being-nothing-less-will-carl-jung-58-94-92.jpg",
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
        "https://jungcurrents.com/wp-content/uploads/2021/12/jungcurrents-jung-quote-wholeness-duccio-121021-1000x500.jpg",
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
  