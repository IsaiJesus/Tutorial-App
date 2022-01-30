import UploadTutorial from 'components/UploadTutorial';
import Presentation from 'components/Presentation';
import SectionTutorials from 'components/SectionTutorials';
import Head from 'next/head';
import OrderedTutorials from 'helpers/GetOrderedTutorials';

export default function Index({tutorials}) {
  const title = "Recent videos";

  const orderedTutorials = OrderedTutorials(tutorials);

  return (
    <div>
      <Head>
        <title>Tutorial App</title>
      </Head>
      {tutorials.length === 0 ? (
        <UploadTutorial />
      ) : (
        <>
          <Presentation />
          <SectionTutorials title={title} data={orderedTutorials}/>
          <UploadTutorial />
        </>
      )}
    </div>
  );
}

export const getServerSideProps = async (ctx) => {
  const res = await fetch("/api/tutorials");
  const tutorials = await res.json();

  return {
    props: {
      tutorials,
    },
  };
};