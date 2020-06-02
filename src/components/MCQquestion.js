import React from 'react';

const McqQuestions = (props) => {
    if(props.mcq){
      return(
        props.mcq.map((val, idx) =>{
          return(
            <div key={idx}>
              <label>{`Question ${idx+1}`}</label>
              <input type="text" data-id={idx} className="question" value={props.mcq[idx].question}/>
              <label>Option 1 :</label>
              <input type="text" data-id={idx} className="option1" value={props.mcq[idx].option1}/>
              <label>Option 2 :</label>
              <input type="text" data-id={idx} className="option2" value={props.mcq[idx].option2}/>
              <label>Option 3 :</label>
              <input type="text" data-id={idx} className="option3" value={props.mcq[idx].option3}/>
              <label>Option 4 :</label>
              <input type="text" data-id={idx} className="option4" value={props.mcq[idx].option4}/>
              <label>correct answer :</label>
              <input type="text" data-id={idx} className="cans" value={props.mcq[idx].cans}/>
            </div>
          )
        })
      )
    }
    return(
      <br/>
    )
}
export default McqQuestions;
