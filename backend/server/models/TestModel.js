import mongoose from 'mongoose';

const Schema = mongoose.Schema;

let mcq = new Schema({
  question: {
        type: String
  },
  option1: {
        type: String
  },
  option2: {
        type: String
  },
  option3: {
        type: String
  },
  option4: {
        type: String
  },
  cans: {
        type: String
  },
})

let coding = new Schema({
  cquestion: {
        type: String
  }
})
let TestModel = new Schema({
  testName:{
    type:String
  },
  mcq: [mcq],
  coding: [coding]
})

export default mongoose.model('TestModel',TestModel);
