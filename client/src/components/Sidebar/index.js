import { Link } from 'react-router-dom';
import './index.scss';
import Logo from '../../assets/images/png/Logo-w-frame.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook, faHome, faCircleUser, faPeopleRoof, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import '../../assets/fonts/fonts.css';
import Auth from "../../utils/auth";

function SideBar() {

    function showSideNav() {
        if (Auth.loggedIn()) {
            return (
                <div className='side-navbar'>
                    <Link className='logo' to='/'>
                        <img src={Logo} alt='Logo with black frame' />
                    </Link>
                    <nav className='sidenav'>
                        <Link exact='true' activeclassname='active' to='/'>
                            <FontAwesomeIcon icon={faHome} color='#819863' />
                        </Link>
                        {/* <Link exact='true' activeclassname='active' className='profile-link' to='/profile'>
                <FontAwesomeIcon icon={faUser} color='#819863' />
            </Link> */}
                        <Link exact='true' activeclassname='active' className='recipes-link' to='/search'>

                            <FontAwesomeIcon icon={faBook} color='#819863' />
                        </Link>
                        <Link exact='true' activeclassname='active' className='about-us-link' to='/about'>
                            <FontAwesomeIcon icon={faPeopleRoof} color='#819863' />
                        </Link>
                        <a href="/" onClick={() => Auth.logout()}>
                            Logout
                        </a>
                    </nav>
                </div>
            );
        } else {
            return (
                <div className='nav-bar'>
                    <Link className='logo' to='/'>
                        <img src={Logo} alt='Logo with black frame' />
                    </Link>
                    <nav>
                        <Link exact='true' activeclassname='active' to='/'>
                            <FontAwesomeIcon icon={faHome} color='#819863' />
                        </Link>
                        {/* <Link exact='true' activeclassname='active' className='profile-link' to='/profile'>
                        <FontAwesomeIcon icon={faUser} color='#819863' />
                    </Link> */}
                        <Link exact='true' activeclassname='active' className='recipes-link' to='/search'>

                            <FontAwesomeIcon icon={faBook} color='#819863' />
                        </Link>
                        <Link exact='true' activeclassname='active' className='about-us-link' to='/about'>
                            <FontAwesomeIcon icon={faPeopleRoof} color='#819863' />
                        </Link>
                        <Link exact='true' activeclassname='active' className='sign-up-link' to='/signup'>
                            <FontAwesomeIcon icon={faUserPlus} color='#819863' />
                        </Link>
                        <Link exact='true' activeclassname='active' className='login-link' to='/login'>
                            <FontAwesomeIcon icon={faCircleUser} color='#819863' />
                        </Link>
                    </nav>
                </div>
            );
        }
    }
    return (
        <div>
            {showSideNav()}
        </div>
    );
}

//old sidebar code
//   const Sidebar = () => (
//     <div className='nav-bar'>
//         <Link className='logo' to='/'>
//             <img src={Logo} alt='Logo with black frame' />
//         </Link>
//         <nav>
//             <Link exact='true' activeclassname='active' to='/'>
//                 <FontAwesomeIcon icon={faHome} color='#819863' />
//             </Link>
//             {/* <Link exact='true' activeclassname='active' className='profile-link' to='/profile'>
//                 <FontAwesomeIcon icon={faUser} color='#819863' />
//             </Link> */}
//             <Link exact='true' activeclassname='active' className='recipes-link' to='/search'>

//                 <FontAwesomeIcon icon={faBook} color='#819863' />
//             </Link>
//             <Link exact='true' activeclassname='active' className='about-us-link' to='/about'>
//                 <FontAwesomeIcon icon={faPeopleRoof} color='#819863' />
//             </Link>
//         </nav>
//     </div>
// )

export default SideBar;