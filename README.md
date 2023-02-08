# Autodidact

[Autodidact](https://solana-autodidact.vercel.app/) is an educational app that rewards its learners with nfts and other prizes from assignments, tests and streaks. The app would avail disciplines that have been so far ignored in our current educational system e.g ethics, philosophy, anthropology, computer science . It would also present current disciplines in an easy to understand manner using quizzes.


### Components

- Next.js
- Solana CLI
- Metaplex (Sugar CLI)
- OpenAI API (REST endpoint)
- API Routes (Edge runtime)
-

## How to Use

#### Set up environment variables

Rename [`.env.example`](.env.example) to `.env.local`:

```bash
cp .env.example .env.local
```

then, update `OPENAI_API_KEY` with your [OpenAI](https://beta.openai.com/account/api-keys) secret key.

Next, run Next.js in development mode:

```bash
npm install
npm run dev

# or

yarn
yarn dev
```

The app should be up and running at http://localhost:3000.

Deploy it to the cloud with [Vercel](https://vercel.com/new?utm_source=github&utm_medium=readme&utm_campaign=edge-middleware-eap) ([Documentation](https://nextjs.org/docs/deployment)).
