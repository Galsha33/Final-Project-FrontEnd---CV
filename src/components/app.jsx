import React, { Component } from "react";
import "../resume.css";
import HomeScreen from "./homeScreen";
import Resumes from "./resumes";
import Questions from "./questions";
import Contact from "./contact";
import AboutMe from './aboutMe';
import Experience from './experience';
import Skills from './skills';
import Education from './education';
import Finish from './finish'
import { Routes,Route } from "react-router-dom";
import LiveTemplate from "./liveTemplate";
import Preview from "./preview";
import Languages from "./languages";
import DeletSkill from "./deletSkill";
import DeletLang from "./deletLangu";
import DeletEduc from "./deletEduc";
import DeletExpe from "./deletExpe";

class App extends Component {
    state = { 
        contact: {
            fullName:"",
            profession:"",
            email: "",
            phoneNumber: "",
            adress: "",
            city:"",
            linkdin: "",
            git: "",
          },
        aboutme: {
            text: "",
          },
        experience: [],
        skills:[],
        languages:[],
        education: [],
     } 
    render() { 
        return (
            <React.Fragment>
               
                <Routes>
                                        {/*-----HomeScreen-----*/}
                    <Route path="/"  element={<HomeScreen/>}/>


                                        {/*-----Forms-----*/}
                    <Route path="Resumes" element={<Resumes data = {this.state}
                            contact={(e,val)=>this.contact(e,val)}
                            about={(e,val)=>this.about(e,val)}
                            experience={(e,val)=>this.experience(e,val)}
                            deletxpe={(val)=>this.deletxpe(val)}
                            education={(e,val)=>this.education(e,val)}
                            deletduc={(val)=>this.deletduc(val)}
                            skills={(e,val)=>this.skills(e,val)}
                            deletskill={(val)=>this.deletskill(val)}
                            language={(e,val)=>this.language(e,val)}
                            deletlang={(val)=>this.deletlang(val)}
                            /> }>
                        <Route path="Questions" element={<Questions/>}/>
                        <Route path="Contact" element={<Contact/>}/>
                        <Route path="AboutMe" element={<AboutMe/>}/>
                        <Route path="Experience" element={<Experience/>}/>
                        <Route path="DeletExpe" element={<DeletExpe/>}/>
                        <Route path="Education" element={<Education/>}/>
                        <Route path="DeletEduc" element={<DeletEduc/>}/>
                        <Route path="Skills" element={<Skills/>}/>
                        <Route path="DeletSkill" element={<DeletSkill/>}/>
                        <Route path="Languages" element={<Languages/>}/>
                        <Route path="DeletLang" element={<DeletLang/>}/>
                        <Route path="Finish" element={<Finish/>}/>
                    </Route>

                                    {/*-----Last Preview & DownLoad-----*/}
                    <Route path="Preview" element={<Preview data = {this.state}/>}>
                            <Route path="LiveTemplate" element={<LiveTemplate
                        contact={this.state.contact}
                        about={this.state.aboutme}
                        experience={this.state.experience} 
                        education={this.state.education}
                        skills={this.state.skills}
                        languages={this.state.languages}/>}/>
                    </Route>


                    

                        
                </Routes>
               

            </React.Fragment>
        );
    }

                // ----------------Functions below----------------------//

    contact=(e,val)=>{ //inserting the values from the contact form to the live preview
        console.log(val);
        const contact = val;
        this.state.contact = contact;
        this.setState({contact});
    }
    about=(e,val)=>{ //inserting the values from the about me form to the live preview
        const about = val;
        this.state.aboutme=about;
        this.setState({about});
    }
    experience=(e,val)=>{ //inserting the values from the experience form to the live preview
        const expe = val;
        this.state.experience.push(expe);
        this.setState({expe});
    }
    deletxpe=(val)=>{ // deleting the chosen values from the live preview
        const expe = val;
        const arr=this.state.experience.filter(j=>j.job != expe);
        this.state.experience=[...arr];
        this.setState({arr});
    }
    education=(e,val)=>{ //inserting the values from the education form to the live preview
        const educ = val;
        this.state.education.push(educ);
        this.setState({educ});
    }
    deletduc=(val)=>{ // deleting the chosen values from the live preview
        const educ = val;
        const arr=this.state.education.filter(e=>e.discipline != educ);
        this.state.education=[...arr];
        this.setState({arr});
    }
    skills=(e,val)=>{ //inserting the values from the skills form to the live preview
        const skil = val;
        this.state.skills.push(skil);
        this.setState({skil});
    }
    deletskill=(val)=>{ // deleting the chosen values from the live preview
        const skil = val;
        const arr=this.state.skills.filter(s=>s.skill != skil);
        this.state.skills=[...arr];
        this.setState({arr});
    }
    language=(e,val)=>{ //inserting the values from the language form to the live preview
        const lan = val;
        this.state.languages.push(lan);
        this.setState({lan});
    }
    deletlang=(val)=>{ // deleting the chosen values from the live preview
        const lang = val;
        const arr=this.state.languages.filter(l=>l.language != lang);
        this.state.languages=[...arr];
        this.setState({arr});
    }




    
}
 
export default App;
