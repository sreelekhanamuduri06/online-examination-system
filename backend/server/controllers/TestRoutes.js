import mongoose from 'mongoose';
import TestModel from '../models/TestModel';

export function getAllTests(req, res){
  TestModel.find((err,tests)=>{
    if(err){
      console.log(err);
    }
    else{
      return res.json(tests);
    }
  });
}

export function getSingleTest(req, res){
  TestModel.findById(req.params.testid, (err, test) =>{
    if(err){
      console.log(err);
    }
    else{
      return res.json(test);
    }
  });
}

export function createNewTest(req,res){
  let test = new TestModel(req.body);
  test.save()
    .then(test =>{
      return res.status(200).json({
        msg: 'test added successfully',
        test : test
      });
    })
    .catch(err => {
            res.status(400).send('creating new test failed');
    });
}

export function editTest(req, res){
  const updatedtest = req.body;
  TestModel.update({_id:req.params.testid},{$set:updatedtest})
    .exec()
    .then(()=>{
      res.status(200).json({
        msg:"test updated successfully",
        test:updatedtest
      });
    })
    .catch((err)=>{
      res.status(400).send('updating test failed');
    });
}

export function deleteTest(req, res){
  TestModel.findByIdAndRemove(req.params.testid)
  .exec()
  .then(()=>{
    res.status(200).json({
      msg:"test deleted successfully",
    });
  })
  .catch((err)=>{
    res.status(500).json({
      msg:"deletion of test failed"
    });
  });
}
