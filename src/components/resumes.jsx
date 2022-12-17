import React, {Component} from "react";
import { Link, Route,Routes } from "react-router-dom";
import LiveTemplate from './liveTemplate';
import Questions from "./questions"; 
import Contact from "./contact";
import AboutMe from './aboutMe';
import Experience from './experience';
import Skills from './skills';
import Education from './education';
import "../resume.css";
import Finish from "./finish";
import Languages from "./languages";
import DeletSkill from "./deletSkill";
import DeletLang from "./deletLangu";
import DeletEduc from "./deletEduc";
import DeletExpe from "./deletExpe";



class Resumes extends Component {
    render() { 
        return (
            <React.Fragment>
                                        {/* -----NavBar----- */}
            <div className="resumes-s">
                <div className="row d-flex flex-row logo">
                     <div className="col-2 ">
                        <h1>Resume <span className="text-success">Builder</span></h1>
                    </div>
                    <div className="col-10 header">
                        <Link to="/"><button className="btn p-0">
                            <span class="homeIcon material-symbols-outlined">house</span>
                            </button></Link>
                    </div>
                </div>

                <div className="row">
                    <div className="pt-5 col-8 questions-s">
                                 {/* -----Form switching components----- */}
                    <Routes>

                        <Route path="Questions" element={<Questions/>} />

                        <Route path="Contact" element={<Contact 
                            contact={(e,val)=>this.props.contact(e,val)}/>}/>

                        <Route path="AboutMe" element={<AboutMe 
                            about={(e,val)=>this.props.about(e,val)}/>}/>

                        <Route path="Experience" element={<Experience 
                            experience={(e,val)=>this.props.experience(e,val)}/>}/>

                        <Route path="DeletExpe" element={<DeletExpe 
                            deletxpe={(val)=>this.props.deletxpe(val)}
                            experience={this.props.data.experience}/>}/>

                        <Route path="Education" element={<Education 
                            education={(e,val)=>this.props.education(e,val)}/>}/>

                        <Route path="DeletEduc" element={<DeletEduc 
                            deletduc={(val)=>this.props.deletduc(val)} 
                            education={this.props.data.education}/>}/>

                        <Route path="Skills" element={<Skills 
                            skills={(e,val)=>this.props.skills(e,val)}/>}/>

                        <Route path="DeletSkill" element={<DeletSkill 
                            deletskill={(val)=>this.props.deletskill(val)} 
                            skills={this.props.data.skills}/>}/>

                        <Route path="Languages" element={<Languages 
                            language={(e,val)=>this.props.language(e,val)}/>}/>

                        <Route path="DeletLang" element={<DeletLang 
                            deletlang={(val)=>this.props.deletlang(val)} 
                            language={this.props.data.languages}/>}/>

                        <Route path="Finish" element={<Finish/>}/>

                    </Routes> 
                    </div>

                                {/* -----Live view for the client----- */}

                    <div className="col-4 live-s" >

                        <LiveTemplate
                        contact={this.props.data.contact}
                        about={this.props.data.aboutme}
                        experience={this.props.data.experience} 
                        education={this.props.data.education}
                        skills={this.props.data.skills}
                        languages={this.props.data.languages}/>
                        
                    </div>
                </div>
            </div>


        </React.Fragment>
        );
    }
    

}
 
export default Resumes;


