import mongoose from 'mongoose';

const TodoSchema = new mongoose.Schema({
    todo : {
        type : String,
        required : true
    },
    userEmail : {
        type : String,
        // required : true,
    },
    status:{
        type : String,
        default : "todo"
    },
    date : {
        type : Date,
        default : Date.now
    }
})

export default mongoose.models.Todo || mongoose.model("Todo", TodoSchema);
