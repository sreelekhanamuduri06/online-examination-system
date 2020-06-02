import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import McqQuestions from './MCQquestion';
import CodingQuestions from './CodeQuestion';
import axios from 'axios';

class CreateTest extends Component {
  constructor(props){
    super(props);

    this.state={
      testName : '',
      mcq : [{question:'',
              option1:'',option2:'',option3:'',option4:'',cans:''}],
      coding : [{cquestion : ''}]
    }
  }
  onSubmit = (e)=>{
    e.preventDefault();

    console.log(this.state);

    const newTest = this.state;

    axios.post('http://localhost:4000/admin/createNewTest',newTest)
          .then(res => console.log(res.data))
          .catch((err)=>console.log(err));

    this.setState({
      testName : '',
      mcq : [{question:'',
              option1:'',option2:'',option3:'',option4:'',cans:''}],
      coding : [{cquestion : ''}]
    })
  }
  onChange = (e) => {
    if(["question","option1","option2","option3","option4","cans"]
      .includes(e.target.className)){
      let mcq =[...this.state.mcq];
      mcq[e.target.dataset.id][e.target.className] = e.target.value;
      this.setState({ mcq : mcq })
    }
    else if(["cquestion"].includes(e.target.className)){
      let coding =[...this.state.coding];
      coding[e.target.dataset.id][e.target.className] = e.target.value;
      this.setState({ coding : coding })
    }
    else{
      this.setState({testName : e.target.value});
    }
  }
  addMcq = (e) =>{
    e.preventDefault();
    this.setState((prevState) => ({
      mcq : [...prevState.mcq, {question:'',
              option1:'',option2:'',option3:'',option4:'',cans:''}]
    }));
  }
  addCoding = (e) => {
    e.preventDefault();
    this.setState((prevState) => ({
      coding : [...prevState.coding, {cquestion:''}]
    }));
  }
  render() {
    return (
      <div className="container" style={{marginTop: 10}}>
        <h3>Create new test</h3>
        <form onSubmit={this.onSubmit} onChange={this.onChange}>
          <label>Test name:</label>
          <input type="text" value={this.state.testName}/>
          <br/>
          <div style={{border:'2px solid black'}}>
            <h5>mcq</h5>
            <McqQuestions mcq={this.state.mcq} />
            <button onClick={this.addMcq}>+ Add question</button>
          </div>
          <br/>
          <div style={{border:'2px solid black'}}>
            <h5>coding</h5>
            <CodingQuestions coding={this.state.coding} />
            <button onClick={this.addCoding}>+ Add question</button>
          </div>
          <br/>
          <input type="submit" value="Create" />
        </form>
      </div>
    );
  }
}

export default CreateTest;
