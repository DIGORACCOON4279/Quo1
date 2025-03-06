import './Membership.css';
import HeaderProfile from '../HeaderProfile/HeaderProfile';
import FooterProfile from '../FooterProfile/FooterProfile';
import Fees from '../Fees/Fees';

const Membership = () => {
    return (
        <body className="bodyMembership">
        <HeaderProfile/>
        <Fees/>
        <FooterProfile/>
    </body>
    )
}

export default Membership
