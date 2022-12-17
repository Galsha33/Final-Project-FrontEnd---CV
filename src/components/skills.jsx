import "../resume.css";
import { Link } from "react-router-dom";
import React from "react";
import { useFormik } from "formik";

function Skills (props) {
    const formik = useFormik({
        initialValues:{
                skill:""
        },  
    })
    return ( 
        <React.Fragment>
        <div className="d-flex flex-column justify-content-evenly align-items-center">
            <h1>Almost finished! Just add a list of skills</h1>
            <label for="basic-url" className="fs-3 mb-3 form-label">try to keep it concise</label>
                <form className="d-flex flex-column justify-content-evenly align-items-center"
                    onSubmit={(e)=>{
                    e.preventDefault();
                    props.skills(e,formik.values);
                    e.target.reset();
                    }}>
                
                <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon1">
                        <span className="material-symbols-outlined">extension</span>
                    </span>
                        <input type="text" name="skill" className="form-control form-in" placeholder="e.g Teamwork" required onChange={formik.handleChange}/>
                </div>
                <button type="submit" className="mb-2 btn btn-primary">Submit</button>
                </form>
                <Link to="/Resumes/DeletSkill"><button className="btn btn-primary">Next</button></Link>
            </div>    
        </React.Fragment> 
     );
}
 
export default Skills ;