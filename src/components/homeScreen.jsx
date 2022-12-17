import "../resume.css"
import NavBar from "./navBar";
import Body from "./body";
import Footer from "./footer";

function HomeScreen () {
    return (  
        
        <div className="s">
            <div className="row">
            <div className="navbar col-12">
                <NavBar/>
            </div>
            </div>
            <div className="row">
            <div className="body col-12">
                <Body/>
            </div>
            </div>
            <div className="row">
            <div className="footer col-12">
                <div className="on-footer">
                <Footer/>
                </div>
            </div>
            </div>

        </div>
    );
}
 
export default HomeScreen;