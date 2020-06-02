import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import "bootstrap/dist/css/bootstrap.min.css";

const Test = (props) => {
  return(<tr>
    <td>{props.test.testName}</td>
    <td>{props.test._id}</td>
    <td><Link to={"/admin/editTest/"+props.test._id}>Edit test</Link></td>
    <td><button onClick={handleDeleteClick} value={props.test._id}>Delete Test</button></td>
    <td><button onClick={handlePublishClick} value={props.test._id}>Publish Test</button></td>
  </tr>
);
}
const handleDeleteClick = (e) => {
  axios.post('http://localhost:4000/admin/deleteTest/'+e.target.value , e.target.value)
        .then(res => console.log(res.data))
        .catch((err)=>console.log(err));
}

const handlePublishClick = (e) =>{
  alert(`Follow this link to access the test : http://localhost:3000/student/taketest/${e.target.value}`);

}

class MyTests extends Component {
  constructor(props){
    super(props);
    this.state = {
      tests : []
    };
  }
  componentDidMount(){
    axios.get('http://localhost:4000/admin/AllTests')
          .then(res => {
            this.setState({
              tests:res.data
            });
          })
          .catch(err => console.log(err));
  }
  testList(){
    return this.state.tests.map((currTest, idx)=>{
      return <Test test={currTest} key={idx} />
    })
  }
  render() {
    return (
      <div>
        <h3>All Tests</h3>
        <table className="table table-striped" style={{ marginTop: 20 }} >
          <tbody>
            { this.testList() }
          </tbody>
        </table>
      </div>
    );
  }
}

export default MyTests;
