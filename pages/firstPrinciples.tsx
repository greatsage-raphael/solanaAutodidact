import Subject from "../components/Subject";
//import Symbol from "../components/Symbol";
//import Link from 'next/link'
import Section from "../components/Section";
import Link from 'next/link'
import YouTube, { YouTubeProps } from 'react-youtube';

export default function FirstPrinciples() {
    const onPlayerReady: YouTubeProps['onReady'] = (event) => {
        // access to player in all event handlers via event.target
        event.target.pauseVideo();
      }
    
      const opts: YouTubeProps['opts'] = {
        height: '390',
        width: '640',
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 1,
        },
      };
  return (
    <>
    <main className="flex flex-col gap-8 text-white">
      <Subject>First principles: The Most Powerful Way to Think</Subject>
      <Section>
      First principles are the foundational concepts or fundamental truths that serve as the basis for all other knowledge or understanding in a given field. They are the building blocks of knowledge, and are often used to derive or explain more complex concepts.
      </Section>
      
      <Section>
      The concept of first principles can be traced back to ancient Greek philosophy, where it was known as "arche." Aristotle, one of the most famous ancient Greek philosophers, believed that knowledge and understanding could be derived from first principles.
      </Section>

      <Section>
      In modern times, the concept of first principles is often used in fields such as science, mathematics, and engineering. In these fields, first principles are often used to derive more complex concepts or to explain the behavior of a system.
      </Section>

      <Section>
      The process of deriving knowledge from first principles involves breaking down a problem or concept into its most basic components. This involves identifying the underlying assumptions, principles, and rules that govern the behavior of the system or concept in question.
      </Section>

      <Section>
      For example, in written language, the first principle is the letter. The letter is the most basic unit of language, and it serves as the building block for all other language concepts. By combining different letters, we can create words, which are the next level of complexity in language. <br />

Words are made up of multiple letters, and they serve as the basic unit of meaning in language. By combining words, we can create sentences, which are the next level of complexity in language.

Sentences are made up of multiple words, and they serve as the basic unit of expression in language. By combining sentences, we can create paragraphs, which are the next level of complexity in language.

Paragraphs are made up of multiple sentences, and they serve as the basic unit of organization in language. By combining paragraphs, we can create entire books, which are the ultimate expression of language.<br />

By understanding the first principles of language, we can break down complex language concepts into their most basic components, and build our understanding of language from the ground up. This allows us to better understand the structure and organization of language, and to create more effective and persuasive language in our writing and communication.
      </Section>

      <Section>
      Similarly, in building a house the first principle is the foundation. The foundation is the most basic element of a house, and it serves as the starting point for all other construction.

On top of the foundation, we build the framing, which is the next level of complexity in building a house. Framing provides the basic structure of the house and includes walls, floors, and roof.

Next, we add the roofing, siding, and windows, which are the next level of complexity. These elements provide protection from the elements and create the aesthetic appearance of the house.

After that, we add the plumbing and electrical systems, which are the next level of complexity. These systems provide essential functions like heating, cooling, and water supply, and ensure the house is safe and functional.

Finally, we add the finishing touches, like paint, flooring, and fixtures. These elements complete the construction and make the house livable.
      </Section>


      <Section>
      First principles thinking is a powerful tool for problem-solving and innovation, as it allows one to break down complex problems into their most basic components and build solutions from the ground up. By using first principles, one can often arrive at more novel and creative solutions than by relying solely on previous solutions or established ways of thinking.
      </Section>
      <Section>
      In summary, first principles are the foundational concepts or fundamental truths that serve as the basis for all other knowledge or understanding in a given field. They are used to derive or explain more complex concepts, and are a powerful tool for problem-solving and innovation.
      </Section>
    </main> <br />

    <YouTube videoId="HZRDUZuIKg4" opts={opts} onReady={onPlayerReady} /> <br />

    

    <Link href="/firstPrincipleQuiz">
      <button
          type="button"
          className="inline-flex items-center 	text-align: center px-4 py-2 text-sm font-medium text-indigo-700 bg-indigo-100 border border-transparent rounded-md cursor-pointer hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Start Evaluation 
        </button> 
        </Link>
    	</>
      
  );
}