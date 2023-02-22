import Subject from "../components/Subject";
import Section from "../components/Section";
import Link from 'next/link'
import YouTube, { YouTubeProps } from 'react-youtube';

export default function Individuation() {
    const onPlayerReady: YouTubeProps['onReady'] = (event) => {
        // access to player in all event handlers via event.target
        event.target.pauseVideo();
      }
    
      const opts: YouTubeProps['opts'] = {
        height: '390',
        width: '600',
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 1,
        },
      };
  return (
    <>
    <main className="flex flex-col gap-8 text-white">
      <Subject>Self Analysis: Performing Therapy on Oneself 
      </Subject>
      <Section>
      Self-analysis is a process of introspection that involves reflecting on one's thoughts, feelings, beliefs, and behaviors in order to gain a deeper understanding of oneself. It is a critical tool for personal growth, and is often used in therapy and other forms of self-improvement.
      </Section>
      
      <Section>
      Self-analysis involves a number of different steps, including identifying one's own values and beliefs, recognizing patterns in behavior and thinking, and reflecting on past experiences and relationships. It is a methodical process that requires a great deal of self-awareness and honesty, as well as the ability to objectively evaluate one's own actions and motivations.
      </Section>

      <Section>
      One of the key benefits of self-analysis is that it can help individuals to identify their own strengths and weaknesses. By examining their own behavior and thinking patterns, individuals can identify areas where they excel, as well as areas where they may need to improve. This can be a powerful tool for personal growth, as it allows individuals to build on their strengths and work on developing their weaknesses.
      </Section>

      <Section>
      Another benefit of self-analysis is that it can help individuals to better understand their own emotions and feelings. By reflecting on past experiences and relationships, individuals can gain a greater understanding of their own emotional responses to different situations, as well as the ways in which their thoughts and feelings are interconnected. This can be especially useful for individuals who struggle with anxiety or depression, as it can help them to identify the underlying causes of their emotional distress and develop strategies for managing these feelings.
      </Section>

      <Section>
      Self-analysis can also be an effective tool for improving relationships with others. By reflecting on past interactions with friends, family members, and colleagues, individuals can gain a better understanding of their own communication style, as well as the ways in which their own behaviors and attitudes may be impacting these relationships. This can help individuals to communicate more effectively, as well as to develop more positive and fulfilling relationships with others.
      </Section>

      <Section>
      There are many different approaches to self-analysis, including journaling, meditation, and therapy. Regardless of the specific method used, however, the key to effective self-analysis is to approach the process with an open and honest mindset, and to be willing to engage in a critical evaluation of one's own behavior and thought patterns.
      </Section>

      <Section>
      Self-analysis has been a concept that has been around for centuries and has been explored by many great thinkers, including Socrates, Aristotle, and Freud, among others. In contemporary times, self-analysis has been widely studied and utilized by therapists, psychologists, and other professionals in the field of mental health. 
      </Section>

      <Section>
      In conclusion, self-analysis is a powerful tool for personal growth and self-improvement. By reflecting on one's own thoughts, feelings, beliefs, and behaviors, individuals can gain a greater understanding of themselves, as well as the ways in which they interact with the world around them. Whether used for personal growth, improving relationships with others, or managing emotional distress, self-analysis is an essential skill for anyone looking to live a more fulfilling and satisfying life.
      </Section>
    </main> <br />

    <YouTube videoId="BHsJGkGP77I" opts={opts} onReady={onPlayerReady} /> <br />

    

    <Link href="/selfAnalysisQuiz">
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