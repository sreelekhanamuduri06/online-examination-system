import React, { Component } from 'react';
import McqQuestions from './MCQquestion';
import CodingQuestions from './CodeQuestion';
import axios from 'axios';

class EditTest extends Component {
  constructor(props){
    super(props);

    this.state = {
      test : {}
    };
  }

  componentDidMount(){
    axios.get('http://localhost:4000/admin/test/'+this.props.match.params.id)
          .then(res =>{
            this.setState({
              test:res.data
            });
          })
          .catch(err => console.log(err));
  }
  onSubmit = (e) => {
    e.preventDefault();
    const newTest = this.state.test;
    axios.post('http://localhost:4000/admin/editTest/'+this.props.match.params.id , newTest)
          .then(res => console.log(res.data))
          .catch((err)=>console.log(err));
  }
  onChange = (e) => {
    if(["question","option1","option2","option3","option4","cans"]
      .includes(e.target.className)){
      let mcq =[...this.state.test.mcq];
      mcq[e.target.dataset.id][e.target.className] = e.target.value;
      var sT = {...this.state.test}
      sT.mcq = mcq;
      this.setState({ test : sT });
    }
    else if(["cquestion"].includes(e.target.className)){
      let coding =[...this.state.test.coding];
      coding[e.target.dataset.id][e.target.className] = e.target.value;
      var sT = {...this.state.test}
      sT.coding = coding;
      this.setState({ test : sT });
    }
    else{
      var sampleTest = {...this.state.test};
      sampleTest.testName = e.target.value;
      this.setState({test : sampleTest});
    }
  }
  addMcq = (e) =>{
    e.preventDefault();
    var sampleTest = {...this.state.test};
    const newMCQ ={ 'mcq': { 'question':'','option1':'','option2':'',
    'option3':'','option4':'','cans':'' }};
    sampleTest.mcq.push(newMCQ)
    this.setState({
      test : sampleTest
    });
  }
  addCoding = (e) => {
    e.preventDefault();
    var sampleTest = {...this.state.test};
    const newCoding ={ 'coding': { 'question':''}};
    sampleTest.coding.push(newCoding);
    this.setState({
      test : sampleTest
    });
  }
  render() {
    return (
      <div className="container" style={{marginTop: 10}}>
        <h3>Edit the test</h3>
        <br/>
        <form onSubmit={this.onSubmit} onChange={this.onChange}>
          <label>Test name:</label>
          <input type="text" value={this.state.test.testName}/>
          <br/>
          <div style={{border:'2px solid black'}}>
            <h5>mcq</h5>
            <McqQuestions mcq={this.state.test.mcq} />
            <button onClick={this.addMcq}>+ Add question</button>
          </div>
          <br/>
          <div style={{border:'2px solid black'}}>
            <h5>coding</h5>
            <CodingQuestions coding={this.state.test.coding} />
            <button onClick={this.addCoding}>+ Add question</button>
          </div>
          <br/>
          <input type="submit" value="Update" />
        </form>
      </div>
    );
  }
}

export default EditTest;
