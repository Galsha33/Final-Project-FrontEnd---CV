import React, {Component} from "react";
import "../resume.css";
import jsPDF from 'jspdf';

function LiveTemplate (props) {
    
    return ( 
        <React.Fragment>

        <section id="page" className="row section-liveT">
        <div className="a4 col-12">
           <div className="content-live col-8">
                <h2>{props.contact.fullName}</h2>
                <h4>{props.contact.profession}</h4>
                <h5>Experience</h5>
                    {props.experience.map((expe)=>
                        <article>
                            <div className="d-flex justify-content-between">
                                <h6>{expe.job}</h6>
                                <span className="mr-5">{expe.startYear}-{expe.endYear}</span>
                            </div>
                            <p>{expe.place} - {expe.location}</p>
                            <p>{expe.achievements}</p>

                        </article>

                    )}
                <h5>Education</h5>
                    {props.education.map((educ)=>
                        <article>
                            <div className="d-flex justify-content-between">
                                <h6>{educ.discipline}</h6>
                                <span className="mr-5">{educ.startYear}-{educ.endYear}</span>
                            </div>
                            <p>{educ.school} - {educ.location}</p>
                            <p>{educ.achievements}</p>
                        </article>
                    
                    )}
           </div>

           <div className="sider-live col-4">
                <div className="about-sec">
                    <h5>About me</h5>
                    <p>{props.about.text}</p>
                </div>
                <div className="contact">
                    <h5>Contact info:</h5><n/>
                    <p>Phone-number: {props.contact.phoneNumber}</p>
                    <p>E-mail: {props.contact.email}</p>
                    <p>Adress: {props.contact.adress}</p>
                    <p>City: {props.contact.city}</p>
                    <p>LinkedIn: {props.contact.linkdin}</p>
                    <p>Git: {props.contact.git}</p>
                </div>
                <div className="languages">
                        <h6>Languages</h6>
                        {props.languages.map((lan)=>

                            <span className="badge rounded-pill text-bg-primary pill">{lan.language}</span>

                        )}
                </div>
                <div className="skills">
                        <h6>Professional skills</h6>
                        {props.skills.map((skil)=>

                            <span className="badge rounded-pill text-bg-primary pill">{skil.skill}</span>

                        )}
                </div>
           </div>

        </div>
        </section>
        {/* <button className="mt-5" onClick={()=>download()}>Download your resume</button> */}
        </React.Fragment>

     );

    
}
    const download = () => {
        const doc = new jsPDF('p','px',[300,500]);
        doc.html(document.querySelector("#page"),{
            callback: function(pdf){
                const pageCount = doc.internal.getNumberOfPages();
                pdf.deletePage(pageCount);
                pdf.save("myresume.pdf");
            }
        })
    } 

export default LiveTemplate ;