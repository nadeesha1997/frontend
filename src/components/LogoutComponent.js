import React from "react";
import {Menu,Image,Dropdown,} from 'semantic-ui-react';
import {Link, useHistory,withRouter} from "react-router-dom";
import Img from '../images/icon.jpg'
import {connect} from "react-redux";
import {LogoutAuthAction} from "../store/actions/AuthAction";
import {compose} from "redux";
function Logout(props) {
    const {user,logout}=props;
    const history=useHistory();
    return(<>
        <Menu.Item position='right'>
            <Image avatar spaced='right'
                src={Img}
            />
            <Dropdown pointing='top right'
                      // text={currentUser?.firstName}
                      text={user.userDetails.fullname}
                // text={"hello"}
            >
                <Dropdown.Menu>
                    <Dropdown.Item as={Link} to={`/profile/username`} text='My profile' icon='user'/>
                    <Dropdown.Item onClick={(history)=>logout(history)} text='Logout' icon='power' />
                </Dropdown.Menu>
            </Dropdown>
        </Menu.Item>
    </>)
}
// export default Logout;
const mapStateToProps=(userState)=>{
    return {
        user:userState.auth.user,
    }
};

const mapDispatchToProps=(dispatch)=>{
    return {
        logout:(history)=>{
            dispatch(LogoutAuthAction(history));
        }
    }
};

// export default connect(mapStateToProps,mapDispatchToProps)(Logout);
export default compose(withRouter,connect(mapStateToProps,mapDispatchToProps))(Logout);