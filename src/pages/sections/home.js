import Head from 'next/head';
import SectionTutorials from 'components/SectionTutorials';
import OrderedTutorials from 'helpers/GetOrderedTutorials';
import UploadTutorial from 'components/UploadTutorial';

const Home = ({tutorials}) => {

  const title = "Home";
  
  const orderedTutorials = OrderedTutorials(tutorials);

  return (
    <div>
      <Head>
        <title>Home | Tutorial App</title>
      </Head>
      {
        tutorials.filter(tutorial => tutorial.section === title).length === 0 
        ? <UploadTutorial/>
        : <SectionTutorials title={title} data={orderedTutorials}/>
      }
    </div>
  );
};

export default Home;

export const getServerSideProps = async (ctx) => {
  const res = await fetch("/api/tutorials");
  const tutorials = await res.json();

  return {
    props: {
      tutorials,
    },
  };
};