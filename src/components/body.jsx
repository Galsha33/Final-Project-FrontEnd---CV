import homePageImage from '../assets/templateResume.png';
import Questions from "./questions"; 
import { Link } from 'react-router-dom';

export default function Body () {
    return ( 
        <div>
            <section className="section1">
            <h1 className="title display-3 text-center">Try our professional Resume <n/>Builder now!</h1>
            <h3 className="sub-title text-center">More than 80% of our users get interviews after using our templates!</h3>
            <div>   
               <Link to="/Resumes/Questions"> <button type="button" className="btn btn-success btn-title">CREATE MY RESUME</button></Link>
                <img className='homePageImage' src={homePageImage} />
            </div>
            </section>
           
        </div>
     );
}
 
