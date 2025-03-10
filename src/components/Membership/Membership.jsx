import './Membership.css';
import HeaderProfile from '../HeaderProfile/HeaderProfile';
import FooterProfile from '../FooterProfile/FooterProfile';
import LinkProfile from '../LinkProffile/LinkProfile';
import Fees from '../Fees/Fees';

const Membership = () => {
    return (
        <body className="bodyMembership">
        <HeaderProfile/>
        <LinkProfile/>
        <Fees/>
        <FooterProfile/>
    </body>
    )
}

export default Membership
