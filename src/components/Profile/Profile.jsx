import './Profile.css';
import HeaderProfile from '../HeaderProfile/HeaderProfile';
import Welcome from '../Welcome/Welcome';
import FooterProfile from '../FooterProfile/FooterProfile';


const Profile = () => {
    return (
        <body className="bodyProfile">
            <HeaderProfile/>
            <Welcome/>
            <FooterProfile/>
        </body>
    )
}

export default Profile
