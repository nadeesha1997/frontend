import {Button} from "react-bootstrap";
import '../css/Nav.css';
import {BrowserRouter as Router, Link, useHistory, withRouter} from "react-router-dom";
import React,{useState} from "react";
import Login from './Auth/LoginComponent'
import {LogoutAuthAction, OpenLoginAction, OpenSignupAction} from "../store/actions/AuthAction";
// import Logout from "./LogoutComponent";
import {connect} from "react-redux";
import {Dropdown, Image, Menu} from "semantic-ui-react";
import Img from "../images/icon.jpg";
import {compose} from "redux";
function SecondNav(props){
    const [openLogin, setopenLogin] = useState(false);
    const [openSignup, setopenSignup] = useState(false);
    const history=useHistory();
    const {auth,logout,openLog}=props;

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
    const LogoutComponent=(name,his)=>{
        return(
            <>
                <Menu.Item position='right'>
                    <Image avatar spaced='right'
                           src={Img}
                    />
                    <Dropdown pointing='top right'
                        // text={currentUser?.firstName}
                              text={name}
                        // text={"hello"}
                    >
                        <Dropdown.Menu>
                            <Dropdown.Item as={Link} to={`/profile/username`} text='My profile' icon='user'/>
                            <Dropdown.Item onClick={(history)=>logout(his)} text='Logout' icon='power' />
                        </Dropdown.Menu>
                    </Dropdown>
                </Menu.Item>
            </>
        )
    }

    return (
        <Router>
            <div className="navbar-color2">
                <nav  className="navbar navbar-expand-lg navbar-fixed-top n" >
                    <table>
                        <tr>
                            <td>
                                {!auth.isLoggedin?
                                    <React.Fragment>
                                        <div>
                                            <Button  style={{width:180,backgroundColor:'#440151',marginTop:5,marginLeft:1000,marginRight:10,marginBottom:5}}
                                                // type='submit'
                                                     onClick={
                                                         // handleLoginButton
                                                         ()=>openLog(true)
                                                     }>
                                                {/* <Link to="./Login"> */}
                                                <b>LOG IN</b>
                                                {/* </Link> */}
                                            </Button>
                                            <Button style={{width:180,backgroundColor:'#440151',marginTop:5,marginLeft:90,marginRight:20,marginBottom:5}}
                                                // type='submit'
                                                    onClick={handleSignupButton}>
                                                {/* <Link to="./Register/student">  */}
                                                <b> REGISTER</b>
                                                {/* </Link> */}
                                            </Button>
                                        </div>
                                    </React.Fragment>:
                                    <React.Fragment>
                                        <div className="UserName">
                                            {/*<table><td><h6>{auth.user.userDetails.fullName}</h6></td>*/}
                                                {/*<button onClick={()=>logout(history)}>Logout</button>*/}
                                                {LogoutComponent(auth.user.userDetails.fullName,history)}
                                            {/*</table>*/}
                                    </div>
                                    </React.Fragment>
                                }
                            </td>
                        </tr>
                    </table>
                </nav>
                {
                    auth.loginModelOpen ? <Login/>:null}
            </div>
        </Router>
    );
};

// export default FirstNav;
const mapStateToProps=(userState)=>{
    return {
        auth:userState.auth
    }
};

const mapDispatchToProps=(dispatch)=>{
    return {
        logout:(history)=>{
            dispatch(LogoutAuthAction(history));
        },
        openLog:(open)=>{
            dispatch(OpenLoginAction(true));
            dispatch(OpenSignupAction(false));
        }
    }
};

// export default connect(mapStateToProps,mapDispatchToProps)(SecondNav);
export default compose(withRouter,connect(mapStateToProps,mapDispatchToProps))(SecondNav);
