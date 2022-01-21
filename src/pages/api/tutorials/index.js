import {dbConnect} from 'utils/mongoose';
import Tutorial from 'models/Tutorial';

//Run the db connect on utils/mongoose.js
dbConnect();

export default async function handler(req, res) {

    const {method, body} = req;

    //Type of request from the browser
    switch (method) {

        //You should try with a client for each method
        case "GET":
            try {
                const tutorials = await Tutorial.find();
                return res.status(200).json(tutorials);
            } catch (error) {
                return res.status(500).json({ error: error.message })
            }

        case "POST":
            try {
                //Create a new object 
                const newTutorial = new Tutorial(body);
                //Save the newVideo in database
                const savedTutorial = await newTutorial.save();
                //201 is when a new object is created
                return res.status(201).json(savedTutorial);
            } catch (error) {
                return res.status(500).json({ error: error.message })
            }
    
        //It's for another method called that It's not supported
        default:
            return res.status(400).json({msg: "This method is not supported"});
    }

}