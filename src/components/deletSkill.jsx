import "../resume.css";
import { Link } from "react-router-dom";
import React from "react";

function DeletSkill  (props)  {
    return ( 
            <React.Fragment>
                <div className="editCom d-flex flex-column justify-content-evenly align-items-center">
                    {props.skills.map((skil)=>
                        <div className="editDiv">
                            <div className="editName">
                                <span className="fs-1 material-symbols-outlined">extension</span>
                                <h4 className="ms-3 mt-1">{skil.skill}</h4>
                            </div>
                            <div className="editButton">
                                <button onClick={()=>props.deletskill(skil.skill)} className="btn">
                                    <span className="fs-2 text-danger material-symbols-outlined">delete</span>
                                </button>
                            </div>
                    </div>
                    )}
                <Link to="/Resumes/Skills"><button className="btn btn-primary m-2">Add another</button></Link>
                <Link to="/Resumes/Languages"><button className="btn btn-primary">Next</button></Link>
                </div>
            </React.Fragment>
     );
}
 
export default DeletSkill;