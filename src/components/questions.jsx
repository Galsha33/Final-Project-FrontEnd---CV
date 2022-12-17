import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../resume.css";



function Questions () {
    return ( 
        <React.Fragment>
                    <div className="d-flex flex-column justify-content-evenly align-items-center">
                        <h1 className="d-flex flex-column justify-content-evenly align-items-center">
                            A Free, Quick and Easy Way to Create <div>Your Professional Resume</div>
                        </h1>
                    </div>
                        <ul className=" mt-4 d-flex flex-column justify-content-start">
                            <div className="d-flex justify-content-start">
                                <span class="fs-1 mt-1 material-symbols-outlined">done_outline</span>
                                    <span className="fs-2 ms-3 fw-bold">
                                        Fast and Easy to Use
                                    </span>
                            </div>
                            <div className="mb-5 fs-5 ms-3">
                                Our free resume builder lets you easily and quickly create a resume using our <br/> resume wizard.
                            </div>
                            <div className="d-flex justify-content-start">
                                <span class="fs-1 mt-1 material-symbols-outlined">done_outline</span>
                                    <span className="fs-2 ms-3 fw-bold">
                                        Live Template Updating as you go
                                    </span>
                            </div>
                            <div className="mb-5 fs-5 ms-3">
                                The right side of the screen will update as you go forward with the <br/> resume building, so you can see the final result while you're doing it!
                            </div>
                            <div className="d-flex justify-content-start">
                                <span class="fs-1 mt-1 material-symbols-outlined">done_outline</span>
                                    <span className="fs-2 ms-3 fw-bold">
                                        Professional and Concise
                                    </span>
                            </div>
                            <div className="mb-5 fs-5 ms-3">
                                Analyzed from thousands of Resume templates, our team have generated the best, <br/> most answerable resume.
                            </div>
                            <div className="d-flex justify-content-start">
                                <span class="fs-1 mt-1 material-symbols-outlined">done_outline</span>
                                    <span className="fs-2 ms-3 fw-bold">
                                        Download your resume as PDF
                                    </span>
                            </div>
                            <div className="mb-5 fs-5 ms-3">
                                Download your resume and send it straight to the hiring manager. Whatever <br/> format you choose, we've got you covered.
                            </div>
                            
                           
                        </ul>

                    
                
                <div className="d-flex flex-column justify-content-evenly align-items-center">
                <Link to="/Resumes/Contact"><button className="btn btn-primary m-2">Let's Start</button></Link>        
                </div>
            
        </React.Fragment>

     );
}
 
export default Questions ;


{/* <p className="fs-4">
Our free resume builder lets you easily and quickly create a resume <br/> using our resume wizard.
</p> */}