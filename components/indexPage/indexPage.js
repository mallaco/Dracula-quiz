import Head from 'next/head';
import db from '../../db.json';

function IndexPage() {
  return (
    <div>
      <Head>
        <title>Dracula Quiz</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta property="https://cdn.pling.com/img/a/3/6/f/a15f67c3e59725b23be2f282695ba5417a5d.png" />
        <link rel="icon" href={db.imageIcon} type="image/gif" sizes="16x16" />
      </Head>
    </div>
  );
}

export default IndexPage;
