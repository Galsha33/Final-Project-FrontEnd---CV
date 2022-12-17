import "../resume.css";
import { Link } from "react-router-dom";
import React from "react";

function DeletEduc  (props)  {
    return ( 
            <React.Fragment>
                 <div className="editCom d-flex flex-column justify-content-evenly align-items-center">
                    {props.education.map((educ)=>
                        <div className="editDiv">
                            <div className="editName">
                                    <span class="fs-1 mt-1 material-symbols-outlined">school</span>
                                <h4 className="mt-2 ms-3">{educ.discipline}</h4>
                            </div>
                            <div className="editButton">
                                <button onClick={()=>props.deletduc(educ.discipline)} className="btn">
                                    <span className="fs-2 text-danger material-symbols-outlined">delete</span>
                                </button>
                            </div>
                        </div>
                    )}
                <Link to="/Resumes/Education"><button className="btn btn-primary m-2">Add another</button></Link>
                <Link to="/Resumes/Skills"><button className="btn btn-primary">Next</button></Link>
                </div>
                
            </React.Fragment>
     );
}
 
export default DeletEduc;