import { Metadata, Metaplex, Nft } from "@metaplex-foundation/js"
import { useConnection, useWallet } from "@solana/wallet-adapter-react"
import { useEffect, useState } from "react"
//import NftDisplay from "../components/NftDisplay"
import PageHeading from "../components/PageHeading"
import { FIRST_MINT_ADDRESS } from "../lib/constants"
import Subject from "../components/Subject";
import Section from "../components/Section";
import Link from 'next/link'
import YouTube, { YouTubeProps } from 'react-youtube';

export default function Holders() {
  const { connection } = useConnection()
  const wallet = useWallet()
  const [userNfts, setUserNfts] = useState<Nft[]>([])
  
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

  const metaplex = Metaplex
    .make(connection)

  const nfts = metaplex.nfts()

  async function getUserNfts() {
    if (!wallet.publicKey) {
      setUserNfts([])
      return
    }

    // Fetch all the user's NFTs using the findAllByOwner function, which takes the owner public key as input and returns a list of objects describing the metadata of owned NFTs
    const userNfts = await nfts
      .findAllByOwner({ owner: wallet.publicKey })

    // Filter to our collection
    const ourCollectionNfts = userNfts.filter(
      metadata =>
        metadata.collection !== null &&
        metadata.collection.verified &&
        metadata.collection.address.toBase58() === FIRST_MINT_ADDRESS.toBase58()
    )

    // Load the JSON for each NFT
    const loadedNfts = await Promise.all(ourCollectionNfts
      .map(metadata => {
        return nfts
          .load({ metadata: metadata as Metadata })
      })
    )

    console.log("Got their NFTs!", loadedNfts)
    setUserNfts(loadedNfts as Nft[])
  }

  useEffect(() => {
    getUserNfts()
  }, [wallet.publicKey])

  if (userNfts.length === 0) {
    return (
      <PageHeading>First Principle Nft required ☠️</PageHeading>
    )
  }

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
      1. The Call to Adventure: This stage represents the beginning of the individuation process, where an individual experiences a sense of discontent or restlessness with their current situation. This may manifest as a feeling of being stuck, or a sense of unease, or a yearning for something more. This call to adventure may be triggered by external events such as a major life change or internal experiences like dreams, insights, or intuitions.
      </Section>

      <Section>
      2. Separation and Exploration: In this stage, an individual begins to separate from their usual way of life and explore new experiences and ways of being. They may seek out new relationships, try new hobbies or activities, or explore their values and beliefs. This stage is all about discovering what feels authentic and true to oneself, and can be both exciting and challenging.
      </Section>

      <Section>
      3. Confrontation and Crisis: As the individual delves deeper into the individuation process, they may encounter obstacles and challenges that force them to confront their fears and limitations. This could be a personal crisis, such as a significant loss or setback, or an internal struggle, such as confronting one's own fears, doubts, or limiting beliefs. The confrontation and crisis stage is often the most painful and challenging part of the individuation process, but it is also a critical opportunity for growth and transformation.
      </Section>

      <Section>
      4. Integration: In this stage, the individual begins to integrate all aspects of themselves, including their shadow self. This involves accepting and integrating both positive and negative qualities, as well as unconscious material that has been hidden from conscious awareness. The goal of this stage is to achieve a sense of wholeness and balance, where all parts of the self are acknowledged and integrated.
      </Section>
      
      <Section>
        5. Self-Realization: The final stage of individuation involves a sense of wholeness and self-realization. The individual who has completed this process has a deep understanding of themselves and their place in the world. They have a sense of purpose and direction, and they are able to live authentically and fully in the present moment. This stage represents the culmination of the individuation process and is marked by a deep sense of inner peace and fulfillment.
      </Section>

      <Section>
      Jung believed that the process of individuation is facilitated by various tools and practices, including therapy, dream analysis, meditation, and creative expression. These practices can help individuals develop a deeper understanding of themselves and their inner world, as well as help them access the unconscious material that is essential to the process of individuation. <br />
      It's important to note that the stages of the individuation process are not linear or fixed, and individuals may move back and forth between stages depending on their life circumstances and personal growth. Additionally, individuation is a lifelong process that continues throughout an individual's life, and there is always room for further growth and development. <br />
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
  )
}