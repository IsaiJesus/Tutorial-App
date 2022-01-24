import FormPresentation from './FormPresentation';

const Presentation = () => {

  return (
    <div className="grid grid-cols-1 sm:grid-cols-12 items-center pt-4 sm:pt-12">
      <div className="sm:col-span-7 sm:col-start-2 sm:col-end-8 flex flex-col justify-center p-5">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Look for tutorials for any topic.
        </h1>
        <h2 className="text-2xl md:text-3xl font-semibold mb-5">
          Or add one for other people to see.
        </h2>
        <FormPresentation/>
      </div>
      <div className="sm:col-span-4 sm:col-start-8">
        <img src="/images/homepage.png" alt="Busca tutoriales" />
      </div>
    </div>
  );
};

export default Presentation;
