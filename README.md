**Marvel App** build as part of a *technical test* for *Redegal* using [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

The stack is simple:

* **Next 14** for the *BE*
* **React 18** for the *FE*
* **Node 18 (LTS)** for running the app

Above that I added 2 libraries since the requirements *only* prohibited the use of component libraries: `ts-md5`, for hashing the *API Keys* when using the *API*; and `react-query` for managing the *API* calls, it's state and it's cache.

Initially I've decided to use the `/pages/_app.tsx` structure since the app is not that big. But since the *hiring person* told me that the *feedback* would take long due to the summer dates, I decided to transform the app to the `/app/layout.tsx` structure. To check the previous one just *roll back* a commit.

Tests have been added for all the components and some of the *Helpers* and *Providers*. Since this is a *technical test*, I feel that covering the full app won't be necessary.

I should point out that the *API* is a bit slow lately. [I attach a *Reddit* thread about it here](https://www.reddit.com/r/MarvelUnlimited/comments/1eb5ey4/has_anyone_else_noticed_extremely_slow_response/).

## Getting Started

If you want to run the development server:

```bash
npm run dev
```

If you want to build (and run) the app:

```bash
npm run start
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result. Remember to add the environment variables of the *API*, which are not provided.
