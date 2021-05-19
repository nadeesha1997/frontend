import {Button, Image} from "react-bootstrap";
import '../css/Nav.css';
import logo2 from './../images/logo2.png';
import {BrowserRouter as Router,Link} from "react-router-dom";
import React,{useState} from "react";
import Login from './LoginComponent'
const FirstNav= () => {
    const [openLogin, setopenLogin] = useState(false);
    const [openSignup, setopenSignup] = useState(false);

    const handleLoginButton=()=>{
        // openLogin=true;
        // openSignup=false;
        setopenLogin(true);
        setopenSignup(false);
    }

    const handleSignupButton=()=>{
        // openLogin=false;
        // openSignup=true;
        setopenLogin(false);
        setopenSignup(true);
    }

    const openLoginB=()=>{
        // openLogin=true;
        setopenLogin(true);
    }

    const closeLoginB=()=>{
        // openLogin=false;
        setopenLogin(false);
    }

    const openSignupB=()=>{
        // openSignup=true;
        setopenSignup(true);

    }

    const closeSignupB=()=>{
        // openSignup=false;
        setopenSignup(false);
    }

    const handleSubmit=(e)=>{
        e.preventDefault();
    }

    return (
        <Router>
            <div className="navbar-color">
                <nav  className="navbar navbar-expand-lg navbar-fixed-top n" >
                    <Image img src={logo2} alt="logo"  width={300} height={150} margin={5}/>
                    <div className="text">
                        <ul>
                            <li>
                                <h6> <b>FACULTY OF ENGINEERING</b></h6>
                                <h6><b>UNIVERSITY OF RUHUNA</b></h6>
                                <h6><b>LECTURE SCHEDULE MANAGEMENT SYSTEM</b></h6>
                            </li>
                        </ul>
                    </div>
                    <table>
                        <td>
                            <div className="align">
                                <Button  style={{width:180,backgroundColor:'#440151',marginTop:10,marginLeft:45,marginRight:20}} 
                                // type='submit' 
                                onClick={handleLoginButton}>
                                    {/* <Link to="./Login"> */}
                                        <b>LOG IN</b>  
                                        {/* </Link> */}
                                </Button>
                                <Button style={{width:180,backgroundColor:'#440151',marginTop:10,marginLeft:40,marginRight:20}} 
                                // type='submit' 
                                onClick={handleSignupButton}>
                                    {/* <Link to="./Register/student">  */}
                                    <b> REGISTER</b>  
                                    {/* </Link> */}
                                </Button>
                            </div>
                        </td>
                    </table>
                </nav>
                {openLogin?
                <Login
                closeModal={closeLoginB} 
                isOpen={openLogin} 
                handleSubmit={handleSubmit}/>:null}
            </div>
        </Router>
    );
};

export default FirstNav;