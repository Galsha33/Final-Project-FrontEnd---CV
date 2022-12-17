import "../resume.css";
import { Link } from "react-router-dom";
import React from "react";
import { useFormik } from "formik";

function Contact (props) {
    const formik = useFormik({
        initialValues:{
                fullName:"",
                profession:"",
                email: "",
                phoneNumber: "",
                adress: "",
                city:"",
                linkdin: "",
                git: "",
              
        },
    })
    return (
        <React.Fragment>
            <div className="d-flex flex-column justify-content-evenly align-items-center">
        <h1>Let's start with your basic details</h1>
        <form className="d-flex flex-column justify-content-evenly align-items-center"
            onSubmit={(e)=>{
            e.preventDefault();
            props.contact(e,formik.values);
            e.target.reset();
            }}>
        <label for="basic-url" className="form-label">Name & Profession</label>
        <div className="input-group mb-3">
            <span class="input-group-text" id="basic-addon1">
            <span class="material-symbols-outlined">person</span>
            </span>
                <input type="text" name="fullName" className="form-control form-in" placeholder="Full-name" required onChange={formik.handleChange}/>
        </div>

        <div className="input-group mb-3">
        <span className="input-group-text" id="basic-addon2">
        <span class="material-symbols-outlined">work</span>
        </span>
        <input type="text" name="profession" className="form-control form-in" placeholder="Profession" required onChange={formik.handleChange}/>
        </div>

        <label for="basic-url" className="form-label">Contact info</label>
        <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon3">
            <span class="material-symbols-outlined">mail</span>
            </span>
            <input type="text" name="email" className="form-control form-in"  placeholder="example@example.com" required onChange={formik.handleChange}/>
        </div>

        <div className="input-group mb-3">
            <span className="input-group-text">
            <span class="material-symbols-outlined">call</span>
            </span>
            <input type="text" name="phoneNumber" className="form-control form-in" placeholder="Phone-number" required onChange={formik.handleChange}/>
        </div>

        <div className="input-group mb-3">
            <span className="input-group-text">
                <span class="material-symbols-rounded">home_pin</span>
            </span>
            <input type="text" name="adress" className="form-control form-in" placeholder="Adress" required onChange={formik.handleChange}/>
            <span class="input-group-text">
                <span class="material-symbols-outlined">apartment</span>
            </span>
            <input type="text" name="city" className="form-control form-in" placeholder="city" required onChange={formik.handleChange}/>
        </div>

        <div className="input-group mb-3">
            <span className="input-group-text">
                <span class="material-symbols-outlined">link</span>
            </span>
            <input type="text" name="linkdin" className="form-control form-in" placeholder="Linkdin URL" required onChange={formik.handleChange}/>
            <span className="input-group-text">
                <span class="material-symbols-outlined">link</span>
            </span>
            <input type="text" name="git" className="form-control form-in" placeholder="Git URL" required onChange={formik.handleChange}/>
        </div>
        <button type="submit" className="btn btn-primary m-2">Submit</button>
        </form>

        <Link to="/Resumes/AboutMe"><button className="btn btn-primary m-2">next</button></Link>
        </div>
        </React.Fragment> 
     );
}
 
export default Contact;