import "../resume.css";
import { Link } from "react-router-dom";
import React from "react";

function DeletExpe  (props)  {
    return ( 
            <React.Fragment>
                 <div className="editCom d-flex flex-column justify-content-evenly align-items-center">
                    {props.experience.map((expe)=>
                        <div className="editDiv">
                            <div className="editName">
                                <div>
                                    <span class="fs-2 material-symbols-rounded mt-1">work</span>
                                </div>
                                <h4 className="mt-1 ms-3">{expe.job}</h4>
                            </div>
                            <div className="editButton">
                                <button onClick={()=>props.deletxpe(expe.job)} className="btn">
                                    <span className="fs-2 text-danger material-symbols-outlined">delete</span>
                                </button>
                            </div>
                    </div>
                    )} 
                <Link to="/Resumes/Experience"><button className="btn btn-primary m-2">Add another</button></Link>
                <Link to="/Resumes/Education"><button className="btn btn-primary">Next</button></Link>
                </div>
                
            </React.Fragment>
     );
}
 
export default DeletExpe;