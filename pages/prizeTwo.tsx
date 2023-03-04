import { CandyMachineV2, Metaplex, NftWithToken, walletAdapterIdentity } from "@metaplex-foundation/js";
import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import { useEffect, useState } from "react";
import NftDisplay from "../components/NftDisplay";
import PageHeading from "../components/PageHeading";
import { FIRST_PRINCIPLE_ADDRESS } from "../lib/constants";

export default function Prize() {
  //React hook to get the Solana connection
  const { connection } = useConnection();
  //useWallet hook gives us the state of the connected wallet
  const wallet = useWallet();
   ////React state to store the candy machine once we fetch it. It starts undefined.
  const [candyMachine, setCandyMachine] = useState<CandyMachineV2 | undefined>(undefined)
  const [isMinting, setIsMinting] = useState(false)
  const [mintedNft, setMintedNft] = useState<NftWithToken | undefined>(undefined)


  //entry point to Metaplex on the client. We’re just creating a new instance and passing it the Solana connection. 
  const metaplex = Metaplex
    .make(connection)
    .use(walletAdapterIdentity(wallet)) // the connected wallet from wallet-adapter is used as the identity.


//connecting to the candy machine and saving that to a variable.
  const candyMachines = metaplex.candyMachinesV2()


  //using the findByAddress module of the candy machines module to fetch our candy machine. We pass our address in as input.
  async function fetchCandyMachine() {
    const fetched = await candyMachines
      .findByAddress({ address: FIRST_PRINCIPLE_ADDRESS })

    console.log("Fetched candy machine!", fetched)
    setCandyMachine(fetched)
  }

  // to fetch the candy machine when the page loads.
  useEffect(() => {
    fetchCandyMachine()
  }, [])



  // To mint a new NFT. We’re using the mint method of the candy machine module and pass the candyMachine that we fetched earlier.
  async function mintOne() {
    setIsMinting(true);

    if (!candyMachine) {
      console.error("Candy machine is not defined!");
      setIsMinting(false);
      return;
    }

    const mintOutput = await candyMachines
      .mint({ candyMachine });

    setIsMinting(false);
    console.log("Minted one!", mintOutput)
    setMintedNft(mintOutput.nft)

    // Fetch the candy machine to update the counts
    await fetchCandyMachine()
  }

  const canMint =
    candyMachine &&
    candyMachine.itemsRemaining.toNumber() > 0 &&
    wallet.publicKey &&
    !isMinting

  return (
    <main className="flex flex-col gap-8">
      <PageHeading>Congratulations 🎉</PageHeading>

      <div className="basis-1/4">
        <button
          type="button"
          className="inline-flex items-center px-4 py-2 text-sm font-medium text-indigo-700 bg-indigo-100 border border-transparent rounded-md cursor-pointer hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
          disabled={!canMint}
          onClick={mintOne}
        >
          Mint 1 {candyMachine ? candyMachine.symbol : "NFT"}! <span className={isMinting ? 'animate-spin' : 'animate-none'}>⏳</span>
        </button>
      </div>

      {candyMachine ? (
        <p className="text-white">
          {candyMachine.itemsMinted.toNumber()} / {candyMachine.itemsAvailable.toNumber()} minted!
        </p>
      ) : <p className="text-white">Loading...</p>
      }

      {mintedNft && candyMachine ?
        <div className="w-96">
          <h2 className="text-xl font-medium text-white">You minted a {candyMachine.symbol}! 🎉</h2>
          <NftDisplay json={mintedNft.json} />
        </div> : null
      }

      <hr />
    </main>
  )
}