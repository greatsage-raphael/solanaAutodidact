import { Nft, Metaplex } from "@metaplex-foundation/js";
import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import { useEffect, useState } from "react";
import NftDisplay from "../components/NftDisplay";
import PageHeading from "../components/PageHeading";

// The address of the collection's mint contract
const COLLECTION_MINT_ADDRESS = "...";

export default function Holders() {
  const { connection } = useConnection();
  const wallet = useWallet();
  const [userNfts, setUserNfts] = useState<Nft[]>([]);

  // Instantiate the Metaplex instance
  const metaplex = Metaplex.make(connection);

  // Get all NFTs from the Metaplex instance
  const nfts = metaplex.nfts();

  async function getUserNfts() {
    if (!wallet.publicKey) {
      setUserNfts([]);
      return;
    }

    // Fetch all the user's NFTs using the findAllByOwner function
    const userNfts = await nfts.findAllByOwner({
      owner: wallet.publicKey,
    }) as Nft[];

    // Filter to our collection
    const ourCollectionNfts = userNfts.filter(
      (metadata) =>
        metadata.collection !== null &&
        metadata.collection.verified &&
        metadata.collection.address.toBase58() === COLLECTION_MINT_ADDRESS
    );

    // Load the JSON for each NFT
    const loadedNfts = await Promise.all(
      ourCollectionNfts.map((metadata) => {
        return nfts.load({ metadata });
      })
    ) as Nft[];

    console.log("Got their NFTs!", loadedNfts);
    setUserNfts(loadedNfts);
  }

  useEffect(() => {
    getUserNfts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [wallet.publicKey]);

  if (userNfts.length === 0) {
    return <PageHeading>Holders only! ☠️</PageHeading>;
  }

  return (
    <main className="flex flex-col gap-8">
      <PageHeading>Hello Autodidact!</PageHeading>
      <p className="text-lg text-white">Boon 🏆</p>
      <div className="grid grid-cols-2 gap-4">
        {userNfts.map((userNft, i) => (
          <NftDisplay key={i} json={userNft.json} />
        ))}
      </div>
    </main>
  )
}