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
      <Subject>Individuation: How to become who you really are 
      </Subject>
      <Section>
      Individuation is a term coined by the Swiss psychiatrist and psychologist Carl Jung, and it refers to the process of becoming a fully developed individual, a process that is unique to each person. Jung believed that individuation is a natural and necessary process that occurs throughout an individual's life and is an essential part of their psychological and spiritual growth. It can be summed up as coming to selfhood. Note: Adulthood and Selfhood are not the same thing
      </Section>
      
      <Section>
      At its core, individuation is about finding and becoming one's true self, which requires a deep understanding of one's unique identity, strengths, weaknesses, and values. This process involves exploring one's inner world, including one's thoughts, emotions, and experiences, and integrating all aspects of oneself, including the unconscious mind.
      </Section>

      <Section>
      Jung believed that the goal of individuation is not to eliminate all negative aspects of the self or to become perfect but rather to create a sense of wholeness and balance. This means that an individual needs to accept and integrate both their positive and negative qualities, as well as their shadow self, which represents those parts of the self that are hidden from conscious awareness and may be considered undesirable or unacceptable.
      </Section>

      <Section>
      The process of individuation typically begins in childhood and continues throughout one's life. Jung believed that individuation involves several stages, each of which involves different challenges and opportunities for growth. These stages include:
      </Section>

      <Section>
      1. The Call to Adventure: The first stage of individuation involves a sense of dissatisfaction or restlessness with one's current situation. This may manifest as a desire for change, a feeling of being stuck, or a sense of unease.
      </Section>

      <Section>
      2. Separation and Exploration: In this stage, an individual begins to explore different aspects of themselves, including their values, beliefs, and interests. They may seek out new experiences and relationships that help them develop a greater sense of self.
      </Section>

      <Section>
      3. Confrontation and Crisis: As an individual delves deeper into the process of individuation, they may encounter difficult challenges that force them to confront their fears and limitations. This can be a painful and challenging stage, but it is also an opportunity for growth and transformation.
      </Section>

      <Section>
      4. Integration: In this stage, an individual begins to integrate all aspects of themselves, including their shadow self. This involves accepting and integrating both positive and negative qualities, as well as unconscious material that has been hidden from conscious awareness.
      </Section>
      
      <Section>
        5. Self-Realization: The final stage of individuation involves a sense of wholeness and self-realization. An individual who has completed this process has a deep understanding of themselves and their place in the world. They have a sense of purpose and direction, and they are able to live authentically and fully in the present moment.
      </Section>

      <Section>
      Jung believed that the process of individuation is facilitated by various tools and practices, including therapy, dream analysis, meditation, and creative expression. These practices can help individuals develop a deeper understanding of themselves and their inner world, as well as help them access the unconscious material that is essential to the process of individuation.

In conclusion, individuation is a complex and multifaceted process that involves a deep exploration and integration of all aspects of oneself. It is a lifelong process that requires courage, self-awareness, and a willingness to confront the challenges and obstacles that arise along the way. However, by engaging in this process, individuals can develop a deep sense of self and purpose, and live a more authentic and fulfilling life.
      </Section>
    </main> <br />

    <YouTube videoId="Vx_60kIXLIU" opts={opts} onReady={onPlayerReady} /> <br />

    

    <Link href="/individuationQuiz">
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