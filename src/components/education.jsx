import "../resume.css";
import { Link } from "react-router-dom";
import React from "react"; 
import { useFormik } from "formik";

function Education(props) {
    const formik = useFormik({
        initialValues:{
            discipline: "",
            school: "",
            location: "",
            startYear: "",
            endYear:"",
            achievements: "",
        },
    })
    return ( 
        <React.Fragment>
             <div className="d-flex flex-column justify-content-evenly align-items-center">
        <h1>Awesome! Now, what qualifications do you have?</h1>
        <h5>Start with your most recent period of education and work backwards.</h5><br/>
        <form className="d-flex flex-column justify-content-evenly align-items-center" 
            onSubmit={(e)=>{
            e.preventDefault();
            props.education(e,formik.values);
            e.target.reset();
            }}>
            <label for="basic-url" className="form-label">What had you majored in?</label>
            <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon1">
                <span class="material-symbols-outlined">school</span>
                </span>
                <input type="text" name="discipline" className="form-control form-in" placeholder="Degrees(s)" required onChange={formik.handleChange}/>
            </div>

            <label for="basic-url" className="form-label">Where did you study at?</label>
            <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon2">
                    <span class="material-symbols-outlined">account_balance</span>
                </span>
                <input type="text" name="school" className="form-control form-in" placeholder="Name of school/ institution" required onChange={formik.handleChange}/>
                <span className="input-group-text" id="basic-addon3">
                    <span class="material-symbols-outlined">location_on</span>
                </span>
                <input type="text" name="location" className="form-control form-in"  placeholder="Location (City,Country,State)" required onChange={formik.handleChange}/>
            </div>

            <label for="basic-url" className="form-label">Which years did you study? </label>
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

            <label for="basic-url" class="form-label">Description and achievements </label>
            <div className="input-group">
                    <span className="input-group-text">
                        <span class="material-symbols-outlined">checklist_rtl</span>
                    </span> 
                    <textarea name="achievements" className="form-control" placeholder="tell us in short what was your achievements there" aria-label="With textarea" required onChange={formik.handleChange} ></textarea>
                </div>

            <button type="submit" className="btn btn-primary m-2">Submit</button>
        </form>
        <Link to="/Resumes/DeletEduc"><button className="btn btn-primary m-2">Next</button></Link>
        </div>
        </React.Fragment> 
     );
}
 
export default Education;