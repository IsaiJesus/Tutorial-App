//Schema is save data types, model is to create a model, models is to know how many models there are
import { Schema, model, models } from 'mongoose';

//unique is for an unique information, and trim is to remove spaces 
const tutorialSchema = new Schema({
    title: {
        type: String,
        required: [true, 'Title is required'],
        trim: true,
        maxlength: [60, 'Title is must to be less than 40 characters']
    },
    description: {
        type: String,
        required: true,
        trim: true,
        maxlength: [150, 'Description must to be less than 140 characters']
    },
    url: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    section: {
        type: String,
        required: true,
        trim: true
    }
}, {
    versionKey: false,
    //timesstamps is to get the date of the create and update
    timestamps: true
});

//Export like a model with the name Video
//If models has a model called Video else create/use a new model
export default models.Tutorial || model('Tutorial', tutorialSchema);