import { useRouter } from 'next/router';
import Category from './Category';

//data from "SectionTutorials" component 
const Tutorial = ({ _id, title, description, url, section }) => {

  const router = useRouter();

  return (
    <div className="col p-4">
      <div className="shadow-md rounded p-3">
        <a
          target="_blank"
          rel="noreferrer"
          href={url}
          className="hover:underline"
        >
          <h3 className="font-semibold text-lg pb-1 truncate">{title}</h3>
          <p className="truncate pb-1">{description}</p>
        </a>
        <div className="flex items-center justify-start">
          <Category category={section} />
        </div>
        <div className="flex items-center justify-end">
          <button onClick={() => router.push(`/tutorials/${_id}`)}
            className="bg-blue-600 hover:bg-blue-700 text-white rounded-md py-1 px-3 m-1"
          >
            More <span className="fas fa-angle-double-right pl-1"></span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Tutorial;
