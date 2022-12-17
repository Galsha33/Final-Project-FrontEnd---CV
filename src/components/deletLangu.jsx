import "../resume.css";
import { Link } from "react-router-dom";
import React from "react";

function DeletLang  (props)  {
    return ( 
            <React.Fragment>
                <div className="editCom d-flex flex-column justify-content-evenly align-items-center">
                    {props.language.map((lang)=>
                        <div className="editDiv">
                            <div className="editName">
                                <span className="fs-1 material-symbols-outlined">translate</span>
                                <h4 className="ms-2 mt-1">{lang.language}</h4>
                            </div>
                            <div className="editButton">
                                <button onClick={()=>props.deletlang(lang.language)} className="btn">
                                    <span className="fs-2 text-danger material-symbols-outlined">delete</span>
                                </button>
                            </div>
                    </div>
                    )}
                <Link to="/Resumes/Languages"><button className="btn btn-primary m-2">Add another</button></Link>
                <Link to="/Resumes/Finish"><button className="btn btn-primary">Next</button></Link>
                </div>
                
            </React.Fragment>
     );
}
 
export default DeletLang;