import "../resume.css";
import { Link } from "react-router-dom";
import React from "react";
import { useFormik } from "formik";

function Experience(props) {
    const formik = useFormik({
        initialValues:{
            job: "",
            place: "",
            location: "",
            startYear: "",
            endYear:"",
            achievements: "",
        },
    })
    return ( 
        <React.Fragment>
             <div className="d-flex flex-column justify-content-evenly align-items-center">
        <h1>Experience</h1>
        <form className="d-flex flex-column justify-content-evenly align-items-center"
            onSubmit={(e)=>{
            e.preventDefault();
            props.experience(e,formik.values);
            e.target.reset();
            }}>
            <label for="basic-url" class="form-label">What was your job title?</label>
            <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon1">
                    <span class="material-symbols-rounded">work</span>
                </span>
                <input type="text" name="job" className="form-control form-in" placeholder="Job Title" required onChange={formik.handleChange}/>
            </div>

            <label for="basic-url" className="form-label">Where did you work?</label>
            <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon2">
                    <span class="material-symbols-rounded">domain</span>
                </span>
                <input type="text" name="place" className="form-control form-in" placeholder="Place of work" required onChange={formik.handleChange}/>
            </div>

            <label for="basic-url" className="form-label">Where did you work at?</label>
            <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon3">
                    <span class="material-symbols-rounded">location_on</span>
                </span>
                <input type="text" name="location" className="form-control form-in"  placeholder="Location (City,Country,State)" required onChange={formik.handleChange}/>
            </div>

            <label for="basic-url" className="form-label">What years did you work in this place for?</label>
            <div className="input-group mb-3">
                <span className="input-group-text">
                    <span class="material-symbols-outlined">date_range</span>
                </span>
                <input type="text" name="startYear" className="form-control form-in" placeholder="Start" required onChange={formik.handleChange}/>
                <span className="input-group-text">
                    <span class="material-symbols-outlined">date_range</span>
                </span>
                <input type="text" name="endYear" className="form-control form-in" placeholder="End" required onChange={formik.handleChange}/>
            </div>

            <label for="basic-url" className="form-label">Achievements</label>
            <div className="input-group">
                    <span className="input-group-text">
                        <span class="material-symbols-outlined">checklist_rtl</span>
                    </span>
                    <textarea name="achievements" className="form-control" placeholder="tell us in short points what was your achievements there" aria-label="With textarea" required onChange={formik.handleChange} ></textarea>
                </div>

            <button type="submit" className="btn btn-primary m-2">Submit</button>
        </form>
        <Link to="/Resumes/DeletExpe"><button className="btn btn-primary m-2">Next</button></Link>
        </div>
        </React.Fragment> 
     );
}
 
export default Experience;