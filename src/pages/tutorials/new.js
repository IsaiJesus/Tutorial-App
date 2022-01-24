import Head from 'next/head';
import {useRouter} from 'next/router';
import FormTutorial from '../../components/FormTutorial';

export default function FormTutorialPage() {

  //query is to bring the data for each tutorial
  const {query, back} = useRouter();

  return (
    <div className="grid grid-cols-1 md:grid-cols-12 items-center pt-4">
      <Head>
        <title>{query.id ? 'Update tutorial' : 'New tutorial'} | Tutorial App</title>
      </Head>
      <div className="md:col-span-5 md:col-start-2 flex flex-col items-center justify-center p-5">
        <h2 className="text-3xl font-bold pb-4">
          {query.id ? "Update the tutorial" : "¿Do you have an intersting tutorial?"}
        </h2>
        <p className="text-2xl font-semibold pb-2">
          {query.id ? "Update it, for other people to see." : "Upload it, for other people to see."}
        </p>
        <img src="/images/form.png" alt="Formulario" width="420"/>
      </div>
      <div className="md:col-span-5 px-5 w-full">
        <FormTutorial query={query} back={back}/>
      </div>
    </div>
  );
}
