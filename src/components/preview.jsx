import React from "react";
import "../resume.css";
import LiveTemplate from "./liveTemplate";
import { Link } from "react-router-dom";
import html2canvas from 'html2canvas';
import jsPDF from "jspdf";
import { useNavigate } from "react-router-dom";


function Preview  (props) {

    let navigate = useNavigate();

    return ( 
        <React.Fragment>

            <div className="d-flex flex-column justify-content-evenly align-items-center">
            <div id="pdf">
            <LiveTemplate
            contact={props.data.contact}
            about={props.data.aboutme}
            experience={props.data.experience} 
            education={props.data.education}
            skills={props.data.skills}
            languages={props.data.languages}/>
            </div>
            <button className="btn btn-primary mt-5 mb-2" onClick={printHtml}>Download</button>
            <Link to='/'><button className="btn btn-primary">Back to the Homescreen</button></Link>
            </div>

            

        </React.Fragment>
     );
}


let printHtml = () => {
    // this.navigate('/');
    let data = document.getElementById('pdf');
    let canvas = document.createElement('canvas');
    canvas.width = 589;
    canvas.height = 836;

    let options = {
        canvas: canvas,
        scale: 1,
        width: 1920,
        height: 1280,
        windowHeight: 1280,
        windowWidth: 1920,
        padding: 0

    };

    html2canvas(data, options).then((canvas) => {
        const contentDataURL = canvas.toDataURL('image/png');
        let pdf = new jsPDF('p', 'px', 'a4');

        let width = pdf.internal.pageSize.getWidth();
        let height = pdf.internal.pageSize.getHeight();

        pdf.addImage(contentDataURL, 'PNG', 1, 1, width, height);
        pdf.save('myresume');
    });


    }
 
export default Preview;