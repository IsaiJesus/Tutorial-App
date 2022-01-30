import Head from 'next/head';
import SectionTutorials from 'components/SectionTutorials';
import OrderedTutorials from 'helpers/GetOrderedTutorials';
import UploadTutorial from 'components/UploadTutorial';

const Enterteinment = ({tutorials}) => {

  const title = "Entertainment";

  const orderedTutorials = OrderedTutorials(tutorials);

  return (
    <div>
      <Head>
        <title>Entertainment | Tutorial App</title>
      </Head>
      {
        tutorials.filter(tutorial => tutorial.section === title).length === 0 
        ? <UploadTutorial/>
        : <SectionTutorials title={title} data={orderedTutorials}/>
      }
    </div>
  );
};

export default Enterteinment;

export const getServerSideProps = async (ctx) => {
  const res = await fetch("https://suspicious-volhard-e36ba7.netlify.app/api/tutorials");
  const tutorials = await res.json();

  return {
    props: {
      tutorials,
    },
  };
};