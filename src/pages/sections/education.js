import Head from 'next/head';
import SectionTutorials from 'components/SectionTutorials';
import OrderedTutorials from 'helpers/GetOrderedTutorials';
import UploadTutorial from 'components/UploadTutorial';

const Education = ({tutorials}) => {

  const title = "Education";

  const orderedTutorials = OrderedTutorials(tutorials);

  return (
    <div>
      <Head>
        <title>Education | Tutorial App</title>
      </Head>
      {
        tutorials.filter(tutorial => tutorial.section === title).length === 0 
        ? <UploadTutorial/>
        : <SectionTutorials title={title} data={orderedTutorials}/>
      }
    </div>
  );
};

export default Education;

export const getServerSideProps = async (ctx) => {
  const res = await fetch("/api/tutorials");
  const tutorials = await res.json();

  return {
    props: {
      tutorials,
    },
  };
};