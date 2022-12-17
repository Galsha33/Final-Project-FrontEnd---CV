import "../resume.css";
import { Link } from "react-router-dom";
import React from "react";
import { useFormik } from "formik";


function Languages (props) {
    const formik = useFormik({
        initialValues:{
            language:""
        },  
    })
    return ( 
        <React.Fragment>
             <div className="d-flex flex-column justify-content-evenly align-items-center">
       <h1>Just one last thing! What languages are you speaking?</h1>
       <label for="basic-url" className="fs-3 form-label">mention if its native, fluent or intermediate</label>
        <form className="d-flex flex-column justify-content-evenly align-items-center" 
            onSubmit={(e)=>{
            e.preventDefault();
            props.language(e,formik.values);
            e.target.reset();
            }}>
        <label for="basic-url" className="form-label">Do not add a language you do not control in a reasonable level</label>
        <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1">
                <span class="material-symbols-outlined">translate</span>
            </span>
                <input type="text" name="language" className="form-control form-in" placeholder="e.g English-native" required onChange={formik.handleChange}/>
        </div>
            <button type="submit" className="btn btn-primary m-2">Add</button>
        </form>
        <Link to="/Resumes/DeletLang"><button className="btn btn-primary">Next</button></Link>
        </div>
        </React.Fragment> 
     );
}
 
export default Languages ;