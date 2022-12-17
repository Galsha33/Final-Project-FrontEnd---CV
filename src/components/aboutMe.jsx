import "../resume.css";
import { Link } from "react-router-dom";
import React from "react";
import { useFormik } from "formik";

function AboutMe (props){
    const formik = useFormik({
        initialValues:{
                text:""
        },
    })
    return (  
        <React.Fragment>
             <div className="d-flex flex-column justify-content-evenly align-items-center">
            <h1>Tell us a little bit about yourself</h1>

            <form className="d-flex flex-column justify-content-evenly align-items-center"
                onSubmit={(e)=>{
                e.preventDefault();
                props.about(e,formik.values);
                e.target.reset();
                }}>
                <label for="basic-url" class="form-label">Let us know who you are, and why are you passionate about your profession</label>

                <div className="input-group">
                    <span className="input-group-text">
                        <span class="material-symbols-rounded">menu_book</span>
                    </span>
                    <textarea name="text" className="form-control" placeholder="tell us about yourself" aria-label="With textarea" required onChange={formik.handleChange} ></textarea>
                </div>
                
                <button type="submit" className="btn btn-primary m-2">Submit</button>
            </form>

            <Link to="/Resumes/Experience"><button className="btn btn-primary m-2">next</button></Link>
            </div>
        </React.Fragment> 
    );
}
 
export default AboutMe;