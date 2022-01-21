import {dbConnect} from 'utils/mongoose';
import Tutorial from 'models/Tutorial';

dbConnect();

export default async function handler(req, res){

    const {method, body, query: {id}} = req;

    switch (method) {
        case "GET":
            try {
                //Get a video with the id from query
                const tutorial = await Tutorial.findById(id);
                //If the video is not exist, return a 404
                if(!tutorial) return res.status(404).json({ msg: "Video not found" });
                //If the video exists, return the video
                return res.status(200).json(tutorial);
            } catch (error) {
                res.status(500).json({ msg: error.message });
            }
        case "PUT":
            try {
                //Get the id from the video, the body is to update the data
                const tutorial = await Tutorial.findByIdAndUpdate(id, body, {
                    //This get the new updated video and not get the old video
                    new: true
                });
                if(!tutorial) return res.status(404).json({ msg: "Video not found" });
                return res.status(200).json(tutorial);
            } catch (error) {
                return res.status(500).json({ msg: error.message });
            }
        case "DELETE":
            try {
                //Get the removed video 
                const deletedTutorial = await Tutorial.findByIdAndDelete(id);
                if(!deletedTutorial) return res.status(404).json({ msg: "Video not found" });
                return res.status(204).json();
            } catch (error) {
                return res.status(400).json({ msg: error.message });
            }
    
        default:
            return res.status(400).json({ msg: "This method is not supported" });
    }
}