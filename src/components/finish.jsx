import "../resume.css";
import { Link } from "react-router-dom";
import React from "react"; 

function Finish () {
    return ( 
        <React.Fragment>

        <div className="d-flex flex-column justify-content-evenly align-items-center">

                
                <h1 className="text-center mt-5">Congratulations you have finished <br/> building you're resume! 
                <span class="fs-1 ms-2 material-symbols-outlined">verified</span>
                </h1>
                <h3 className="text-center mt-5">To download you're Resume please continue to the live preview</h3>
                <h4 className="text-center mt-5 mb-5">We hoped you found our Resume Builder helpful</h4>
                <Link to="/Preview"><button className="btn btn-primary">to live preview</button></Link>

        </div>

        </React.Fragment>
     );
}
 
export default Finish ;