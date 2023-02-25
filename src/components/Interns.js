import { useState } from "react";

const Interns = (props) => {
  
  const [pop, setpop] = useState(false);
  const handleOpen = () => {
    setpop(!pop);
  }
  const closepop = () => {
    setpop(false);
  }
  return (
    <div>
    <div className="main">
      <div className="header">
      <div className="rank">{props.id}</div>
      <div className="menu" onClick={handleOpen}>
      <span className="tooltiptext">Profile</span>
       <div></div>
       <div></div>
       <div></div>
      </div>
      </div>
      <div className="cover">
     <img src= {props.image} alt='intern'/>
     <p>{props.name}</p>
      </div>
    </div>
    {pop?
    <div className="modal">
        <div className="modal-header">
         <h2>Intern's Profile</h2>
         <h2 className="cancel" onClick={closepop}>X</h2>
        </div>
        <ul>
          <li>Full Name:<span>{props.fullname}</span></li>
          <li>Power Ranking:<span>{props.power}</span></li>
          <li>Path:<span>{props.path}</span></li>
          <li>Gender:<span>{props.gender}</span></li>
          <li>Attendance:<span>{props.attendance}</span></li>
        </ul>
    </div>:""}
  </div>
  );
}

export default Interns;