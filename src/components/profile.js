import React,{useEffect} from 'react'
import { connect } from 'react-redux'
import { Redirect, useHistory } from 'react-router';

export const Profile = (props) => {
    // const {role}=props;
    let role =JSON.parse(localStorage.getItem("auth")).user.userDetails.role;
    const Roles={
        Admin:"Admin",
        Student:"Student",
        AR:"AR",
        Lecturer:"Lecturer"
    }
    const history=useHistory();
    // useEffect(()=>{
    //     // console.log(role);

    //     // alert(role);
    //     switch (role) {
    //         case Roles.Admin:
    //             history.push("/profile/admin");
    //             break;
    //         case Roles.Student:
    //             history.push("/profile/student");
    //             break;
    //         case Roles.AR:
    //             history.push("/profile/ar");
    //             break;
    //         case Roles.Lecturer:
    //             history.push("/profile/lecturer");
    //             break;        
    //         default:
    //             history.push("/home")
    //     }
    //     window.location.reload();
    //     // console.log(role);
    // },[])
    return (
        <div>
            {role===Roles.Admin&&<Redirect to="/profile/admin"/>}
            {role===Roles.Student&&<Redirect to="/profile/student"/>}
            {role===Roles.AR&&<Redirect to="/profile/ar"/>}
            {role===Roles.Lecturer&&<Redirect to="/profile/lecturer"/>}
            
        </div>
    )
}

const mapStateToProps = (state) => ({
    role:state.auth.user.userDetails.role
})


export default connect(mapStateToProps)(Profile)
