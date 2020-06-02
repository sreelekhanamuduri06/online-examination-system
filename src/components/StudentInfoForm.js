import React, { Component } from 'react';

class StudentInfoForm extends Component {
  constructor(props){
    super(props);

    this.state={
      name :'',
      age:'',
      qualification:'',
      yog :'',
      college:'',
      residence:''
    }
  }
  onChange = (e) => {
    var cN = e.target.className;
    if(cN === "name"){
      this.setState({
        name : e.target.value
      });
    }
    else if(cN === "age"){
      this.setState({
        age : e.target.value
      });
    }
    else if(cN === "qualification"){
      this.setState({
        qualification : e.target.value
      });
    }
    else if(cN === "yog"){
      this.setState({
        yog : e.target.value
      });
    }
    else if(cN === "college"){
      this.setState({
        college : e.target.value
      });
    }
    else if(cN === "residence"){
      this.setState({
        residence : e.target.value
      });
    }
  }

  onSubmit = (e) => {
    e.preventDefault();

    console.log(this.state);

    this.setState({
      name :'',
      age:'',
      qualification:'',
      yog :'',
      college:'',
      residence:''
    });
  }

  render() {
    return (
      <div className="container" style={{marginTop: 10}}>
        <h3>Create new test</h3>
        <form onSubmit={this.onSubmit} onChange={this.onChange}>
          <label>Name:</label>
          <input type="text" value={this.state.name} className="name"/>
          <br />
          <label>Age</label>
          <input type="text" value={this.state.age} className="age"/>
          <br/>
          <label>Qualification:</label>
          <input type="text" value={this.state.qualification} className="qualification"/>
          <br/>
          <label>Year of graduation:</label>
          <input type="text" value={this.state.yog} className="yog"/>
          <br/>
          <label>College : </label>
          <input type="text" value={this.state.college} className="college"/>
          <br/>
          <label>Place of residence:</label>
          <input type="text" value={this.state.residence} className="residence"/>
          <br/>
          <input type="submit" value="move to test" />
        </form>
      </div>
    );
  }
}

export default StudentInfoForm;
