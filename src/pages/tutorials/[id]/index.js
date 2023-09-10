import { useState } from 'react';
import { useRouter } from 'next/router';
import Error from 'next/error';
import Head from 'next/head';
import Category from 'components/Category';

const TutorialDetails = ({ tutorial, error }) => {

  //state to open modal to confirm deleteTutorial
  const [isOpen, setIsOpen] = useState(false);

  const router = useRouter();

  const handleModal = () => {
    setIsOpen(!isOpen);
  };

  //delete tutorial with _id from the props
  const deleteTutorial = async () => {
    try {
      await fetch(`https://tutorials-app.vercel.app/api/tutorials/${tutorial._id}`, {
        method: "DELETE",
      });
    } catch (error) {
      console.log(error);
    }
  };

  //delete tutorial, close modal and redirect to index
  const handleDelete = async () => {
    deleteTutorial();
    setIsOpen(!isOpen); 
    router.push("/");
  };

  if (error && error.statusCode)
    return <Error statusCode={error.statusCode} title={error.statusText} />;

  return (
    <div className="flex flex-col justify-center py-9 px-6">
      <Head>
        <title>{tutorial.title} | Tutorial App</title>
      </Head>
      <div className="flex flex-col justify-start">
        <h1 className="font-bold text-3xl my-3">{tutorial.title}</h1>
        <p className="font-semibold text-xl mb-2">{tutorial.description}</p>
        <div className="mt-4 flex items-center justify-start">
          <a
            target="_blank"
            rel="noreferrer"
            href={tutorial.url}
            className="flex items-center hover:underline"
          >
            See the tutorial
            <span className="fas fa-external-link-alt pl-2"></span>
          </a>
        </div>
        <div className="flex items-center justify-start my-4">
          <Category category={tutorial.section} />
        </div>
      </div>
      <hr />
      <div className="flex items-center justify-center p-2 mt-4">
        <button
          className="bg-blue-400 hover:bg-blue-300 rounded-md p-2 m-1"
          onClick={() => router.push(`/tutorials/${tutorial._id}/edit`)}
        >
          Edit <span className="fas fa-pen pl-1"></span>
        </button>
        <button
          className="bg-red-600 text-white hover:bg-red-500 rounded-md p-2 m-1"
          onClick={handleModal}
        >
          Delete <span className="fas fa-trash-alt pl-1"></span>
        </button>
      </div>
      <div
        className={isOpen ? "fixed z-10 inset-0 overflow-y-auto" : "hidden"}
        aria-labelledby="modal-title"
        role="dialog"
        aria-modal="true"
        onClick={handleModal}
      >
        <div className="flex items-end items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
          <div
            className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
            aria-hidden="true"
          ></div>
          <span
            className="hidden sm:inline-block align-middle sm:h-screen"
            aria-hidden="true"
          >
            &#8203;
          </span>

          <div className="inline-block bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all align-middle sm:max-w-lg sm:w-full">
            <div className="bg-white p-4">
              <div>
                <h3 className="text-lg font-semibold" id="modal-title">
                  Are you sure to delete this tutorial?
                </h3>
              </div>
            </div>
            <div className="bg-white px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse items-center">
              <button
                type="button"
                className="w-full flex justify-center rounded-md border py-2 px-4 mb-3 sm:mb-0 bg-red-600 text-white hover:bg-red-500 sm:ml-3 sm:w-auto"
                onClick={handleDelete}
              >
                Delete
              </button>
              <button
                type="button"
                className="w-full flex justify-center rounded-md border border-gray-300 px-4 py-2 bg-white text-gray-700 hover:bg-gray-50 sm:w-auto"
                onClick={handleModal}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TutorialDetails;

export async function getServerSideProps({ query: { id } }) {
  const res = await fetch(`https://tutorials-app.vercel.app/api/tutorials/${id}`);
  if (res.status === 200) {
    const tutorial = await res.json();
    return {
      props: {
        tutorial,
      },
    };
  }

  return {
    props: {
      error: {
        statusCode: res.status,
        statusText: "Invalid Id",
      },
    },
  };
}
