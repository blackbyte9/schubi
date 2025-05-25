# schubi

## Prerequisite

* Node.js 18.18 or later <https://nodejs.org/>
* pnpm has to be installed <https://pnpm.io/installation>

## Getting Started

* First copy the .env file from the default_.env:

```bash
cp default_.env .env
```

And have a look at the file to adapt it to your local setup

* Install all dependencies

```bash
npm i
```

Attention! This will not work on remote drives, as it tries to create symlinks which will fail.
For the approve-builds use the 'a' option to initialize all packages

* Before starting, prisma has to initialize:

```bash
npx prisma db push
npm run seed
```

The run seed will take some time, as it retrieves book data from the publisher site.

* Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
To see some life data from the books database go to [http://localhost:3000/books](http://localhost:3000/books)

## Used tutorials

<https://www.youtube.com/watch?v=z2A9P1Zg1WM>
<https://www.robinwieruch.de/next-prisma-sqlite/>
