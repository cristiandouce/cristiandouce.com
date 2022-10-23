import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Cristian Douce</title>
        <meta
          name="description"
          content="Cristian Douce - Full-stack engineer from Buenos Aires, Argentina"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>Cristian Douce</h1>
      <p>Welcome to my personal site.</p>
      <p>Yes... I&lsquo;m still working on a good presentation...</p>
      <p>Thanks for stopping by though!</p>
      <p>Meanwhile you can follow me and my work:</p>
      <ul>
        <li>
          <a
            href="http://github.com/cristiandouce"
            target="_blank"
            rel="noreferrer"
          >
            github
          </a>
        </li>
        <li>
          <a
            href="http://twitter.com/cristiandouce"
            target="_blank"
            rel="noreferrer"
          >
            Twitter
          </a>
        </li>
        <li>
          <a
            href="http://ar.linkedin.com/in/cristiandouce"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
        </li>
      </ul>
    </>
  );
}
