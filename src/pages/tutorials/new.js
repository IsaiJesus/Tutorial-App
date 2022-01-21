import { useEffect, useState } from 'react';
import Head from 'next/head';
import {useRouter} from 'next/router';

export default function FormUploadTutorial() {

  //read the state from the changed inputs
  //for default the inputs are empty and the select  value is Education
  const [newTutorial, setNewTutorial] = useState({
    title: "",
    description: "",
    url: "",
    section: "Education",
  });

  //query is to bring the data for each tutorial
  const {query, back} = useRouter(); 

  //save the changes from the inputs in the new state
  const handleChange = (e) =>
    setNewTutorial({ ...newTutorial, [e.target.name]: e.target.value });

  //get data from the every single tutorial
  const getTutorial = async () => {
    const res = await fetch("http://localhost:3000/api/tutorials/" + query.id);
    const data = await res.json();
    setNewTutorial({ title: data.title, description: data.description, url: data.url, section: data.section });
  }

  useEffect(() => {
    if (query.id) getTutorial();
  }, []);

  //initial state for the errors from the validation
  //if the validation has errors, the new state will have the errors
  const [errors, setErrors] = useState({
    title: "",
    description: "",
    url: "",
  });

  //validate if the inputs are full
  const validate = () => {
    const errors = {};

    if (!newTutorial.title) errors.title = "Title is required";
    if (!newTutorial.description)
      errors.description = "Description is required";
    if (!newTutorial.url) errors.url = "URL is required";

    return errors;
  };

  //send the data from the inputs to the database
  const handleSubmit = async (e) => {
    e.preventDefault();
    let errors = validate();

    //Check if the validate has errors
    if (Object.keys(errors).length) return setErrors(errors);

    if (query.id) {
      await updateTutorial();
    } else {
      await createTutorial();
    }
    await back();
  };

  //create the tutorial to database
  const createTutorial = async () => {
    try {
        await fetch('http://localhost:3000/api/tutorials', {
          method: 'POST',
          headers: {
            "Content-Type": "application/json"
          },
          //convert the fills from the form to json
          body: JSON.stringify(newTutorial)
        })
    } catch (error) {
      console.log(error)
    }
  }

  //update the tutorial to database
  const updateTutorial = async () => {
    try {
      await fetch('http://localhost:3000/api/tutorials/' + query.id, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newTutorial),
      })
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-12 items-center pt-4">
      <Head>
        <title>{query.id ? 'Update tutorial' : 'New tutorial'} | Tutorial App</title>
      </Head>
      <div className="md:col-span-5 md:col-start-2 flex flex-col justify-center p-5">
        <h2 className="text-3xl font-bold pb-4">
          {query.id ? "Update the tutorial" : "¿Do you have an intersting tutorial?"}
        </h2>
        <p className="text-2xl font-semibold pb-2">
          {query.id ? "Update it, for other people to see." : "Upload it, for other people to see."}
        </p>
        <img src="/images/form.png" alt="Formulario" />
      </div>
      <div className="md:col-span-5 px-5 w-full">
        <form onSubmit={handleSubmit} className="flex flex-col p-2 sm:p-6">
          <label htmlFor="title" className="font-semibold">
            Title of the tutorial:
          </label>
          <input
            id="title"
            name="title"
            className={
              errors.title
                ? "bg-red-100 border border-red-300 rounded outline-none focus:ring-2 p-2"
                : "border rounded outline-none focus:ring-2 p-2"
            }
            onChange={handleChange}
            type="text"
            placeholder="How to make a website"
            value={newTutorial.title}
          />
          <label htmlFor="description" className="font-semibold mt-3">
            Description of the tutorial:
          </label>
          <input
            id="description"
            name="description"
            autoComplete="off"
            onChange={handleChange}
            className={
              errors.description
                ? "bg-red-100 border border-red-300 rounded outline-none focus:ring-2 p-2"
                : "border rounded outline-none focus:ring-2 p-2"
            }
            type="text"
            placeholder="Learn how to make a website with HTML"
            value={newTutorial.description}
          />
          <label htmlFor="url" className="font-semibold mt-3">
            Url:
          </label>
          <input
            id="url"
            name="url"
            autoComplete="off"
            onChange={handleChange}
            className={
              errors.url
                ? "bg-red-100 border border-red-300 rounded outline-none focus:ring-2 p-2"
                : "border rounded outline-none focus:ring-2 p-2"
            }
            type="text"
            placeholder="https://www.youtube.com/..."
            value={newTutorial.url}
          />
          <label htmlFor="category" className="font-semibold mt-3">
            Category:
          </label>
          <select
            id="category"
            name="section"
            onChange={handleChange}
            className="border rounded outline-none focus:ring-2 p-2"
            value={newTutorial.section}
          >
            <option value="Education">Education</option>
            <option value="Entertainment">Entertainment</option>
            <option value="Home">Home</option>
          </select>
          <button className="bg-blue-600 text-white rounded font-semibold p-3 my-4 hover:bg-blue-700 focus:ring">
            {query.id ? "Update tutorial" : "Upload tutorial"}
          </button>
        </form>
      </div>
    </div>
  );
}
