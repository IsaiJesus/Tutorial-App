import { useRouter } from 'next/router';

export default function UploadTutorial() {

  //this component redirect to a form to upload a new tutorial
  const router = useRouter();

  return (
    <div className="flex items-center justify-center py-9 px-6">
      <div className="flex flex-col items-center justify-center text-center">
        <h2 className="text-3xl md:text-4xl font-bold pb-4">
          ¿Do you have an intersting tutorial?
        </h2>
        <p className="text-2xl md:text-3xl font-semibold pb-2">
          Upload it, for other people to see.
        </p>
        <img src="/images/upload.png" alt="Formulario" width="420" />
        <button
          className="bg-blue-600 text-white rounded font-semibold flex items-center p-3 mt-5 mb-10 hover:bg-blue-700 focus:ring"
          onClick={() => router.push("/tutorials/new")}
        >
          Upload tutorial
          <span className="fas fa-plus-circle pl-3 text-xl"></span>
        </button>
      </div>
    </div>
  );
}
