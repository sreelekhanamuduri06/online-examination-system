import React from 'react';

const CodingQuestions = (props) => {
  if(props.coding){
    return(
      props.coding.map((val, idx) =>{
        return(
          <div key={idx}>
            <label>{`Question ${idx+1}`}</label>
            <input type="text" className="cquestion" data-id={idx} value={props.coding[idx].cquestion}/>
          </div>
        )
      })
    )
  }
  return(
    <br/>
  )
}
export default CodingQuestions;
