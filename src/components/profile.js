import React,{useEffect} from 'react'
import { connect } from 'react-redux'
import { useHistory } from 'react-router';

export const Profile = (props) => {
    const {role}=props;
    const Roles={
        Admin:"Admin",
        Student:"Student",
        AR:"AR",
        Lecturer:"Lecturer"
    }
    const history=useHistory();
    useEffect(()=>{
        switch (role) {
            case Roles.Admin:
                history.push("/profile/admin");
                break;
            case Roles.Student:
                history.push("/profile/student");
                break;
            case Roles.AR:
                history.push("/profile/ar");
                break;
            case Roles.Lecturer:
                history.push("/profile/lecturer");
                break;        
            default:
                history.push("/home")
        }
        // window.location.reload();
        console.log(role);
    },[role])
    return (
        <div>
            
        </div>
    )
}

const mapStateToProps = (state) => ({
    role:state.auth.user.role[0]
})


export default connect(mapStateToProps)(Profile)
