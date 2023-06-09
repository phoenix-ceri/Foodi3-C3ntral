import { Link } from 'react-router-dom';
import Logo from '../../assets/images/png/Logo-w-frame.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook, faHome, faCircleUser, faPeopleRoof, faUserPlus, faRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import '../../assets/fonts/fonts.css';
import Auth from "../../utils/auth";
import './side.scss';

function SideBar() {

    function showSideNav() {
        if (Auth.loggedIn()) {
            return (
                <div className="side-navbar">
                    <Link className='logo' to='/'>
                        <img src={Logo} alt='Logo with black frame' />
                    </Link>
                    <nav className="sidenav">
                        <Link exact='true' activeclassname='active' to='/profile'>
                            <FontAwesomeIcon icon={faHome} size="xl" color='#000000' />
                        </Link>
                        {/* <Link exact='true' activeclassname='active' className='profile-link' to='/profile'>
                <FontAwesomeIcon icon={faUser} color='#819863' />
            </Link> */}
                        <Link exact='true' activeclassname='active' className='recipes-link' to='/recipes'>

                            <FontAwesomeIcon icon={faBook} size="xl" color='##000000' />
                        </Link>
                        <Link exact='true' activeclassname='active' className='about-us-link' to='/about'>
                            <FontAwesomeIcon icon={faPeopleRoof} size="xl" color='#000000' />
                        </Link>
                        <a href="/" className='logout-link' onClick={() => Auth.logout()}>
                            <FontAwesomeIcon icon={faRightFromBracket} size="xl" color='#000000' />
                        </a>
                    </nav>
                </div>
            );
        } else {
            return (
                <div className="side-navbar">
                    <Link className='logo' to='/'>
                        <img src={Logo} alt='Logo with black frame' />
                    </Link>
                    <nav className="sidenav">
                        <Link exact='true' activeclassname='active' to='/'>
                            <FontAwesomeIcon icon={faHome} size="xl" color='#000000' />
                        </Link>
                        {/* <Link exact='true' activeclassname='active' className='profile-link' to='/profile'>
                        <FontAwesomeIcon icon={faUser} color='#819863' />
                    </Link> */}
                        <Link exact='true' activeclassname='active' className='recipes-link' to='/recipes'>

                            <FontAwesomeIcon icon={faBook} size="xl" color='#000000' />
                        </Link>
                        <Link exact='true' activeclassname='active' className='about-us-link' to='/about'>
                            <FontAwesomeIcon icon={faPeopleRoof} size="xl" color='#000000' />
                        </Link>
                        <Link exact='true' activeclassname='active' className='sign-up-link' to='/signup'>
                            <FontAwesomeIcon icon={faUserPlus} size="xl" color='#000000' />
                        </Link>
                        <Link exact='true' activeclassname='active' className='login-link' to='/login'>
                            <FontAwesomeIcon icon={faCircleUser} size="xl" color='#000000' />
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

// the opossums were here