import TitleSection from './TitleSection';
import Tutorial from './Tutorial';

//data from "index"
const SectionTutorials = ({ title, data }) => {

  return (
    <div className="py-8 sm:py-14 px-5">
      <div className="mb-6">
        <TitleSection title={title} />
      </div>
      {title === "Recent tutorials" ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {data.map(tutorial => (
          <Tutorial key={tutorial._id} {...tutorial}/>
        )).slice(0, 12)}
      </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {data.filter(tutorial => tutorial.section === title).map(tutorial => (
          <Tutorial key={tutorial._id} {...tutorial}/>
        ))}
      </div>
      )}
    </div>
  );
};

export default SectionTutorials;
