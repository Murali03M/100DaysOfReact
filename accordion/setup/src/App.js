import React, { useState } from 'react';
import data from './data';
import SingleQuestion from './Question';
function App() {

  const [questions,setQuestion] = useState(data)
  return <mian>
       <div className="container">
        <h3>Answers and questions about login</h3>
        <section className="info">
          {
            questions.map((question)=>{
              return <SingleQuestion key={question.id} {...question}/>
})
          }
        </section>
       </div>
  </mian>
}

export default App;
